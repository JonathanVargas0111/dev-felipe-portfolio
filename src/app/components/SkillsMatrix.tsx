'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { skillCategories } from '../../data/projectsData';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Cpu, 
  Gauge, 
  Sparkles, 
  Check, 
  BadgeCheck 
} from 'lucide-react';

export default function SkillsMatrix() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].skills;

  const categoryIcons: Record<string, any> = {
    frontend: Code2,
    'backend-cms': Server,
    'ai-automation': Cpu,
    'devops-performance': Gauge,
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Advanced':
        return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20';
      default:
        return 'bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/[0.06]';
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.id] || Code2;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] bg-white dark:bg-dark-900 shadow-sm hover:border-slate-300 dark:hover:border-white/[0.18] transition-all duration-300 space-y-6"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {cat.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {cat.description[lang]}
                    </p>
                  </div>
                </div>

                {/* Skills Item List */}
                <div className="space-y-3 pt-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200/60 dark:border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-center">
                        {skill.highlight && (
                          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
                            {skill.highlight}
                          </span>
                        )}
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${getLevelBadge(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
