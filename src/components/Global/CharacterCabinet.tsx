import Image from "next/image";
import pandas from "../../jsons/pandas.json";


type Props = {
    panda?: string;
}
const CharacterCabinet = ({panda}: Props) => {

    let cPanda = pandas.find(p => p.name == panda);
    if (!cPanda) cPanda = pandas.find(p => p.name == "panda");
    let name = cPanda?.fullName;
    let outline = cPanda?.images.outline;

    return (
        <>
            <div className="w-[80vw] h-[60vw] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[40vw] flex flex-col rounded-3xl bg-black/[.3] p-3">
                <div className="object cover relative w-full h-full bg-transparent">
                    <Image src={`${outline}`} fill className="object-contain" alt="panda"/>
                </div>
                <div className="font-rubikbold text-white text-center md:text-lg md:p-3 2xl:p-4 lg:text-2xl 2xl:text-3xl rounded-3xl p-2 w-full bg-green-90">
                    <h4>{name}</h4>
                </div>
            </div>
        
        </>
    );
}

export default CharacterCabinet;