import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-screen relative flex items-center justify-center text-center bg-black overflow-hidden">
      {/* Dynamic Shiny Background */}
      <div className="absolute inset-0 bg-black">
        <div className="animate-glow bg-gradient-to-br from-gray-800 via-black to-gray-900 blur-3xl opacity-50 h-[200%] w-[200%] rounded-full"></div>
      </div>

      <div className="relative z-10 px-6 text-white space-y-6">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 animate-shimmer"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Abul Hasnat Saad
        </motion.h1>
        {/* <motion.div
  className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto flex flex-col items-center"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5, // Delay each child animation by 0.5s
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }}
>
  <motion.span
    className="block"
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 1 }}
  >
    Frontend Developer
  </motion.span>

  <motion.span
    className="block"
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 1 }}
  >
    Innovator
  </motion.span>

  <motion.span
    className="block"
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 1 }}
  >
    Visionary
  </motion.span>
</motion.div> */}
<motion.div
  className="flex items-center justify-center text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto space-x-4"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.5, // Delay between each child animation
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }}
>
  <motion.span
    className="relative"
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
    transition={{ duration: 1 }}
    whileHover={{
      scale: 1.1,
      textShadow: "0px 0px 20px rgba(255, 255, 255, 1)",
      color: "#ffffff",
    }}
  >
    Frontend Developer
  </motion.span>

  <motion.span
    className="relative"
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
    transition={{ duration: 1 }}
    whileHover={{
      scale: 1.1,
      textShadow: "0px 0px 20px rgba(255, 255, 255, 1)",
      color: "#ffffff",
    }}
  >
    |
  </motion.span>

  <motion.span
    className="relative"
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
    transition={{ duration: 1 }}
    whileHover={{
      scale: 1.1,
      textShadow: "0px 0px 20px rgba(255, 255, 255, 1)",
      color: "#ffffff",
    }}
  >
    Innovator
  </motion.span>

  <motion.span
    className="relative"
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
    transition={{ duration: 1 }}
    whileHover={{
      scale: 1.1,
      textShadow: "0px 0px 20px rgba(255, 255, 255, 1)",
      color: "#ffffff",
    }}
  >
    |
  </motion.span>

  <motion.span
    className="relative"
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
    transition={{ duration: 1 }}
    whileHover={{
      scale: 1.1,
      textShadow: "0px 0px 20px rgba(255, 255, 255, 1)",
      color: "#ffffff",
    }}
  >
    Visionary
  </motion.span>
</motion.div>

        <motion.button
          className="px-8 py-3 mt-8 rounded-full text-black font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 hover:shadow-neon transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Explore My Work
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
