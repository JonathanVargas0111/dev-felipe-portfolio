'use client'
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { setLang } from "../store/slices/settings/SettingsSlices";
import { translation } from "../assets/translation";
import Image from 'next/image'

const NavBar = () => {
  const { lang } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);

  const links = translation[lang].links;

  const changeLanguage = () => {
    dispatch(setLang(lang === "es" ? "en" : "es"));
  };

  return (
    <nav className="flex justify-between items-center w-full px-4 md:px-[10%] text-gray-900 dark:text-white bg-white/95 dark:bg-black/95 backdrop-blur-sm fixed z-50 border-b border-gray-200 dark:border-gray-800">
      {/* Logo */}
      <div itemScope itemProp="image" className='flex items-center'>
        <Image
          src="/img/logoSky700.png"
          width={90}
          height={60}
          alt="Felipe Vargas - Desarrollador Full Stack"
          priority
          itemProp="logo"
        />
        <h1 itemProp="name" className="hidden ml-2 text-3xl lg:block md:text-3xl font-signature">
          Felipe Vargas <span className="text-sm font-normal">| Desarrollador Full Stack</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, idSection, titleBtn }) => (
          <li key={id} className="px-4 font-medium text-gray-900 dark:text-white capitalize duration-200 cursor-pointer hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400">
            <Link href={`/#section-${idSection}`} className='transition duration-500'>
              <button className='my-5 capitalize transition duration-500'>{titleBtn}</button>
            </Link>
          </li>
        ))}
        <li className="px-4 font-medium text-gray-900 dark:text-white capitalize duration-200 cursor-pointer hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400">
          <Link href="https://medium.com/@Felipevargasx" target="_blank" rel="noopener noreferrer">
            <button className='my-5 capitalize transition duration-500'>Blog</button>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setNav(!nav)}
        className="z-10 pr-4 text-gray-900 dark:text-white cursor-pointer md:hidden"
        aria-label="Toggle menu"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {/* Mobile Menu */}
      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen flex flex-col justify-start bg-white/95 dark:bg-black/95 text-gray-900 dark:text-white pt-12 backdrop-blur-sm">
          {links.map(({ id, idSection, titleBtn }) => (
            <li key={id} className="px-4 py-6 text-4xl capitalize cursor-pointer">
              <Link href={`/#section-${idSection}`}>
                <button className='m-5 capitalize' onClick={() => setNav(false)}>{titleBtn}</button>
              </Link>
            </li>
          ))}
          <li className="px-4 py-6 text-4xl capitalize cursor-pointer">
            <Link href="https://medium.com/@Felipevargasx" target="_blank" rel="noopener noreferrer">
              <button className='m-5 capitalize' onClick={() => setNav(false)}>Blog</button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
