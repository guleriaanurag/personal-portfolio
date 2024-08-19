import { Element } from "react-scroll";

const Education: React.FC = ()=>{
    return (
        <Element name="education" className="my-2 py-[5%]">
            <h1 className="text-center mb-6 text-2xl">My Education</h1>
            <div className="h-auto w-[65%] mx-auto max-lg:w-full rounded-lg bg-stone-300 hover:bg-stone-400 dark:bg-stone-800 dark:hover:bg-stone-700 transition-colors duration-300 px-7 py-8">
                <h2 className="text-xl py-1">Bachelors of Engineering</h2>
                <h2 className="py-1">Chitkara University Institute of Engineering & Technology</h2>
                <p> Graduated in 2024</p>
                <ul className="list-disc pl-5 py-1">
                    <li>Major in Computer Science & Engineering</li>
                    <li>Minor in MERN Stack Web Development</li>
                </ul>
            </div>
        </Element>
    );
}

export default Education;