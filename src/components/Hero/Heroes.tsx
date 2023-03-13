import Image from "next/image";
import Link from "next/link";
import Button from "../Global/Button";
import CharacterTile from "../Global/CharacterTile";
import { LgContainer, SmContainer, XlContainer } from "../Global/Containers";
import HeroAnimatedCircles from "./HeroAnimatedDiv";

type HeroSmallProps = {
    className?: string,
    primary?: string,
    secondary?: string,
    variant?: string,
}

type HeroLoginProps = {
    userName: string,
    className?: string
}

export const Hero = () => {
    return (
         <>
            <div className='h-[100vh] w-full text-white bg-purple-900 m-0 p-0 overflow-hidden relative select-none'>
                <div className="text-center w-full flex flex-col md:flex-row top-0 h-full justify-center items-center relative 2xl:px-48 overflow-hidden">
                    <div className="z-20 w-full flex flex-col justify-center items-center md:text-left md:w-1/2">
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-rubikbold uppercase">Pandarium</h1>
                            <p className="mt-2 font-rubik text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl px-2 opacity-60 md:px-0 max-w-[20ch] md:max-w-[22ch]">Minigierki od graczy stworzone dla graczy</p>
                            <div className="">
                                <Button className="md:mr-auto mt-8 " variant="0" content="zobacz gry" hero={true} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute -bottom-20 md:bottom-0 z-10 -right-16 md:right-0 min-[600px]:h-64 h-48 w-64 min-[350px]:h-52 min-[350px]:h-w-80 md:relative md:flex md:flex-col md:w-1/2 md:h-full md:justify-center md:items-center md:my-auto">
                        <div className="h-full w-full md:w-[300px] lg:w-[450px] xl:w-[550px] relative">
                            <Image fill className="object-contain z-10 md:-rotate-[20deg] -translate-y-5 animate-pandaHero absolute" src="/images/pandas/lion/lion-outline.png" alt="Cute panda dressed in lion costume"/>
                        </div>
                    </div>

                    <div className="absolute -top-8 z-10 -left-24 min-[600px]:h-64 min-[600px]: h-48 w-64 min-[350px]:h-52 min-[350px]:h-w-80 md:hidden">
                        <div className="h-full w-full relative">
                            <Image fill className="object-contain z-10 rotate-[150deg] animate-pandaHeroCow absolute" src="/images/pandas/cow/cow-outline.png" alt="Cute panda dressed in cow costume"/>
                        </div>
                    </div>
                    <HeroAnimatedCircles />
                </div>
            </div>
        </>
    );
}

export const HeroSmall = ({ className, primary="Pandarium", secondary, variant="0" }: HeroSmallProps) => {
    
    let pandaRotate = ''
    let pandaHeroAnimation = ''
    if(variant==='0'){
        pandaRotate = '-rotate-[20deg]'
        pandaHeroAnimation = 'min-[430px]:animate-pandaHeroSmallLeft'
    } else if(variant==='1'){
        pandaRotate = 'rotate-[20deg]'
        pandaHeroAnimation = 'min-[430px]:animate-pandaHeroSmallRight'
    }

    return (
        <>
        <div className={`bg-purple-900 w-full h-32 md:h-40 lg:h-52 relative overflow-hidden select-none text-white ${className}`}>

            <LgContainer className="flex justify-between items-center h-3/5">
                { (!primary && !secondary) ? <></> :
                <>
                    <div className="z-50">
                        <Link href='/'><h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-rubikbold uppercase">{ primary }</h2></Link>
                        <p className="opacity-60 text-sm sm:text-base md:text-lg lg:text-xl">{ secondary }</p>
                    </div>
                    <div className="z-10 h-28 min-[430px]:h-48 min-[430px]:w-48 sm:h-56 md:h-62 lg:h-80 w-28 sm:w-56 md:w-62 lg:w-80 absolute max-[429px]:-right-8 max-[429px]:-top-8 min-[430px]:relative">
                        <div className="h-full w-full relative">
                            <Image fill className={`object-contain z-10 max-[429px]:-rotate-[140deg] animate-pandaHeroSmallMini -rotate-[20deg] ${pandaRotate} ${pandaHeroAnimation}`} src="/images/pandas/lion/lion-outline.png" alt="Cute panda dressed in lion costume"/>
                        </div>
                    </div>
                </>
                }
            </LgContainer>

            <div className="bg-white w-full h-2/5 absolute bottom-0 rounded-t-3xl lg:rounded-t-[150px] z-50"></div>
            <HeroAnimatedCircles />

        </div>
        </>
    );
}

export const HeroLogin = ({ className, userName }: HeroLoginProps) => {
    return (
        <>
            <div className={`bg-purple-900 w-full h-32 md:h-40 lg:h-52 relative overflow-hidden text-white ${className}`}>
                <div className="h-3/5 z-10 absolute w-full">
                    <LgContainer className="items-center flex h-full">
                        <Link href="/">
                            <h1 className="uppercase text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-rubikbold">Pandarium</h1>
                        </Link>
                        <div className="flex h-full items-center gap-4 md:gap-8 ml-auto">
                            <p className="text-sm md:text-lg uppercase">Mefereczek</p>
                            <CharacterTile variant="1" panda="lion" className="w-[50px!important] md:w-[70px!important]"/>
                        </div>
                    </LgContainer>
                </div>
                <div className="bg-white h-2/5 -bottom-[1px] absolute w-full z-50 rounded-t-[60px] md:rounded-t-[100px]"></div>
                <HeroAnimatedCircles className="-z-[99]"/>
            </div>
        </>
    );
}