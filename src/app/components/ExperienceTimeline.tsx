'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { experienceTimeline } from '../../data/projectsData';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Building2, 
  GraduationCap, 
  Award,
  Sparkles
} from 'lucide-react';

export default function ExperienceTimeline() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].experience;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'full-time': return Building2;
      case 'freelance': return Award;
      case 'internship': return Briefcase;
      case 'education': return GraduationCap;
      default: return Briefcase;
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-slate-200 dark:border-white/[0.08] ml-4 sm:ml-32 space-y-12">
          
          {experienceTimeline.map((item, idx) => {
            const Icon = getTypeIcon(item.type);
            const isWebStark = item.company.includes('Web Stark');

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline Dot with Glow */}
                <div className={`absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border-2 bg-white dark:bg-dark-950 transition-transform group-hover:scale-110 ${
                  isWebStark 
                    ? 'border-amber-500 text-amber-500 shadow-glow-amber' 
                    : 'border-cyan-500 text-cyan-500 shadow-glow-cyan'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Period Badge (Left aligned on large screens) */}
                <div className="sm:absolute sm:-left-36 sm:top-2 mb-2 sm:mb-0 sm:text-right">
                  <span className="inline-block text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                    {item.period}
                  </span>
                </div>

                {/* Experience Card */}
                <div className={`p-6 sm:p-7 rounded-3xl border bg-white dark:bg-dark-900 transition-all duration-300 shadow-sm hover:shadow-md ${
                  isWebStark 
                    ? 'border-amber-500/30 dark:border-amber-400/20 hover:border-amber-500/50' 
                    : 'border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.18]'
                }`}>
                  
                  {/* Role & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {item.role[lang]}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5 text-xs font-medium text-cyan-600 dark:text-cyan-400">
                        <span>{item.company}</span>
                        <span>·</span>
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <span className="self-start sm:self-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]">
                      {t.typeLabels[item.type]}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-4">
                    {item.description[lang]}
                  </p>

                  {/* Key Achievements Bullet points */}
                  <div className="space-y-2 mb-5">
                    {item.achievements[lang].map((ach, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06] text-[11px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                      >
                        <span>{t.viewCompany}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
