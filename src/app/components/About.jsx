'use client'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { translation } from "../assets/translation";
const About = () => {

    const { lang } = useSelector((state) => state.settings);
    return (
        <section
            name="about"
            id="section-about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black "
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-gray-400">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold border-gray-500">
                        {translation[lang].about.title}
                    </h2>
                    <div className='text-xl'>
                        {
                            translation[lang].about.description.map((text, index) => (
                                <p key={index} className='mt-5'>{text}</p>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;