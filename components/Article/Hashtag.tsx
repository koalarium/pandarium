type Props={
    content:string,
    className?:string,
}

const Hashtag = ({className, content}: Props) => {
    return (      
        <>
            <div className={`bg-purple-50 rounded-lg h-fit ${className}`}>
                <p className={`px-2 py-1`}>{content}</p>
            </div>
        </>           
    );
}

export default Hashtag;