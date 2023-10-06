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
            className="w-full flex flex-col text-gray-100 px-5 py-12 border-none 
            md:flex-row md:items-center md:h-screen md:justify-center md:gap-6"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white">

                <p className="text-4xl font-bold mb-8">
                    Skills
                </p>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  md:px-12 sm:px-0">
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
            </div>
        </section>
    );
};

export default SkillsSection;