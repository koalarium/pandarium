import CharacterTile from "./CharacterTile";

const UserOverview = () => {
    return (
        <>
            <div className="group">
                <div className="flex py-1 group-hover:bg-purple-500 rounded-2xl duration-300">
                    <CharacterTile panda="bunny" variant="1" className="w-[60px!important]"/>
                    <div className="flex flex-col text-lg text-white ml-4 justify-center font-rubik ">
                        <p className="uppercase">Lvl 20</p>
                        <p className="font-rubikbold">Swierszczyk</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserOverview;