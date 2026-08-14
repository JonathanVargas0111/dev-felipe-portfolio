'use client';

import React, { useEffect } from 'react';
import { Project } from '../../types/portfolio';
import { translations } from '../../data/translations';
import { 
  X, 
  ExternalLink, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

interface ProjectModalProps {
  project: Project | null;
  lang: 'es' | 'en';
  onClose: () => void;
}

export default function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const t = translations[lang].projects.modal;
  const isWebStark = project.category === 'webstark';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-surface-light dark:bg-surface-dark rounded-3xl border border-black/[0.12] dark:border-white/[0.12] shadow-2xl overflow-y-auto z-10 animate-in zoom-in-95 duration-200 text-slate-800 dark:text-slate-200 font-sans">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex items-center gap-3 text-xs font-mono">
            {isWebStark ? (
              <span className="text-amber-700 dark:text-amber-400 font-semibold">
                [ WEB STARK · COMPANY PROJECT ]
              </span>
            ) : (
              <span className="text-slate-700 dark:text-slate-300 font-semibold">
                [ NANDARK LAB · PERSONAL RESEARCH ]
              </span>
            )}
            <span className="text-slate-400 hidden sm:inline">
              // {project.period || project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded border border-black/10 dark:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-slate-500 transition-colors"
            aria-label={t.close}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Title & Subtitle */}
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="font-editorial italic text-2xl text-slate-600 dark:text-slate-400">
              {project.subtitle}
            </p>
          </div>

          {/* Company Ownership Note (if Web Stark) */}
          {isWebStark && (
            <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/[0.04] text-xs text-amber-900 dark:text-amber-300 space-y-1 font-mono">
              <div className="font-bold uppercase">[ INTELLECTUAL PROPERTY NOTICE ]</div>
              <p className="font-sans leading-relaxed text-slate-600 dark:text-slate-400">
                This platform is proprietary to <strong>Web Stark Pty Ltd</strong> and its clients. Source code is closed. This technical documentation highlights Felipe Vargas&apos;s direct code contributions, architecture design, and system leadership.
              </p>
            </div>
          )}

          {/* Metrics Ledger Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05]">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="space-y-0.5">
                <div className="text-xl font-bold font-mono text-slate-950 dark:text-white">
                  {metric.value}
                </div>
                <div className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              // 01 SYSTEM OVERVIEW
            </span>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
              {project.overview[lang]}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                02. THE TECHNICAL CHALLENGE
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {project.challenge[lang]}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                03. ENGINEERING SOLUTION
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {project.solution[lang]}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              // 04 KEY CAPABILITIES & FEATURES
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures[lang].map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-slate-400 font-mono mt-0.5">[{i + 1}]</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              // 05 ARCHITECTURAL DECISIONS
            </span>
            <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] space-y-2.5">
              {project.architectureHighlights[lang].map((arch, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-mono text-slate-400">§</span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              // 06 APPLIED STACK
            </span>
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

          {/* Actions Footer */}
          <div className="pt-6 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-mono font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>LIVE SITE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-black/10 dark:border-white/15 text-slate-800 dark:text-slate-200 text-xs font-mono hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
                >
                  <span>DEMO LINK</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-black/10 dark:border-white/15 text-slate-800 dark:text-slate-200 text-xs font-mono hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
              )}

              {project.links.isPrivate && (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Lock className="w-3.5 h-3.5" /> PRIVATE CODEBASE
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded text-xs font-mono text-slate-500 hover:text-slate-950 dark:hover:text-white"
            >
              [ CLOSE ESC ]
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
