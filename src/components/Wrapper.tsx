import ContactForm from "./ContactForm";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";
import Project from "./Project";
import Skill from "./Skill";
import ThemeToggleButton from "./ThemeButton";

const Wrapper: React.FC = ()=>{
    return (
        <main className='dark:bg-stone-900 dark:text-stone-200 min-h-[80vh] px-[10%] max-md:px-[3%]'>
            <Home />
            <Skill />
            <Project />
            <Experience />
            <Education />
            <ContactForm />
            <ThemeToggleButton />
        </main>
    );
}

export default Wrapper;