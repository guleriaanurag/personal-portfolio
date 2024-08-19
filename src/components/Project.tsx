import { Element } from "react-scroll";

import { projectList } from "../projectList";
import ProjectCard from "./UI/projectCard";

const Project: React.FC = ()=>{
    return (
        <Element name="project" className="my-2 py-[5%] flex flex-col gap-4">
            <h1 className="text-center mb-6 text-2xl">My Projects</h1>
            {projectList.map((project,idx)=>(
                <ProjectCard 
                    key={idx} 
                    imageSrc={project.imageSrc} 
                    title={project.title} 
                    description={project.description}
                />
            ))}
        </Element>
    );
}

export default Project;