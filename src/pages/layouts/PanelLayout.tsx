import HeroAnimatedCircles from "../../components/Hero/HeroAnimatedDiv";
import Head from "next/head";
import CharacterTile from "../../components/Global/CharacterTile";
import { BsFillBarChartFill, BsFillBookmarkHeartFill, BsHouseDoorFill, BsPlayFill, BsXDiamondFill } from "react-icons/bs";
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

                <div className="h-full w-[80px] rouned bg-purple-950/[.7] rounded-br-[50px] z-[99] backdrop-blur-3xl flex flex-col pb-12 gap-4 overflow-hidden">
                    <div className="w-[70%] aspect-square mx-auto my-4 flex bg-white rounded-[20px]">
                        <BsXDiamondFill className="w-[30px] h-[30px] mx-auto my-auto fill-purple-900"/>
                    </div>
                    <PNavLink icon={<BsHouseDoorFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink icon={<BsFillBookmarkHeartFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink icon={<BsFillBarChartFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink icon={<BsPlayFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink icon={<BsHouseDoorFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                </div>
                <div className="h-full w-full z-[99]">
                    { children }
                </div>

                <HeroAnimatedCircles className="" />

            </div>
        </>
    );
}

export default PanelLayout;