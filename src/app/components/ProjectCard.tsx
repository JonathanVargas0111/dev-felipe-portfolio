'use client';

import React from 'react';
import { Project } from '../../types/portfolio';
import { translations } from '../../data/translations';
import { ArrowUpRight, ArrowRight, Lock, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

interface ProjectCardProps {
  project: Project;
  lang: 'es' | 'en';
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, lang, index, onSelect }: ProjectCardProps) {
  const t = translations[lang].projects;
  const isWebStark = project.category === 'webstark';
  const indexFormatted = String(index + 1).padStart(2, '0');

  return (
    <article 
      className="group rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark p-7 sm:p-9 transition-all duration-300 hover:border-black/25 dark:hover:border-white/25 flex flex-col justify-between space-y-8"
    >
      {/* Top Metadata Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white">№ {indexFormatted}</span>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            {isWebStark ? (
              <span className="text-amber-700 dark:text-amber-400 font-medium">
                WEB STARK (COMPANY)
              </span>
            ) : (
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                NANDARK LAB / PERSONAL
              </span>
            )}
          </div>

          <span className="text-slate-400 dark:text-slate-500">
            {project.period || project.year}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
            {project.title}
          </h3>
          <p className="font-editorial italic text-lg sm:text-xl text-slate-600 dark:text-slate-400">
            {project.subtitle}
          </p>
        </div>

        {/* Narrative Summary */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {project.overview[lang]}
        </p>

        {/* Verifiable Metrics Grid (Hairline Box) */}
        <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05]">
          {project.metrics.slice(0, 2).map((m) => (
            <div key={m.label} className="space-y-0.5">
              <div className="text-sm sm:text-base font-mono font-bold text-slate-950 dark:text-white">
                {m.value}
              </div>
              <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/[0.03] dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-black/[0.06] dark:border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-5 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-950 dark:text-white hover:opacity-75 transition-opacity"
        >
          <span>READ ARCHITECTURE CASE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors"
              title="Live Link"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors"
              title="GitHub Repo"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}

          {project.links.isPrivate && (
            <span className="p-1.5 text-slate-400 dark:text-slate-600" title="Private Codebase">
              <Lock className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>

    </article>
  );
}
