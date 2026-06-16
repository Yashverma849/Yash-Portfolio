'use client';

import { useLayoutEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

const projects = [
  {
    title: 'Flowschool',
    description:
      'AI-powered learning management platform that revolutionizes online education with intelligent course recommendations and personalized learning paths.',
    image: '/assets/flowschool.png',
    link: 'https://flowcourses.vercel.app/',
    tags: ['Next.js', 'Supabase', 'Education', 'Youtube Embedding'],
  },
  {
    title: 'Expensiq / Expensly',
    description:
      'AI-powered expense tracking system with automated categorization and financial insights using Gemini AI integration.',
    image: '/assets/expensiq.png',
    link: 'https://finbot-expense-tracker.vercel.app/',
    tags: ['Gemini AI', 'Fintech', 'SaaS'],
  },
  {
    title: 'CodeInquiryHub',
    description:
      'Comprehensive interview preparation platform with coding challenges, technical questions, and mock interviews.',
    image: '/assets/codeinquiryhub.png',
    link: 'https://codeinquiryhub.web.app/',
    tags: ['React', 'Firebase', 'Education'],
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card', gridRef.current);

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

      gsap.from(cards, {
        y: 120,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          end: 'top 35%',
          scrub: 1,
        },
      });

      cards.forEach((card) => {
        const image = card.querySelector<HTMLElement>('.project-card-image');
        if (!image) return;

        gsap.to(image, {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center">
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold will-change-transform"
            >
              Recent Projects
            </h2>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group relative block aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl shadow-soft transition-shadow duration-300 hover:shadow-hover will-change-transform"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="project-card-image object-cover object-center will-change-transform transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4 transition-opacity duration-300 sm:p-5 sm:group-hover:opacity-0">
                  <h3 className="text-lg font-bold text-primary-foreground sm:text-xl md:text-2xl">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-primary-foreground/80 sm:h-5 sm:w-5" />
                </div>

                <div className="absolute inset-0 z-20 hidden flex-col justify-end bg-foreground/90 p-6 opacity-0 transition-all duration-300 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:flex">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-primary-foreground sm:text-xl md:text-2xl">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 flex-shrink-0 text-accent sm:h-5 sm:w-5" />
                  </div>
                  <p className="text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
