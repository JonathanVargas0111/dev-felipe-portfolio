'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setLang } from '../store/slices/settings/SettingsSlices';
import { translations } from '../../data/translations';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const t = translations[lang].nav;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.about, index: '01' },
    { href: '#experience', label: t.experience, index: '02' },
    { href: '#projects', label: t.projects, index: '03' },
    { href: '#skills', label: t.skills, index: '04' },
    { href: '#nandark', label: t.nandark, index: '05' },
    { href: '#contact', label: t.contact, index: '06' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3.5 bg-page-light/90 dark:bg-page-dark/90 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.06]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Monogram Brand */}
        <Link 
          href="/" 
          className="flex items-baseline gap-2.5 group focus:outline-none"
          aria-label="Felipe Vargas — Home"
        >
          <span className="font-mono text-sm font-semibold tracking-tighter text-slate-950 dark:text-white">
            FV / 26
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500 font-mono hidden sm:inline">
            — FULL-STACK & SYSTEMS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors duration-150 flex items-baseline gap-1"
            >
              <span className="text-xs text-[var(--text-dim)]">{link.index}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          
          {/* Language Switch */}
          <button
            onClick={() => dispatch(setLang(lang === 'es' ? 'en' : 'es'))}
            className="px-2.5 py-1 text-[11px] font-mono rounded border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {lang.toUpperCase()}
          </button>

          {/* Theme Switch */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 sm:p-1.5 rounded border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-slate-300" />
              ) : (
                <Moon className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-slate-700" />
              )}
            </button>
          )}

          {/* CV Action Link */}
          <a
            href="/CV_Felipe_Vargas_Desarrollador_Full_Stack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1 text-xs font-mono font-medium rounded border border-slate-900 dark:border-white bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-transparent hover:text-slate-950 dark:hover:bg-transparent dark:hover:text-white transition-all duration-150"
          >
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden rounded border border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-black/10 dark:border-white/10 bg-page-light/98 dark:bg-page-dark/98 px-6 py-6 space-y-4 animate-in fade-in duration-150">
          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm sm:text-xs font-mono py-3 sm:py-1.5 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
              >
                <span className="text-[var(--text-dim)] mr-2 sm:mr-1.5">{link.index}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
