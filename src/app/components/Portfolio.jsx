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
      <div className="mx-auto lg:grid lg:grid-cols-2 gap-y-10">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex flex-col gap-6 md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } lg:flex lg:flex-col lg:mx-3`}
          >
            {/* Imagen del proyecto */}
            <div className="flex items-center justify-center w-full lg:justify-start">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar el proyecto ${project.title}`}
              >
                <Image
                  src={project.src}
                  width={500}
                  height={500}
                  alt={`Vista previa del proyecto ${project.title}`}
                  className="h-[350px] md:h-52 w-auto object-cover border rounded border-gray-700"
                />
              </a>
            </div>

            {/* Información del proyecto */}
            <div className="max-w-xl space-y-2">
              <h3 className="text-2xl">{project.title}</h3>
              <p className="text-lg text-white/70">{project.desc}</p>

              <div className="w-48 h-[1px] bg-gray-400 my-4"></div>

              <div className="flex w-48 gap-x-6">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-400 underline hover:text-blue-300"
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    Demo
                  </a>
                )}
                {project.git && (
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-400 underline hover:text-blue-300"
                    aria-label={`Ver código fuente de ${project.title}`}
                  >
                    GitHub
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
