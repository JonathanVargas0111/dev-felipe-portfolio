'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { ArrowUp } from 'lucide-react';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark py-10 sm:py-12 text-slate-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-6 sm:space-y-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4">
          <div className="space-y-1">
            <div className="font-bold text-slate-950 dark:text-white">
              FELIPE VARGAS ARIAS // 2026
            </div>
            <div className="text-[10.5px] sm:text-[11px] text-slate-400">
              Systems Engineering & Full-Stack Architecture
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs">
            <a
              href="https://github.com/JonathanVargas0111"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-950 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/felipevargasarias/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-950 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/felipevargasx_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-950 dark:hover:text-white transition-colors"
            >
              Twitter/X
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-slate-950 dark:hover:text-white transition-colors ml-auto sm:ml-4"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="pt-5 sm:pt-6 border-t border-black/[0.05] dark:border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-[10.5px] sm:text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Felipe Vargas Arias. {t.rights}</p>
          <p>{t.disclaimer}</p>
          <div>ENGINEERED WITH NEXT.JS 15 · TYPESCRIPT · TAILWIND</div>
        </div>

      </div>
    </footer>
  );
}
