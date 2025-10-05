import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen hero-gradient pt-20 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 z-10 space-y-6 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-light italic text-muted-foreground"
            >
              Hey, there
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-accent/20"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-medium">Available for new opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight"
            >
              I AM
              <br />
              YASH
              <br />
              VERMA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0"
            >
              Specialized in Web Development,
              <br />
              UX / UI, Webflow, and Front
              <br />
              End Development.
            </motion.p>
          </div>

          {/* Center/Right - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:absolute lg:left-1/2 lg:-translate-x-1/4 lg:top-1/2 lg:-translate-y-1/2 z-20"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 blur-3xl" />
              <img
                src={profilePhoto}
                alt="Yash Verma"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Role Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:w-1/2 lg:ml-auto z-10 flex items-center justify-center lg:justify-end text-center lg:text-right"
          >
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none">
                FULL STACK
                <br />
                DEVELOPER
              </h3>
              <div className="h-1 w-24 bg-accent mx-auto lg:ml-auto lg:mr-0" />
              <p className="text-xl md:text-2xl font-semibold text-accent">
                AI SaaS Builder
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
