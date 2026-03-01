import NavBar from './components/NavBar'
import Header from './components/Header'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Contact from './components/ContactUseFormik'
import Projects from './components/ProjectsSection/Projects'
import SkillsSection from './components/SkillSection/SkillSection'
import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-between transition-colors duration-300 site-shell grain-overlay"
      aria-label="Página principal de Felipe Vargas"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(255,107,61,0.22)_0%,_transparent_70%)] blur-3xl"></div>
        <div className="absolute top-10 right-[-10%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,_rgba(84,161,255,0.22)_0%,_transparent_70%)] blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 h-[420px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_0%,_transparent_70%)] blur-3xl"></div>
      </div>
      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Barra de navegación */}
      <NavBar />

      {/* Links sociales (flotantes) */}
      <SocialLinks />

      {/* Sección de encabezado */}
      <Header />

      {/* Contenido principal */}
      <div className="w-full space-y-24 px-5 pb-24 md:px-[10%]">
        <About />
        <SkillsSection />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
