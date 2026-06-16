'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/gsap';

type CountUpStatProps = {
  value: number;
  label: string;
  prefix?: string;
  duration?: number;
};

export function CountUpStat({
  value,
  label,
  prefix = '+',
  duration = 1600,
}: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion()) {
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
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-left">
      <div className="text-3xl font-light tabular-nums text-foreground sm:text-4xl">
        {prefix}
        {count}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
