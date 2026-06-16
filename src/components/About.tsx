'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const EMAIL = 'vermayash849@gmail.com';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/yash-verma-5ba426333/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://github.com/Yashverma849',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: `mailto:${EMAIL}`,
    label: 'Email',
    icon: Mail,
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textParallaxRef = useRef<HTMLDivElement>(null);
  const textRevealRef = useRef<HTMLDivElement>(null);
  const visualParallaxRef = useRef<HTMLDivElement>(null);
  const visualRevealRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const trigger = sectionRef.current;
      const textReveal = textRevealRef.current;
      const visualReveal = visualRevealRef.current;
      if (!trigger || !textReveal || !visualReveal) return;

      gsap.set(textReveal, {
        autoAlpha: 0,
        x: -80,
        clipPath: 'inset(100% 0 0 0)',
      });
      gsap.set(visualReveal, {
        autoAlpha: 0,
        x: 80,
        clipPath: 'inset(100% 0 0 0)',
      });

      const entrance = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: 'top 52%',
          end: 'top 18%',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
        defaults: { ease: 'power3.out' },
      });

      entrance.to(
        textReveal,
        { autoAlpha: 1, x: 0, clipPath: 'inset(0% 0 0 0)', duration: 1 },
        0,
      );

      entrance.to(
        visualReveal,
        { autoAlpha: 1, x: 0, clipPath: 'inset(0% 0 0 0)', duration: 1 },
        0.1,
      );

      gsap.to(textParallaxRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger,
          start: 'top 30%',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(visualParallaxRef.current, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger,
          start: 'top 30%',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    const timer = window.setTimeout(refresh, 200);

    return () => {
      window.clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.045]"
        aria-hidden
      >
        <svg
          viewBox="0 0 400 400"
          className="h-[min(90vw,720px)] w-[min(90vw,720px)] text-foreground"
          fill="none"
        >
          <polygon
            points="200,20 380,140 320,360 80,360 20,140"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <line x1="200" y1="20" x2="200" y2="360" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="140" x2="380" y2="140" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="360" x2="320" y2="360" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="140" x2="320" y2="360" stroke="currentColor" strokeWidth="0.5" />
          <line x1="380" y1="140" x2="80" y2="360" stroke="currentColor" strokeWidth="0.5" />
          <line x1="200" y1="20" x2="80" y2="360" stroke="currentColor" strokeWidth="0.5" />
          <line x1="200" y1="20" x2="320" y2="360" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          <div ref={textParallaxRef} className="will-change-transform">
            <div ref={textRevealRef} className="will-change-transform">
              <h2
                className={`${playfair.className} text-4xl font-medium uppercase leading-[0.95] tracking-[0.06em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl`}
              >
                Yash Verma
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:mt-8 sm:text-xl md:text-2xl md:leading-snug">
                India based{' '}
                <span className="font-medium text-accent">Full Stack Developer</span> focused on{' '}
                <span className="font-medium text-accent">Web Development</span>,{' '}
                <span className="font-medium text-accent">AI SaaS</span>, and{' '}
                <span className="font-medium text-accent">Agentic AI</span>.
              </p>

              <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground sm:mt-10 sm:text-lg">
                <p>
                  I build modern web products with Next.js, React, Tailwind CSS, and Supabase —
                  from polished interfaces to production-ready backends.
                </p>
                <p>
                  I&apos;m especially drawn to AI-powered automation, voice agents, and SaaS tools
                  that turn complex workflows into simple, scalable experiences.
                </p>
                <p>
                  Whether it&apos;s a hackathon prototype, an internship product, or a client-facing
                  app, I care about clean architecture, thoughtful UX, and shipping work that
                  holds up in the real world.
                </p>
              </div>

              <p className="mt-8 text-base font-medium text-foreground sm:mt-10 sm:text-lg">
                Stay connected and let the good work begin.
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="mt-6 inline-block bg-foreground px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/90 sm:mt-8 sm:px-10 sm:py-4 sm:text-base"
              >
                {EMAIL}
              </a>

              <div className="mt-6 flex items-center gap-5 sm:mt-8">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                    className="text-accent transition-colors hover:text-cta-hover"
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={visualParallaxRef}
            className="flex justify-center lg:justify-end will-change-transform"
          >
            <div
              ref={visualRevealRef}
              className="relative aspect-[3/4] w-full max-w-md overflow-hidden bg-secondary/80 will-change-transform lg:max-w-none lg:max-h-[min(82vh,760px)]"
            >
              <Image
                src="/assets/profile-nobg.png"
                alt="Yash Verma - Full Stack Developer"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-bottom p-6 sm:p-8 contrast-[1.05] saturate-[0.85]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
