import React, { } from 'react';

const About = () => {
    return (
        <section
            name="about"
            id="section-about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black "
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-gray-400">
                <div className="pb-8">
                    <h2 className="text-3xl font-bold border-gray-500">
                        About
                    </h2>
                    <p className='mt-5'>
                        Soy un apasionado desarrollador Front-End en constante búsqueda de nuevos desafíos en el área de tecnología. Me gusta resolver problemas y mejorar la experiencia del usuario mediante la aplicación de habilidades y conocimientos en la programación y el desarrollo de software.
                    </p>
                    <p className='mt-5'>
                        Con un Diplomado en Desarrollo de Software, un Curso en AWS Cloud Foundation y una certificación Data Analytics Certified Associate, he ampliado mi conocimiento técnico y habilidades. Además, he adquirido experiencia en consolidación y administración de inventarios de infraestructura, presentación de informes de gestión, implementación y seguimiento a planes de acción, revisión y control de calidad de la gestión de los requisitos solicitados y la solución de incidentes.
                        Mis competencias incluyen organización, dinamismo, trabajo en equipo y capacidad de análisis.
                    </p>
                    <p className='mt-5'>
                        Me siento cómodo trabajando con tecnologías como HTML, CSS, SCSS, JavaScript, React JS, Node JS, Express y AWS, las cuales he aplicado exitosamente en proyectos y desarrollos de software.
                        En mi tiempo libre me gusta mantenerme actualizado en las últimas tendencias y desarrollos tecnológicos es esencial para mí, y participo en actividades extracurriculares para ampliar mi conocimiento y habilidades.
                        Si estás buscando un desarrollador Front-End apasionado y comprometido, ¡no dudes en contactarme!"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;