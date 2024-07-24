'use client'
import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { setLang } from "../store/slices/settings/SettingsSlices";
import { translation } from "../assets/translation";
import Image from 'next/image'

const NavBar = () => {
  const { lang } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const [links, setLiks] = useState(translation[lang].links)



  const changeLanguage = () => {
    lang === "es" ? dispatch(setLang("en")) : dispatch(setLang("es"));
    setLiks(translation[lang].links)
  }

  return (
    <div className="flex justify-between items-center w-full px-4 md:px-[10%] text-white bg-black fixed z-50">
      <div className='flex items-center'>
        <Image
          src="/img/logoSky700.png"
          width={90}
          height={60}
          alt="Picture of the author"
        />
        <h1 className="hidden lg:block text-3xl md:text-3xl font-signature ml-2">Felipe Vargas</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, idSection, titleBtn }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 ">
            <Link href={`/#section-${idSection}`} className='transition duration-500'>
              <button className='my-5 capitalize transition duration-500'>{titleBtn}</button>
            </Link>
          </li>
        ))}

        <li
          className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 ">
          <Link href={`https://medium.com/@jonathanvargas_61788`} className='transition duration-500' target="_blank">
            <button className='my-5 capitalize transition duration-500'>{"Blog"}</button>
          </Link>
        </li>

        {/* <li>
          <button 
          onClick={changeLanguage}
          className="m-4 p-1 cursor-pointer font-medium text-sky-300 hover:scale-105 duration-200 
          border-2 border-sky-300 rounded-md"
          >
          {lang}</button>
        </li> */}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen flex flex-col justify-start bg-black text-white pt-12 bg-[url('/img/bgooorganize.svg')]">
          {links.map(({ id, idSection, titleBtn }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link href={`/#section-${idSection}`}><button className='m-5 capitalize' onClick={() => setNav(!nav)}>{titleBtn}</button></Link>
            </li>
          ))}

          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link href={`https://medium.com/@jonathanvargas_61788`}>
              <button className='m-5 capitalize' onClick={() => setNav(!nav)}>Blog</button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar
