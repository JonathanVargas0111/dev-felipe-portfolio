import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";

export const metadata: Metadata = {
    title: "Proyectos | Felipe Vargas - Desarrollador Full Stack",
    description: "Explora todos los proyectos de desarrollo web de Felipe Vargas. Aplicaciones modernas construidas con React, Next.js y tecnologías de vanguardia.",
};

// Same projects data as in [slug]/page.tsx - consider moving to a shared data file
const projects = [
    {
        id: "cristian-parra",
        title: "Cristian Parra",
        description: "Desarrollo de tienda en línea con WordPress y WooCommerce, implementando un filtro de productos personalizado con jQuery.",
        technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
        image: "/img/portfolio/portfolio-cristian-desktop.png",
        year: "2024",
        category: "E-commerce",
    },
    {
        id: "the-trickest",
        title: "The Trickest",
        description: "Plataforma innovadora para salud dietética con blog multi-autor y funcionalidades de ecommerce.",
        technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
        image: "/img/portfolio/the-trickets.png",
        year: "2024",
        category: "Web Platform",
    },
    {
        id: "ask-and-create",
        title: "Ask and Create",
        description: "Desarrollo de sitio web empresarial responsivo con animaciones personalizadas en jQuery.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "NextUI"],
        image: "/img/portfolio/ask-and-create.png",
        year: "2024",
        category: "Corporate Website",
    },
    {
        id: "retos-frontend-mentor",
        title: "Retos Frontend Mentor",
        description: "Aplicación de rifa con Next.js y Tailwind CSS, donde los usuarios pueden comprar boletos y un ganador es seleccionado aleatoriamente.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "/img/portfolio/retos-front-end.png",
        year: "2023",
        category: "Frontend Challenges",
    }
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
            {/* Header */}
            <header className="border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-4"
                    >
                        <BsArrowLeft />
                        Volver al inicio
                    </Link>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Mis Proyectos
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Una colección de proyectos que demuestran mi experiencia en desarrollo web full-stack,
                        desde aplicaciones de e-commerce hasta plataformas corporativas complejas.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="group block bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-800"
                        >
                            {/* Project Image */}
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                                        {project.category}
                                    </span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {project.year}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                                            +{project.technologies.length - 3} más
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Me encantaría ayudarte a convertir tus ideas en realidad.
                        Contactemos y conversemos sobre tu próximo proyecto.
                    </p>
                    <Link
                        href="/#section-contact"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Iniciar Conversación
                    </Link>
                </div>
            </div>
        </main>
    );
}