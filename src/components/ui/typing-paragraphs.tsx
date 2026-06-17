'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { prefersReducedMotion } from '@/lib/gsap';

export type TypingBlock = {
  text: string;
  className?: string;
};

type TypingParagraphsProps = {
  blocks: TypingBlock[];
  active: boolean;
  charDelay?: number;
  paragraphPause?: number;
  className?: string;
  blockClassName?: string;
};

export function TypingParagraphs({
  blocks,
  active,
  charDelay = 22,
  paragraphPause = 420,
  className,
  blockClassName,
}: TypingParagraphsProps) {
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) {
      setParagraphIndex(0);
      setTypedLength(0);
      setDone(false);
      return;
    }

    if (prefersReducedMotion()) {
      setParagraphIndex(blocks.length);
      setTypedLength(0);
      setDone(true);
      return;
    }

    setParagraphIndex(0);
    setTypedLength(0);
    setDone(false);
  }, [active, blocks.length]);

  useEffect(() => {
    if (!active || done || prefersReducedMotion()) return;

    const currentText = blocks[paragraphIndex]?.text ?? '';
    if (!currentText) {
      setDone(true);
      return;
    }

    if (typedLength < currentText.length) {
      const timer = window.setTimeout(() => {
        setTypedLength((length) => length + 1);
      }, charDelay);
      return () => window.clearTimeout(timer);
    }

    if (paragraphIndex < blocks.length - 1) {
      const timer = window.setTimeout(() => {
        setParagraphIndex((index) => index + 1);
        setTypedLength(0);
      }, paragraphPause);
      return () => window.clearTimeout(timer);
    }

    setDone(true);
  }, [active, blocks, charDelay, done, paragraphIndex, paragraphPause, typedLength]);

  const isTyping =
    active &&
    !done &&
    !prefersReducedMotion() &&
    typedLength < (blocks[paragraphIndex]?.text.length ?? 0);

  return (
    <div className={cn('space-y-5', className)}>
      {blocks.map((block, index) => {
        if (!active && !prefersReducedMotion()) return null;

        const isComplete = prefersReducedMotion() || index < paragraphIndex || done;
        const isCurrent = index === paragraphIndex && !isComplete && !prefersReducedMotion();
        const visibleText = isComplete
          ? block.text
          : isCurrent
            ? block.text.slice(0, typedLength)
            : '';

        if (!visibleText && !isCurrent) return null;

        return (
          <p
            key={index}
            className={cn('leading-relaxed', blockClassName, block.className)}
          >
            {visibleText}
            {isCurrent && isTyping ? (
              <span className="ml-0.5 inline-block animate-pulse text-accent">|</span>
            ) : null}
          </p>
        );
      })}
    </div>
  );
}
