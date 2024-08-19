import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContextProvider";

import { IoSunnySharp } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa6'

const ThemeToggleButton: React.FC = ()=>{
    
    const{ theme, changeTheme } = useContext(ThemeContext);

    function handleThemeToggle(){
        changeTheme();
    }
    
    return (
        <button 
            className="fixed bottom-7 right-7 p-3 rounded-full border-[1.5px] border-black dark:border-white"
            onClick={handleThemeToggle}
        >
            {theme === 'dark' ? <FaMoon className="text-2xl"/>:<IoSunnySharp className="text-2xl text-orange-500"/>}
        </button>
    );
}

export default ThemeToggleButton;