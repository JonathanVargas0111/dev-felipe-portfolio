'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { Building2, Info, ExternalLink, ShieldCheck } from 'lucide-react';

export default function CompanyNoticeBanner() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].companyDisclaimer;

  return (
    <div className="w-full my-8">
      <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 dark:border-amber-400/20 bg-gradient-to-r from-amber-500/[0.06] via-amber-500/[0.02] to-transparent dark:from-amber-400/[0.08] dark:via-dark-900/60 dark:to-dark-900/30 p-5 sm:p-6 backdrop-blur-md">
        {/* Glow accent */}
        <div className="absolute -left-12 -top-12 w-28 h-28 bg-amber-500/20 dark:bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <span>{t.title}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500 inline" />
                </h4>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                  Web Stark (Sydney)
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 max-w-4xl">
                {t.text}
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 self-end md:self-center">
            <a
              href="https://webstark.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 hover:bg-amber-500/20 dark:hover:bg-amber-400/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-semibold transition-colors"
            >
              <span>{t.companyLinkText}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
