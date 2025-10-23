'use client'
import Image from "next/image";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";

const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500", color: "from-orange-500/20 to-orange-600/10" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500", color: "from-blue-500/20 to-blue-600/10" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500", color: "from-yellow-500/20 to-yellow-600/10" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600", color: "from-cyan-500/20 to-blue-600/10" },
    { id: 5, src: github, title: "GitHub", style: "shadow-gray-400", color: "from-gray-500/20 to-gray-600/10" },
    { id: 6, src: tailwind, title: "Tailwind", style: "shadow-sky-400", color: "from-sky-500/20 to-cyan-600/10" },
    { id: 7, src: nextjs, title: "Next.js", style: "shadow-white", color: "from-white/20 to-gray-500/10" },
];

const SkillsSection = () => {
    return (
        <section
            id="section-skills"
            className="relative flex flex-col w-full gap-8 py-20 text-gray-900 dark:text-gray-100 lg:flex-row lg:items-center lg:min-h-screen"
            itemScope
            itemType="http://schema.org/ItemList"
            aria-label="Habilidades técnicas de Felipe Vargas - Desarrollo Web Full Stack"
        >
            {/* Gradiente decorativo */}
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

            {/* Título con animación */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full text-left mb-6 lg:w-2/5 lg:text-right"
            >
                <h2 className="text-5xl md:text-[8vw] lg:text-[6vw] font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent" itemProp="name">
                    Habilidades Técnicas
                </h2>
                <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 lg:ml-auto"></div>
            </motion.div>

            {/* Lista de skills con animaciones mejoradas */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid w-full grid-cols-2 gap-6 py-3 text-center sm:grid-cols-3 md:grid-cols-4 sm:px-0 lg:w-3/5 lg:px-8"
                itemProp="description"
                data-schema="ItemList"
            >
                {techs.map((tech, index) => (
                    <SkillCard
                        key={tech.id}
                        {...tech}
                        position={index + 1}
                        index={index}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default SkillsSection;