import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center space-x-2 mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Challa Sanjana</span>
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 Challa Sanjana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;