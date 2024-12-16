interface ButtonProps{
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({children})=>{
    return(
        <button className="border border-stone-600 rounded-full text-lg max-md:mt-4 transition-colors duration-300 dark:hover:bg-stone-600 hover:bg-stone-400 mr-3">
            {children} 
        </button>
    );
}

export default Button;