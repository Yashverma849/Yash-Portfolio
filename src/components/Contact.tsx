'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import ResumeShowcase from '@/components/ResumeShowcase';
import { SocialCard } from '@/components/ui/social-card';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="bg-background py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-12"
        >
          <div className="space-y-3 text-center sm:space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">Get In Touch</h2>
            <p className="mx-auto max-w-2xl px-4 text-sm text-muted-foreground sm:text-base md:text-lg">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ResumeShowcase />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center gap-6 sm:gap-8"
            >
              <div className="space-y-2 text-center sm:space-y-3">
                <h3 className="text-xl font-bold sm:text-2xl">Connect With Me</h3>
                <p className="mx-auto max-w-xs text-sm text-muted-foreground sm:text-base">
                  Hover to connect on social media or drop me an email.
                </p>
              </div>

              <SocialCard title="Socials" socialLinks={socialLinks} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
