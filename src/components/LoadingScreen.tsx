'use client';

import { useEffect, useRef, useState } from 'react';
import YVLogoStroke from '@/components/YVLogoStroke';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { resetHeroUrl, scrollToHero } from '@/lib/scroll-to-hero';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const path = pathRef.current;

    document.body.style.overflow = 'hidden';
    scrollToHero();
    resetHeroUrl();

    const finishLoading = () => {
      document.body.style.overflow = '';
      scrollToHero();
      resetHeroUrl();
      window.dispatchEvent(new CustomEvent('loading-screen:complete'));
      setHidden(true);
    };

    if (prefersReducedMotion() || !overlay || !path) {
      finishLoading();
      return;
    }

    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 1,
    });

    const tl = gsap.timeline({
      onComplete: finishLoading,
    });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 2.4,
      ease: 'power2.inOut',
    })
      .to({}, { duration: 0.3 })
      .to(overlay, {
        opacity: 0,
        duration: 0.55,
        ease: 'power2.inOut',
      });

    return () => {
      document.body.style.overflow = '';
      tl.kill();
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading portfolio"
    >
      <YVLogoStroke pathRef={pathRef} />
    </div>
  );
}
