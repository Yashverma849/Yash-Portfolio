import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-12"
        >
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Get In Touch</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-10 sm:h-12 text-sm sm:text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-10 sm:h-12 text-sm sm:text-base"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-foreground hover:bg-accent text-sm sm:text-base">
                Send Message
              </Button>
            </motion.form>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Connect With Me</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Let's connect on social media or drop me an email.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <a
                  href="https://www.linkedin.com/in/yash-verma-5ba426333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-lg sm:rounded-xl hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-[#0077B5]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0077B5]/20 transition-colors">
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077B5]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm sm:text-base">LinkedIn</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Connect professionally</p>
                  </div>
                </a>

                <a
                  href="https://github.com/yashverma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-lg sm:rounded-xl hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm sm:text-base">GitHub</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">View my code</p>
                  </div>
                </a>

                <a
                  href="mailto:yash@example.com"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-lg sm:rounded-xl hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm sm:text-base">Email</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Send me an email</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
