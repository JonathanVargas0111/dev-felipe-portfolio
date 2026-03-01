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
            label: "CV",
            icon: <BsFillPersonLinesFill size={30} />,
            href: "/CV_Felipe_Vargas_Desarrollador_Full_Stack.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];

    return (
        <aside className="fixed left-0 top-[35%] z-50 hidden flex-col lg:flex">
            <ul>
                {links.map(({ id, label, icon, href, style, download }) => (
                    <li key={id} className={`flex h-14 w-40 items-center justify-between border border-[var(--line)] bg-[var(--card)] px-4 duration-300 hover:ml-[-10px] hover:rounded-md hover:border-[var(--accent)] hover:shadow-[var(--shadow)] ml-[-100px] ${style}`}>
                        <Link
                            href={href}
                            className="flex w-full items-center justify-between text-[var(--ink)]"
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
