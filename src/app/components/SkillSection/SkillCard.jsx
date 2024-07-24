import Image from 'next/image';

const SkillCard = ({ id, src, title, style }) => {
    return (
        <div
            key={id}
            className={`shadow-md duration-500 py-2 rounded-sm md:${style}`}
        >
            <Image src={src} alt={src} className="w-20 mx-auto  md:hover:grayscale-0" />
            <p className="mt-4">{title}</p>
        </div>
    )
}

export default SkillCard