type Props={
    primary:string,
    secondary:string,
    className?:string,
}



const ArticleTitle = ({primary, secondary, className}:Props) => {
    return (
        <>
            <div className={`${className}`}>
                <h2 className={"uppercase text-center text-purple-300/[0.6] font-rubikbold"}>{secondary}</h2>
                    <h1 className="uppercase text-center text-3xl text-purple-900 mb-10 font-rubikbold">{primary}</h1>
            </div>
        </>
    );
}

export default ArticleTitle;