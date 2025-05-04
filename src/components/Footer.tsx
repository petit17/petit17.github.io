
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
              TECHNOMINDS
            </h3>
            <p className="mb-6">
              Empowering enterprises with innovative technology solutions that drive growth and transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-tech-blue transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-tech-blue transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-tech-blue transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-tech-teal mr-2"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-tech-teal mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-tech-teal mr-2"></span>
                  Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-tech-teal mr-2"></span>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-tech-teal mr-2"></span>
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-tech-teal mr-2"></span>
                  Systems Integration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-tech-teal mr-2"></span>
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-tech-teal mr-2"></span>
                  Solution Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-tech-teal mr-2"></span>
                  PLM Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-tech-teal mr-2"></span>
                  Engineering Services
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest industry insights and company news.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 w-full rounded-l-md focus:outline-none focus:ring-1 focus:ring-tech-blue text-gray-900 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-tech-blue to-tech-teal hover:from-tech-teal hover:to-tech-blue text-white px-4 rounded-r-md transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-800 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {currentYear} TECHNOMINDS. All rights reserved. | technominds.work</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
