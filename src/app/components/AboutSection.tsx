'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].about;

  const tenets = [
    {
      num: 'I',
      title: 'Full-Stack Depth & Production Mastery',
      body: 'Daily engineering across Next.js 15 App Router, React 19, TypeScript, PHP 8.2, and enterprise WordPress/WooCommerce plugin architectures with zero runtime pricing tampering.',
    },
    {
      num: 'II',
      title: 'Service Layer Isolation & Security',
      body: 'Business logic isolated into pure service classes (`includes/services/`). Rigorous compliance with SEC-1 through SEC-12 security hardening benchmarks across commercial WHMCS and WordPress addons.',
    },
    {
      num: 'III',
      title: 'AI Search Optimization & Agent Tooling',
      body: 'Building custom Model Context Protocol (MCP) servers connecting enterprise databases to AI desktop agents, combined with Answer Engine Optimization (AEO/GEO) achieving 97%+ scores.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 relative border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
            <span>01 / BACKGROUND & PHILOSOPHY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-slate-950 dark:text-white">
            {t.title}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Narrative Essay */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
            {t.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="pt-2 sm:pt-4 flex items-center gap-4">
              <a
                href="/CV_Felipe_Vargas_Desarrollador_Full_Stack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-slate-950 dark:text-white hover:opacity-75 transition-opacity"
              >
                <span>DOWNLOAD COMPLETE CV [PDF]</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Technical Tenets & Academic Foundations */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            
            <div className="space-y-3.5 sm:space-y-4">
              {tenets.map((tenet) => (
                <div
                  key={tenet.num}
                  className="p-5 sm:p-6 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark space-y-2"
                >
                  <div className="flex items-baseline gap-2 font-mono text-xs text-slate-900 dark:text-white font-semibold">
                    <span className="text-slate-400">[{tenet.num}]</span>
                    <span>{tenet.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {tenet.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Academic Credentials Box */}
            <div className="p-5 sm:p-6 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] space-y-2 font-mono text-xs">
              <span className="text-slate-500 uppercase">// ACADEMIC FOUNDATIONS</span>
              <div className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11px] sm:text-xs">
                <div>• B.S. in Systems Engineering (Ingeniería de Sistemas) — UNIMINUTO (2017–2022)</div>
                <div>• Advanced Full-Stack & Microservices — Talent Tech Bogotá (2024)</div>
                <div>• AWS Cloud Foundations — Universidad Santo Tomás (2022)</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
