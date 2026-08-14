'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function NandarkLabSection() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].nandarkSection;

  return (
    <section id="nandark" className="py-24 lg:py-32 relative border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
            <span>05 / PERSONAL RESEARCH & EXPERIMENTAL LAB</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-slate-950 dark:text-white">
            {t.title}
          </h2>

          <p className="font-editorial italic text-2xl sm:text-3xl text-slate-600 dark:text-slate-400">
            Research into modern AI search engine optimization (AEO/GEO) and local developer tooling.
          </p>
        </div>

        {/* 2-Column Spread: Lab Manifesto & Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Lab Narrative & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
              {t.description}
            </p>

            <div className="p-6 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                  39+ Articles
                </span>
                <span className="font-mono text-xs text-slate-400 uppercase">PUBLISHED IN PROD</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                In-depth technical essays on LLM crawler indexation (`llms.txt`), semantic schema structures, Core Web Vitals optimizations, and autonomous agent workflows.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://nandark.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-mono font-semibold hover:opacity-90 transition-opacity"
              >
                <span>VISIT NANDARK.COM/BLOG</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://nandark.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-black/10 dark:border-white/15 text-slate-800 dark:text-slate-200 text-xs font-mono hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
              >
                <span>NANDARK LAB HOME</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Featured Lab Utilities */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
              // RESEARCH UTILITIES IN PRODUCTION
            </span>

            {t.tools.map((tool, idx) => (
              <div
                key={tool.name}
                className="p-6 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark space-y-2"
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">
                    0{idx + 1}. {tool.name}
                  </span>
                  <span className="text-slate-400">OPEN / LIVE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
