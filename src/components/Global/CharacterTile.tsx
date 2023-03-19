import Image from "next/image";
import pandas from "../../jsons/pandas.json";

type Props ={
    variant: string,
    panda?: string,
    selected?: boolean,
    setSelectedPanda?: any,
    setHoveredPanda?: any,
    className?: string,
}

const CharacterTile = ({variant, panda, selected, setSelectedPanda, setHoveredPanda, className}: Props) => {
 
    let cPanda = pandas.find(p => p.name == panda);
    if (!cPanda) cPanda = pandas.find(p => p.name == "panda");
    let background = cPanda?.background;
    
    let pandaPhoto: String | any = cPanda?.images.pandaHead;
    if ( variant == "1" ) pandaPhoto = cPanda?.images.pandaFull;
    if ( variant == "2" ) pandaPhoto = cPanda?.images.pandaBody;
    if ( variant == "3" ) pandaPhoto = cPanda?.images.pandaSVG;

    return (
        <>
            <div onMouseLeave={ setHoveredPanda ? () => setHoveredPanda([false, ""]) : () => {} } onMouseOver={ setHoveredPanda ? () => setHoveredPanda([true, cPanda?.name]) : () => {} } onClick={ setSelectedPanda ? () => setSelectedPanda(cPanda?.name) : () => {} } className={`group w-28 md:w-32 lg:w-40 xl:w-44 2xl:w-48 aspect-square cursor-pointer select-none ${className}`}>
                <div className="flex relative items-center justify-center w-[100%] aspect-square">

                    <div className={`${ background } w-[99%] h-[99%] absolute ${ !selected ? "group-hover:scale-[1.12]" : "scale-[1.12]" } duration-300 rounded-[calc(100%/3.2)] delay-100`}></div>

                    <div className={`overflow-hidden isolate ${ !selected ? "bg-white group-hover:bg-white/[.3]" : "bg-white/[.3] group-hover:bg-white/[0.4]" } delay-50 duration-300 w-full aspect-square rounded-[calc(100%/3.2)] flex relative items-center justify-center`}>

                        <div className={`${ background } ${ !selected ? "group-hover:w-[100%] w-[75%] opacity-40 group-hover:opacity-0" : "w-[100%] opacity-0" } duration-300 aspect-square rounded-[calc(100%/3.2)] absolute`}></div>
                        
                        <div className={`relative mt-auto ${ variant == "0" ? "w-[85%]" : "w-[100%]"} my-auto aspect-square select-none group-hover:scale-[1.15] delay-50 duration-300`}>
                            <Image loading="lazy" src={ pandaPhoto } alt="panda" fill className="object-cover" />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default CharacterTile;


