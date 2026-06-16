'use client';

import { useLayoutEffect } from 'react';
import { resetHeroUrl, scrollToHero } from '@/lib/scroll-to-hero';

export default function EnsureHeroOnLoad() {
  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    scrollToHero();
    resetHeroUrl();

    const onLoadingComplete = () => {
      scrollToHero();
      resetHeroUrl();
    };

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        scrollToHero();
        resetHeroUrl();
      }
    };

    window.addEventListener('loading-screen:complete', onLoadingComplete);
    window.addEventListener('pageshow', onPageShow);

    return () => {
      window.removeEventListener('loading-screen:complete', onLoadingComplete);
      window.removeEventListener('pageshow', onPageShow);
    };
  }, []);

  return null;
}
