import { Element } from "react-scroll";

import Card from "./UI/skillCard";

import jsLogo from '../assets/jsLogo.svg';
import tsLogo from '../assets/tsLogo.svg';
import reactLogo from '../assets/reactLogo.svg';
import nextLogo from '../assets/nextjsLogo.svg';
import nodeLogo from '../assets/nodeLogo.svg';
import expressLogo from '../assets/expressLogo.svg';
import mongoLogo from '../assets/mongoLogo.svg';
import htmlLogo from '../assets/htmlLogo.svg';
import cssLogo from '../assets/cssLogo.svg';
import tailwindLogo from '../assets/tailwindLogo.svg';
import gitLogo from '../assets/gitLogo.svg';
import javaLogo from '../assets/javaLogo.svg';

const Skill: React.FC = ()=>{
    return (
        <Element name="skill" className="my-2 py-[5%]">
            <h1 className="text-center mb-6 text-2xl">My Skills</h1>
            <div className="flex flex-wrap gap-16 justify-center">
                <Card imageSrc={jsLogo} title="JavaScript"/>
                <Card imageSrc={tsLogo} title="TypeScript"/>
                <Card imageSrc={reactLogo} title="React"/>
                <Card imageSrc={nextLogo} title="Nextjs"/>
                <Card imageSrc={nodeLogo} title="Node.js"/>
                <Card imageSrc={expressLogo} title="Express.js"/>
                <Card imageSrc={mongoLogo} title="MongoDB"/>
                <Card imageSrc={htmlLogo} title="HTML"/>
                <Card imageSrc={cssLogo} title="CSS"/>
                <Card imageSrc={tailwindLogo} title="TailwindCSS"/>
                <Card imageSrc={gitLogo} title="Git"/>
                <Card imageSrc={javaLogo} title="Java"/>
            </div>
        </Element>
    );
}

export default Skill;