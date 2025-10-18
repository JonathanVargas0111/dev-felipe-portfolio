import { BsDownload } from 'react-icons/bs'

const About = () => {
    return (
        <section
            id="section-about"
            className="flex flex-col w-full gap-4 py-12 text-gray-100 lg:flex-row lg:items-center lg:h-screen"
            itemScope
            itemType="http://schema.org/Person"
            aria-label="Sobre Felipe Vargas - Desarrollador Full Stack"
        >
            {/* Schema Markup para Bing/ChatGPT */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "Sobre Felipe Vargas",
                    "description": "Información profesional sobre Felipe Vargas, Desarrollador Full Stack especializado en React y Next.js",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Felipe Vargas Portfolio"
                    }
                })}
            </script>

            {/* Título */}
            <div className="w-full text-5xl font-bold text-left mb-6 lg:w-2/5 lg:text-right md:text-[8vw] lg:text-[6vw]">
                <h2 itemProp="name">Sobre mí</h2>
            </div>

            {/* Descripción */}
            <div className="flex flex-col gap-4 text-lg text-left lg:w-3/5 lg:px-5">
                <p itemProp="description">
                    Soy <strong itemProp="name">Felipe Vargas</strong>, desarrollador Full Stack con sólida formación y experiencia en desarrollo de software. Mi compromiso con la mejora constante y la resolución de problemas me ha impulsado a ampliar mis habilidades y conocimientos.
                </p>
                
                <p itemProp="knowsAbout">
                    Poseo una <strong>Ingeniería de Sistemas</strong> y un <strong>Diplomado en Desarrollo de Software</strong>. Además, he completado cursos avanzados en <strong>Desarrollo Front-End</strong> y <strong>AWS Cloud Foundation</strong>, lo que me permite ofrecer soluciones innovadoras y eficientes en el ámbito tecnológico.
                </p>

                {/* Botón de descarga del CV */}
                <a
                    href="/CV_Felipe_Vargas_Desarrollador_Full_Stack.pdf"
                    download
                    className="flex items-center justify-center p-2 text-base transition border-2 border-white w-36 hover:bg-white hover:text-black"
                    aria-label="Descargar CV de Felipe Vargas"
                    itemProp="url"
                >
                    <BsDownload className="mr-2" /> 
                    <span itemProp="name">Descargar CV</span>
                </a>
            </div>
        </section>
    );
};

export default About;