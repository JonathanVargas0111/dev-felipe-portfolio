import { BsDownload } from 'react-icons/bs'

const About = () => {
    return (
        <section
            id="section-about"
            className="flex flex-col w-full gap-4 py-12 text-gray-100 lg:flex-row lg:items-center lg:h-screen"
        >
            {/* Título */}
            <div className="w-full text-5xl font-bold text-left mb-6 lg:w-2/5 lg:text-right md:text-[8vw] lg:text-[6vw]">
                <h2>Sobre mí</h2>
            </div>

            {/* Descripción */}
            <div className="flex flex-col gap-4 text-lg text-left lg:w-3/5 lg:px-5">
                <p>
                    Soy un apasionado desarrollador con sólida formación y experiencia en desarrollo de software. Mi compromiso con la mejora constante y la resolución de problemas me ha impulsado a ampliar mis habilidades y conocimientos.
                </p>
                <p>
                    Poseo una Ingeniería de Sistemas y un Diplomado en Desarrollo de Software. Además, he completado cursos avanzados en Desarrollo Front-End y AWS Cloud Foundation, lo que me permite ofrecer soluciones innovadoras y eficientes en el ámbito tecnológico.
                </p>

                {/* Botón de descarga del CV */}
                <a
                    href="/Felipe_Vargas_CV.pdf"
                    download
                    className="flex items-center justify-center p-2 text-base transition border-2 border-white w-36 hover:bg-white hover:text-black"
                >
                    <BsDownload className="mr-2" /> Descarga CV
                </a>
            </div>
        </section>
    );
};

export default About;
