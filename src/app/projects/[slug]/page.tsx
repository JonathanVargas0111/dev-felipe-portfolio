import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

// Project data - move this to a separate data file later
const projects = [
    {
        id: "cristian-parra",
        title: "Cristian Parra",
        description: "Desarrollo de tienda en línea con WordPress y WooCommerce, implementando un filtro de productos personalizado con jQuery.",
        fullDescription: "Proyecto completo de e-commerce desarrollado para Cristian Parra, enfocado en la venta de productos especializados. La plataforma incluye funcionalidades avanzadas como filtros dinámicos, carrito de compras optimizado y panel administrativo intuitivo.",
        technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
        features: [
            "Diseño responsive y moderno",
            "Filtros de productos dinámicos",
            "Carrito de compras optimizado",
            "Panel de administración",
            "SEO optimizado",
            "Performance optimizada"
        ],
        demoUrl: "https://cristian-parra.vercel.app/",
        githubUrl: "",
        image: "/img/portfolio/portfolio-cristian-desktop.png",
        gallery: [
            "/img/portfolio/portfolio-cristian-desktop.png"
        ],
        year: "2024",
        category: "E-commerce",
        client: "Cristian Parra"
    },
    {
        id: "the-trickest",
        title: "The Trickest",
        description: "Plataforma innovadora para salud dietética con blog multi-autor y funcionalidades de ecommerce.",
        fullDescription: "Plataforma web completa enfocada en salud y nutrición, desarrollada con tecnologías modernas. Incluye sistema de blog multi-autor, e-commerce integrado y dashboard administrativo completo.",
        technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
        features: [
            "Sistema de blog multi-autor",
            "E-commerce integrado",
            "Dashboard administrativo",
            "Sistema de usuarios",
            "Gestión de contenido",
            "Responsive design"
        ],
        demoUrl: "https://the-trickest.vercel.app/",
        githubUrl: "https://github.com/JonathanVargas0111/the-trickest",
        image: "/img/portfolio/the-trickets.png",
        gallery: [
            "/img/portfolio/the-trickets.png"
        ],
        year: "2024",
        category: "Web Platform",
        client: "The Trickest"
    },
    {
        id: "ask-and-create",
        title: "Ask and Create",
        description: "Desarrollo de sitio web empresarial responsivo con animaciones personalizadas en jQuery.",
        fullDescription: "Sitio web corporativo moderno desarrollado para Ask and Create, empresa de consultoría y desarrollo. El proyecto se enfocó en crear una presencia digital profesional con animaciones elegantes y experiencia de usuario optimizada.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "NextUI"],
        features: [
            "Diseño corporativo moderno",
            "Animaciones personalizadas",
            "Formularios de contacto",
            "Secciones informativas",
            "Blog integrado",
            "SEO optimizado"
        ],
        demoUrl: "https://askncreate.vercel.app/",
        githubUrl: "https://github.com/JonathanVargas0111/askandcreate",
        image: "/img/portfolio/ask-and-create.png",
        gallery: [
            "/img/portfolio/ask-and-create.png"
        ],
        year: "2024",
        category: "Corporate Website",
        client: "Ask and Create"
    },
    {
        id: "retos-frontend-mentor",
        title: "Retos Frontend Mentor",
        description: "Aplicación de rifa con Next.js y Tailwind CSS, donde los usuarios pueden comprar boletos y un ganador es seleccionado aleatoriamente.",
        fullDescription: "Colección de desafíos y proyectos desarrollados como parte de Frontend Mentor. Cada proyecto representa una solución a problemas reales de desarrollo frontend, implementando mejores prácticas y tecnologías modernas.",
        technologies: ["HTML", "CSS", "JavaScript"],
        features: [
            "Múltiples proyectos frontend",
            "Responsive design",
            "Vanilla JavaScript",
            "CSS moderno",
            "Mejores prácticas",
            "Código limpio"
        ],
        demoUrl: "https://jonathanvargas0111.github.io/retos-frontend-mentor/",
        githubUrl: "https://github.com/JonathanVargas0111/retos-frontend-mentor",
        image: "/img/portfolio/retos-front-end.png",
        gallery: [
            "/img/portfolio/retos-front-end.png"
        ],
        year: "2023",
        category: "Frontend Challenges",
        client: "Personal Project"
    }
];

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.id,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = projects.find((p) => p.id === params.slug);

    if (!project) {
        return {
            title: "Proyecto no encontrado | Felipe Vargas",
        };
    }

    return {
        title: `${project.title} - Proyecto de Felipe Vargas | Desarrollador Full Stack`,
        description: project.fullDescription,
        openGraph: {
            title: `${project.title} - Proyecto de Felipe Vargas`,
            description: project.fullDescription,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: `Proyecto ${project.title} desarrollado por Felipe Vargas`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} - Felipe Vargas`,
            description: project.fullDescription,
            images: [project.image],
        },
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.id === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
            {/* Header */}
            <header className="border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <Link
                        href="/#section-portfolio"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                        <BsArrowLeft />
                        Volver al portafolio
                    </Link>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Project Hero */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                            {project.category}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">{project.year}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
                        {project.fullDescription}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mb-12">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <BsBoxArrowUpRight />
                                Ver Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                <BsGithub />
                                Ver Código
                            </a>
                        )}
                    </div>
                </div>

                {/* Project Image */}
                <div className="mb-12">
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src={project.image}
                            alt={`Proyecto ${project.title}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    {/* Technologies */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Tecnologías Utilizadas</h2>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Características Principales</h2>
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Project Info */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-semibold mb-2">Cliente</h3>
                            <p className="text-gray-600 dark:text-gray-300">{project.client}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Año</h3>
                            <p className="text-gray-600 dark:text-gray-300">{project.year}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Categoría</h3>
                            <p className="text-gray-600 dark:text-gray-300">{project.category}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation to Other Projects */}
                <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <h3 className="text-2xl font-bold mb-8">Otros Proyectos</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects
                            .filter((p) => p.id !== project.id)
                            .slice(0, 3)
                            .map((otherProject) => (
                                <Link
                                    key={otherProject.id}
                                    href={`/projects/${otherProject.id}`}
                                    className="group block"
                                >
                                    <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                                        <Image
                                            src={otherProject.image}
                                            alt={otherProject.title}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-105"
                                        />
                                    </div>
                                    <h4 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {otherProject.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                        {otherProject.description}
                                    </p>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </main>
    );
}