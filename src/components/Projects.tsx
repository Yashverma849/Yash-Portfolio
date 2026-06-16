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
    imageClassName: 'object-cover object-center',
    link: 'https://flowcourses.vercel.app/',
    tags: ['Next.js', 'Supabase', 'Education', 'Youtube Embedding'],
  },
  {
    title: 'Expensiq / Expensly',
    description:
      'AI-powered expense tracking system with automated categorization and financial insights using Gemini AI integration.',
    image: '/assets/expensiq.png',
    imageClassName: 'object-cover object-top scale-[1.12]',
    link: 'https://finbot-expense-tracker.vercel.app/',
    tags: ['Gemini AI', 'Fintech', 'SaaS'],
  },
  {
    title: 'CodeInquiryHub',
    description:
      'Comprehensive interview preparation platform with coding challenges, technical questions, and mock interviews.',
    image: '/assets/codeinquiryhub.png',
    imageClassName: 'object-cover object-top scale-[1.12]',
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
        y: 48,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
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
            className="grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10"
          >
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group relative block w-full min-w-0 max-w-full aspect-[3/2] overflow-hidden rounded-xl bg-foreground shadow-soft transition-shadow duration-300 hover:shadow-hover sm:rounded-2xl"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`project-card-image transition-transform duration-500 group-hover:scale-105 ${project.imageClassName}`}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-2 p-4 transition-opacity duration-300 sm:p-5 group-hover:opacity-0">
                  <h3 className="line-clamp-2 text-base font-bold text-primary-foreground sm:text-lg md:text-xl">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-primary-foreground/80 sm:h-5 sm:w-5" />
                </div>

                <div className="absolute inset-0 z-20 flex min-h-0 flex-col justify-center gap-3 overflow-hidden bg-gradient-to-br from-background/25 via-secondary/20 to-accent/10 p-5 opacity-0 backdrop-blur-md transition-all duration-300 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:gap-4 sm:p-6">
                  <div className="flex shrink-0 items-start justify-between gap-2">
                    <h3 className="line-clamp-2 text-base font-bold leading-snug text-white drop-shadow-md sm:text-lg">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 flex-shrink-0 text-white/90 drop-shadow-md sm:h-5 sm:w-5" />
                  </div>
                  <p className="line-clamp-5 text-xs leading-relaxed text-white/90 drop-shadow-md sm:line-clamp-6 sm:text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-cta/40 bg-cta/10 px-2.5 py-0.5 text-[10px] font-medium leading-tight text-cta sm:px-3 sm:py-1 sm:text-xs"
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
