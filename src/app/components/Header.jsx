import Link from 'next/link'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Header = () => {
    return (
        <section
            id="section-home"
            className="relative w-full py-12 mt-12 md:h-screen md:flex md:items-center xl:px-24 md:justify-center"
            aria-label="Sección de presentación"
        >
            {/* Fondo de imagen */}
            <div
                className="absolute inset-0 hidden bg-right-bottom bg-no-repeat bg-contain opacity-25 sm:flex"
                style={{ backgroundImage: `url('/img/logoSky700.svg')` }}
                role="img"
                aria-label="Logo de fondo de Felipe Vargas"
            ></div>

            {/* Contenido */}
            <div className="relative z-20 text-left">
                <h1 className="text-[12vw] text-gray-500 font-bold sm:text-7xl md:text-6xl md:flex md:flex-col md:gap-4">
                    Hola, soy <span itemProp="name">Felipe Vargas</span>{' '}
                    <span className="text-white lg:text-5xl" itemProp="jobTitle">
                        Desarrollador Web Full Stack y Consultor en Tecnología
                    </span>
                </h1>

                <div className="mt-6 lg:text-xl">
                    <p className="font-medium text-gray-100">
                        Desarrollador Front-End, Ingeniero de Sistemas
                    </p>
                    <p className="hidden mt-5 font-light text-gray-200 md:flex">
                        Apasionado por la mejora continua de la experiencia del usuario y
                        con una trayectoria en desarrollo de software y gestión de
                        infraestructura. Mis habilidades incluyen JavaScript, React JS, Next
                        JS, Node JS, Express y AWS.
                    </p>
                </div>

                {/* Botón de Proyectos */}
                <Link href="/#section-portfolio" prefetch={false}>
                    <button
                        className="flex items-center mt-4 text-lg text-white transition duration-500"
                        aria-label="Ver proyectos"
                    >
                        Proyectos
                        <span className="duration-300 hover:rotate-90">
                            <HiArrowRight size={15} className="ml-1" />
                        </span>
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Header
