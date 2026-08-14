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
import { ArrowRight, ExternalLink, Lock, CheckCircle2, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export default function ProjectsSection() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].projects;

  const [selectedFilter, setSelectedFilter] = useState<'all' | 'webstark' | 'personal' | 'ai' | 'ecommerce'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: '[ALL 08]' },
    { id: 'webstark', label: '[WEB STARK · COMPANY]' },
    { id: 'personal', label: '[NANDARK LAB & PERSONAL]' },
    { id: 'ai', label: '[AI & MCP AUTOMATION]' },
    { id: 'ecommerce', label: '[E-COMMERCE & WOOCOMMERCE]' },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return projectsData;
    if (selectedFilter === 'webstark') return projectsData.filter((p) => p.category === 'webstark');
    if (selectedFilter === 'personal') return projectsData.filter((p) => p.category === 'personal');
    if (selectedFilter === 'ai') return projectsData.filter((p) => p.tags.some((tag) => tag.toLowerCase().includes('ai') || tag.toLowerCase().includes('mcp') || tag.toLowerCase().includes('aeo')));
    if (selectedFilter === 'ecommerce') return projectsData.filter((p) => p.tags.some((tag) => tag.toLowerCase().includes('woocommerce') || tag.toLowerCase().includes('wordpress') || tag.toLowerCase().includes('whmcs')));
    return projectsData;
  }, [selectedFilter]);

  // Flagship projects for wide spreads when 'all' filter is active
  const flagshipProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.featured);
  }, [filteredProjects]);

  const archiveProjects = useMemo(() => {
    return filteredProjects.filter((p) => !p.featured);
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
            <span>03 / SELECTED WORKS & ARCHITECTURES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-slate-950 dark:text-white">
            {t.title}
          </h2>

          <p className="font-editorial italic text-2xl sm:text-3xl text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Company Attribution Notice */}
        <CompanyNoticeBanner />

        {/* Filter Tabs (Minimal Monospaced) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id as any)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                  isActive
                    ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Flagship Editorial Spreads (Wide Hero Cards) */}
        {selectedFilter === 'all' && (
          <div className="space-y-10">
            {flagshipProjects.map((project, idx) => {
              const isWebStark = project.category === 'webstark';
              const indexFormatted = String(idx + 1).padStart(2, '0');

              return (
                <div
                  key={project.id}
                  className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark p-8 sm:p-12 space-y-8"
                >
                  {/* Top Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="font-bold text-slate-950 dark:text-white">№ {indexFormatted}</span>
                      <span className="text-slate-300 dark:text-slate-700">/</span>
                      {isWebStark ? (
                        <span className="text-amber-700 dark:text-amber-400 font-semibold">
                          WEB STARK · ENTERPRISE SYSTEM
                        </span>
                      ) : (
                        <span className="text-slate-700 dark:text-slate-300 font-semibold">
                          NANDARK LAB · PERSONAL VENTURE
                        </span>
                      )}
                      <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">/</span>
                      <span className="text-slate-400 hidden sm:inline">{project.period}</span>
                    </div>

                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      ROLE: {project.company?.role || 'Creator & Architect'}
                    </span>
                  </div>

                  {/* 2-Column Spread: Narrative vs Capabilities */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    
                    {/* Left: Headline & Challenge/Solution Narrative */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="space-y-1">
                        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="font-editorial italic text-2xl text-slate-600 dark:text-slate-400">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
                        {project.overview[lang]}
                      </p>

                      {/* Verifiable Impact Metrics Bar */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05]">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="space-y-0.5">
                            <div className="text-lg font-mono font-bold text-slate-950 dark:text-white">
                              {m.value}
                            </div>
                            <div className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded text-xs font-mono bg-black/[0.03] dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 border border-black/[0.06] dark:border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Architecture Highlights & Actions */}
                    <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-black/[0.06] lg:dark:border-white/[0.06] lg:pl-10">
                      
                      <div className="space-y-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          // ARCHITECTURE HIGHLIGHTS
                        </span>
                        <ul className="space-y-3">
                          {project.architectureHighlights[lang].slice(0, 3).map((arch, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                              <span className="text-slate-400 font-mono mt-0.5">0{i + 1}.</span>
                              <span>{arch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setActiveProject(project)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-mono font-semibold hover:opacity-90 transition-opacity"
                        >
                          <span>EXPLORE FULL ARCHITECTURE</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-black/10 dark:border-white/15 text-slate-800 dark:text-slate-200 text-xs font-mono hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
                          >
                            <span>LIVE DEMO</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.links.isPrivate && (
                          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                            <Lock className="w-3.5 h-3.5" /> PRIVATE CODEBASE
                          </span>
                        )}
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Secondary / Archive Projects Grid */}
        <div className="space-y-6">
          {selectedFilter === 'all' && (
            <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                // COMPLEMENTARY SYSTEMS & TOOLS LEDGER
              </span>
              <span className="text-xs font-mono text-slate-400">
                {archiveProjects.length} ARCHIVAL ENTRIES
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(selectedFilter === 'all' ? archiveProjects : filteredProjects).map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                lang={lang}
                index={selectedFilter === 'all' ? flagshipProjects.length + idx : idx}
                onSelect={(p) => setActiveProject(p)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={activeProject}
        lang={lang}
        onClose={() => setActiveProject(null)}
      />

    </section>
  );
}
