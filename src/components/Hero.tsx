import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-4xl font-bold text-blue-600">CS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Challa Sanjana
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Computer Science Engineering undergraduate with hands-on experience in Software development, ML pipelines, and AI-driven automation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            <a
              href="mailto:sanjana.challaa@gmail.com"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
            >
              <Mail size={20} />
              <span>sanjana.challaa@gmail.com</span>
            </a>
            <a
              href="tel:7382211929"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
            >
              <Phone size={20} />
              <span>7382211929</span>
            </a>
            <a
              href="https://www.linkedin.com/in/Sanjana%20Challa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>Chittoor, Andhra Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;