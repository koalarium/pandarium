type Props={
    primary:string,
    secondary:string,
    date:string,    
}

const ArticleThumb = ({primary, secondary, date}: Props) => {
    return (
        <div className="bg-purple-10 aspect-[4/3] w-[100%] sm:w-[70%] md:w-[50%] lg:w-[35%] 2xl:w-[30%] rounded-3xl flex flex-col grow-0 shrink-0">
            <div className="px-6 py-7">
                <div className="bg-purple-50 w-full aspect-[3/2] mx-auto rounded-[30px] relative overflow-hidden">
                    <p className="absolute bg-purple-900 w-1/3 bottom-0 right-0 font-rubikbold text-white text-xs py-2 text-center rounded-md">{date}</p>
                </div>
                <div className="mt-5 ml-5">
                    <h5 className="font-rubikbold text-purple-900 uppercase text-2xl">{primary}</h5>
                    <p className="text-purple-500 text-md mt-1 leading-tight w-[18ch] sm:w-[30ch]  md:w-[26ch] lg:w-[24ch] 2lg:w-[40ch]">{secondary}</p>
                </div>
            </div>
        </div>
    );
}

export default ArticleThumb;