import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-nobg.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="relative min-h-[70vh] flex flex-col justify-center">
          {/* Top Row - Hey there and Badge */}
          <div className="flex items-start justify-between mb-8 lg:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-playfair italic text-foreground font-normal"
            >
              Hey, there
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm rounded-full border border-accent/20 shadow-sm"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Available for new opportunities</span>
            </motion.div>
          </div>

          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
            {/* Left Side - Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tighter uppercase"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              I AM
              <br />
              YASH
              <br />
              VERMA
            </motion.h1>

            {/* Right Side - Profile Image and Role */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:mb-4 flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-8"
            >
              {/* Profile Photo */}
              <div className="w-48 md:w-56 lg:w-64 xl:w-72 flex-shrink-0">
                <img
                  src={profilePhoto}
                  alt="Yash Verma"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Role Description */}
              <div className="space-y-4 lg:space-y-6">
                <div className="space-y-3">
                  <h3 
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight uppercase"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    FULL STACK
                    <br />
                    DEVELOPER
                  </h3>
                  <div className="h-1 w-16 lg:w-20 bg-accent" />
                </div>
                <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                  Specialized in Web Development,
                  <br />
                  AI-powered SaaS, and
                  <br />
                  Front End Development.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mobile Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="md:hidden inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm rounded-full border border-accent/20 shadow-sm mt-8 w-fit"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium">Available for new opportunities</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
