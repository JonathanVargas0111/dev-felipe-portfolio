import { BsDownload } from 'react-icons/bs'
const About = () => {
    return (
        <section
            name="about"
            id="section-about"
            className="flex flex-col w-full gap-4 py-12 text-gray-100 lg:flex-row lg:items-center lg:h-screen "
        >
            <div className='w-full text-5xl text-left font-bold mb-6 lg:w-2/5 lg:text-right md:text-[8vw] lg:text-[6vw] '>
                <h2 className="">
                    Sobre mi
                </h2>
            </div>

            <div className='flex flex-col gap-4 text-lg text-left lg:w-3/5 lg:px-5'>
                <p>
                    Soy un apasionado desarrollador con sólida formación y experiencia en desarrollo de software. Mi compromiso con la mejora constante y la resolución de problemas me ha impulsado a ampliar mis habilidades y conocimientos.
                </p>
                <p>
                Poseo una Ingeniería de Sistemas y un Diplomado en Desarrollo de Software. Además, he completado cursos avanzados en Desarrollo Front-End y AWS Cloud Foundation, lo que me permite ofrecer soluciones innovadoras y eficientes en el ámbito tecnológico.  
                </p>
                <a
                    href="/Felipe_Vargas_CV.pdf"
                    download="/Felipe_Vargas_CV.pdf"
                    className="flex items-center justify-center p-2 text-base border-2 border-white border-solid w-36"
                >
                    <BsDownload className="mr-2" /> Descarga CV
                </a>
            </div>
        </section>
    );
};

export default About;