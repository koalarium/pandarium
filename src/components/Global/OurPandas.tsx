import { useState } from "react";
import CharacterCabinet from "./CharacterCabinet";
import CharacterTile from "./CharacterTile";
import Title from "./Title";
import pandas from "../../jsons/pandas.json";
import { LgContainer, SmContainer } from "./Containers";
import Image from "next/image";

const OurPandas = () => {

    const [selectedPanda, setSelectedPanda] = useState("panda");
    const [hoveredPanda, setHoveredPanda] = useState([false, ""]);

    return (
        <>
            <div className="w-full bg-green-900/[.95] h-fit flex flex-col content-center relative overflow-hidden">

                <Image className="hidden md:block md:object-center object-cover" src="/images/patterns/big-bambos.svg" fill alt="bambusy"/>
                <Image className="block md:hidden object-cover object-right" src="/images/patterns/small-bambos.svg" fill alt="bambusy"/>
                
                <Title variant="0" position="center" primary="Graj taką pandą jaką chcesz" secondary="Poznaj nasze pandy" color="white" className="md:h-[15vh] mt-12 mb-4"/>
                <div className="flex flex-col-reverse md:flex-row items-center justify-center h-fit 2xl:max-h-[700px] mb-12">
                    <div className="basis-1 md:basis-1/2 flex items-center justify-end">
                        <div className="grid grid-cols-3 aspect-square mr-0 md:mr-5">
                            { pandas.slice(0, 9).map(p => (
                                <CharacterTile className="p-2 lg:p-3 xl:p-4 2xl:p-5" key={ p.name } setHoveredPanda={ setHoveredPanda } setSelectedPanda={ setSelectedPanda } selected={ selectedPanda == p.name ? true : false } variant="2" panda={ p.name }/>
                            )) }
                        </div>
                    </div>
                    <CharacterCabinet className="basis-1 md:basis-1/2 mt-5 md:mt-0" hoveredPanda={ hoveredPanda } panda={ selectedPanda }/>
                </div>
            </div>
        </>
    );
}

export default OurPandas;