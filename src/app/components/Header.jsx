'use client'
import Link from 'next/link'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <section
            id="section-home"
            className="relative w-full overflow-hidden pt-28 md:pt-36"
            aria-label="Sección de presentación"
        >
            <div className="relative z-20 grid w-full items-start gap-10 px-5 pb-16 md:grid-cols-[1.1fr_0.9fr] md:px-[10%]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ink-muted)]"
                    >
                        Desarrollador Full-Stack · Remoto
                    </motion.div>

                    <motion.h1
                        className="text-[12vw] font-display font-semibold leading-[0.95] text-[var(--ink)] md:text-6xl lg:text-7xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Felipe Vargas.
                        <span className="block text-[var(--ink-muted)]">
                            Desarrollo web + automatización.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="max-w-2xl text-lg text-[var(--ink-muted)] md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Ingeniero de Sistemas y Desarrollador Full-Stack. Construyo productos reales:
                        ecommerce, sitios headless y automatizaciones con IA para clientes en remoto.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-wrap gap-3"
                    >
                        {["Next.js", "React", "TypeScript", "WordPress", "WooCommerce", "Automatización"].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--ink)]"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Link href="/#section-portfolio" prefetch={false}>
                            <button
                                className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
                                aria-label="Ver proyectos"
                            >
                                Ver Proyectos
                                <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </Link>

                        <Link href="/CV_Felipe_Vargas_Desarrollador_Full_Stack.pdf" prefetch={false}>
                            <button
                                className="rounded-full border border-[var(--line)] bg-transparent px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                aria-label="Descargar CV"
                            >
                                Descargar CV
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="rounded-[32px] border border-[var(--line)] bg-[var(--card)] p-8 shadow-[var(--shadow)]"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ink-muted)]">
                        Enfoque actual
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-[var(--ink)]">
                        Productos digitales + automatización
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--ink-muted)]">
                        Especializado en interfaces sólidas, performance y SEO. Desde landing pages
                        hasta ecommerce y plataformas headless.
                    </p>
                    <div className="mt-6 rounded-2xl border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,95,46,0.12),rgba(44,107,255,0.12))] p-5">
                        <p className="text-sm text-[var(--ink-muted)]">
                            Disponible para proyectos freelance o roles remotos.
                        </p>
                    </div>
                </motion.aside>
            </div>
        </section>
    )
}

export default Header
