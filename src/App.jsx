import { AboutMe } from "./components/AboutMe"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Main } from "./components/Main"
import { Projects } from "./components/Projects"
import './global.css'

export function App() {
  return (
    <div className="antialiased scroll-smooth">
      <Main />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

