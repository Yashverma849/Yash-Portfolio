'use client'

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import yvLogo from "@/assets/yv-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="hover:opacity-80 transition-opacity"
          >
            <Image src="/assets/yv-logo.png" alt="YV Logo" width={40} height={40} className="h-8 md:h-10 w-auto" />
          </button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("works")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Skills
            </button>
          </div>

          {/* Contact Button - Right Corner */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-foreground text-background hover:bg-accent hover:text-white"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("works")}
              className="block w-full text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
            >
              Skills
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-foreground text-background hover:bg-accent hover:text-white"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
