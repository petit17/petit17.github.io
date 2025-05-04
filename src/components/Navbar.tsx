
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-4 shadow-sm'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-tech-blue to-tech-teal bg-clip-text text-transparent drop-shadow-md">
              TECHNOMINDS
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-medium text-gray-700 hover:text-tech-blue transition-colors">Services</a>
            <a href="#about" className="font-medium text-gray-700 hover:text-tech-blue transition-colors">Why Us</a>
            <a href="#testimonials" className="font-medium text-gray-700 hover:text-tech-blue transition-colors">Clients</a>
            <Button asChild className="rounded-full px-8 py-6 bg-gradient-to-r from-tech-blue to-tech-teal hover:shadow-lg text-white font-semibold shadow-md">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm absolute top-16 left-0 right-0 shadow-lg animate-fade-up rounded-b-2xl">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <a 
                href="#services" 
                className="font-medium py-2 hover:text-tech-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="font-medium py-2 hover:text-tech-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us
              </a>
              <a 
                href="#testimonials" 
                className="font-medium py-2 hover:text-tech-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </a>
              <Button 
                asChild 
                className="w-full rounded-full py-6 bg-gradient-to-r from-tech-blue to-tech-teal shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
