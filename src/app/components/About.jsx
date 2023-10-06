import { BsDownload } from 'react-icons/bs'
const About = () => {
    return (
        <section
            name="about"
            id="section-about"
            className="w-full flex flex-col text-gray-100 py-12 
            lg:flex-row lg:items-center lg:h-screen "
        >
            <div className='w-full text-5xl text-left font-bold mb-6 lg:w-1/4 lg:text-right lg:text-6xl'>
                <h2 className="">
                    Sobre mi
                </h2>
            </div>

            <div className='flex flex-col gap-4 text-lg text-left lg:w-3/4 lg:px-5'>
                <p>
                    Soy un apasionado desarrollador con sólida formación y experiencia en desarrollo de software. Mi compromiso con la mejora constante y la resolución de problemas me ha impulsado a ampliar mis habilidades y conocimientos.
                </p>
                <p>
                    Cuento con una Ingeniería de Sistemas, Diplomado en Desarrollo de Software además de haber ampliado mi conocimiento con Componente Desarrollo Front End - Nivel Intermedio y Curso en  AWS Cloud Foundation.
                </p>
                <a
                    href="/CV_jonathan_vargas.pdf"
                    download="/CV_jonathan_vargas.pdf"
                    className="border-solid w-36 border-2 border-white flex items-center justify-center text-base p-2"
                >
                    <BsDownload className="mr-2" /> Descarga CV
                </a>
            </div>
        </section>
    );
};

export default About;