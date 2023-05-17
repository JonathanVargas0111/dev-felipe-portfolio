import React from 'react';
import HeroImage from '../assets/heroImage.png';
import {HiArrowRight} from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        
        <div div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    Hola, soy un desarrollador web
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                    Apasionado en la búsqueda constante de nuevos desafíos en tecnología. 
                    Tengo habilidades en programación, desarrollo de software, organización, trabajo en equipo, análisis 
                    e implemetado tecnologías como HTML, CSS, SCSS, JavaScript, React JS
                </p>

                <div>
                    <Link
                        to="portfolio"
                        smooth
                        duration={500}
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowRight size={25} className="ml-1" />
                        </span> 
                    </Link>
                </div>
            </div>
            <div>
                <img
                src={HeroImage}
                alt="my profile"
                className="rounded-2xl mx-auto w-2/3"
                />
            </div>
        </div>
        
    </div>
)
}

export default Home