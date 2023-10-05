import React from 'react'
import Image from 'next/image';
import HeroImage from '../assets/heroImage.png';
import { HiArrowRight } from "react-icons/hi";
import Link from 'next/link';

const Header = () => {
    return (
        <section
            id="section-home"
            className="w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 md:h-screen">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">

                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        Front End Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md text-lg">
                        Apasionado en la búsqueda constante de nuevos desafíos en tecnología.
                        Tengo habilidades en programación, desarrollo de software, organización, trabajo en equipo, análisis
                        e implemetado tecnologías como HTML, CSS, SCSS, JavaScript, React JS
                    </p>
                    <div>
                        {/* <Link
                        href=""
                        duration={500}
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowRight size={25} className="ml-1" />
                        </span> 
                    </Link> */}
                    </div>
                </div>
                <div>
                    <Image
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-3xl mx-auto my-5 w-1/3 md:w-2/3"
                    />
                </div>
            </div>
        </section>
    )
}



export default Header