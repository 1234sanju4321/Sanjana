import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 text-center mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="mailto:sanjana.challaa@gmail.com"
              className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Email
                </h3>
                <p className="text-gray-600">sanjana.challaa@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sanjanachalla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-gray-600">Connect with me</p>
              </div>
            </a>

            <a
              href="tel:7382211929"
              className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Phone
                </h3>
                <p className="text-gray-600">7382211929</p>
              </div>
            </a>

            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Location
                </h3>
                <p className="text-gray-600">Tirupati, Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;