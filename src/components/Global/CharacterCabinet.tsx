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

            <div className="w-[85vw] h-[50vw] md:w-[45vw] md:h-[45vw] flex flex-col rounded-3xl bg-black/[.3] p-3">
                <div className="object cover relative w-full h-full bg-transparent">
                    <Image src={`${outline}`} fill className="object-contain" alt="panda"/>
                </div>
                <div className="font-rubikbold text-white text-center rounded-3xl p-2 w-full bg-green-90">
                    <h4>{name}</h4>
                </div>
            </div>
        
        </>
    );
}

export default CharacterCabinet;