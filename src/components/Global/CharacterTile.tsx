import Image from "next/image";
import pandas from "../../jsons/pandas.json";

type Props ={
    variant: string,
    panda?: string,
    selected?: boolean,
}

const CharacterTile = ({variant, panda, selected=false} : Props) => {

    let cPanda = pandas.find(p => p.name == panda);
    if (!cPanda) cPanda = pandas.find(p => p.name == "panda");
    let border = "hover:"+cPanda?.border;
    let pandaHead = cPanda?.images.pandaHead;
    let pandaBody = cPanda?.images.pandaBody;
    let pandaFull = cPanda?.images.pandaFull;
    let background = cPanda?.background;
    
    return (
        <>
            <div>   
                
            {/* Wariant głowa */}

            {variant =="0" ?
                <div className={`cursor-pointer group overflow-hidden w-28 md:w-36 lg:w-44 2xl:w-56 items-center justify-center flex z-30 aspect-square rounded-[calc(100%/3.2)] bg-transparent ${border} duration-300 delay-100`}>
                    <div className={`bg-white overflow-hidden items-center justify-center flex relative w-[90%] aspect-square rounded-[30%]`}>
                        <div className={`w-[80%] overflow-hidden group-hover:w-full scale-105 duration-300 ${background} bg-opacity-50 hover:bg-opacity-75 rounded-[30%] hover:brightness-125 object-cover absolute aspect-square z-10`}>
                            <div className="aspect-square relative w-full z-20">
                                <Image src={`${pandaHead}`} fill className="scale-125 object-cover absolute group-hover:scale-[1.15] duration-300 hover:brightness-[.80]" alt="panda"/>
                            </div>    
                        </div>
                    </div>
                </div>
        
            : null }

            {/* Wariant część ciała */}

            {variant =="1" ? 
                <div className={`cursor-pointer overflow-hidden group w-28 md:w-36 lg:w-44 2xl:w-56 items-center justify-center flex aspect-square rounded-[calc(100%/3.2)] bg-transparent ${border} duration-300`}>
                    <div className={`overflow-hidden bg-white items-center justify-center flex relative w-[90%] aspect-square rounded-[calc(100%/3.2)]`}>
                        <div className="aspect-square relative w-full z-20">
                            <Image src={`${pandaBody}`} fill className="absolute group-hover:scale-[1.15] duration-300" alt="panda"/>
                        </div>
                        <div className={`w-[80%] group-hover:w-[105%] duration-300 ${background} opacity-50 group-hover:opacity-75 group-hover:brightness-125 rounded-[calc(100%/3.2)] object-cover absolute aspect-square z-10`}></div>
                    </div>
                </div>

            : null }

            {/* Wariant cała panda */}

            {variant =="2" ? 
                <div className={`cursor-pointer overflow-hidden group w-28 md:w-36 lg:w-44 2xl:w-56 items-center justify-center flex aspect-square rounded-[calc(100%/3.2)] bg-transparent ${border} duration-300`}>
                    <div className={`overflow-hidden bg-white items-center justify-center flex relative w-[90%] aspect-square rounded-[calc(100%/3.2)]`}>
                        <div className="aspect-square relative w-full z-20 mb-1">
                            <Image src={`${pandaFull}`} fill className="absolute group-hover:scale-[1.15] duration-300" alt="panda"/>
                        </div>
                        <div className={`w-[80%] group-hover:w-[105%] duration-300 ${background} opacity-50 group-hover:opacity-75 group-hover:brightness-125 rounded-[calc(100%/3.2)] object-cover absolute aspect-square z-10`}></div>
                    </div>
                </div>

                : null }
            </div>
        </>
    );
}

export default CharacterTile;
