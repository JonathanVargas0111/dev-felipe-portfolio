'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { ArrowUpRight } from 'lucide-react';

export default function CompanyNoticeBanner() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].companyDisclaimer;

  return (
    <div className="w-full my-10">
      <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark p-6 sm:p-7 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-900 dark:text-white font-semibold uppercase tracking-wider">
            <span className="text-amber-600 dark:text-amber-400">[ DISCLOSURE 01 ]</span>
            <span>{t.title}</span>
          </div>
          <a
            href="https://webstark.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>webstark.com.au</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
          {t.text}
        </p>
      </div>
    </div>
  );
}
