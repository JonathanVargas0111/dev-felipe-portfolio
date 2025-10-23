'use client'
import { linksProjects } from "../../assets/translation";
import Portfolio from "../Portfolio";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="section-portfolio"
      className="relative flex flex-col w-full gap-8 py-20 text-gray-900 dark:text-gray-100 lg:min-h-screen"
      itemScope
      itemType="http://schema.org/ItemList"
      aria-label="Proyectos de desarrollo web de Felipe Vargas"
    >
      {/* Gradiente decorativo */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      {/* Título con animación */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full text-center mb-8"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent" itemProp="name">
          Portafolio de Proyectos
        </h2>
        <div className="mt-4 h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Explora algunos de mis proyectos más destacados en desarrollo web
        </p>
      </motion.div>

      {/* Listado de proyectos */}
      <Portfolio />
    </section>
  );
};

export default Projects;
