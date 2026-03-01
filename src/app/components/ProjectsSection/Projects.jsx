'use client'
import Portfolio from "../Portfolio";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="section-portfolio"
      className="relative flex w-full flex-col gap-8 py-20 text-[var(--ink)]"
      itemScope
      itemType="http://schema.org/ItemList"
      aria-label="Proyectos de desarrollo web de Felipe Vargas"
    >
      <div className="absolute top-1/4 left-1/2 -z-10 h-96 w-96 rounded-full bg-[rgba(44,107,255,0.08)] blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full text-left"
      >
        <h2 className="font-display text-5xl font-semibold text-[var(--ink)] md:text-6xl lg:text-7xl" itemProp="name">
          Proyectos en producción
        </h2>
        <div className="mt-4 h-1 w-32 bg-[var(--accent)]"></div>
        <p className="mt-6 max-w-2xl text-lg text-[var(--ink-muted)]">
          Casos reales con foco en performance, conversión y escalabilidad. Algunos son privados,
          pero puedo compartir más detalles en entrevista.
        </p>
      </motion.div>

      {/* Listado de proyectos */}
      <Portfolio />
    </section>
  );
};

export default Projects;
