'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { 
  ArrowUp, 
  Code
} from 'lucide-react';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-white dark:bg-dark-950 py-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 text-white font-mono font-bold text-xs">
              FV
            </div>
            <div>
              <span className="font-bold text-sm text-slate-900 dark:text-white">
                Felipe Vargas Arias
              </span>
              <p className="text-xs text-slate-500">
                Systems Engineer · Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <a href="#about" className="hover:text-cyan-500 transition-colors">
              {translations[lang].nav.about}
            </a>
            <a href="#experience" className="hover:text-cyan-500 transition-colors">
              {translations[lang].nav.experience}
            </a>
            <a href="#projects" className="hover:text-cyan-500 transition-colors">
              {translations[lang].nav.projects}
            </a>
            <a href="#skills" className="hover:text-cyan-500 transition-colors">
              {translations[lang].nav.skills}
            </a>
            <a href="#nandark" className="hover:text-cyan-500 transition-colors">
              Nandark Lab
            </a>
            <a href="#contact" className="hover:text-cyan-500 transition-colors">
              {translations[lang].nav.contact}
            </a>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/JonathanVargas0111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/felipevargasarias/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/felipevargasx_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/10 text-xs text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Legal Disclaimers & Tech Badge */}
        <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Felipe Vargas Arias. {t.rights}
          </p>

          <p className="text-center sm:text-right">
            {t.disclaimer}
          </p>

          <div className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-mono">
            <Code className="w-3.5 h-3.5" />
            <span>Next.js 15 · TypeScript · Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
