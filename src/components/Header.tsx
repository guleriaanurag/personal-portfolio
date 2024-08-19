import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../store/ThemeContextProvider";

import Logo from '../assets/logo.png';

import { CiMenuBurger } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';

import { Link } from "react-scroll";
const Header: React.FC = ()=>{
    
    const {theme} = useContext(ThemeContext);

    const[ menuIsOpen,setMenuIsOpen ] = useState<boolean>(false);

    // function to handle menu toggle button for small screens
    function handleMenuToggle(){
        setMenuIsOpen( prevState => !prevState)
    }

    // function to handle menu closing when nav links are clicked for small screens
    function handleLinkClick(){
        setMenuIsOpen(false);
    }

    useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark');
        }
    },[theme])


    return (
        <header className="fixed flex w-full py-3 items-center justify-around md:justify-evenly text-lg bg-stone-500 dark:bg-stone-500 dark:text-stone-300">
            <p><img src={Logo} alt="Anurag Guleria" className="w-14 h-14"/></p>
            <nav className={`w-full absolute px-5 py-4 bg-stone-500 dark:bg-stone-500 top-20 h-[50vh] transition-all ease-in duration-300 md:h-auto md:w-[40%] md:static md:px-2 max-md:overflow-scroll ${menuIsOpen === false ? '-left-[100vw]' : 'left-0'} max-md:flex max-md:items-center`}>
                <ul className="flex justify-evenly gap-14 md:gap-3 flex-col md:flex-row">
                    <li>
                        <Link
                            to="home"
                            spy
                            smooth
                            offset={-100}
                            duration={550}
                            activeClass="bg-stone-100 dark:bg-stone-500 py-2 px-2 rounded-full text-blue-600 dark:text-cyan-400"
                            className="cursor-pointer transition-all duration-300"
                            onClick={handleLinkClick}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="skill"
                            spy
                            smooth
                            duration={550}
                            offset={-100}
                            activeClass="bg-stone-100 dark:bg-stone-500 py-2 px-2 rounded-full text-blue-600 dark:text-cyan-400"
                            className="cursor-pointer transition-all duration-300"
                            onClick={handleLinkClick}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="project"
                            spy
                            smooth
                            duration={550}
                            offset={-100}
                            activeClass="bg-stone-100 dark:bg-stone-500 py-2 px-2 rounded-full text-blue-600 dark:text-cyan-400"
                            className="cursor-pointer transition-all duration-300"
                            onClick={handleLinkClick}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="experience"
                            spy
                            smooth
                            duration={550}
                            offset={-100}
                            activeClass="bg-stone-100 dark:bg-stone-500 py-2 px-2 rounded-full text-blue-600 dark:text-cyan-400"
                            className="cursor-pointer transition-all duration-300"
                            onClick={handleLinkClick}
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="education"
                            spy
                            smooth
                            duration={550}
                            offset={-100}
                            activeClass="bg-stone-100 dark:bg-stone-500 py-2 px-2 rounded-full text-blue-600 dark:text-cyan-400"
                            className="cursor-pointer transition-all duration-300"
                            onClick={handleLinkClick}
                        >
                            Education
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-4 items-center">
                <Link to="contact-form" smooth spy duration={550}>
                    <button 
                        className="glowing-btn bg-gradient-to-br from-cyan-500 to-purple-600 text-stone-200 px-3 py-2 rounded-full hover:text-white transition-all duration-300"
                    >
                        Contact Me
                    </button>
                </Link>
                {menuIsOpen ? <RxCross1 onClick={handleMenuToggle} className="text-2xl m-2 md:hidden"/> : <CiMenuBurger onClick={handleMenuToggle} className="text-2xl m-2 md:hidden"/>}
            </div>
        </header>
    );
}

export default Header;