'use client'
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Food4Fitness",
    desc: "Plugin WooCommerce completo para meal prep: custom meal builder, cálculo nutricional y checkout a medida.",
    impact: "Sistema de delivery con zonas y reglas avanzadas.",
    devstack: "WordPress, WooCommerce, PHP, JavaScript",
    link: "",
    git: "",
    private: true,
  },
  {
    title: "WebStark.com.au",
    desc: "Sitio corporativo headless con Next.js 15 + WordPress GraphQL.",
    impact: "Generación estática + SEO técnico con JSON-LD y sitemaps.",
    devstack: "Next.js 15, React 19, GraphQL, TypeScript",
    link: "https://webstark.com.au/",
    git: "",
  },
  {
    title: "MX Modules",
    desc: "Marketing site SaaS con blog técnico en MDX.",
    impact: "Arquitectura de contenidos escalable.",
    devstack: "Next.js, MDX, Tailwind CSS, SEO",
    link: "",
    git: "",
    private: true,
  },
  {
    title: "Nandark",
    desc: "Sitio de servicios de desarrollo y automatización.",
    impact: "Marca y posicionamiento para captar leads B2B.",
    devstack: "Next.js, Tailwind CSS, UX Writing",
    link: "https://nandark.com/",
    git: "",
  },
  {
    title: "Johanna Skincare",
    desc: "Web para cliente con enfoque en estética, confianza y conversión.",
    impact: "Flujo de contenido optimizado para reservas y contacto.",
    devstack: "Next.js, Tailwind CSS, Animaciones",
    link: "https://johanna-skincare.vercel.app/",
    git: "",
  },
  {
    title: "TechHub",
    desc: "Ecommerce de tecnología con grid de productos, categorías y carrito.",
    impact: "UI responsive optimizada para mobile + desktop.",
    devstack: "Next.js, TypeScript, Tailwind CSS",
    link: "https://techhub-alpha.vercel.app/",
    git: "https://github.com/JonathanVargas0111/techhub",
  }
];

const Portfolio = () => {
  return (
    <div className="w-full px-2 pt-10 text-[var(--ink)] md:pt-10">
      <div
        className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2"
        itemProp="mainEntity"
        itemScope
        itemType="http://schema.org/Project"
      >
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[var(--shadow)]"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/CreativeWork"
            role="listitem"
          >
            <div className="relative border-b border-[var(--line)] bg-[var(--card)]">
              <div className="flex items-center justify-between px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
                <span>Proyecto</span>
                {project.private && <span>Privado</span>}
              </div>
              <div className="h-[2px] w-16 bg-[var(--accent)] ml-6 mb-4"></div>
            </div>

            <div className="p-6" itemProp="about">
              <h3 itemProp="name" className="mb-3 text-2xl font-semibold text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                {project.title}
              </h3>

              <p itemProp="description" className="mb-4 text-sm leading-relaxed text-[var(--ink-muted)]">
                {project.desc}
              </p>
              <p className="text-sm font-medium text-[var(--ink)]">{project.impact}</p>

              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                {project.devstack.split(', ').map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-medium text-[var(--ink)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div itemProp="technologyUsed" className="hidden">
                {project.devstack}
              </div>

              <div className="mt-6 flex flex-wrap gap-3" itemProp="mainEntityOfPage" itemScope itemType="https://schema.org/WebPage">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="url"
                    className="flex-1 rounded-full bg-[var(--ink)] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--page-bg)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
                    aria-label={`Demo del proyecto ${project.title} por Felipe Vargas`}
                  >
                    <span itemProp="name">Ver Demo</span>
                  </a>
                )}
                {project.git && (
                  <a
                    href={project.git}
                    itemProp="codeRepository"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border border-[var(--line)] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    aria-label={`Código fuente del proyecto ${project.title} por Felipe Vargas`}
                  >
                    <span itemProp="name">GitHub</span>
                  </a>
                )}
                {!project.link && !project.git && (
                  <span className="rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                    Caso privado
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
