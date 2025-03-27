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
    <div className="w-full px-2 pt-10 text-white md:pt-10">
      <div
        className="mx-auto lg:grid lg:grid-cols-2 gap-y-10"
        itemProp="mainEntity"
        itemScope
        itemType="http://schema.org/Project"
      >
        {projects.map((project, index) => (
          <motion.article
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/CreativeWork"
            role="listitem"
          >
            {/* Imagen con schema */}
            <div itemProp="image" itemScope itemType="https://schema.org/ImageObject">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar el proyecto ${project.title}`}
              >
                <Image
                  src={project.src}
                  alt={`Vista previa del proyecto ${project.title} desarrollado por Felipe Vargas - ${project.devstack}`}
                  width={500}
                  height={500}
                  className="h-[350px] md:h-52 w-auto object-cover border rounded border-gray-700"
                  itemProp="contentUrl"
                />
                <meta itemProp="author" content="Felipe Vargas" />
              </a>
            </div>

            {/* Contenido del proyecto */}
            <div itemProp="about">
              <h3 itemProp="name" className="text-2xl">{project.title}</h3>

              <p itemProp="description" className="...">
                {project.desc}
                <span className="hidden" itemProp="keywords">{project.devstack}</span>
              </p>

              <div itemProp="technologyUsed" className="hidden">
                {project.devstack}
              </div>

              {/* Links con microdatos */}
              <div itemProp="mainEntityOfPage" itemScope itemType="https://schema.org/WebPage">
                {project.link && (
                  <a
                    href={project.link}
                      target="_blank"
                    rel="noopener noreferrer"
                    itemProp="url"
                    className="mt-2 text-blue-400 underline hover:text-blue-300"
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
                    className="mt-2 text-blue-400 underline hover:text-blue-300"
                    aria-label={`Código fuente del proyecto ${project.title} por Felipe Vargas`}
                  >
                    <span itemProp="name">Repositorio GitHub</span>
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