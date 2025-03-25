import Image from "next/image";

const SkillCard = ({ src, title, style }) => {
    return (
        <div className={`shadow-md duration-500 py-2 rounded-sm hover:${style}`}>
            <Image
                src={src}
                alt={`Icono de ${title}`}
                width={80}
                height={80}
                className="w-20 mx-auto hover:grayscale-0"
            />
            <p className="mt-4 text-center">{title}</p>
        </div>
    );
};

export default SkillCard;
