'use client'
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { setLang } from "../store/slices/settings/SettingsSlices";
import { translation } from "../assets/translation";

const NavBar = () => {
  const { lang } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);

  const links = translation[lang].links;

  const changeLanguage = () => {
    dispatch(setLang(lang === "es" ? "en" : "es"));
  };

  return (
    <nav className="fixed z-50 flex w-full items-center justify-between border-b border-[var(--line)] bg-[rgba(255,255,255,0.7)] px-4 backdrop-blur-md dark:bg-[rgba(8,10,14,0.7)] md:px-[10%]">
      {/* Logo */}
      <div itemScope itemProp="image" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] text-sm font-semibold text-[var(--ink)] shadow-[var(--shadow)]">
          FV
        </div>
        <div className="hidden lg:block">
          <h1 itemProp="name" className="text-lg font-semibold text-[var(--ink)]">
            Felipe Vargas
          </h1>
          <p className="text-xs text-[var(--ink-muted)]">
            Full-Stack Developer · Next.js · WordPress · WooCommerce
          </p>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden items-center gap-6 md:flex">
        {links.map(({ id, idSection, titleBtn }) => (
          <li key={id} className="text-sm font-medium text-[var(--ink)] transition duration-200 hover:text-[var(--accent-2)]">
            <Link href={`/#section-${idSection}`} className='transition duration-500'>
              <button className='my-5 capitalize transition duration-500'>{titleBtn}</button>
            </Link>
          </li>
        ))}
        <li className="rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
          Disponible remoto
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setNav(!nav)}
        className="z-10 pr-4 text-[var(--ink)] md:hidden"
        aria-label="Toggle menu"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {/* Mobile Menu */}
      {nav && (
        <ul className="absolute left-0 top-0 flex h-screen w-full flex-col justify-start bg-[var(--page-bg)] pt-16 text-[var(--ink)] backdrop-blur-sm">
          {links.map(({ id, idSection, titleBtn }) => (
            <li key={id} className="px-4 py-6 text-4xl capitalize">
              <Link href={`/#section-${idSection}`}>
                <button className='m-5 capitalize' onClick={() => setNav(false)}>{titleBtn}</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
