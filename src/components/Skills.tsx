'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Brain, Wrench } from 'lucide-react';
import {
  RadialOrbitalTimeline,
  type TimelineItem,
} from '@/components/ui/radial-orbital-timeline';

const skillsTimelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Frontend',
    date: '5 tools',
    content: 'Next.js, React.js, TailwindCSS, HTML, and JavaScript for building fast, responsive interfaces.',
    category: 'Frontend',
    icon: Code2,
    relatedIds: [2, 3],
    status: 'completed',
    energy: 95,
  },
  {
    id: 2,
    title: 'Backend & DB',
    date: '3 tools',
    content: 'Supabase, Firebase, and MongoDB for scalable backends, auth, and real-time data.',
    category: 'Backend',
    icon: Database,
    relatedIds: [1, 3],
    status: 'completed',
    energy: 88,
  },
  {
    id: 3,
    title: 'AI / ML',
    date: '4 tools',
    content: 'Gemini AI, Langchain, Langgraph, and Tesseract.js for agentic AI and intelligent automation.',
    category: 'AI/ML',
    icon: Brain,
    relatedIds: [2, 4],
    status: 'in-progress',
    energy: 82,
  },
  {
    id: 4,
    title: 'Dev Tools',
    date: '4 tools',
    content: 'Git, Docker, Cursor.ai, and v0.dev for shipping, containerizing, and accelerating development.',
    category: 'Tools',
    icon: Wrench,
    relatedIds: [1, 3],
    status: 'completed',
    energy: 90,
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className="relative w-full overflow-x-clip py-12 sm:py-16 md:py-24 lg:py-32 bg-secondary/30"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Experience & Skills
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with 
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 sm:mt-8"
      >
        <RadialOrbitalTimeline timelineData={skillsTimelineData} />
      </motion.div>
    </section>
  );
};

export default Skills;
