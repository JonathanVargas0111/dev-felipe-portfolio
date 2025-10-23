'use client'
import Link from 'next/link'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <section
            id="section-home"
            className="relative w-full py-12 mt-12 overflow-hidden md:h-screen md:flex md:items-center md:justify-center"
            aria-label="Sección de presentación"
        >
            {/* Gradiente de fondo adaptable a tema */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-blue-950/50 dark:via-purple-950/30 dark:to-black"></div>

            {/* Orbes de luz elegantes - adaptables al tema */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-[100px]"></div>

            {/* Fondo de imagen sutil */}
            <div
                className="absolute inset-0 hidden bg-right-bottom bg-no-repeat bg-contain opacity-5 sm:flex"
                style={{ backgroundImage: `url('/img/logoSky700.svg')` }}
                role="img"
                aria-label="Logo de fondo de Felipe Vargas"
            ></div>

            {/* Contenido */}
            <motion.div
                className="relative z-20 w-full px-5 text-left xl:px-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Badge de disponibilidad */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-green-600 border border-green-300 rounded-full dark:text-green-400 bg-green-100/80 dark:bg-green-950/30 dark:border-green-500/30 backdrop-blur-sm"
                >
                    <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                        <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
                    </span>
                    Disponible para proyectos freelance
                </motion.div>

                <motion.h1
                    className="text-[12vw] font-bold sm:text-7xl md:text-6xl lg:text-7xl md:flex md:flex-col md:gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span className="text-gray-600 dark:text-gray-400">Hola, soy</span>
                    <span itemProp="name" className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text">
                        Felipe Vargas
                    </span>
                    <span className="text-4xl font-normal leading-tight text-gray-900 dark:text-white lg:text-5xl" itemProp="jobTitle">
                        Desarrollador Web Full Stack
                        <span className="block mt-2 text-3xl text-gray-600 dark:text-gray-400 lg:text-4xl">y Consultor en Tecnología</span>
                    </span>
                </motion.h1>

                <motion.div
                    className="mt-6 lg:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <p className="font-medium text-gray-800 dark:text-gray-100">
                        Desarrollador Front-End, Ingeniero de Sistemas
                    </p>
                    <p className="hidden max-w-3xl mt-5 font-light text-gray-700 dark:text-gray-300 md:flex">
                        Apasionado por la mejora continua de la experiencia del usuario y
                        con una trayectoria en desarrollo de software y gestión de
                        infraestructura. Mis habilidades incluyen JavaScript, React JS, Next
                        JS, Node JS, Express y AWS.
                    </p>
                </motion.div>

                {/* Tech Stack visible */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="items-center hidden gap-3 mt-8 text-sm md:flex"
                >
                    <span className="font-medium text-gray-600 dark:text-gray-400">Tech Stack:</span>
                    <div className="flex flex-wrap gap-2">
                        {['React', 'Next.js', 'Node.js', 'AWS', 'Tailwind'].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-gray-700 transition-colors duration-300 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800/50 dark:border-gray-700/50 dark:text-gray-300 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-white"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Botones CTA limpios */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex items-center gap-4 mt-8"
                >
                    <Link href="/#section-portfolio" prefetch={false}>
                        <button
                            className="px-8 py-3 font-semibold text-white transition-all duration-300 rounded-lg group bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                            aria-label="Ver proyectos"
                        >
                            <span className="flex items-center gap-2">
                                Ver Proyectos
                                <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </button>
                    </Link>

                    <Link href="/#section-contact" prefetch={false}>
                        <button
                            className="px-8 py-3 font-semibold text-gray-700 transition-all duration-300 border-2 border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-blue-500/10"
                            aria-label="Contactar"
                        >
                            Contactar
                        </button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Header
