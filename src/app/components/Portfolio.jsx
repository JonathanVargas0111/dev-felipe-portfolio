'use client'
import React, { useState } from "react";
import { linksProjects } from "../assets/translation";
import Link from "next/link";
import Image from 'next/image';


const Portfolio = () => {
  const portfolios = [{
    id: 1
  }, {
    id: 2
  }];

  const [dataProjects, setDataProjects] = useState(linksProjects);
  return (
    <section
      name="portfolio"
      id="section-portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-gray-400 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold" >
            Portfolio
          </h2>
          <p>
            En construccion
          </p>

        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {dataProjects.map((project) => (
            
            <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-500 ">
              <div
                key={project.id}
                className={'shadow-md py-2 rounded-lg justify-center'}
              >
                <Image
                  src={project.images[0]}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <p className="mt-4  text-center">{project.title}</p>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <Link href={project.linkDisplayed} target="_blank">
                    Demo
                  </Link>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <Link href={project.linkRepo} target="_blank">
                    Code
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;