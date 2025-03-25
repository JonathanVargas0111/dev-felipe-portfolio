import Image from "next/image";
import SkillCard from "./SkillCard";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";

const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 6, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 7, src: nextjs, title: "Next.js", style: "shadow-white" },
];

const SkillsSection = () => {
    return (
        <section
            id="section-skills"
            className="flex flex-col w-full gap-4 py-12 text-gray-100 lg:flex-row lg:items-center lg:h-screen"
        >
            {/* Título */}
            <div className="w-full text-5xl font-bold text-left mb-6 lg:w-2/5 lg:text-right md:text-[8vw] lg:text-[6vw]">
                <h2>Skills</h2>
            </div>

            {/* Grid de Skills */}
            <div className="grid w-full grid-cols-3 gap-4 py-3 text-center sm:grid-cols-4 sm:px-0 lg:w-3/5 lg:px-5">
                {techs.map(({ id, src, title, style }) => (
                    <SkillCard key={id} src={src} title={title} style={style} />
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
