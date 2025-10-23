'use client'
import { BsDownload } from 'react-icons/bs'
import { FaGraduationCap, FaCode, FaAward } from 'react-icons/fa'
import { motion } from 'framer-motion'

const About = () => {
    const highlights = [
        {
            icon: <FaGraduationCap className="w-6 h-6" />,
            title: "Formación Académica",
            description: "Ingeniería de Sistemas y Diplomado en Desarrollo de Software"
        },
        {
            icon: <FaCode className="w-6 h-6" />,
            title: "Especialización",
            description: "Front-End avanzado con React, Next.js y arquitecturas modernas"
        },
        {
            icon: <FaAward className="w-6 h-6" />,
            title: "Certificaciones",
            description: "AWS Cloud Foundation y desarrollo full stack"
        }
    ]

    return (
        <section
            id="section-about"
            className="relative flex flex-col w-full gap-8 py-20 text-gray-900 dark:text-gray-100 lg:flex-row lg:items-center lg:min-h-screen"
            itemScope
            itemType="http://schema.org/Person"
            aria-label="Sobre Felipe Vargas - Desarrollador Full Stack"
        >
            {/* Schema Markup para Bing/ChatGPT */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "Sobre Felipe Vargas",
                    "description": "Información profesional sobre Felipe Vargas, Desarrollador Full Stack especializado en React y Next.js",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Felipe Vargas Portfolio"
                    }
                })}
            </script>

            {/* Gradiente decorativo */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

            {/* Título con animación */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full text-left mb-6 lg:w-2/5 lg:text-right"
            >
                <h2 className="text-5xl md:text-[8vw] lg:text-[6vw] font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent" itemProp="name">
                    Sobre mí
                </h2>
                <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 lg:ml-auto"></div>
            </motion.div>

            {/* Contenido mejorado */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 text-lg text-left lg:w-3/5 lg:px-8"
            >
                <div className="space-y-4">
                    <p itemProp="description" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Soy <strong className="text-gray-900 dark:text-white font-semibold" itemProp="name">Felipe Vargas</strong>, desarrollador Full Stack con sólida formación y experiencia en desarrollo de software. Mi compromiso con la mejora constante y la resolución de problemas me ha impulsado a ampliar mis habilidades y conocimientos.
                    </p>

                    <p itemProp="knowsAbout" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Poseo una <strong className="text-gray-900 dark:text-white">Ingeniería de Sistemas</strong> y un <strong className="text-gray-900 dark:text-white">Diplomado en Desarrollo de Software</strong>. Además, he completado cursos avanzados en <strong className="text-gray-900 dark:text-white">Desarrollo Front-End</strong> y <strong className="text-gray-900 dark:text-white">AWS Cloud Foundation</strong>, lo que me permite ofrecer soluciones innovadoras y eficientes en el ámbito tecnológico.
                    </p>
                </div>

                {/* Cards de highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            <div className="text-blue-500 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Botón de descarga del CV mejorado */}
                <motion.a
                    href="/CV_Felipe_Vargas_Desarrollador_Full_Stack.pdf"
                    download
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 w-fit"
                    aria-label="Descargar CV de Felipe Vargas"
                    itemProp="url"
                >
                    <BsDownload className="group-hover:animate-bounce" />
                    <span itemProp="name">Descargar CV</span>
                </motion.a>
            </motion.div>
        </section>
    );
};

export default About;