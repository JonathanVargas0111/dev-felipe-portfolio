'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const SkillCard = ({ src, title, style, position, index, color }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`group relative p-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900/50 dark:to-gray-800/30 border border-gray-300 dark:border-gray-800 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:${style} hover:-translate-y-2`}
        itemScope
        itemType="http://schema.org/Skill"
        itemProp="itemListElement"
        role="listitem"
      >
        {/* Gradiente de fondo al hacer hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`}></div>

        <div className="relative" itemProp="competency" itemType="http://schema.org/Competency">
          <div className="flex flex-col items-center justify-center">
            <div className="transition-transform duration-300 transform group-hover:scale-110">
              <Image
                src={src}
                alt={`${title} - Tecnología dominada por Felipe Vargas`}
                width={64}
                height={64}
                className="object-contain w-16 h-16"
                itemProp="image"
                loading="lazy"
              />
            </div>
            <meta itemProp="name" content={title} />
            <p className="mt-4 text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true">
              {title}
            </p>
          </div>
        </div>

        {/* Schema oculto para posicionamiento */}
        <meta itemProp="position" content={position} />
      </motion.div>
    );
  };

export default SkillCard;


