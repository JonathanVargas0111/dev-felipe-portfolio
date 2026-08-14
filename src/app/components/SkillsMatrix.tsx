'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { skillCategories } from '../../data/projectsData';

export default function SkillsMatrix() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].skills;

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 relative border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
            <span>04 / TECHNICAL TAXONOMY & CAPABILITIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-slate-950 dark:text-white">
            {t.title}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Taxonomy Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-12">
          {skillCategories.map((cat, idx) => {
            const indexFormatted = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={cat.id}
                className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark p-6 sm:p-9 space-y-5 sm:space-y-6"
              >
                {/* Header */}
                <div className="space-y-1 border-b border-black/[0.06] dark:border-white/[0.06] pb-3 sm:pb-4">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 dark:text-slate-500">
                    <span>№ {indexFormatted}</span>
                    <span>TAXONOMY BLOCK</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white tracking-tight">
                    {cat.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-normal">
                    {cat.description[lang]}
                  </p>
                </div>

                {/* Skills Item List */}
                <div className="divide-y divide-black/[0.05] dark:divide-white/[0.05]">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs"
                    >
                      <div className="space-y-0.5">
                        <span className="font-semibold text-slate-900 dark:text-slate-100 font-mono text-xs sm:text-[13px]">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <div className="text-[10.5px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                            {skill.highlight}
                          </div>
                        )}
                      </div>

                      <span className="font-mono text-[9.5px] sm:text-[10px] uppercase font-bold text-slate-600 dark:text-slate-400 tracking-wider self-start sm:self-center">
                        [{skill.level}]
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
