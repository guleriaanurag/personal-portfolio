import React, { ReactNode, createContext, useState } from "react";

interface ThemeContextType{
    theme: 'light' | 'dark',
    changeTheme: ()=>void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    changeTheme: ()=>{}
})

const ThemeContextProvider: React.FC<{children: ReactNode}> = ({children})=>{

    if(localStorage.getItem('siteTheme') === null){
        localStorage.setItem('siteTheme','dark');
    }

    const[theme,setTheme] = useState<'light' | 'dark'>((localStorage.getItem('siteTheme') as 'light' || 'dark') || 'dark');

    function changeTheme(){
        setTheme((prevState) => {
            const newState = prevState === 'dark' ? 'light' : 'dark';
            localStorage.setItem('siteTheme',newState)
            return newState;
        });
    }

    const contextValue:ThemeContextType = {
        theme,
        changeTheme
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;