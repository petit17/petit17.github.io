
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Globe, Rocket, ChartBar, TrendingUp, Shield } from "lucide-react";

const serviceItems = [
  {
    icon: <Layers className="h-12 w-12 text-tech-blue" />,
    title: "Systems Integration",
    description: "Seamlessly connect disparate systems to create a unified technology ecosystem that increases efficiency and eliminates data silos."
  },
  {
    icon: <Globe className="h-12 w-12 text-tech-blue" />,
    title: "Digital Transformation",
    description: "Leverage cutting-edge technologies to reimagine your business processes, customer experiences, and operational models."
  },
  {
    icon: <ChartBar className="h-12 w-12 text-tech-blue" />,
    title: "Solution Consulting",
    description: "Strategic guidance from industry experts to identify the right technology investments that align with your business objectives."
  },
  {
    icon: <Rocket className="h-12 w-12 text-tech-blue" />,
    title: "PLM Solutions",
    description: "End-to-end product lifecycle management solutions to optimize development processes, reduce time-to-market, and increase innovation."
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-tech-blue" />,
    title: "Engineering Solutions",
    description: "Advanced engineering services including CAD/CAM integration, simulation, and design optimization for manufacturing excellence."
  },
  {
    icon: <Shield className="h-12 w-12 text-tech-blue" />,
    title: "Technology Platforms",
    description: "Enterprise-grade platforms that provide the foundation for scalable, secure, and high-performance applications and services."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-tech-blue font-medium">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Comprehensive Enterprise Solutions</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-tech-blue to-tech-teal rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Our service portfolio addresses the complete spectrum of enterprise technology needs,
            from strategy to implementation and ongoing support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover-card-lift rounded-xl overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="mb-6 bg-blue-50 w-20 h-20 rounded-xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
