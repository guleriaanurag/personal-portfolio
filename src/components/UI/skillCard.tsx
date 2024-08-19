interface skillCardProps{
    imageSrc: string,
    title: string
}

const SkillCard: React.FC<skillCardProps> = ({imageSrc="",title})=>{
    return(
        <div className="flex flex-col justify-center items-center gap-1 transition-transform duration-300 hover:scale-[1.2]">
            <img src={imageSrc}/>
            <p>{title}</p>
        </div>
    );
}

export default SkillCard;