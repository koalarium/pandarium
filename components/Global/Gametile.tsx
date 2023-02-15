import Image from "next/image";

type Props = {
    name: string;
    image: string;
    background: string;
    className?: string;
}

const GameTile = ({name, image, background, className}: Props) => {


    return (
        <>
            <div className={"group cursor-pointer relative overflow-hidden w-[350px] md:w-[450px] lg:w-[600px] 2xl:w-[700px] h-32 md:h-40 lg:h-48 2xl:h-60 rounded-3xl my-auto bg-purple-500 "+{ className }}>
                <Image alt="image" fill objectFit="cover" className="object-cover z-0 opacity-30 group-hover:opacity-80 group-hover:scale-[1.2] duration-300 blur-[2px]" src={ background } />
                <div className="flex">
                    <img className="group-hover:-right-10 group-hover:-bottom-10 lg:group-hover:-right-12 lg:group-hover:-bottom-12 2xl:group-hover:-right-20 2xl:group-hover:-bottom-20 -right-96 -bottom-96 -rotate-45 h-40 md:h-48 lg:h-60 2xl:h-80 absolute z-10 duration-300 drop-shadow-2xl" src={ image } alt="Panda Music"/>
                    <h4 className=" inset-y-0 ml-2 md:ml-7 lg:ml-10 2xl:ml-12 mr-96 absolute group-hover:-rotate-90 top-3 md:top-6 lg:top-8 2xl:top-11 origin-bottom-left  uppercase z-10 text-white font-rubikbold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl p-4 group-hover:opacity-0 duration-300 ">{ name }</h4>
                </div>
            </div>
        </>
    );
}
 
export default GameTile;
