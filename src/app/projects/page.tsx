import { Metadata } from 'next';
import Link from 'next/link';
import { projectsData } from '../../data/projectsData';
import { 
  ArrowLeft, 
  ExternalLink, 
  Building2, 
  Cpu, 
  Lock, 
  Layers, 
  ArrowRight 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Proyectos & Arquitecturas | Felipe Vargas - Full-Stack Developer',
  description: 'Explora los proyectos en producción, arquitecturas headless y sistemas desarrollados por Felipe Vargas, incluyendo contribuciones clave en Web Stark y proyectos en Nandark Lab.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>

        {/* Page Title & Intro */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Índice Completo de Proyectos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Proyectos, Arquitecturas & Casos de Producción
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Una colección detallada de sistemas construidos para entornos comerciales, plataformas SaaS, plugins de WooCommerce y herramientas de desarrollo.
          </p>
        </div>

        {/* Company Attribution Notice */}
        <div className="p-5 rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] dark:bg-amber-500/[0.04] text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <Building2 className="w-5 h-5 flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Nota de Propiedad Intelectual:</strong> Los proyectos identificados con la etiqueta <em>Web Stark</em> corresponden a plataformas y productos propiedad de la agencia australiana <strong>Web Stark</strong> y sus respectivos clientes. En este portafolio se detallan el rol, la arquitectura y las contribuciones técnicas directas realizadas por Felipe Vargas.
          </p>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project) => {
            const isWebStark = project.category === 'webstark';

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-white/[0.08] bg-white dark:bg-dark-900 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-white/[0.18] transition-all duration-300 space-y-6"
              >
                <div className="space-y-4">
                  {/* Badge */}
                  <div className="flex items-center justify-between">
                    {isWebStark ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-[11px] font-semibold text-amber-700 dark:text-amber-300 border border-amber-500/20">
                        <Building2 className="w-3.5 h-3.5" />
                        Web Stark
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 text-[11px] font-semibold text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                        <Cpu className="w-3.5 h-3.5" />
                        Personal / Lab
                      </span>
                    )}

                    <span className="text-[11px] font-mono text-slate-400">
                      {project.period || project.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h2>
                    <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Overview */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.overview.es}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="p-2.5 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200/60 dark:border-white/[0.04]">
                        <div className="text-sm font-bold font-mono text-cyan-600 dark:text-cyan-400">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
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
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06] text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    <span>Ver caso detallado</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-500 hover:text-cyan-500"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.links.isPrivate && (
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Privado
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