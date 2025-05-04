
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "TechnoMinds transformed our legacy systems into a modern, integrated ecosystem, resulting in a 40% increase in operational efficiency.",
    author: "Sarah Johnson",
    position: "CTO, Global Manufacturing Inc.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "Their expertise in PLM solutions helped us reduce our product development lifecycle by 30% while improving quality across the board.",
    author: "Michael Chen",
    position: "VP of Engineering, TechFuture Corp",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    quote: "The digital transformation roadmap TechnoMinds created for us has become our strategic blueprint for the next five years of growth.",
    author: "Elena Rodriguez",
    position: "Digital Innovation Director, Apex Industries",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const clientLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2000px-IBM_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1920px-Tesla_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600">
            We partner with forward-thinking organizations to deliver transformative technology solutions.
          </p>
        </div>
        
        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <svg className="h-8 w-8 text-tech-blue mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full mr-4" 
                  />
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Client logos */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-center mb-8">Our Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={logo} 
                  alt={`Client logo ${index + 1}`} 
                  className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
