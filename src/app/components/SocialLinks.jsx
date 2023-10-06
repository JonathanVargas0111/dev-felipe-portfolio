import React from 'react'

import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6'

import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from 'next/link'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://linkedin.com/in/jonathan-felipe-vargas-arias",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/JonathanVargas0111",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:foo@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Twitter <FaXTwitter size={30} />
                </>
            ),
            href: "https://twitter.com/jonathanfva92",
        },
        {
            id: 5,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
            <ul className=''>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-slate-600 bg-opacity-40 hover:bg-opacity-90" +
                            " " +
                            style
                        }
                    >
                        <Link
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks