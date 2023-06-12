import NavBar from './components/NavBar'
import Header from './components/Header'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/ContactUseFormik'
import Portfolio from './components/Portfolio'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      <Header/>
      <SocialLinks />
      <About />
      <Portfolio/>      
      <Skills/> 
      <Contact /> 
    </main>
  )
}
