'use client';

import { useLayoutEffect, useRef } from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import ResumeShowcase from '@/components/ResumeShowcase';
import { SocialCard } from '@/components/ui/social-card';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/yash-verma-5ba426333/',
    icon: <Linkedin />,
    className: 'social-card__box1',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://github.com/Yashverma849',
    icon: <Github />,
    className: 'social-card__box2',
    delay: '0.2s',
    label: 'GitHub',
    external: true,
  },
  {
    href: 'mailto:vermayash849@gmail.com',
    icon: <Mail />,
    className: 'social-card__box3',
    delay: '0.4s',
    label: 'Email',
    external: false,
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const resumeParallaxRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const socialParallaxRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
        },
      });

      gsap.from(descRef.current, {
        y: 28,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          end: 'top 58%',
          scrub: 1,
        },
      });

      gsap.from(resumeRef.current, {
        x: -48,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: resumeRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(socialRef.current, {
        x: 48,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: socialRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(resumeParallaxRef.current, {
        y: -28,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(socialParallaxRef.current, {
        y: 28,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="bg-background py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-3 text-center sm:space-y-4">
            <h2
              ref={titleRef}
              className="text-3xl font-bold will-change-transform sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Get In Touch
            </h2>
            <p
              ref={descRef}
              className="mx-auto max-w-2xl px-4 text-sm text-muted-foreground will-change-transform sm:text-base md:text-lg"
            >
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2">
            <div ref={resumeParallaxRef} className="will-change-transform">
              <div ref={resumeRef}>
                <ResumeShowcase />
              </div>
            </div>

            <div ref={socialParallaxRef} className="will-change-transform">
              <div
                ref={socialRef}
                className="flex flex-col items-center gap-6 sm:gap-8"
              >
                <div className="space-y-2 text-center sm:space-y-3">
                  <h3 className="text-xl font-bold sm:text-2xl">Connect With Me</h3>
                  <p className="mx-auto max-w-xs text-sm text-muted-foreground sm:text-base">
                    Hover to connect on social media or drop me an email.
                  </p>
                </div>

                <SocialCard title="Socials" socialLinks={socialLinks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
