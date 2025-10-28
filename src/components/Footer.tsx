import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © 2025 Yash Verma. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://www.linkedin.com/in/yash-verma-5ba426333/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-card rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:yash@example.com"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-card rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
