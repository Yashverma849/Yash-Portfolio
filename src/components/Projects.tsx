import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Flowschool",
    description: "AI-powered learning management platform that revolutionizes online education with intelligent course recommendations and personalized learning paths.",
    image: "/assets/flowschool.png",
    link: "https://flowcourses.vercel.app/",
    tags: ["Next.js", "Supabase", "Education", "Youtube Embedding"],
  },
  {
    title: "Expensiq / Expensly",
    description: "AI-powered expense tracking system with automated categorization and financial insights using Gemini AI integration.",
    image: "/assets/expensiq.png",
    link: "https://finbot-expense-tracker.vercel.app/",
    tags: ["Gemini AI", "Fintech", "SaaS"],
  },
  {
    title: "CodeInquiryHub",
    description: "Comprehensive interview preparation platform with coding challenges, technical questions, and mock interviews.",
    image: "/assets/codeinquiryhub.png",
    link: "https://codeinquiryhub.web.app/",
    tags: ["React", "Firebase", "Education"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Recent Projects</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
