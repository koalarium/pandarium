import Image from "next/image";
import pandas from '../../jsons/pandas.json';
import { useState } from 'react';


type Props = {
    name: string,
    background: string,
    className?: string,
    onClick?: any,
}

const GameTile = ({name, background, className, onClick}: Props) => {

    const pandasToShow = pandas.filter(p => p.name != "engineer");
    const [pandaNo, setPandaNo] = useState(Math.floor(Math.random() * pandasToShow.length));
    
    const hoverHandler = () => {
        setPandaNo(Math.floor(Math.random() * pandasToShow.length));
    }
    
    return (

        <>
            <div onClick={ onClick ? onClick : () => {} } onMouseEnter={ hoverHandler } className={`group cursor-pointer relative overflow-hidden w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] 2xl:w-[600px] h-24 sm:h-32 md:h-38 lg:h-44 2xl:h-52 rounded-3xl bg-purple-500 ${ className }`}>
                <Image alt="image" fill className="object-cover z-0 opacity-30 group-hover:opacity-80 group-hover:scale-[1.2] duration-300 blur-[2px]" src={ background } />
                <div className="flex w-full h-full">
                    <img className="group-hover:-right-10 group-hover:-bottom-10 lg:group-hover:-right-12 lg:group-hover:-bottom-12 2xl:group-hover:-right-20 2xl:group-hover:-bottom-20 -right-96 -bottom-96 -rotate-45 h-40 md:h-48 lg:h-60 2xl:h-80 absolute z-10 duration-300 drop-shadow-2xl" src={ pandasToShow[pandaNo].images.outline } alt="Panda Music"/>
                    <h4 className="inset-y-0 my-auto pl-6 mr-96 h-fit md:pl-7 lg:pl-10 2xl:pl-12 absolute group-hover:-rotate-90 origin-bottom-left uppercase z-10 text-white font-rubikbold text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl group-hover:opacity-0 duration-300 ">{ name }</h4>
                </div>
            </div>
        </>
        
    );
}
 
export default GameTile;
