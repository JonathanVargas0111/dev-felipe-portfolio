'use client'
import { BsDownload } from 'react-icons/bs'
import { FaGraduationCap, FaCode, FaAward } from 'react-icons/fa'
import { motion } from 'framer-motion'

const About = () => {
    const highlights = [
        {
            icon: <FaCode className="w-6 h-6" />,
            title: "Full-Stack real",
            description: "Next.js, React, TypeScript y backend con Node.js, PHP y GraphQL."
        },
        {
            icon: <FaAward className="w-6 h-6" />,
            title: "Producción a escala",
            description: "11 proyectos activos con enfoque en SEO, performance y conversión."
        },
        {
            icon: <FaGraduationCap className="w-6 h-6" />,
            title: "Ingeniería aplicada",
            description: "Formación sólida y enfoque en sistemas sostenibles y mantenibles."
        }
    ]

    return (
        <section
            id="section-about"
            className="relative flex w-full flex-col gap-10 py-20 text-[var(--ink)] lg:flex-row lg:items-center"
            itemScope
            itemType="http://schema.org/Person"
            aria-label="Sobre Felipe Vargas - Desarrollador Full Stack"
        >
            {/* Schema Markup para Bing/ChatGPT */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "Sobre Felipe Vargas",
                        "description": "Información profesional sobre Felipe Vargas, Desarrollador Full Stack especializado en React y Next.js",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Felipe Vargas Portfolio"
                        }
                    })
                }}
            />

            {/* Gradiente decorativo */}
            <div className="absolute top-1/2 left-0 -z-10 h-72 w-72 rounded-full bg-[rgba(255,95,46,0.08)] blur-3xl"></div>

            {/* Título con animación */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full text-left lg:w-2/5"
            >
                <h2 className="font-display text-5xl font-semibold text-[var(--ink)] md:text-[8vw] lg:text-[5vw]" itemProp="name">
                    Sobre mí
                </h2>
                <div className="mt-4 h-1 w-24 bg-[var(--accent)]"></div>
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
                    <p itemProp="description" className="leading-relaxed text-[var(--ink-muted)]">
                        Soy <strong className="font-semibold text-[var(--ink)]" itemProp="name">Felipe Vargas</strong>,
                        Ingeniero de Sistemas y Desarrollador Full-Stack. Me especializo en crear
                        experiencias digitales con diseño cuidado, performance y automatización.
                    </p>

                    <p itemProp="knowsAbout" className="leading-relaxed text-[var(--ink-muted)]">
                        Trabajo entre frontend y backend para llevar productos reales a producción:
                        ecommerce, plataformas headless y automatizaciones con IA para clientes
                        internacionales y proyectos propios.
                    </p>
                </div>

                {/* Cards de highlights */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="group rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[var(--shadow)]"
                        >
                            <div className="mb-3 text-[var(--accent-2)] transition-transform duration-300 group-hover:scale-110">
                                {item.icon}
                            </div>
                            <h3 className="mb-1 text-sm font-semibold text-[var(--ink)]">{item.title}</h3>
                            <p className="text-xs text-[var(--ink-muted)]">{item.description}</p>
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
                    className="group inline-flex w-fit items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--ink)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--page-bg)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
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
