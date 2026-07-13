import About from "./components/about"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/skills"

function App (){
  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    </>
  )
}

export default App