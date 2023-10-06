import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";
import graphql from "../../assets/graphql.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";

import SkillCard from "./SkillCard";

const SkillsSection = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 6,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 7,
            src: nextjs,
            title: "Next JS",
            style: "shadow-white",
        },
        /*
        {
          id: 8,
          src: graphql,
          title: "GraphQL",
          style: "shadow-pink-400",
        },
        */
    ];

    return (
        <section
            id="section-skills"
            name="section-skills"
            className="w-full flex flex-col text-gray-100 py-12 
            lg:flex-row lg:items-center lg:h-screen"
        >
            <div className='w-full text-5xl text-left font-bold mb-6 lg:w-1/4 lg:text-right lg:text-6xl'>
                <h2 className="">
                    Skills
                </h2>
            </div>
            <div className="w-full grid grid-cols-3 gap-4 sm:grid-cols-4  text-center py-3 sm:px-0 
                    lg:w-3/4 lg:px-5">
                {
                    techs.map(({ id, src, title, style }) => (
                        <SkillCard
                            id={id}
                            src={src}
                            title={title}
                            style={style}
                        ></SkillCard>
                    ))
                }
            </div>
        </section>
    );
};

export default SkillsSection;