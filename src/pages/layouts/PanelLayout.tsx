import HeroAnimatedCircles from "../../components/Hero/HeroAnimatedDiv";
import Head from "next/head";
import { BsFillBarChartFill, BsFillBookmarkHeartFill, BsFillExclamationOctagonFill, BsHouseDoorFill, BsLockFill, BsPeopleFill, BsPersonXFill, BsPlayFill, BsPower, BsReplyFill, BsUnlockFill, BsXDiamondFill } from "react-icons/bs";
import PNavLink from "../../components/Panel/PNavLink";
import { signOut, useSession } from "next-auth/react";
import PDropDown from "../../components/Panel/PDropDown";
import { IoMdLogIn } from "react-icons/io";
import { useEffect } from "react";

type Props = {
    children?: JSX.Element | JSX.Element[] | string | string[],
}

const PanelLayout = ({children}: Props) => {

    const session = useSession();
    const user = session!.data?.user;

    const PNavLinkClasess = "group-hover:scale-[.8] duration-300 w-[30px] h-[30px] mx-auto my-auto fill-white/[.9] group-hover:fill-purple-300";

    useEffect(() => {


    }, [])

    return (
        <>
            <Head>

            </Head>

            <div className="w-full h-[100vh] bg-purple-900 overflow-hidden relative flex">

                <div className="h-full w-[80px] bg-purple-950/[.7] rounded-br-[50px] z-[200] backdrop-blur-3xl flex flex-col pb-12 gap-4 absolute justify-center">
                    <div className="w-[70%] aspect-square mx-auto my-5 flex bg-white rounded-[20px] absolute top-0 left-[50%] -translate-x-[50%]">
                        <BsXDiamondFill className="w-[30px] h-[30px] mx-auto my-auto fill-purple-900"/>
                    </div>
                    <PNavLink text="Strona główna" icon={<BsHouseDoorFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink text="Zagraj" icon={<BsPlayFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink text="Ulubione gry" icon={<BsFillBookmarkHeartFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink text="Twoje statystyki" icon={<BsFillBarChartFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink text="Znajomi" icon={<BsPeopleFill className={PNavLinkClasess} />} link="/panel/gry"/> 
                    <PNavLink text="Powrót" icon={<BsReplyFill className={PNavLinkClasess} />} link="/"/>
                    
                    { user ?
                        <PNavLink onClick={ signOut } text="Wyloguj się" icon={<BsLockFill className={PNavLinkClasess} />} link="/"/> 
                    : 
                        
                        <PNavLink text="Zaloguj się" icon={<BsUnlockFill className={PNavLinkClasess} />} link="/logowanie"/>
                    } 
                </div>

                <div className="h-full w-full ml-auto relative">
                    <div className="w-full h-24 flex absolute z-[100]">
                        <PDropDown user={ user } />
                    </div>
                    <div className="ml-[calc(3rem+80px)] mr-12 overflow-y-scroll our-scroll flex flex-wrap gap-4 absolute z-[90]">
                        { children }
                    </div>
                </div>

                <HeroAnimatedCircles />

            </div>
        </>
    );
}

export default PanelLayout;