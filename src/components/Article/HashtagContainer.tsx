type Props = {
    className?: string,
    children?: JSX.Element | JSX.Element[],
}

const HashtagContainer = ({ className, children }: Props) => {
    return (
        <>  
            <div className={`flex flex-row flex-wrap justify-evenly sm:justify-start text-purple-900 gap-2 font-rubikbold ${className}`}>{children}</div>    
        </>    
    );
}

export default HashtagContainer;