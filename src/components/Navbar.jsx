import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Portfolio", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-lg shadow-md z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <motion.div
          className="text-2xl text-white font-bold tracking-widest cursor-pointer"
          whileHover={{
            textShadow: "0px 0px 15px rgba(255, 255, 255, 0.9)",
            scale: 1.1,
          }}
        >
          MyPortfolio
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-white">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-lg relative hover:text-white"
              whileHover={{
                color: "#ffffff",
                textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
              }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            whileHover={{
              rotate: 90,
              color: "#ffffff",
            }}
          >
            {menuOpen ? "✖" : "☰"}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed  w-full bg-black/90 flex flex-col items-center justify-center z-50 pb-24 pt-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-white text-3xl mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  color: "#ffffff",
                  textShadow: "0px 0px 15px rgba(255, 255, 255, 1)",
                  scale: 1.1,
                }}
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
