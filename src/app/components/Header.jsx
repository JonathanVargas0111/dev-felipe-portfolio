import Link from 'next/link';
import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Header = () => {
    const backgroundStyle = {
        backgroundImage: `url(${'/img/logoSky700.svg'})`,
    };

    return (
        <section id="section-home" className="relative w-full py-12 mt-12 md:h-screen md:flex md:items-center xl:px-24 md:justify-center">
            {/* Fondo de imagen */}
            <div className="absolute inset-0 hidden bg-right-bottom bg-no-repeat opacity-25 sm:flex" style={backgroundStyle}></div>
            {/* Contenido */}
            <div className='relative z-20 justify-center text-left'>
                <h2 className="text-[12vw] text-gray-500 font-bold sm:text-7xl md:text-6xl lg:text-7xl md:flex md:flex-col md:gap-4">
                    Hola, soy Felipe Vargas <span className='text-white'>Desarrollador Web </span>
                </h2>
                <div className='mt-6 lg:text-xl'>
                    <p className='text-gray-100'>Desarrollador Front-End, Ingeniero de Sistemas</p>
                    <p className="hidden mt-5 text-gray-200 md:flex ">
                        Orientado a la mejora continua de la
                        experiencia del usuario. Con experiencia en desarrollo de software y gestión de
                        infraestructura, mis habilidades incluyen JavaScript, React JS, Next JS, Node JS, Express y AWS.
                        Activo en la búsqueda de nuevas tecnologías y participando en actividades
                        extracurriculares para ampliar mis habilidades
                    </p>
                </div>
                
                <Link href={`/#section-portfolio`} className='transition duration-500'>
                    <button
                        href=""
                        duration={500}
                        className="flex items-center mt-4 text-lg text-white"
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