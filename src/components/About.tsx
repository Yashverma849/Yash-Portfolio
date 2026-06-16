'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { CountUpStat } from '@/components/ui/count-up-stat';
import { prefersReducedMotion } from '@/lib/gsap';

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

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const shouldAnimate = prefersReducedMotion() ? true : isInView;

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
          <motion.div
            initial="hidden"
            animate={shouldAnimate ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.05 },
              },
            }}
          >
            <motion.h2
              variants={fadeIn}
              className={`${playfair.className} text-4xl font-medium uppercase leading-[0.95] tracking-[0.06em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl`}
            >
              Yash Verma
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:mt-8 sm:text-xl md:text-2xl md:leading-snug"
            >
              India based{' '}
              <span className="font-medium text-accent">Full Stack Developer</span> focused on{' '}
              <span className="font-medium text-accent">Web Development</span>,{' '}
              <span className="font-medium text-accent">AI SaaS</span>, and{' '}
              <span className="font-medium text-accent">Agentic AI</span>.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="mt-8 flex flex-wrap gap-8 sm:mt-10 sm:gap-12"
            >
              <CountUpStat value={20} label="Project completed" />
              <CountUpStat value={10} label="hackathons completed" />
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground sm:mt-10 sm:text-lg"
            >
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
            </motion.div>

            <motion.p
              variants={fadeIn}
              className="mt-8 text-base font-medium text-foreground sm:mt-10 sm:text-lg"
            >
              Stay connected and let the good work begin.
            </motion.p>

            <motion.a
              variants={fadeIn}
              href={`mailto:${EMAIL}`}
              className="mt-6 inline-block bg-foreground px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/90 sm:mt-8 sm:px-10 sm:py-4 sm:text-base"
            >
              {EMAIL}
            </motion.a>

            <motion.div variants={fadeIn} className="mt-6 flex items-center gap-5 sm:mt-8">
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden bg-secondary/80 lg:max-h-[min(82vh,760px)] lg:max-w-none">
              <Image
                src="/assets/profile-nobg.png"
                alt="Yash Verma - Full Stack Developer"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-bottom p-6 contrast-[1.05] saturate-[0.85] sm:p-8"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
