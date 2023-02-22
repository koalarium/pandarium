import Image from "next/image";
import pandas from "../../jsons/pandas.json";

type Props = {
    panda?: string,
    hoveredPanda?: any,
    className?: string,
}

const CharacterCabinet = ({panda, hoveredPanda, className}: Props) => {

    let cPanda = pandas.find(p => p.name == panda);
    if (!cPanda) cPanda = pandas.find(p => p.name == "panda");

    if (hoveredPanda[0]) {
        
        cPanda = pandas.find(p => p.name == hoveredPanda[1]);

    } 

    let name = cPanda?.fullName;
    let outline: String | any = cPanda?.images.outline;



    return (
        <>
            <div className={`${className} aspect-square flex justify-start items-center mb-5 md:mb-0`}>
                <div className="w-[336px] md:w-[384px] lg:w-[480px] xl:w-[528px] 2xl:w-[576px] bg-black-100/[.4] rounded-3xl aspect-square flex flex-col justify-center items-center">
                    <div className="relative w-full h-[80%]">
                        <Image src={ outline } fill className="object-contain" alt="panda"/>
                    </div>
                    <div className="mx-auto font-rubikbold text-white text-center md:text-lg md:p-3 2xl:p-4 lg:text-2xl 2xl:text-3xl rounded-3xl p-2 w-[90%] bg-green-900/[0.7]"><h4>{name}</h4></div>
                </div>
            </div>
        </>
    );
}

export default CharacterCabinet;