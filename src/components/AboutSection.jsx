import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => (
  <section
    id="about"
    className="bg-gray-900 text-white py-20 relative overflow-hidden"
  >
    {/* Animated Borders */}
    <div className="absolute inset-0 border-t border-l border-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient" />

    <div className="container mx-auto px-6 text-center space-y-6 relative z-10">
      <motion.h2
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I'm a passionate frontend developer with expertise in React, Vue, and
        modern UI frameworks. I specialize in creating seamless user experiences
        and innovative designs.
      </motion.p>
    </div>
  </section>
);

export default AboutSection;
