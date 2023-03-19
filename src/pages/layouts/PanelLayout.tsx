import HeroAnimatedCircles from "../../components/Hero/HeroAnimatedDiv";
import Head from "next/head";
import { BsFillBarChartFill, BsFillBookmarkHeartFill, BsHouseDoorFill, BsPeopleFill, BsReplyFill } from "react-icons/bs";
import PNavLink from "../../components/Panel/PNavLink";
import { signOut, useSession } from "next-auth/react";
import PDropDown from "../../components/Panel/PDropDown";
import { useEffect } from "react";
import { DoorOpenFill, DpadFill, DoorClosedFill } from "react-bootstrap-icons";
import PPopUp from "../../components/Panel/PPopUp";


type Props = {
    children?: JSX.Element | JSX.Element[] | string | string[],
    PopUpOpen?: any, 
    setPopUpOpen?: any,
}

const PanelLayout = ({children, PopUpOpen, setPopUpOpen}: Props) => {

    const session = useSession();
    const user = session!.data?.user;
    const PNavLinkClasess = "group-hover:scale-[.8] duration-300 w-[30px] h-[30px] mx-auto my-auto fill-white/[.9] group-hover:fill-purple-300";

    useEffect(() => {
        

    }, [])

    return (
        <>
            <Head>
                <title>PANDARIUM - panel</title>
            </Head>

            <PPopUp open={ PopUpOpen } setOpen={ setPopUpOpen } user={ user }/>

            <div className="w-full h-[100vh] bg-purple-900 overflow-hidden relative flex">

                <div className="h-full w-[80px] bg-purple-950/[.5] rounded-r-[50px] z-[200] backdrop-blur-3xl flex flex-col pb-12 gap-4 absolute justify-center">
                    <PNavLink text="Strona główna" icon={<BsHouseDoorFill className={PNavLinkClasess} />} link="/panel"/> 
                    <PNavLink text="Zagraj" icon={<DpadFill  className={PNavLinkClasess} />} link="/panel/gry"/> 
                    { user ?
                        <>
                            {/* <PNavLink text="Ulubione gry" icon={<BsFillBookmarkHeartFill className={PNavLinkClasess} />} link="/panel/gry"/>  */}
                            {/* <PNavLink text="Twoje statystyki" icon={<BsFillBarChartFill className={PNavLinkClasess} />} link="/panel/gry"/>  */}
                            {/* <PNavLink text="Znajomi" icon={<BsPeopleFill className={PNavLinkClasess} />} link="/panel/gry"/>  */}
                            <PNavLink onClick={ signOut } text="Wyloguj się" icon={<DoorOpenFill className={PNavLinkClasess} />} link="/"/> 
                        </>
                    : 
                        <PNavLink text="Zaloguj się" icon={<DoorClosedFill className={PNavLinkClasess} />} link="/logowanie"/>
                    } 

                </div>

                <div className="h-full w-full ml-auto relative">
                    <div className="w-full h-24 flex absolute z-[100] top-5">
                        <PDropDown user={ user } />
                    </div>
                    <div className="ml-[calc(3rem+80px)] mr-12 overflow-y-scroll our-scroll absolute z-[90] w-full h-full">
                        <div className="flex flex-wrap gap-4 mb-12 w-[calc(100vw-3rem-80px)] pr-12">
                            { children }
                        </div>
                    </div>
                </div>

                <HeroAnimatedCircles />

            </div>
        </>
    );
}

export default PanelLayout;