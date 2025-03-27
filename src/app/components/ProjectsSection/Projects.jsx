import { linksProjects } from "../../assets/translation";
import Portfolio from "../Portfolio";

const Projects = () => {
  return (
    <section
      id="section-portfolio"
      className="flex flex-col w-full py-12 text-gray-100 lg:flex-row lg:items-center lg:h-screen"
      itemScope
      itemType="http://schema.org/ItemList"
      aria-label="Proyectos de desarrollo web de Felipe Vargas"
    >
      <div className="w-full text-5xl font-bold mb-6 text-left lg:w-2/5 lg:text-right md:text-[8vw] lg:text-[6vw]">
        <h2 itemProp="name">Portafolio de Proyectos</h2>
      </div>

      {/* Listado de proyectos */}
      <Portfolio />
    </section>
  );
};

export default Projects;
