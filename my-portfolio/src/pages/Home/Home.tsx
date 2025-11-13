import NavBar from "../../components/Navbar/NavBar"
import Hero from "./sections/Hero/Hero"
import About from "./sections/Hero/About/About"
import Skills from "./sections/Hero/Skills/Skills"
import Projects from "./sections/Hero/Projects/Projects"

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Skills />
            <Projects />
        </>
    )
}

export default Home