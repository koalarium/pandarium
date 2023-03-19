import games from "../../jsons/games.json";
import GameTitle from "../../components/Global/GameTitle";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import { HeroLogin } from "../../components/Hero/Heroes";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Global/Section";
import { LgContainer, MdContainer, TitleContainer } from "../../components/Global/Containers";
import Image from "next/image";
import {BsGearFill} from "react-icons/bs";
import CharacterTile from "../../components/Global/CharacterTile";
import UserOverview from "../../components/Global/UserOverview";
import Button from "../../components/Global/Button";
import PurpleBox from "../../components/Global/PurpleBox";
import PopUp from "../../components/Global/PopUp";

type Params = {
    lobby: {
        url: string,
        name: string,
        rules: string[]
        gif?: string,
        maxUsers: string, 
    }
}
const Lobby = ({ lobby }: Params) => { 
    let [ popUp, setPopUp ] = useState(false);
    return (
        <>
            <PopUp open={ popUp }/>
            <HeroLogin userName="Hosqu" />
            <MdContainer>
                <div className="flex mb-12">
                    <GameTitle name={ lobby.name } />
                        <div onClick={ () => setPopUp(true) } className="group border-purple-500 border-4 cursor-pointer justify-self-end self-center ml-auto p-2 md:p-3 rounded-xl xl:rounded-3xl  hover:bg-purple-500 duration-300">
                            <BsGearFill className="fill-purple-500 group-hover:fill-white h-4 w-4 md:h-8 md:w-8 group-hover:rotate-90 group-hover:scale-125 duration-300"/>
                    </div>
                </div>

                <div className="flex flex-wrap xl:flex-nowrap xl:flex-row w-full h-fit xl:h-[500px] gap-8 justify-center">
                    <div id="ss" className="w-[100%] h-[500px] xl:basis-1/2 bg-green-90 rounded-3xl relative overflow-hidden">
                        <Image src={ lobby.gif ? lobby.gif : "/images/song.JPG" } alt="zdjeciegry" fill className="object-cover" />
                        <div className="absolute bg-purple-950/[0.7] bottom-0 right-0 p-4 m-4 rounded-xl flex gap-4">
                            <Button content="Skopiuj link zaproszeniem" variant="0"/>
                            <Button content="Rozpocznij grę" variant="0"/>
                        </div>
                    </div>
                    <PurpleBox title="Zasady gry">
                        { lobby.rules.map((r, index) => ( 
                            <>
                                <div id="pojemnik" className="flex rounded-xl hover:bg-purple-500/[0.3] mx-4 mb-4">
                                    <span className="text-white font-rubikbold text-2xl p-2 pl-4">
                                        {index +1 + ". "}
                                    </span>
                                    <p id="zasada" className="text-white font-rubik lg:text-md xl:text-lg m-2 mr-6 mt-3 max-w-[40ch]" >{ r }</p>
                                </div>
                            </>
                        )) }
                    </PurpleBox>
                    <PurpleBox title="Gracze w lobby">
                        <div className="mb-2 mx-4">
                            <UserOverview/>
                        </div>
                        <div className="my-2 mx-4">
                            <UserOverview/>
                        </div>
                        <div className="my-2 mx-4">
                            <UserOverview/>
                        </div>
                        <div className="my-2 mx-4">
                            <UserOverview/>
                        </div>
                        <div className="my-2 mx-4">
                            <UserOverview/>
                        </div>
                        <div className="my-2 mx-4">
                            <UserOverview/>
                        </div>
                        <div className="my-2 mx-4">
                            <UserOverview/>
                        </div>
                        <div className="my-2 mx-4">
                            <UserOverview/>
                        </div>
                    </PurpleBox>
                </div> 
            </MdContainer>
            <Footer small/>
        </>
    );
}

export default Lobby;

export const getStaticPaths: GetStaticPaths = () => {
    
    var paths = games.map(game => {
        return { params: { gameUrl: game.url } }
    })

    return {
        paths,
        fallback: false,
    }

}

export const getStaticProps: GetStaticProps = async (context) => {

    const lobby = games.find(game => game.url == context.params!.gameUrl)

    return {
        props: { lobby }
    }

}