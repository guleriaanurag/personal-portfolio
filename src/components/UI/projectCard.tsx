import { project } from "../../projectList";
import Button from "./Button";

import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const ProjectCard: React.FC<project> = ({imageSrc,title,description,liveLink,gitLink})=>{

    return (
        <div className="h-[60vh] max-lg:h-[40vh] flex overflow-hidden rounded-lg transition-colors duration-300 bg-stone-300 hover:bg-stone-400 dark:bg-stone-800 dark:hover:bg-stone-700">
            <div className="w-[45%] flex flex-col justify-evenly max-lg:w-full p-2">
                <h2 className="text-2xl">{title}</h2>
                <article className="mx-auto pt-3 text-sm">
                    {description}
                </article>
                <div className="px-2 py-2">
                    <Button>
                        <a 
                            href={liveLink} 
                            target="_blank"
                            className="px-3 py-2 flex gap-3 items-center"
                        >
                            <FaArrowUpRightFromSquare /> Live
                        </a>
                    </Button>
                    <Button>
                        <a 
                            href={gitLink} 
                            target="_blank"
                            className="px-3 py-2 flex gap-2 items-center"
                        >
                           <FaGithub /> GitHub 
                        </a>
                    </Button>
                </div>
            </div>
            <img src={imageSrc} className="w-[55%] aspect-auto max-lg:hidden"/>
        </div>
    );
}

export default ProjectCard;