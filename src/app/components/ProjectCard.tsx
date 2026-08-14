'use client';

import React from 'react';
import { Project } from '../../types/portfolio';
import { translations } from '../../data/translations';
import { 
  Building2, 
  ExternalLink, 
  Lock, 
  ArrowUpRight, 
  Check, 
  Layers, 
  Cpu, 
  Terminal,
  FileCode,
  Sparkles
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  lang: 'es' | 'en';
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, lang, onSelect }: ProjectCardProps) {
  const t = translations[lang].projects;
  const isWebStark = project.category === 'webstark';

  return (
    <div 
      className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-white/[0.08] bg-white dark:bg-dark-900 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-white/[0.18] transition-all duration-300 overflow-hidden"
    >
      {/* Top Banner / Mockup Header */}
      <div className="relative border-b border-slate-100 dark:border-white/[0.06] bg-slate-50/80 dark:bg-dark-850 px-5 py-3.5 flex items-center justify-between">
        
        {/* Ownership Badge */}
        {isWebStark ? (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/25 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
            <Building2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Web Stark (Company)</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/25 text-[11px] font-semibold text-cyan-700 dark:text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>{t.personalTag}</span>
          </div>
        )}

        {/* Year / Period */}
        <div className="text-[11px] font-mono text-slate-400">
          {project.period || project.year}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        
        {/* Title & Subtitle */}
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <span className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Featured
              </span>
            )}
          </div>
          <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
            {project.subtitle}
          </p>
        </div>

        {/* Overview Excerpt */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {project.overview[lang]}
        </p>

        {/* Key Metrics Badges */}
        <div className="grid grid-cols-2 gap-2">
          {project.metrics.slice(0, 2).map((metric) => (
            <div 
              key={metric.label}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200/60 dark:border-white/[0.04]"
            >
              <div className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                {metric.value}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06] text-[11px] font-mono"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

      </div>

      {/* Card Footer Actions */}
      <div className="px-6 py-4 border-t border-slate-100 dark:border-white/[0.06] bg-slate-50/50 dark:bg-dark-850/50 flex items-center justify-between gap-2">
        
        {/* Primary Case Study Trigger */}
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-cyan-600 dark:hover:bg-cyan-300 text-xs font-semibold shadow-sm transition-all duration-200"
        >
          <span>{t.viewCaseStudy}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {/* External Links */}
        <div className="flex items-center gap-2">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:bg-white dark:hover:bg-white/10 transition-colors"
              title={t.viewLiveDemo}
              aria-label={t.viewLiveDemo}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:bg-white dark:hover:bg-white/10 transition-colors"
              title={t.viewLiveDemo}
              aria-label={t.viewLiveDemo}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:bg-white dark:hover:bg-white/10 transition-colors"
              title={t.viewSource}
              aria-label={t.viewSource}
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}

          {project.links.isPrivate && (
            <span 
              className="p-2 text-slate-400 dark:text-slate-500" 
              title={t.privateCase}
            >
              <Lock className="w-3.5 h-3.5" />
            </span>
          )}
        </div>

      </div>

    </div>
  );
}
