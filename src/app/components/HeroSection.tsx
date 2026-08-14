'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].hero;

  const verifiedMetrics = [
    { key: 'COMMITS IN PRODUCTION', value: '2,500+', detail: '11 live codebases at Web Stark' },
    { key: 'FOOD4FITNESS CORE PLUGIN', value: '1,596', detail: '27 legacy Go/Angular systems migrated' },
    { key: 'HEADLESS STATIC PAGES', value: '100+', detail: 'Sub-second LCP · 0 CLS · ISR' },
    { key: 'AI SEARCH / AEO SCORE', value: '97%+', detail: 'Optimized for ChatGPT, Perplexity & Google' },
  ];

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 relative overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-30 dark:opacity-40 mix-blend-multiply dark:mix-blend-color-dodge">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vh] rounded-full bg-purple-500/40 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[50vh] rounded-full bg-blue-500/30 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[30vh] rounded-full bg-emerald-500/20 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-16 relative z-10"
      >
        
        {/* Editorial Top Metadata Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono uppercase tracking-wider text-[var(--text-dim)] border-b border-[var(--border-hairline)] pb-3 sm:pb-4">
          <div className="flex items-center gap-3">
            <span>[ BOGOTÁ / REMOTE GLOBAL ]</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">/</span>
            <span className="hidden sm:inline">[ SYSTEMS ENGINEERING · UNIMINUTO ]</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white inline-block"></span>
            <span className="text-slate-800 dark:text-slate-200">AVAILABLE FOR ROLES</span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="space-y-4 sm:space-y-6 max-w-5xl">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1] sm:leading-[1.08]">
            Felipe Vargas.
            <span className="block font-editorial italic font-normal text-2xl sm:text-4xl lg:text-6xl text-slate-700 dark:text-slate-300 mt-2">
              Engineering high-resilience web systems, custom e-commerce & AI workflows.
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed font-normal">
            {t.description}
          </p>
        </div>

        {/* Asymmetrical 2-Column Spread: Narrative & Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-2 sm:pt-4 items-start">
          
          {/* Left Column: Direct Links & Action Triggers */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
                // CORE PRACTICES
              </span>
              <ul className="space-y-2 text-sm sm:text-base font-mono text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-slate-400">01.</span>
                  <span>Next.js 15 App Router & React 19 Headless Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-400">02.</span>
                  <span>WooCommerce Core & Complex Nutritional Engines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-400">03.</span>
                  <span>Model Context Protocol (MCP) & Agent Automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-400">04.</span>
                  <span>Docker Dev Environments & Performance Hardening</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-sm font-mono font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:shadow-lg dark:hover:shadow-white/10"
              >
                <span>EXPLORE CASE STUDIES</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-black/10 dark:border-white/15 text-slate-800 dark:text-slate-200 text-sm font-mono transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:border-black/30 dark:hover:border-white/30"
              >
                <span>INITIATE CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Verified Production Ledger */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-black/[0.08] dark:border-white/[0.08] space-y-4 sm:space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
                <span className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  PRODUCTION VERIFICATION LEDGER
                </span>
                <span className="text-xs font-mono text-[var(--text-dim)]">
                  WEB STARK & LABS (2025–2026)
                </span>
              </div>

              <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
                {verifiedMetrics.map((m) => (
                  <div key={m.key} className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                        {m.key}
                      </div>
                      <div className="text-xs text-[var(--text-dim)]">
                        {m.detail}
                      </div>
                    </div>
                    <div className="text-base sm:text-xl font-mono font-bold text-slate-950 dark:text-white sm:text-right">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-[var(--text-dim)]">
                <span>BENCHMARKS: ZERO RUNTIME TAMPERING</span>
                <span>TYPE-SAFE ARCHITECTURE</span>
              </div>

            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
