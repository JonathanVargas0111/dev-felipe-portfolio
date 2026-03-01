'use client'
import { motion } from "framer-motion";

const skillGroups = [
    {
        title: "Frontend",
        items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
    },
    {
        title: "Ecommerce & CMS",
        items: ["WordPress", "WooCommerce", "WHMCS", "PHP 8", "Headless CMS", "GraphQL"],
    },
    {
        title: "Backend & Infra",
        items: ["Node.js", "Express", "Docker", "MySQL", "API Design", "CI/CD"],
    },
    {
        title: "Quality & SEO",
        items: ["Jest", "Core Web Vitals", "JSON-LD", "Sitemaps", "A/B Testing", "Auditorías SEO"],
    },
];

const SkillsSection = () => {
    return (
        <section
            id="section-skills"
            className="relative flex w-full flex-col gap-8 py-20 text-[var(--ink)] lg:flex-row lg:items-start"
            itemScope
            itemType="http://schema.org/ItemList"
            aria-label="Habilidades técnicas de Felipe Vargas - Desarrollo Web Full Stack"
        >
            {/* Gradiente decorativo */}
            <div className="absolute top-1/2 right-0 -z-10 h-72 w-72 rounded-full bg-[rgba(44,107,255,0.08)] blur-3xl"></div>

            {/* Título con animación */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full text-left lg:w-2/5"
            >
                <h2 className="font-display text-5xl font-semibold text-[var(--ink)] md:text-[8vw] lg:text-[5vw]" itemProp="name">
                    Habilidades Técnicas
                </h2>
                <div className="mt-4 h-1 w-24 bg-[var(--accent)]"></div>
                <p className="mt-6 text-base text-[var(--ink-muted)]">
                    Stack principal orientado a producto: performance, SEO, escalabilidad y
                    experiencias de usuario que convierten.
                </p>
            </motion.div>

            {/* Lista de skills con animaciones mejoradas */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid w-full grid-cols-1 gap-6 py-3 sm:grid-cols-2 lg:w-3/5 lg:px-8"
                itemProp="description"
                data-schema="ItemList"
            >
                {skillGroups.map((group, index) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]"
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ink-muted)]">
                            {group.title}
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-[var(--line)] bg-transparent px-3 py-1 text-xs font-medium text-[var(--ink)]"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default SkillsSection;
