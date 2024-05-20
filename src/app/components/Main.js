import Projects from "./sections/Projects";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";


const Main = () => {

    return (
        <main className="w-full  flex flex-col justify-center items-center my-24">
            <Projects />
            <AboutMe />
            <Skills />
        </main >

    )
}

export default Main