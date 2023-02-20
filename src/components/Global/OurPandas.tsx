import CharacterCabinet from "./CharacterCabinet";
import CharacterTile from "./CharacterTile";

const OurPandas = () => {
    return (
        <>
            <div className="flex bg-green-500">
                <div className="grid grid-cols-3">
                    <CharacterTile variant="1" panda="panda"/>
                    <CharacterTile variant="1" panda="sheep"/>
                    <CharacterTile variant="1" panda="cow"/>
                    <CharacterTile variant="1" panda="fox"/>
                    <CharacterTile variant="1" panda="unicorn"/>
                    <CharacterTile variant="1" panda="cricket"/>
                    <CharacterTile variant="1" panda="lion"/>
                    <CharacterTile variant="1" />
                    <CharacterTile variant="1" />
                    
                </div>
                <CharacterCabinet panda="fox"/>
            </div>
        </>
    );
}

export default OurPandas;