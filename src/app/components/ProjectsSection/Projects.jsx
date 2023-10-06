import { linksProjects } from "../../assets/translation";
import ProjectCard from "./ProjectCard";
const dataProjects = linksProjects

const Projects = () => {
  return (
    <section
      name="portfolio"
      id="section-portfolio"
      className="w-full flex flex-col bg-black text-gray-100 px-5 py-12 border-none 
      md:flex-row md:items-center md:h-screen md:justify-center md:gap-6"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white">
        <h2 className="text-4xl font-bold mb-8" >
          Proyectos
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-12 sm:px-0">
          {
            dataProjects.map((project) => (
              <ProjectCard project={project} key={project.id}></ProjectCard>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;