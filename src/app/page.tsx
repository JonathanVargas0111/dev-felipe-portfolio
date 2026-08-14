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
    <div className="min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-cyan-500/20 selection:text-cyan-400">
      
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative overflow-hidden">
        
        {/* Subtle Global Background Mesh Pattern */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-20 opacity-70 dark:opacity-30" />

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
