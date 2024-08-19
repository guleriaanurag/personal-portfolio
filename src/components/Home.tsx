import { Element } from "react-scroll";

import { FaLinkedin,FaGithub,FaFileAlt } from "react-icons/fa";

const Home: React.FC = ()=>{
    return (
        <Element name="home" className="mb-2 pt-[50%] md:pt-[20%] pb-[10%] w-full h-auto min-h-[90vh] flex flex-col items-center justify-evenly">
            <div className="md:px-[15%] text-2xl">
                <img src="" alt="Anurag Guleria" />
                <div>
                    Hello there! I'm Anurag Guleria, a dynamic MERN Stack Developer fueled by a passion for crafting exceptional digital experiences. Currently, I'm honing my skills and contributing as a ReactJS Intern at Digineous Technologies Pvt. Ltd. I thrive on teamwork and am eager to push boundaries in the ever-evolving world of technology. Let's innovate together!
                </div>
                <div className="mt-5">
                    <button className="border border-stone-600 rounded-full text-lg mr-4 transition-colors duration-300 dark:hover:bg-stone-600 hover:bg-stone-400">
                        <a 
                            href="https://linkedin.com/in/anurag-guleria" 
                            target="_blank"
                            className="flex gap-4 items-center px-3 py-2"
                            >
                                LinkedIn <FaLinkedin/>
                        </a>
                    </button>
                    <button className="border border-stone-600 rounded-full text-lg mr-4 transition-colors duration-300 dark:hover:bg-stone-600 hover:bg-stone-400">
                        <a 
                            href="https://github.com/guleriaanurag" 
                            target="_blank" 
                            className="flex gap-4 items-center px-3 py-2"
                        >
                            GitHub <FaGithub/>
                        </a>
                    </button>
                    <button className="border border-stone-600 rounded-full text-lg max-md:mt-4 transition-colors duration-300 dark:hover:bg-stone-600 hover:bg-stone-400">
                        <a
                            href="https://github.com/guleriaanurag/resume/blob/main/Anurag_Resume.pdf" 
                            target="_blank"
                            className="flex gap-4 items-center px-3 py-2"
                        >
                            Resume <FaFileAlt/>
                        </a>
                    </button>
                </div>
            </div>
        </Element>
    );
}

export default Home;