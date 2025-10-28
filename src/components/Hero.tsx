import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-nobg.png";
import yvLogo from "@/assets/yv-logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-8 mb-12 lg:mb-16"
        >
          <div className="text-left">
            <div className="text-3xl lg:text-4xl font-light text-foreground">+200</div>
            <div className="text-xs lg:text-sm text-muted-foreground mt-1">Project completed</div>
          </div>
          <div className="text-left">
            <div className="text-3xl lg:text-4xl font-light text-foreground">+50</div>
            <div className="text-xs lg:text-sm text-muted-foreground mt-1">Startups raised</div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[60vh]">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-foreground leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                Hello
              </h1>
              <div className="flex items-center gap-4 mt-6">
                <span className="w-8 h-px bg-muted-foreground"></span>
                <img src={yvLogo} alt="YV Logo" className="h-12 md:h-14 w-auto" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground mt-4">
                A full stack developer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-6 space-y-2"
            >
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Specialized in Web Development,<br />
                AI-powered SaaS, and<br />
                Front End Development.
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-accent">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>Available for new opportunities</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src={profilePhoto}
                alt="Yash Verma"
                className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-8 left-8 flex items-center gap-2 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>Scroll down</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
