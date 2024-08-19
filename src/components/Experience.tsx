import { Element } from "react-scroll";

const Experience: React.FC = ()=>{
    return (
        <Element name="experience" className="my-2 py-[5%]">
            <h1 className="text-center mb-6 text-2xl">My Experience</h1>
            <div className="h-auto w-[65%] max-lg:w-full mx-auto rounded-lg bg-stone-300 hover:bg-stone-400 dark:bg-stone-800 dark:hover:bg-stone-700 transition-colors duration-300 px-7 py-8">
                <h2 className="text-xl py-1">ReactJS Intern</h2>
                <h2 className="py-1">Digineous Technologies Pvt. Ltd.</h2>
                <p className="py-1"> 
                    I developed interactive and visually appealing graph pages using React and Chart.js for an ongoing dashboard project. By ensuring seamless integration with existing landing page designs and adhering to established design standards, I enhanced data visualization capabilities and facilitated comprehensive data analysis and presentation for stakeholders.
                </p>
                <p className="text-sm text-stone-700 dark:text-white/80 py-1">February 2024 - June 2024</p>
            </div>
        </Element>
    );
}

export default Experience;