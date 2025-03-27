import Image from "next/image";

const SkillCard = ({ src, title, style, position }) => {
    return (
      <div
      className={`shadow-md duration-500 py-2 rounded-sm hover:${style}`}
        itemScope
        itemType="http://schema.org/Skill"  // Más específico que "Thing"
        itemProp="itemListElement"
        role="listitem"
      >
        <div itemProp="competency" itemType="http://schema.org/Competency">
          <Image
            src={src}
            alt={`${title} - Tecnología dominada por Felipe Vargas`}  // Keywords
            width={80}
            height={80}
            className="w-20 mx-auto hover:grayscale-0"
            itemProp="image"
          />
          <meta itemProp="name" content={title} />
          <p className="mt-4 text-center" aria-hidden="true">{title}</p>
        </div>
        
        {/* Schema oculto para posicionamiento */}
        <meta itemProp="position" content={position} />
      </div>
    );
  };

export default SkillCard;


