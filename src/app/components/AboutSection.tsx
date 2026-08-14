'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { 
  UserCheck, 
  Code2, 
  ShieldCheck, 
  Cpu, 
  GraduationCap, 
  Briefcase, 
  Award,
  CheckCircle,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].about;

  const pillarIcons = [Code2, ShieldCheck, Cpu];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Narrative Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
              <UserCheck className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {t.title}
            </h2>

            <p className="text-base font-medium text-cyan-600 dark:text-cyan-400">
              {t.subtitle}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="/CV_Felipe_Vargas_Desarrollador_Full_Stack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:bg-cyan-600 dark:hover:bg-cyan-300 transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>{translations[lang].nav.viewCv}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Highlights & Credentials Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* 3 Core Pillars */}
            <div className="space-y-4">
              {t.highlights.map((item, idx) => {
                const Icon = pillarIcons[idx] || Code2;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200/80 dark:border-white/[0.08] shadow-sm hover:border-slate-300 dark:hover:border-white/[0.15] transition-colors flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Credentials Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-dark-850 dark:to-dark-900 border border-slate-200 dark:border-white/[0.08] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-500" />
                <span>Formación & Fundamentos de Ingeniería</span>
              </h4>
              
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span><strong>Ingeniería de Sistemas</strong> — UNIMINUTO (2017–2022)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span><strong>Full-Stack Avanzado & Microservicios</strong> — Talent Tech (2024)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span><strong>AWS Cloud Foundations</strong> — Univ. Santo Tomás (2022)</span>
                </li>
              </ul>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
