'use client';

import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { projectsData } from '../../data/projectsData';
import { Project } from '../../types/portfolio';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import CompanyNoticeBanner from './CompanyNoticeBanner';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Layers, 
  Building2, 
  Cpu, 
  ShoppingBag, 
  Filter 
} from 'lucide-react';

export default function ProjectsSection() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].projects;

  const [selectedFilter, setSelectedFilter] = useState<'all' | 'webstark' | 'personal' | 'ai' | 'ecommerce'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: t.filterAll, icon: Layers },
    { id: 'webstark', label: t.filterWebStark, icon: Building2 },
    { id: 'personal', label: t.filterPersonal, icon: Cpu },
    { id: 'ai', label: t.filterAi, icon: Sparkles },
    { id: 'ecommerce', label: t.filterEcommerce, icon: ShoppingBag },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return projectsData;
    if (selectedFilter === 'webstark') return projectsData.filter((p) => p.category === 'webstark');
    if (selectedFilter === 'personal') return projectsData.filter((p) => p.category === 'personal');
    if (selectedFilter === 'ai') return projectsData.filter((p) => p.tags.some((tag) => tag.toLowerCase().includes('ai') || tag.toLowerCase().includes('mcp') || tag.toLowerCase().includes('aeo')));
    if (selectedFilter === 'ecommerce') return projectsData.filter((p) => p.tags.some((tag) => tag.toLowerCase().includes('woocommerce') || tag.toLowerCase().includes('wordpress') || tag.toLowerCase().includes('whmcs')));
    return projectsData;
  }, [selectedFilter]);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* Company Attribution & Ownership Notice */}
        <CompanyNoticeBanner />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 my-8">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md shadow-slate-900/10 dark:shadow-white/10 scale-105'
                    : 'bg-white dark:bg-dark-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.15]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400 dark:text-cyan-600' : 'text-slate-400'}`} />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard
                project={project}
                lang={lang}
                onSelect={(p) => setActiveProject(p)}
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* In-depth Project Case Study Modal */}
      <ProjectModal
        project={activeProject}
        lang={lang}
        onClose={() => setActiveProject(null)}
      />

    </section>
  );
}
