import { Metadata } from 'next';
import Link from 'next/link';
import { projectsData } from '../../data/projectsData';
import { 
  ArrowLeft, 
  ExternalLink, 
  Lock, 
  ArrowRight 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Engineering Archives & Production Works | Felipe Vargas',
  description: 'Complete index of production systems, custom WooCommerce engines, and headless architectures engineered by Felipe Vargas.',
  openGraph: {
    title: 'Engineering Archives & Production Works — Felipe Vargas',
    description: 'Complete index of production systems and custom architectures.',
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-page-light dark:bg-page-dark text-slate-950 dark:text-ink-primary py-16 sm:py-24 editorial-grain font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-14">
        
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← RETURN TO MONOGRAPH HOME</span>
          </Link>
        </div>

        {/* Page Title & Intro */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
            <span>FULL ARCHIVAL INDEX</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 dark:text-white">
            Engineering Archives & Systems
          </h1>

          <p className="font-editorial italic text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400">
            A comprehensive index of 8 production platforms, commercial addons, and research tools.
          </p>
        </div>

        {/* Company Attribution Notice */}
        <div className="p-5 sm:p-6 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark text-xs space-y-1 font-mono">
          <div className="font-bold uppercase text-amber-700 dark:text-amber-400">
            [ INTELLECTUAL PROPERTY & DISCLOSURE ]
          </div>
          <p className="font-sans leading-relaxed text-slate-600 dark:text-slate-400">
            Projects tagged with <em>Web Stark</em> are proprietary assets of <strong>Web Stark Pty Ltd</strong> and its clients. In this portfolio, the technical role, software architecture, and direct code contributions of Felipe Vargas are documented.
          </p>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, idx) => {
            const isWebStark = project.category === 'webstark';
            const indexFormatted = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark p-6 sm:p-8 space-y-6 hover:border-black/25 dark:hover:border-white/25 transition-all"
              >
                <div className="space-y-4">
                  {/* Badge */}
                  <div className="flex items-center justify-between text-xs font-mono border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
                    <span className="font-bold text-slate-950 dark:text-white">№ {indexFormatted}</span>
                    <span className={isWebStark ? 'text-amber-700 dark:text-amber-400' : 'text-slate-500'}>
                      {isWebStark ? 'WEB STARK' : 'NANDARK LAB'}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                      {project.title}
                    </h2>
                    <p className="font-editorial italic text-base text-slate-600 dark:text-slate-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Overview */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {project.overview.es}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05]">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="space-y-0.5">
                        <div className="text-sm font-mono font-bold text-slate-950 dark:text-white">
                          {m.value}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 uppercase truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/[0.03] dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-black/[0.06] dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-slate-950 dark:text-white hover:opacity-75"
                  >
                    <span>CASE DOSSIER</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-slate-500 hover:text-slate-950 dark:hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.links.isPrivate && (
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> PRIVATE
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}