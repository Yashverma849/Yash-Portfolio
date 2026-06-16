'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Calendar, ChevronDown, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';

const HERO_VIDEO_SRC = '/assets/generate_a_gif_of_a_panda_codi-ezremove.mp4';
const HERO_VIDEO_START = 1;
const HERO_VIDEO_END = 3;

function HeroProfileClip({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useFallbackImage, setUseFallbackImage] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setUseFallbackImage(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const syncClipStart = () => {
      if (video.currentTime < HERO_VIDEO_START || video.currentTime >= HERO_VIDEO_END) {
        video.currentTime = HERO_VIDEO_START;
      }
    };

    const onTimeUpdate = () => {
      if (video.currentTime >= HERO_VIDEO_END) {
        video.currentTime = HERO_VIDEO_START;
      }
    };

    video.addEventListener('loadedmetadata', syncClipStart);
    video.addEventListener('timeupdate', onTimeUpdate);

    if (video.readyState >= 1) {
      syncClipStart();
    }

    void video.play().catch(() => {});

    return () => {
      video.removeEventListener('loadedmetadata', syncClipStart);
      video.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, []);

  if (useFallbackImage) {
    return (
      <Image
        src="/assets/profile-nobg.png"
        alt="Yash Verma - Full Stack Developer"
        width={400}
        height={500}
        className={className}
        priority
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={HERO_VIDEO_SRC}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-label="Yash Verma - Full Stack Developer"
      className={className}
    />
  );
}

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLButtonElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'hero-pin',
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=50%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      const fadeDuration = 0.72;
      const fadeEase = 'power1.inOut';

      tl.to(
        maskRef.current,
        { scale: 0.92, borderRadius: '1.5rem', ease: 'power2.inOut', duration: 1 },
        0,
      );

      tl.to(
        revealRef.current,
        { scale: 1.05, opacity: 1, ease: 'power2.out', duration: 1 },
        0,
      );

      tl.to(
        statsRef.current,
        { x: -80, opacity: 0, ease: fadeEase, duration: fadeDuration },
        0.06,
      );

      tl.to(
        textRef.current,
        { x: -140, opacity: 0, ease: fadeEase, duration: fadeDuration },
        0.08,
      );

      tl.to(
        imageRef.current,
        { x: 140, opacity: 0, ease: fadeEase, duration: fadeDuration },
        0.1,
      );

      tl.to(
        scrollRef.current,
        { opacity: 0, y: 16, ease: fadeEase, duration: fadeDuration * 0.85 },
        0.12,
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    const timer = window.setTimeout(refresh, 150);

    return () => {
      window.clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div
        ref={revealRef}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-0 scale-110 pointer-events-none"
        aria-hidden
      >
        <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
          <Image
            src="/assets/profile-nobg.png"
            alt=""
            width={600}
            height={750}
            className="w-auto h-[70vh] max-h-[700px] object-contain opacity-40 grayscale"
            priority
          />
        </div>
      </div>

      <div
        ref={maskRef}
        className="absolute inset-0 z-10 flex items-start bg-background origin-center will-change-transform overflow-hidden"
        style={{ paddingTop: 'var(--nav-offset)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div
            ref={statsRef}
            className="flex flex-wrap gap-6 sm:gap-8 mb-4 sm:mb-6 lg:mb-8 will-change-transform"
          >
            <div className="text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">+20</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Project completed</div>
            </div>
            <div className="text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">+10</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">hackathons completed</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div
              ref={textRef}
              className="space-y-3 sm:space-y-4 will-change-transform"
            >
              <div>
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tight text-foreground leading-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Hello
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-3 sm:mt-4 flex items-center gap-2">
                  <span className="w-6 sm:w-8 h-px bg-muted-foreground" />
                  <span className="break-words">It&apos;s Yash Verma, Full Stack Developer</span>
                </p>
              </div>

              <div className="pt-2 sm:pt-3 space-y-2">
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  Specialized in Web Development,
                  <br />
                  Experienced With Building Scalable Agentic AI solutions
                  <br />
                </p>
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-accent">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span>Available For New Opportunities</span>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 sm:pt-5">
                  <Button
                    type="button"
                    variant="cta"
                    size="lg"
                    className="text-sm sm:text-base"
                    onClick={() => window.dispatchEvent(new CustomEvent('hero:ask-anything'))}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ask anything
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="border-foreground/15 bg-background/80 text-sm sm:text-base hover:bg-secondary"
                    onClick={() => {
                      window.location.href = '/api/oauth/authorize';
                    }}
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule a meeting
                  </Button>
                </div>
              </div>
            </div>

            <div
              ref={imageRef}
              className="flex justify-center lg:justify-end items-center h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px] will-change-transform"
            >
              <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] h-full flex items-center justify-center">
                <HeroProfileClip className="w-full h-auto max-h-full object-contain" />
              </div>
            </div>
          </div>

          <button
            ref={scrollRef}
            type="button"
            className="mt-8 sm:mt-12 flex items-center justify-center gap-2 w-full text-xs sm:text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors will-change-transform"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="hidden sm:inline">Scroll down</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
