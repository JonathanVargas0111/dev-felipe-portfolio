'use client'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { translation } from "../assets/translation";
import Image from 'next/image';
import HeroImage from '../assets/heroImageC.png';
import { BsDownload } from 'react-icons/bs'

const About = () => {

    const { lang } = useSelector((state) => state.settings);
    return (
        <section
            name="about"
            id="section-about"
            className="w-full flex flex-col bg-black text-gray-100 px-5 py-12 
            md:flex-row md:items-center md:h-screen md:justify-center md:gap-6"
        >
            <div className='text-5xl text-left justify-start font-bold mb-6 md:w-2/7 md:text-7xl md:text-stoke-w md:text-right'>
                <h2 className="">
                    {translation[lang].about.title}
                </h2>
            </div>

            <div className='flex flex-col gap-4 text-lg text-left md:w-3/5'>
                <p>
                    Soy un apasionado desarrollador con sólida formación y experiencia en desarrollo de software. Mi compromiso con la mejora constante y la resolución de problemas me ha impulsado a ampliar mis habilidades y conocimientos.
                </p>
                <p>
                    Cuento con una Ingeniería de Sistemas, Diplomado en Desarrollo de Software además de haber ampliado mi conocimiento con Componente Desarrollo Front End - Nivel Intermedio y Curso en  AWS Cloud Foundation.
                </p>

                <button className='border-solid w-36 border-2 border-white flex items-center justify-center text-base p-2' >
                    <BsDownload className='mr-2' /> Descarga CV
                </button>
            </div>
        </section>
    );
};

export default About;