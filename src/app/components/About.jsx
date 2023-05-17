'use client'
import React, { useState, useEffect } from 'react';
import {DATA_SECTION_ABOUT} from '../data/data.js'

const About = () => {

    const [dataAbout, setDataAbout] = useState(DATA_SECTION_ABOUT);
    return (
        <section
            name="about"
            id="section-about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-400"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h2>{dataAbout.title}</h2>
                    <p className="text-3xl font-bold border-gray-500">
                        {dataAbout.description}
                    </p>
                </div>                
            </div>
        </section>
    );
};

export default About;