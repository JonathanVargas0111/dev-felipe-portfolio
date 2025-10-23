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
      className="flex min-h-screen flex-col items-center justify-between bg-gray-50 dark:bg-black transition-colors duration-300"
      aria-label="Página principal de Felipe Vargas"
    >
      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Barra de navegación */}
      <NavBar />

      {/* Links sociales (flotantes) */}
      <SocialLinks />

      {/* Sección de encabezado */}
      <Header />

      {/* Contenido principal */}
      <div className="w-full space-y-20 px-5 md:px-[10%]">
        <About />
        <SkillsSection />
        <Projects />
        <Contact /> 
      </div>
    </main>
  )
}
