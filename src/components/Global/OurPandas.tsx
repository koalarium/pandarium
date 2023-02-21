import { useState } from "react";
import CharacterCabinet from "./CharacterCabinet";
import CharacterTile from "./CharacterTile";
import Title from "./Title";
import pandas from "../../jsons/pandas.json";

const OurPandas = () => {
    const [selectedPanda, setSelectedPanda] = useState("panda");
    
    return (
        <>
            <div className="bg-green-500 pb-20">
                <Title variant="0" position="center" primary="Graj taką pandą jaką chcesz" secondary="Poznaj nasze pandy" color="white" className="pt-0 pb-4"/>
                <div className="grid grid-row-2 gap-4 justify-center">
                    <div className="flex flex-col-reverse md:flex-row items-center">
                        <div className="grid grid-cols-3 p-4">
                            {pandas.map(p => (
                                <CharacterTile key={p.name} setSelectedPanda={setSelectedPanda} selected={selectedPanda == p.name ? true : false} variant="1" panda={p.name}/>
                            ))}


                            {/* { rooms.map(r => (
                        <div key={r.id} className={`mx-auto border-[5px] ${r.id == openRoom ? `border-green-500` : `border-purple-900`} from-purple-900 text-xl cursor-pointer to-purple-500 bg-gradient-to-tr w-5/6 aspect-square rounded-full text-white flex`} onClick={ () => changeRoomHandler(r.id) } ><span className="my-auto mx-auto font-rubikbold">{ r.id }</span></div>
                    ))} */}
                            
                            {/* <CharacterTile setSelectedPanda={setSelectedPanda} selected={selectedPanda == "panda" ? true : false} variant="1" panda="sheep"/>
                            <CharacterTile setSelectedPanda={setSelectedPanda} variant="1" panda="cow"/>
                            <CharacterTile setSelectedPanda={setSelectedPanda} variant="1" panda="fox"/>
                            <CharacterTile setSelectedPanda={setSelectedPanda} variant="1" panda="unicorn"/>
                            <CharacterTile setSelectedPanda={setSelectedPanda} variant="1" panda="cricket"/>
                            <CharacterTile setSelectedPanda={setSelectedPanda} variant="1" panda="lion"/>
                            <CharacterTile setSelectedPanda={setSelectedPanda} variant="1" panda=""/>
                            <CharacterTile setSelectedPanda={setSelectedPanda} variant="1" panda=""/> */}
                        </div>
                        <CharacterCabinet panda={selectedPanda}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurPandas;