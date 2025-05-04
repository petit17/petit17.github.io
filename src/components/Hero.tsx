
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-32 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-tech-blue via-[#1a4587] to-[#102a56] opacity-95"></div>
      
      {/* Geometric shapes for modern feel */}
      <div className="absolute top-[10%] right-[15%] w-64 h-64 rounded-full bg-tech-teal/10 blur-3xl"></div>
      <div className="absolute bottom-[20%] left-[10%] w-72 h-72 rounded-full bg-tech-blue/10 blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-up">
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-6">
              Enterprise Technology Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforming <span className="text-tech-teal">Businesses</span> Through Technology Excellence
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl">
              TECHNOMINDS delivers enterprise-grade solutions in digital transformation, systems integration, and technology platforms that drive innovation and growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100 rounded-full px-8 py-6 shadow-md">
                <a href="#services">Explore Services</a>
              </Button>
              <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100 rounded-full px-8 py-6 shadow-md">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
          
          {/* Right side - modern stats and graphics */}
          <div className="hidden lg:flex justify-end animate-fade-up animate-delay-200">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-tech-teal/20 blur-md"></div>
              <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-xl bg-gray-50/80 backdrop-blur-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-4xl bg-gradient-to-r from-tech-blue to-tech-teal bg-clip-text text-transparent">15+</h3>
                    <p className="text-sm mt-1 font-medium">Years Experience</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-50/80 backdrop-blur-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-4xl bg-gradient-to-r from-tech-blue to-tech-teal bg-clip-text text-transparent">500+</h3>
                    <p className="text-sm mt-1 font-medium">Projects Delivered</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-50/80 backdrop-blur-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-4xl bg-gradient-to-r from-tech-blue to-tech-teal bg-clip-text text-transparent">98%</h3>
                    <p className="text-sm mt-1 font-medium">Client Satisfaction</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-50/80 backdrop-blur-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-4xl bg-gradient-to-r from-tech-blue to-tech-teal bg-clip-text text-transparent">24/7</h3>
                    <p className="text-sm mt-1 font-medium">Client Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern wave shape at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,202.7C840,203,960,181,1080,170.7C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
