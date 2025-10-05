import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, Lightbulb } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Smart India Hackathon",
    role: "Frontend Developer",
    description: "Participated in Smart India Hackathon building innovative solutions for national-level challenges.",
  },
  {
    icon: Briefcase,
    title: "Finzarc Internship",
    role: "Full Stack Developer",
    description: "Built Expensiq with Gemini AI integration for automated expense tracking and financial insights.",
  },
  {
    icon: Lightbulb,
    title: "AI SaaS Prototypes",
    role: "Product Developer",
    description: "Created multiple AI-powered SaaS prototypes focusing on automation and intelligent solutions.",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold">Achievements</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                    <achievement.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-accent font-medium">{achievement.role}</p>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
