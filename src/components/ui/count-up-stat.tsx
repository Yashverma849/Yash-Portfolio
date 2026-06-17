'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/gsap';
import { cn } from '@/lib/utils';

type CountUpStatProps = {
  value: number;
  label: string;
  prefix?: string;
  duration?: number;
  index?: number;
  className?: string;
};

export function CountUpStat({
  value,
  label,
  prefix = '+',
  duration = 1600,
  index = 0,
  className,
}: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [slideDone, setSlideDone] = useState(false);
  const [count, setCount] = useState(0);
  const reduceMotion = prefersReducedMotion();

  useEffect(() => {
    if (reduceMotion && isInView) {
      setSlideDone(true);
    }
  }, [reduceMotion, isInView]);

  useEffect(() => {
    if (!slideDone) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [slideDone, value, duration, reduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -36 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -36 }}
      transition={{
        duration: 0.65,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      onAnimationComplete={() => {
        if (isInView) setSlideDone(true);
      }}
      className={cn(
        'rounded-xl border border-border/60 bg-card/70 px-5 py-4 shadow-soft backdrop-blur-sm sm:px-6 sm:py-5',
        className,
      )}
    >
      <div className="text-3xl font-light tabular-nums text-foreground sm:text-4xl">
        {prefix}
        {count}
      </div>
      <div className="mt-1 text-sm text-muted-foreground sm:text-base">{label}</div>
    </motion.div>
  );
}
