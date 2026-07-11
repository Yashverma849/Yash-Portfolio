'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Calendar, ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

const HERO_BG_VIDEO = '/assets/panda%20coding.mp4';
const HERO_CODE_SNIPPET = 'print("Hello, World!")';

function HeroTypingHello({ active }: { active: boolean }) {
  const [typed, setTyped] = useState('');
  const [showCode, setShowCode] = useState(true);
  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    if (!active) return;

    if (prefersReducedMotion()) {
      setShowCode(false);
      setShowHello(true);
      return;
    }

    setTyped('');
    setShowCode(true);
    setShowHello(false);

    let index = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const typeNext = () => {
      index += 1;
      setTyped(HERO_CODE_SNIPPET.slice(0, index));

      if (index < HERO_CODE_SNIPPET.length) {
        timers.push(setTimeout(typeNext, 58));
        return;
      }

      timers.push(
        setTimeout(() => {
          setShowCode(false);
          timers.push(
            setTimeout(() => {
              setShowHello(true);
            }, 120),
          );
        }, 400),
      );
    };

    timers.push(setTimeout(typeNext, 300));

    return () => timers.forEach(clearTimeout);
  }, [active]);

  const isTyping = showCode && typed.length < HERO_CODE_SNIPPET.length;

  return (
    <div className="relative min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-[6.5rem] xl:min-h-[7rem]">
      <p
        aria-hidden={!showCode}
        className={`absolute inset-0 flex items-end font-mono text-2xl leading-none text-neutral-700 transition-opacity duration-500 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${
          showCode ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <span>
          {typed}
          {isTyping ? <span className="ml-0.5 inline-block animate-pulse text-cta">|</span> : null}
        </span>
      </p>

      <h1
        className={`absolute inset-0 flex items-end text-5xl font-extralight leading-none tracking-tight text-neutral-900 drop-shadow-[0_1px_12px_rgba(255,255,255,0.9)] transition-all duration-700 ease-out sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl ${
          showHello ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Hello World
      </h1>
    </div>
  );
}

function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setUseFallback(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    void video.play().catch(() => {});
  }, []);

  if (useFallback) {
    return <div className="absolute inset-0 bg-background" aria-hidden />;
  }

  return (
    <video
      ref={videoRef}
      src={HERO_BG_VIDEO}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[68%_center] lg:object-right"
      aria-hidden
    />
  );
}

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [heroReady, setHeroReady] = useState(false);

  useLayoutEffect(() => {
    const target = textRef.current;
    if (!target) return;

    if (prefersReducedMotion()) {
      gsap.set(target, { opacity: 1, y: 0 });
      setHeroReady(true);
      return;
    }

    gsap.set(target, { opacity: 0, y: 28 });

    let played = false;

    const fadeIn = () => {
      if (played) return;
      played = true;

      gsap.to(target, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        onComplete: () => setHeroReady(true),
      });
    };

    const onLoadingComplete = () => fadeIn();

    window.addEventListener('loading-screen:complete', onLoadingComplete);

    requestAnimationFrame(() => {
      const loadingActive = document.querySelector('[aria-label="Loading portfolio"]');
      if (!loadingActive) {
        fadeIn();
      }
    });

    return () => {
      window.removeEventListener('loading-screen:complete', onLoadingComplete);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden>
        <HeroBackgroundVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/35 to-transparent lg:from-background/75 lg:via-background/20" />
      </div>

      <div
        className="absolute inset-0 z-10 flex items-center overflow-hidden"
        style={{ paddingTop: 'var(--nav-offset)' }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid min-h-[calc(100vh-var(--nav-offset))] items-center lg:grid-cols-12">
            <div
              ref={textRef}
              className="space-y-3 will-change-transform sm:space-y-4 lg:col-span-5 xl:col-span-5"
            >
              <div>
                <HeroTypingHello active={heroReady} />
                <p className="mt-3 flex items-center gap-2 text-xs text-neutral-800 sm:mt-4 sm:text-sm md:text-base">
                  <span className="h-px w-6 bg-neutral-500 sm:w-8" />
                  <span className="break-words">It&apos;s Yash Verma, Full Stack Developer</span>
                </p>
              </div>

              <div className="space-y-2 pt-1 sm:pt-2">
                <p className="text-xs leading-relaxed text-neutral-700 sm:text-sm md:text-base">
                  Specialized in Web Development,
                  <br />
                  Experienced With Building Scalable Agentic AI solutions
                </p>
                <div className="inline-flex items-center gap-2 text-xs text-cta sm:text-sm">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-cta" />
                  <span className="font-medium">Available For New Opportunities</span>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 sm:pt-5">
                  <Button
                    type="button"
                    variant="cta"
                    size="lg"
                    className="text-sm shadow-soft sm:text-base"
                    onClick={() => window.dispatchEvent(new CustomEvent('hero:ask-anything'))}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ask anything
                  </Button>
                  <Button
                    type="button"
                    variant="outlineNeutral"
                    size="lg"
                    className="text-sm sm:text-base"
                    onClick={() => window.dispatchEvent(new CustomEvent('hero:schedule-meeting'))}
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule a meeting
                  </Button>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 flex items-center gap-2 text-xs text-neutral-700 transition-colors hover:text-neutral-900 sm:mt-8 sm:text-sm"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="hidden sm:inline">Scroll down</span>
                <ChevronDown className="h-4 w-4 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
