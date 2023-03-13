import HeroAnimatedCircles from "../../components/Hero/HeroAnimatedDiv";
import Head from "next/head";
import CharacterTile from "../../components/Global/CharacterTile";
import { BsFillBarChartFill, BsFillBookmarkHeartFill, BsHouseDoorFill, BsPeopleFill, BsPlayFill, BsReplyFill, BsXDiamondFill } from "react-icons/bs";
import PNavLink from "../../components/Panel/PNavLink";

type Props = {
    children?: JSX.Element | JSX.Element[] | string | string[],
}

const PanelLayout = ({children}: Props) => {

    const PNavLinkClasess = "group-hover:scale-[.8] duration-300 w-[30px] h-[30px] mx-auto my-auto fill-white/[.9] group-hover:fill-purple-300";

    return (
        <>
            <Head>

            </Head>

            <div className="w-full h-[100vh] bg-purple-900 overflow-hidden relative flex">

                <div className="h-full w-[80px] bg-purple-950/[.7] rounded-br-[50px] z-[100] backdrop-blur-3xl flex flex-col pb-12 gap-4 absolute justify-center">
                    <div className="w-[70%] aspect-square mx-auto my-10 flex bg-white rounded-[20px] absolute top-0 left-[50%] -translate-x-[50%]">
                        <BsXDiamondFill className="w-[30px] h-[30px] mx-auto my-auto fill-purple-900"/>
                    </div>
                    <PNavLink text="Strona główna" icon={<BsHouseDoorFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink text="Zagraj" icon={<BsPlayFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink text="Ulubione gry" icon={<BsFillBookmarkHeartFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink text="Twoje statystyki" icon={<BsFillBarChartFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink text="Znajomi" icon={<BsPeopleFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink text="Strona główna" icon={<BsPeopleFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink text="Powrót" icon={<BsReplyFill className={PNavLinkClasess} />} link="/"/> 
                </div>

                <div className="h-full w-full ml-auto z-[99] relative">
                    <div className="w-full h-24 flex absolute">
                        <div className="ml-auto mt-8 mr-8 flex bg-purple-950/[.7] rounded-2xl pl-8 backdrop-blur-3xl">
                            <p className="text-white font-rubikbold my-auto mr-5 text-xl">Mefereczek</p>
                            <CharacterTile className="w-[60px!important]" variant="2" panda="panda" />
                        </div>  
                    </div>
                    <div className="ml-[calc(3rem+80px)] mr-12 overflow-y-scroll our-scroll flex flex-wrap gap-4">
                        { children }
                    </div>
                </div>

                <HeroAnimatedCircles className="" />

            </div>
        </>
    );
}

export default PanelLayout;