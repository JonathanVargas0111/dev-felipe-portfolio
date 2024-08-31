'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import project from '../assets/portfolio/portfolio-cristian-desktop.png'
import project2 from '../assets/portfolio/the-trickets.png'
import project3 from '../assets/portfolio/ask-and-create.png'
import project4 from '../assets/portfolio/retos-front-end.png'

const projects = [
  {
    title: 'Cristian Parra',
    desc: 'Developed an online store using WordPress and WooCommerce with a custom product filter built with jQuery.',
    devstack: 'NextJs, JS, Tailwind CSS, Framer Motion',
    link: "https://cristian-parra.vercel.app/",
    git: "",
    src: project
  },
  {
    title: 'The trickets',
    desc: 'HAI, an innovative platform offering personalized resources for dietary health, with a multi-author blog and ecommerce features',
    devstack: 'NextJs, JS, Tailwind CSS',
    link: "https://the-trickest.vercel.app/",
    git: "https://github.com/JonathanVargas0111/the-trickest",
    src: project2
  },
  {
    title: 'watermelonCode',
    desc: 'Created a responsive business website using Nextjs with custom animations handled by jQuery.',
    devstack: 'Nextjs,TS,Tailwindcss,React,NextUi ',
    link: "https://askncreate.vercel.app/",
    git: "https://github.com/JonathanVargas0111/askandcreate",
    src: project3
  },
  {
    title: 'Retos Front end Mentor',
    desc: 'Developed a mysterious raffle app with NextJS and Tailwind CSS for styling. Users can buy tickets and a winner is randomly selected.',
    devstack: 'HTML, CSS JS',
    link: "https://jonathanvargas0111.github.io/retos-frontend-mentor/",
    git: "https://github.com/JonathanVargas0111/retos-frontend-mentor",
    src: project4
  },
]
const Portfolio = () => {
  return (
    <div className='w-full px-2 pt-10 text-white md:pt-10'>
      <div className='mx-auto lg:grid lg:grid-cols-2 gap-y-10'>
        {
          projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`flex gap-2 flex-col ${index % 2 === 1 ? 'md:flex-row-reverse gap-12' : 'md:flex-row gap-12'} lg:flex lg:flex-col lg:gap-6 lg:mx-3`}
            >
              <div className='flex items-center justify-center w-full lg:justify-start'>
                <a href={project.link} target='_blank'>
                  <Image
                    src={project.src}
                    alt={project.title}
                    className='h-[350px] md:h-52 w-auto object-cover border rounded border-gray-700'
                  />
                </a>
              </div>
              <div className={`space-y-2 mx-w-xl`}>
                <div className='lg:hidden'>
                  <h2 className='p-0 m-0 text-4xl text-white/70'>{`0${index + 1}`}</h2>
                  <h2 className='p-0 m-0 text-2xl'>{project.title}</h2>
                </div>
                <div className='hidden lg:flex lg:flex-row lg:items-center'>
                  <h2 className='p-0 m-0 text-4xl text-white/70'>{`0${index + 1}`}</h2>
                  <h2 className='p-0 m-0 ml-3 text-2xl'>{project.title}</h2>
                </div>

                <p className='p-0 py-4 m-0 text-lg break-words text-white/70 lg:hidden'>{project.desc}</p>
                <p className='text-sm text-[#55A1FF] font-semibold m-0 p-0'>{project.devstack}</p>
                <div className='w-48 h-[1px] bg-gray-400 my-4'></div>
                <div className='flex w-48 gap-x-6'>
                  {
                    project.link && <a href={project.link} target='_blank' className='mt-2'>Link</a>
                  }
                  {
                    project.git && <a href={project.git} target='_blank' className='mt-2'>Git</a>
                  }
                </div>
              </div>
            </motion.div>
          ))
        }
      </div>

    </div>
  )
}

export default Portfolio