import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Header = () => {
    const backgroundStyle = {
        backgroundImage: `url(${'/img/logoSky700.svg'})`,
    };

    return (
        <section id="section-home" className="relative w-full px-5 py-12 mt-12 md:h-screen md:flex md:items-center md:px-24 md:justify-center">
            {/* Fondo de imagen */}
            <div className="absolute inset-0 bg-no-repeat bg-right-bottom opacity-25 hidden sm:flex" style={backgroundStyle}></div>
            {/* Contenido */}
            <div className='relative z-20 justify-centern text-left'>
                <h2 className="text-[13vw] text-gray-500 font-bold sm:text-7xl md:text-6xl lg:text-7xl">
                    Hola, <span className='text-white'>Soy Desarrollador</span> Front-End
                </h2>
                <div className='mt-6'>
                    <p className='text-gray-500'>Mi nombre es <span className='text-white text-lg'>Jonathan Vargas </span>  </p>
                    <p className="hidden text-gray-300 mt-5 md:flex ">
                        Apasionado en la búsqueda constante de nuevos desafíos.
                        Con habilidades en desarrollo de software, organización, trabajo en equipo y análisis
                    </p>
                </div>
                <button
                    href=""
                    duration={500}
                    className="flex items-center text-lg mt-4 text-white"
                >
                    Proyectos
                    <span className="hover:rotate-90 duration-300">
                        <HiArrowRight size={15} className="ml-1" />
                    </span>
                </button>
            </div>
        </section>
    )
}



export default Header