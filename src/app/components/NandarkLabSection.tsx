'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { 
  FlaskConical, 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  CheckCircle, 
  Cpu, 
  ArrowRight,
  Terminal
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa6';

export default function NandarkLabSection() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].nandarkSection;

  return (
    <section id="nandark" className="py-20 lg:py-28 relative">
      
      {/* Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl border border-indigo-500/30 dark:border-indigo-400/20 bg-gradient-to-br from-indigo-500/[0.04] via-slate-50 to-white dark:from-indigo-950/40 dark:via-dark-900 dark:to-dark-950 p-8 sm:p-12 overflow-hidden shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>{t.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.description}
              </p>

              {/* Stats & Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/80 dark:bg-dark-850/80 border border-indigo-500/20">
                  <div className="text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
                    {t.articlesCount}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {t.articlesSub}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 dark:bg-dark-850/80 border border-indigo-500/20">
                  <div className="text-2xl font-bold font-mono text-cyan-600 dark:text-cyan-400">
                    100% Privacy
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Herramientas de IA local sin telemetría
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://nandark.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-500/20 transition-all duration-200"
                >
                  <span>{t.visitBlogBtn}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="https://nandark.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-white/[0.1] text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors"
                >
                  <span>nandark.com</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right Tools Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                {t.toolsTitle}
              </h3>

              {t.tools.map((tool, idx) => (
                <div
                  key={tool.name}
                  className="p-5 rounded-2xl bg-white dark:bg-dark-850 border border-slate-200 dark:border-white/[0.08] shadow-sm hover:border-indigo-500/40 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                      {idx === 1 ? (
                        <FaChrome className="w-4 h-4 text-cyan-500" />
                      ) : (
                        <Sparkles className="w-4 h-4 text-indigo-500" />
                      )}
                      <span>{tool.name}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      Live / Tool
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
