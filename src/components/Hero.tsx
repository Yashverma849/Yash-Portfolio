import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={profilePhoto}
          alt="Yash Verma"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Side - Main Text */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light italic text-foreground"
            >
              Hey, there
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-accent/30"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-medium">Available for new opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight"
            >
              I AM
              <br />
              YASH
              <br />
              VERMA
            </motion.h1>
          </div>

          {/* Right Side - Role Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-start lg:justify-end"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
                  FULL STACK
                  <br />
                  DEVELOPER
                </h3>
                <div className="h-1 w-20 bg-accent" />
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                Specialized in Web Development,
                <br />
                AI-powered SaaS, and
                <br />
                Front End Development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
