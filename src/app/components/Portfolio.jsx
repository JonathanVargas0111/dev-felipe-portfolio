'use client'
import React,  { useState} from "react";
const Portfolio = () => {
  const portfolios = [{
    id:1
  },{
    id:2
  }];

  const [dataProjects, setDataProjects] = useState(portfolios);
  return (
    <section     
      name="portfolio"
      id="section-portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-gray-400 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline" >
            Portfolio
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {dataProjects.map((project) => (
            <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
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