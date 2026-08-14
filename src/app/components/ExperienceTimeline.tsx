'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { experienceTimeline } from '../../data/projectsData';
import { ArrowUpRight } from 'lucide-react';

export default function ExperienceTimeline() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].experience;

  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-32 relative border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
            <span>02 / CHRONOLOGICAL PRODUCTION LEDGER</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-slate-950 dark:text-white">
            {t.title}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline Entries (Architectural Table Rows) */}
        <div className="divide-y divide-black/[0.08] dark:divide-white/[0.08]">
          {experienceTimeline.map((item, idx) => {
            const isWebStark = item.company.includes('Web Stark');
            const indexFormatted = String(idx + 1).padStart(2, '0');

            return (
              <div 
                key={item.id} 
                className="py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
              >
                {/* Period & Index */}
                <div className="lg:col-span-3 space-y-1">
                  <div className="font-mono text-xs text-slate-400 dark:text-slate-500 font-medium">
                    № {indexFormatted} // {item.period}
                  </div>
                  <div className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
                    {t.typeLabels[item.type]}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {item.location}
                  </div>
                </div>

                {/* Role, Company & Achievements */}
                <div className="lg:col-span-9 space-y-4 sm:space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                        {item.role[lang]}
                      </h3>
                      <div className="font-editorial italic text-lg sm:text-xl text-slate-600 dark:text-slate-400 mt-0.5">
                        {item.company}
                      </div>
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors self-start"
                      >
                        <span>{t.viewCompany}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-normal max-w-4xl">
                    {item.description[lang]}
                  </p>

                  {/* Verifiable Bullet List */}
                  <ul className="space-y-2 pt-1">
                    {item.achievements[lang].map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-mono text-slate-400 mt-0.5">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/[0.03] dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-black/[0.06] dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
