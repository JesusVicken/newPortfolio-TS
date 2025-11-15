// import NavBar from "../../components/Navbar/NavBar"
// import Hero from "./sections/Hero/Hero"
import About from "./sections/Hero/About/About"
// import Skills from "./sections/Hero/Skills/Skills"
import Projects from "./sections/Hero/Projects/Projects"
import HeroApp from "./sections/Hero/HeroApp"
import ClientsMarquee from "./sections/Hero/ClientsMarquee/ClientsMarquee"
// import Hero from "./sections/Hero/Hero"

const Home = () => {
    return (
        <>
            {/* <NavBar /> */}
            <HeroApp />
            <ClientsMarquee />
            {/* <Hero /> */}
            <About />
            {/* <Skills /> */}
            <Projects />
        </>
    )
}

export default Home