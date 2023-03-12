import games from "../../jsons/games.json";
import GameTitle from "../../components/Global/GameTitle";
import { GetStaticPaths, GetStaticProps } from "next";
import { HeroLogin } from "@/components/Hero/Heroes";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Global/Section";
import { LgContainer, MdContainer, TitleContainer } from "@/components/Global/Containers";
import Image from "next/image";
import {BsGearFill} from "react-icons/bs";

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
    return (
        <>
            <HeroLogin userName="Hosqu" />
            <MdContainer>
                    <div className="flex mb-12">
                        <GameTitle name={ lobby.name } />
                        <div className="border-purple-500 border-4 cursor-pointer group justify-self-end self-center ml-auto  p-3 rounded-3xl">
                            <BsGearFill className="fill-purple-500 h-8 w-8 group-hover:rotate-90 duration-300"/>
                        </div>
                    </div>
                
                    <div className="flex w-full h-96 gap-8">
                        <div id="ss" className="basis-1/2 bg-green-90 rounded-3xl relative overflow-hidden">
                            <Image src={ lobby.gif ? lobby.gif : "/images/song.JPG" } alt="zdjeciegry" fill className="object-cover" />
                        </div>
                        <div id="zasady" className="basis-1/4 bg-purple-900 rounded-3xl flex-col flex">
                            <div className="w-fit p-2 m-4 uppercase rounded-xl text-white font-rubikbold bg-purple-950/[0.8]">
                                <h5 className="mx-6 text-xl">Zasady Gry</h5>
                            </div>
                            <p className="text-white font-rubik mx-4">{ lobby.rules }</p>
                        </div>
                        <div id="gracze" className="basis-1/4 bg-purple-900 rounded-3xl"></div>                        
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