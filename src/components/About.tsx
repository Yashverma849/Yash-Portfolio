import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold">About Me</h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              I am a <span className="text-foreground font-semibold">Full Stack Developer</span> skilled 
              in Next.js, React, TailwindCSS, Supabase, and AI integrations.
            </p>
            <p>
              Passionate about building <span className="text-foreground font-semibold">scalable SaaS products</span> and 
              AI-powered automation systems that solve real-world problems and create meaningful impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
