import Image from "next/image";
import Link from "next/link";

type Props={
    primary:string,
    secondary:string,
    date:string,    
    photo?: string,
    link?: string,
}

const ArticleThumb = ({primary, secondary, date, photo="/images/photos/friends.jpg", link}: Props) => {

    return (
        <Link href={ link ? link : "" } className="group bg-purple-10 hover:bg-purple-50 duration-300 aspect-[4/3] w-[100%] sm:w-[50%] md:w-[45%] lg:w-[45%] 2xl:w-[25%] rounded-3xl flex flex-col grow-0 shrink-0 cursor-pointer select-none">
            <div className="px-6 py-7">
                <div className="w-full aspect-[3/2] mx-auto rounded-[30px] bg-purple-500 relative overflow-hidden">
                    <div className="h-full w-full relative">
                        <Image fill className="object-cover group-hover:scale-[1.2] duration-300 overflow-hidden opacity-60 group-hover:opacity-100" src={ photo } alt={ primary }/>
                    </div>
                    <p className="absolute bg-purple-900 w-1/3 bottom-0 right-0 font-rubikbold text-white text-xs py-2 text-center rounded-md">{ date }</p>
                </div>
                <div className="mt-5 ml-5">
                    <h5 className="font-rubikbold text-purple-900 uppercase text-lg md:text-xl xl:text-2xl">{ primary }</h5>
                    <p className="text-purple-500 text-base md:text-lg mt-1 leading-tight w-full ">{ secondary }</p>
                </div>
            </div>
        </Link>
    );
}

export default ArticleThumb;