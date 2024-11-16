import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Vue.js", icon: "🖖" },
  { name: "JavaScript", icon: "💛" },
  { name: "Tailwind CSS", icon: "🎨" },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="bg-gray-900 text-white py-20 px-6 relative"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-neon hover:shadow-pink-500/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
