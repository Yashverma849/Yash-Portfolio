import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-background/90" />
        <img
          src={profilePhoto}
          alt="Yash Verma"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="relative min-h-[70vh] flex items-center">
          {/* Left Side - Main Text */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-playfair italic text-foreground font-normal"
            >
              Hey, there
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm rounded-full border border-accent/20 shadow-sm"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Available for new opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
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
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-1/2 justify-end pr-8"
          >
            <div className="space-y-6 text-right">
              <div className="space-y-3">
                <h3 
                  className="text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight uppercase"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  FULL STACK
                  <br />
                  DEVELOPER
                </h3>
                <div className="h-1 w-20 bg-accent ml-auto" />
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Specialized in Web Development,
                <br />
                AI-powered SaaS, and
                <br />
                Front End Development.
              </p>
            </div>
          </motion.div>

          {/* Mobile - Role Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:hidden w-full mt-12 space-y-6"
          >
            <div className="space-y-3">
              <h3 
                className="text-5xl font-black leading-[0.9] tracking-tight uppercase"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                FULL STACK
                <br />
                DEVELOPER
              </h3>
              <div className="h-1 w-20 bg-accent" />
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Specialized in Web Development,
              <br />
              AI-powered SaaS, and
              <br />
              Front End Development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
