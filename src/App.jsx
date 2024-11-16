import React from 'react';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar/>
 <HeroSection />
    {/* <AboutSection />
    <SkillsSection />
    <ProjectsSection /> */}
    <ContactSection />
    <Footer />
  </div>
);

export default App;
