'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import project from "../assets/portfolio/portfolio-cristian-desktop.png";
import project2 from "../assets/portfolio/the-trickets.png";
import project3 from "../assets/portfolio/ask-and-create.png";
import project4 from "../assets/portfolio/retos-front-end.png";

const projects = [
  {
    title: "Cristian Parra",
    desc: "Desarrollo de tienda en línea con WordPress y WooCommerce, implementando un filtro de productos personalizado con jQuery.",
    devstack: "Next.js, JavaScript, Tailwind CSS, Framer Motion",
    link: "https://cristian-parra.vercel.app/",
    git: "",
    src: project,
  },
  {
    title: "The Trickest",
    desc: "Plataforma innovadora para salud dietética con blog multi-autor y funcionalidades de ecommerce.",
    devstack: "Next.js, JavaScript, Tailwind CSS",
    link: "https://the-trickest.vercel.app/",
    git: "https://github.com/JonathanVargas0111/the-trickest",
    src: project2,
  },
  {
    title: "Ask and Create",
    desc: "Desarrollo de sitio web empresarial responsivo con animaciones personalizadas en jQuery.",
    devstack: "Next.js, TypeScript, Tailwind CSS, React, NextUI",
    link: "https://askncreate.vercel.app/",
    git: "https://github.com/JonathanVargas0111/askandcreate",
    src: project3,
  },
  {
    title: "Retos Frontend Mentor",
    desc: "Aplicación de rifa con Next.js y Tailwind CSS, donde los usuarios pueden comprar boletos y un ganador es seleccionado aleatoriamente.",
    devstack: "HTML, CSS, JavaScript",
    link: "https://jonathanvargas0111.github.io/retos-frontend-mentor/",
    git: "https://github.com/JonathanVargas0111/retos-frontend-mentor",
    src: project4,
  },
];

const Portfolio = () => {
  return (
    <div className="w-full px-2 pt-10 text-gray-900 dark:text-white md:pt-10">
      <div
        className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2"
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
            className="relative overflow-hidden transition-all duration-300 border border-gray-300 group bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900/80 dark:to-gray-800/50 dark:border-gray-800 rounded-2xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/CreativeWork"
            role="listitem"
          >
            {/* Imagen con efecto hover */}
            <div className="relative overflow-hidden" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar el proyecto ${project.title}`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.src}
                    alt={`Vista previa del proyecto ${project.title} desarrollado por Felipe Vargas - ${project.devstack}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                    itemProp="contentUrl"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  {/* Overlay oscuro al hacer hover */}
                  <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-gray-900 via-transparent to-transparent dark:from-gray-900 dark:via-transparent dark:to-transparent opacity-60 group-hover:opacity-80"></div>
                </div>
                <meta itemProp="author" content="Felipe Vargas" />
              </a>
            </div>

            {/* Contenido del proyecto */}
            <div className="p-6" itemProp="about">
              <h3 itemProp="name" className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {project.title}
              </h3>

              <p itemProp="description" className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {project.desc}
                <span className="hidden" itemProp="keywords">{project.devstack}</span>
              </p>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.devstack.split(', ').map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 border border-blue-300 rounded-full dark:bg-blue-950/30 dark:border-blue-500/30 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div itemProp="technologyUsed" className="hidden">
                {project.devstack}
              </div>

              {/* Links con botones mejorados */}
              <div className="flex gap-3 mt-6" itemProp="mainEntityOfPage" itemScope itemType="https://schema.org/WebPage">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="url"
                    className="flex-1 px-4 py-2 text-sm font-medium text-center text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
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
                    className="flex-1 px-4 py-2 text-sm font-medium text-center text-gray-300 transition-all duration-300 border-2 border-gray-700 rounded-lg hover:border-blue-500 hover:text-white"
                    aria-label={`Código fuente del proyecto ${project.title} por Felipe Vargas`}
                  >
                    <span itemProp="name">GitHub</span>
                  </a>
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