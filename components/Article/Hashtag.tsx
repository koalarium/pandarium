type Props={
    content:string,
    className?:string,
}

const Hashtag = ({className, content}: Props) => {
    return (        
           <div className={`bg-purple-50 rounded-md font-rubikbold text-xs sm:text-sm px-2 py-1 w-fit ${className}`}>{content}</div>        
    );
}

export default Hashtag;