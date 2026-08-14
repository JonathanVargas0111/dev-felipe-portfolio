import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '../../../data/projectsData';
import { 
  ArrowLeft, 
  ExternalLink, 
  Building2, 
  ShieldAlert, 
  CheckCircle, 
  Layers, 
  Cpu, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.id === params.slug || p.slug === params.slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado | Felipe Vargas',
    };
  }

  return {
    title: `${project.title} | Caso de Estudio - Felipe Vargas`,
    description: project.overview.es,
    openGraph: {
      title: `${project.title} — Felipe Vargas`,
      description: project.overview.es,
      type: 'article',
    },
  };
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.id === params.slug || p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const isWebStark = project.category === 'webstark';
  const otherProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-slate-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Portafolio</span>
          </Link>

          <Link
            href="/projects"
            className="text-xs font-mono text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          >
            Ver todos los proyectos →
          </Link>
        </div>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {isWebStark ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                <Building2 className="w-3.5 h-3.5" />
                Web Stark (Sydney) · {project.company?.role}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                <Cpu className="w-3.5 h-3.5" />
                Proyecto Propio / Lab
              </span>
            )}

            <span className="text-xs font-mono text-slate-400">
              {project.period || project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-cyan-600 dark:text-cyan-400">
            {project.subtitle}
          </p>
        </div>

        {/* Ownership Notice (if Web Stark) */}
        {isWebStark && (
          <div className="p-5 rounded-2xl bg-amber-500/[0.08] dark:bg-amber-400/[0.06] border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Nota de Propiedad Intelectual & Atribución:</strong> Esta plataforma fue construida para la agencia australiana <strong>Web Stark</strong> y sus clientes. La propiedad intelectual pertenece a Web Stark. En este estudio se documentan las decisiones de arquitectura de software, liderazgo técnico y contribuciones de código desarrolladas por Felipe Vargas.
            </p>
          </div>
        )}

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-4 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] text-center shadow-sm"
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-600 dark:text-cyan-400">
                {metric.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="p-8 rounded-3xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] space-y-3 shadow-sm">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Descripción General del Sistema
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {project.overview.es}
          </p>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-red-500/[0.04] dark:bg-red-500/[0.06] border border-red-500/20 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 font-bold">
              El Desafío Técnico
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {project.challenge.es}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-emerald-500/[0.04] dark:bg-emerald-500/[0.06] border border-emerald-500/20 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
              La Solución de Ingeniería
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {project.solution.es}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="p-8 rounded-3xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] space-y-4 shadow-sm">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Capacidades & Funcionalidades Clave
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.es.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Highlights */}
        <div className="p-8 rounded-3xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] space-y-4 shadow-sm">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Arquitectura de Software & Decisiones Técnicas
          </h2>
          <div className="space-y-3">
            {project.architectureHighlights.es.map((highlight, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200/60 dark:border-white/[0.04] flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                <Layers className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="p-8 rounded-3xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] space-y-4 shadow-sm">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Stack Tecnológico Utilizado
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-dark-850 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] text-xs font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Other Projects Suggestions */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/[0.08] space-y-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Explorar Otros Casos de Estudio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="p-5 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.18] transition-colors group space-y-2"
              >
                <span className="text-[10px] font-mono text-cyan-500 uppercase">
                  {p.year}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {p.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}