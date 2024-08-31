import { linksProjects } from "../../assets/translation";
import Portfolio from "../Portfolio";
import ProjectCard from "./ProjectCard";
const dataProjects = linksProjects

const Projects = () => {
  return (
    <section
      name="portfolio"
      id="section-portfolio"
      className="flex flex-col w-full py-12 text-gray-100 lg:flex-row lg:items-center lg:h-screen"
    >
      <div className='w-full text-5xl text-left font-bold mb-6 lg:w-2/5 lg:text-right md:text-[8vw] lg:text-[6vw]'>
        <h2 className="">
          Proyectos
        </h2>
      </div>

      {/* <div className="grid w-full grid-cols-2 gap-4 py-3 text-center sm:px-0 lg:w-3/5 lg:grid-cols-3 lg:px-5">
        {
          dataProjects.map((project) => (
            <ProjectCard project={project} key={project.id}></ProjectCard>
          ))
        }
      </div> */}
      <Portfolio/>
    </section>
  );
};

export default Projects;