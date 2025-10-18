'use client';

import Link from 'next/link'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Header = () => {
    return (
        <section
            id="section-home"
            className="relative w-full py-12 mt-12 min-h-screen flex items-center xl:px-24 justify-center overflow-hidden"
            aria-label="Sección de presentación"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900"></div>

            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Floating circles */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

            {/* Logo de fondo */}
            <div
                className="absolute inset-0 hidden bg-right-bottom bg-no-repeat bg-contain opacity-10 sm:flex"
                style={{ backgroundImage: `url('/img/logoSky700.svg')` }}
                role="img"
                aria-label="Logo de fondo de Felipe Vargas"
            ></div>

            {/* Contenido */}
            <div className="relative z-20 text-left max-w-6xl mx-auto px-4">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 font-semibold text-sm mb-6 backdrop-blur-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Disponible para proyectos freelance
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                    <span className="text-gray-400 block mb-2">Hola, soy</span>
                    <span itemProp="name" className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block">
                        Felipe Vargas
                    </span>
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" itemProp="jobTitle">
                    Desarrollador Full Stack
                    <span className="block text-gray-400 mt-2">& Consultor en Tecnología</span>
                </h2>

                <div className="mt-8 max-w-2xl">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                        Transformo ideas en experiencias digitales excepcionales. Especializado en <span className="text-purple-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">Next.js</span>, <span className="text-green-400 font-semibold">Node.js</span> y <span className="text-orange-400 font-semibold">AWS</span>.
                    </p>
                    <p className="text-base md:text-lg text-gray-400">
                        +3 años creando soluciones web escalables y optimizadas
                    </p>
                </div>

                {/* Botones CTA */}
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                    <Link href="/#section-portfolio" prefetch={false}>
                        <button
                            className="group flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                            aria-label="Ver proyectos"
                        >
                            Ver Proyectos
                            <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                    </Link>

                    <Link href="/#section-about" prefetch={false}>
                        <button
                            className="flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/40"
                            aria-label="Conoce más sobre mí"
                        >
                            Conóceme
                        </button>
                    </Link>
                </div>

                {/* Tech Stack */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <p className="text-sm text-gray-500 mb-4">Stack Tecnológico</p>
                    <div className="flex flex-wrap gap-4">
                        {['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'MongoDB'].map((tech) => (
                            <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    )
}

export default Header
