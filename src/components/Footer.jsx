import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto flex justify-center space-x-4">
      {['Twitter', 'LinkedIn', 'GitHub'].map((platform, index) => (
        <a
          key={index}
          href="#"
          className="text-gray-400 hover:text-white transform hover:-translate-y-1 transition-all"
        >
          {platform}
        </a>
      ))}
    </div>
    <p className="text-center mt-4 text-sm">
      &copy; 2024 Abul Hasnat Saad. All rights reserved.
    </p>
  </footer>
);

export default Footer;
