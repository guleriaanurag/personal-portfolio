import { project } from "../../projectList";

const ProjectCard: React.FC<project> = ({imageSrc,title,description})=>{
    return (
        <div className="h-[60vh] max-lg:h-[40vh] flex overflow-hidden rounded-lg transition-colors duration-300 bg-stone-300 hover:bg-stone-400 dark:bg-stone-800 dark:hover:bg-stone-700">
            <img src={imageSrc} className="w-[55%] aspect-auto max-lg:hidden"/>
            <div className="w-[45%] flex flex-col max-lg:w-full">
                <h2 className="text-center text-xl py-1">{title}</h2>
                <article className="mx-auto pt-3 px-1 text-sm">
                    {description}
                </article>
            </div>
        </div>
    );
}

export default ProjectCard;