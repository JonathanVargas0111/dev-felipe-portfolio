const linksEn = [
  {
    id: 1,
    idSection: "home",
    titleBtn: "home"
  },
  {
    id: 2,
    idSection: "about",
    titleBtn: "about"

  },
  {
    id: 3,
    idSection: "portfolio",
    titleBtn: "portfolio"

  },
  {
    id: 4,
    idSection: "skills",
    titleBtn: "skills"
  },
  /* {
    id: 5,
    idSection: "blog",
    titleBtn:"blog"
  }, */
  {
    id: 6,
    idSection: "contact",
    titleBtn: "contact"
  },
]

const linksEs = [
  {
    id: 1,
    idSection: "home",
    titleBtn: "inicio"
  },
  {
    id: 2,
    idSection: "about",
    titleBtn: "sobre mi"
  },
  {
    id: 3,
    idSection: "portfolio",
    titleBtn: "Proyectos"
  },
  {
    id: 4,
    idSection: "skills",
    titleBtn: "skills"
  },
  /* {
    id: 5,
    idSection: "blog",
    titleBtn:"blog"
  }, */
  {
    id: 6,
    idSection: "contact",
    titleBtn: "contacto"
  },
]

export const linksProjects = [
  {
    id: 1,
    title: "Retos Front end Mentor",
    images: ["https://github.com/JonathanVargas0111/card-ntf/blob/main/design/desktop-preview.jpg?raw=true"],
    linkDisplayed: "https://jonathanvargas0111.github.io/retos-frontend-mentor/",
    linkRepo: "https://github.com/JonathanVargas0111/retos-frontend-mentor"
  },
  {
    id: "2",
    title: "Taller SASS js",
    images: ["https://jonathanvargas0111.github.io/sass_js_distrital/resources/img/imgPage2.PNG"],
    linkDisplayed: "https://jonathanvargas0111.github.io/sass_js_distrital/",
    linkRepo: "https://github.com/JonathanVargas0111/sass_js_distrital"
  },
  {
    id: "3",
    title: "Registro de informacion",
    images: ["https://appatico.com/wp-content/uploads/2022/05/formularios-con-react-formik-yup.png"],
    linkDisplayed: "https://taller-react-jonathanvargas.vercel.app/",
    linkRepo: "https://github.com/JonathanVargas0111/taller_react_pasos"
  },
  {
    id: "4",
    title: "DigitalArt",
    images: ["/img/portfolio/imgDigitalArt.png"],
    linkDisplayed: "https://agencia-digital-eight.vercel.app/",
    linkRepo: "https://github.com/JonathanVargas0111/agencia-digital"
  }
  ,
  {
    id: "5",
    title: "The trickets",
    images: ["/img/portfolio/the_trickets.png"],
    linkDisplayed: "https://the-trickest.vercel.app/",
    linkRepo: "https://github.com/JonathanVargas0111/the-trickest"
  }
]

export const translation = {
  es: {
    links: linksEs,
    about: {
      title: "Sobre mi",
      description: [
        "Soy un apasionado desarrollador con una sólida formación y experiencia en desarrollo de software. Mi compromiso con la mejora constante y la resolución de problemas me ha llevado a ampliar mis habilidades técnicas y conocimientos",
        "Estoy cómodo trabajando con tecnologías como HTML, CSS, JavaScript, React JS, Node JS y AWS. Si buscas un desarrollador Front-End comprometido y apasionado, estaré encantado de trabajar contigo."]
    }
  },
  en: {
    links: linksEn,
    about: {
      title: "About",
      description: ["I am a passionate Front-End developer constantly seeking new challenges in the technology field. I enjoy solving problems and enhancing the user experience by applying skills and knowledge in programming and software development."]
    }
  },

};