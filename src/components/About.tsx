
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side with image */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="TechnoMinds Team" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Right side with content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose TechnoMinds</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-tech-blue text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Enterprise-Grade Expertise</h3>
                  <p className="text-gray-600">
                    Our team brings decades of experience from Fortune 500 companies and leading technology providers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-tech-blue text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">End-to-End Solutions</h3>
                  <p className="text-gray-600">
                    From strategy and design to implementation and support, we handle the entire technology lifecycle.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-tech-blue text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Industry Knowledge</h3>
                  <p className="text-gray-600">
                    Deep expertise across manufacturing, healthcare, finance, and other regulated industries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-tech-blue text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovation-Focused</h3>
                  <p className="text-gray-600">
                    We continuously explore emerging technologies to deliver cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg">
              <a href="#contact">Schedule a Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
