import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '../../../data/projectsData';
import { 
  ArrowLeft, 
  ExternalLink, 
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
      title: 'Dossier Not Found | Felipe Vargas',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://felipevargas.vercel.app';

  return {
    title: `${project.title} — Technical Architecture Dossier | Felipe Vargas`,
    description: project.overview.es,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} — Felipe Vargas`,
      description: project.overview.es,
      type: 'article',
      url: `${siteUrl}/projects/${project.id}`,
      publishedTime: project.year,
      authors: ['Felipe Vargas Arias'],
      images: [
        {
          url: '/img/bg-felipevargas.png',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Technical Dossier`,
      description: project.overview.es,
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://felipevargas.vercel.app';

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    applicationCategory: isWebStark ? 'BusinessApplication' : 'DeveloperApplication',
    description: project.overview.es,
    operatingSystem: 'Cross-platform, Web',
    author: {
      '@type': 'Person',
      name: 'Felipe Vargas Arias',
      url: siteUrl,
    },
    creator: {
      '@type': isWebStark ? 'Organization' : 'Person',
      name: isWebStark ? 'Web Stark' : 'Felipe Vargas Arias',
      url: isWebStark ? 'https://webstark.com.au' : siteUrl,
    },
  };

  return (
    <main className="min-h-screen bg-page-light dark:bg-page-dark text-slate-950 dark:text-ink-primary py-16 sm:py-24 editorial-grain font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-14">
        
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← RETURN TO MONOGRAPH</span>
          </Link>

          <Link
            href="/projects"
            className="text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors"
          >
            ARCHIVAL INDEX [08] →
          </Link>
        </div>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            {isWebStark ? (
              <span className="text-amber-700 dark:text-amber-400 font-semibold">
                [ WEB STARK · COMPANY PLATFORM ]
              </span>
            ) : (
              <span className="text-slate-700 dark:text-slate-300 font-semibold">
                [ NANDARK LAB · PERSONAL RESEARCH ]
              </span>
            )}

            <span className="text-slate-400">
              // PERIOD: {project.period || project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 dark:text-white">
            {project.title}
          </h1>

          <p className="font-editorial italic text-2xl sm:text-3xl text-slate-600 dark:text-slate-400">
            {project.subtitle}
          </p>
        </div>

        {/* Ownership Notice (if Web Stark) */}
        {isWebStark && (
          <div className="p-5 rounded-xl border border-amber-500/20 bg-amber-500/[0.04] text-xs text-amber-900 dark:text-amber-300 space-y-1 font-mono">
            <div className="font-bold uppercase">[ INTELLECTUAL PROPERTY & ATTRIBUTION ]</div>
            <p className="font-sans leading-relaxed text-slate-600 dark:text-slate-400">
              This system belongs to <strong>Web Stark Pty Ltd</strong> (Sydney) and its clients. In this technical dossier, the software architecture, design decisions, and code contributions of Felipe Vargas are highlighted.
            </p>
          </div>
        )}

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-black/[0.08] dark:border-white/[0.08]">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-mono font-bold text-slate-950 dark:text-white">
                {metric.value}
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase text-slate-500 dark:text-slate-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="p-6 sm:p-10 rounded-2xl bg-surface-light dark:bg-surface-dark border border-black/[0.08] dark:border-white/[0.08] space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            // 01 SYSTEM OVERVIEW
          </span>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
            {project.overview.es}
          </p>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              02. THE TECHNICAL CHALLENGE
            </span>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
              {project.challenge.es}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              03. ENGINEERING SOLUTION
            </span>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
              {project.solution.es}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="p-6 sm:p-10 rounded-2xl bg-surface-light dark:bg-surface-dark border border-black/[0.08] dark:border-white/[0.08] space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            // 04 KEY CAPABILITIES & FEATURES
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.es.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="text-slate-400 font-mono mt-0.5">[{i + 1}]</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Highlights */}
        <div className="p-6 sm:p-10 rounded-2xl bg-surface-light dark:bg-surface-dark border border-black/[0.08] dark:border-white/[0.08] space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            // 05 ARCHITECTURAL DECISIONS
          </span>
          <div className="space-y-3">
            {project.architectureHighlights.es.map((highlight, i) => (
              <div key={i} className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="font-mono text-slate-400">§</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="p-6 sm:p-10 rounded-2xl bg-surface-light dark:bg-surface-dark border border-black/[0.08] dark:border-white/[0.08] space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            // 06 APPLIED STACK
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-xs font-mono bg-black/[0.03] dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 border border-black/[0.06] dark:border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Other Projects Suggestions */}
        <div className="pt-8 border-t border-black/[0.08] dark:border-white/[0.08] space-y-6">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
            // COMPLEMENTARY SYSTEMS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark hover:border-black/25 dark:hover:border-white/25 transition-colors space-y-1.5 group"
              >
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  {p.year}
                </span>
                <h4 className="text-sm font-bold text-slate-950 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
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