import { linksProjects } from "../../assets/translation";
import ProjectCard from "./ProjectCard";
const dataProjects = linksProjects

const Projects = () => {
  return (
    <section
      name="portfolio"
      id="section-portfolio"
      className="w-full flex flex-col text-gray-100 py-12 
      lg:flex-row lg:items-center lg:h-screen"
    >
      <div className='w-full text-5xl text-left font-bold mb-6 lg:w-1/4 lg:text-right'>
        <h2 className="">
          Proyectos
        </h2>
      </div>

      <div className="w-full grid grid-cols-2 gap-4 text-center py-3 sm:px-0 lg:w-3/4 lg:grid-cols-3 lg:px-5">
        {
          dataProjects.map((project) => (
            <ProjectCard project={project} key={project.id}></ProjectCard>
          ))
        }
      </div>
    </section>
  );
};

export default Projects;