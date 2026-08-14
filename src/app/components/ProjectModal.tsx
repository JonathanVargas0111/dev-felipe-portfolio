'use client';

import React, { useEffect } from 'react';
import { Project } from '../../types/portfolio';
import { translations } from '../../data/translations';
import { 
  X, 
  ExternalLink, 
  Building2, 
  ShieldAlert, 
  CheckCircle, 
  Cpu, 
  Layers, 
  Lock
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
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-dark-900 rounded-3xl border border-slate-200 dark:border-white/[0.1] shadow-2xl overflow-y-auto z-10 animate-in zoom-in-95 duration-200 text-slate-800 dark:text-slate-200">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-slate-200 dark:border-white/[0.08]">
          <div className="flex items-center gap-3">
            {isWebStark ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                <Building2 className="w-3.5 h-3.5" />
                Web Stark (Sydney) · {project.company?.role}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                <Cpu className="w-3.5 h-3.5" />
                {translations[lang].projects.personalTag}
              </span>
            )}
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-medium text-cyan-600 dark:text-cyan-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Company Ownership Disclaimer Note (if Web Stark) */}
          {isWebStark && (
            <div className="p-4 rounded-xl bg-amber-500/[0.08] dark:bg-amber-400/[0.06] border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
              <p>
                <strong>Nota de Atribución:</strong> Este proyecto pertenece a la compañía <strong>Web Stark</strong> y a su respectivo cliente. El código fuente es privado. En esta ficha se describen los aportes de ingeniería, arquitectura de software y métricas técnicas realizadas por Felipe Vargas.
              </p>
            </div>
          )}

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric) => (
              <div 
                key={metric.label} 
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-white/[0.06] text-center"
              >
                <div className="text-lg font-bold font-mono text-cyan-600 dark:text-cyan-400">
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              {t.overview}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {project.overview[lang]}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-red-500/[0.04] dark:bg-red-500/[0.06] border border-red-500/20 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 font-semibold flex items-center gap-1.5">
                <span>{t.challenge}</span>
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {project.challenge[lang]}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/[0.04] dark:bg-emerald-500/[0.06] border border-emerald-500/20 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                <span>{t.solution}</span>
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {project.solution[lang]}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              {t.keyFeatures}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures[lang].map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              {t.architecture}
            </h3>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-white/[0.06] space-y-2.5">
              {project.architectureHighlights[lang].map((arch, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Layers className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              {t.technologies}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{translations[lang].projects.viewLiveDemo}</span>
                </a>
              )}

              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{translations[lang].projects.viewLiveDemo}</span>
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/[0.1] hover:bg-slate-100 dark:hover:bg-white/[0.05] text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>{translations[lang].projects.viewSource}</span>
                </a>
              )}

              {project.links.isPrivate && (
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <Lock className="w-3.5 h-3.5" />
                  {translations[lang].projects.privateCase}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10"
            >
              {t.close}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
