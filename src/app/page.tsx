'use client';

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsSection from './components/ProjectsSection';
import SkillsMatrix from './components/SkillsMatrix';
import NandarkLabSection from './components/NandarkLabSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-page-light dark:bg-page-dark text-slate-950 dark:text-ink-primary transition-colors duration-300 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black editorial-grain">
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <SkillsMatrix />
        <NandarkLabSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
