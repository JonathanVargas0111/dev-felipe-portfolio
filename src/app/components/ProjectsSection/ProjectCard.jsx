import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const ProjectCard = ({ project }) => {
    return (
        <div key={project.id} className=" shadow-md shadow-gray-200  duration-300 text-gray-300">
            <div className="h-32">
                <Image
                    src={project.images[0]}
                    width={500}
                    height={250}
                    className="w-full h-full object-cover md:grayscale md:opacity-60 md:hover:grayscale-0 md:hover:opacity-100"
                    alt="imagen de project"
                />
            </div>
            <p className="my-4 text-xl text-center">{project.title}</p>
            <div className="flex items-center justify-around my-2">
                <Link
                    className="w-2/5 px-6 py-2 flex text-center justify-center rounded-sm border-2 border-white md:hover:-translate-y-2 duration-200"
                    href={project.linkDisplayed} target="_blank">
                    Demo
                </Link>
                <Link
                    className="w-2/5 px-6 py-2 flex text-center justify-center rounded-sm border-2 border-white md:hover:-translate-y-2 duration-200"
                    href={project.linkRepo} target="_blank">
                    Code
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard