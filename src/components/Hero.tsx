import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
// import profilePhoto from "@/assets/profile-nobg.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-6 sm:gap-8 mb-4 sm:mb-6 lg:mb-8"
        >
          <div className="text-left">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">+20</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">Project completed</div>
          </div>
          <div className="text-left">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">+10</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">hackathons completed</div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-3 sm:space-y-4 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tight text-foreground leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                Hello
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-3 sm:mt-4 flex items-center gap-2">
                <span className="w-6 sm:w-8 h-px bg-muted-foreground"></span>
                <span className="break-words">It's Yash Verma, Full Stack Developer</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-2 sm:pt-3 space-y-2"
            >
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Specialized in Web Development,<br />
                Experienced With Building Scalable Agentic AI solutions<br />
              </p>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-accent">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>Available For New Opportunities</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center items-center order-1 lg:order-2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] -mt-16 sm:-mt-20 lg:-mt-24 xl:-mt-32"
          >
            <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] h-full flex items-center justify-center">
              <img
                src="/assets/profile-nobg.png"
                alt="Yash Verma - Full Stack Developer"
                className="w-full h-auto max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 sm:mt-12 flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="hidden sm:inline">Scroll down</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
