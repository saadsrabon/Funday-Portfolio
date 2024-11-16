import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'E-Commerce App', description: 'Built with React and Redux.' },
  { title: 'Portfolio Website', description: 'Created using Three.js and GSAP.' },
  { title: 'Restaurant App', description: 'Built using Vue.js and Tailwind CSS.' },
];

const ProjectsSection = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    const elements = projectRef.current.querySelectorAll('.project-card');

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projectRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div
          ref={projectRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-900 p-6 rounded shadow-md"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
