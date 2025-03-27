import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6'
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from 'next/link'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            label: "LinkedIn",
            icon: <FaLinkedin size={30} />,
            href: "https://www.linkedin.com/in/felipevargasarias/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            label: "GitHub",
            icon: <FaGithub size={30} />,
            href: "https://github.com/JonathanVargas0111",
        },
        {
            id: 3,
            label: "Twitter",
            icon: <FaXTwitter size={30} />,
            href: "https://twitter.com/felipevargasx_",
        },
        {
            id: 4,
            label: "Resume",
            icon: <BsFillPersonLinesFill size={30} />,
            href: "/CV_jonathan_vargas.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];

    return (
        <aside className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
            <ul>
                {links.map(({ id, label, icon, href, style, download }) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-slate-600 bg-opacity-40 hover:bg-opacity-90 ${style}`}>
                        <Link
                            href={href}
                            className="flex items-center justify-between w-full text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            download={download}
                            aria-label={label}
                        >
                            {label} {icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SocialLinks;
