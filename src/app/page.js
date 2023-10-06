import NavBar from './components/NavBar'
import Header from './components/Header'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Contact from './components/ContactUseFormik'
import Projects from './components/ProjectsSection/Projects'
import SkillsSection from './components/SkillSection/SkillSection'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <NavBar />
      <SocialLinks />
      <Header />
      <About />
      <SkillsSection/>
      <Projects/>   
      <Contact />
    </main>
  )
}
