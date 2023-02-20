import Image from "next/image";
import Button from "../Global/Button";
import { XlContainer } from "../Global/Containers";
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
            <div className='h-[100vh] text-white bg-purple-900 m-0 p-0 overflow-hidden relative select-none'>
                <div className="text-center w-screen flex flex-col md:flex-row top-0 h-4/5 justify-center items-center relative 2xl:px-48">
                    <div className="z-20 w-full flex flex-col justify-center items-center md:text-left md:w-1/2">
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-rubikbold">Pandarium</h1>
                            <p className="mt-2 font-rubik text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl px-2 opacity-60 md:px-0 max-w-[20ch] md:max-w-[22ch]">Minigierki od graczy stworzone dla graczy</p>
                            <div className="">
                                <Button className="md:mr-auto mt-8" variant="0" content="zobacz gry" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute -bottom-20 md:bottom-0 z-10 -right-16 md:right-0 min-[600px]:h-64 h-52 w-80 md:relative md:flex md:flex-col md:w-1/2 md:h-full md:justify-center md:items-center md:my-auto">
                        <div className="h-full w-full md:w-[300px] lg:w-[450px] xl:w-[550px] relative">
                            <Image fill className="object-contain z-10 md:-rotate-[20deg] -translate-y-5 animate-pandaHero absolute" src="/images/pandas/lion/lion-outline.png" alt="Cute panda dressed in lion costume"/>
                        </div>
                    </div>

                    <div className="absolute -top-8 z-10 -left-24 min-[600px]:h-64 min-[600px]: h-52 w-80 md:hidden">
                        <div className="h-full w-full relative">
                            <Image fill className="object-contain z-10 rotate-[150deg] animate-pandaHeroCow absolute" src="/images/pandas/cow/cow-outline.png" alt="Cute panda dressed in cow costume"/>
                        </div>
                    </div>
                    <HeroAnimatedCircles />
                </div>
                <div className="bottom-0 z-50 w-full h-1/6 bg-white absolute rounded-t-3xl md:rounded-t-[60px] lg:rounded-t-[70px]"></div>
            </div>
        </>
    );
}

export const HeroSmall = ({ className, primary, secondary, variant }: HeroSmallProps) => {
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
        <div className={`bg-purple-900 w-full h-32 lg:h-48 relative overflow-hidden select-none text-white ${className}`}>
            <XlContainer className="flex justify-between sm:justify-around items-center h-4/5">
                { (!primary && !secondary) ? <></> :
                <>
                    <div className="z-50">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-rubikbold">{primary}</h2>
                        <p className="opacity-60 text-sm sm:text-base md:text-lg lg:text-xl">{secondary}</p>
                    </div>
                    <div className="z-10 h-28 min-[430px]:h-48 min-[430px]:w-48 sm:h-56 md:h-62 lg:h-80 w-28 sm:w-56 md:w-62 lg:w-80 absolute max-[429px]:-right-8 max-[429px]:-top-8 min-[430px]:relative">
                        <div className="h-full w-full relative">
                            <Image fill className={`object-contain z-10 max-[429px]:-rotate-[140deg] animate-pandaHeroSmallMini -rotate-[20deg] ${pandaRotate} ${pandaHeroAnimation}`} src="/images/pandas/lion/lion-outline.png" alt="Cute panda dressed in lion costume"/>
                        </div>
                    </div>
                </>
                }
            </XlContainer>
            
            <div className="bg-white w-full h-1/5 absolute bottom-0 rounded-t-3xl lg:rounded-t-[500px] z-50"></div>
            <HeroAnimatedCircles />
        </div>
        </>
    );
}

export const HeroLogin = ({ className, userName }: HeroLoginProps) => {
    const name = userName
    return (
        <>
        <div className={`bg-purple-900 w-full h-20 lg:h-24 relative overflow-hidden text-white ${className}`}>
            <XlContainer className="flex justify-between items-center h-4/5">
                <h2 className="text-lg sm:text-xl md:text-2xl font-rubikbold z-50 cursor-pointer">Pandarium</h2>
                
                <div className="h-full flex justify-between items-center gap-3 z-50">
                    <p className="opacity-80 text-sm sm:text-base">{name}</p>
                    <div className="w-12 lg:w-14 h-12 lg:h-14 bg-orange rounded-lg border-2 cursor-pointer">
                        <div className="h-full w-full relative">
                            <Image fill className={`object-contain z-10`} src="/images/pandas/lion/lion.png" alt="Your profile picture"/>
                        </div>
                    </div>
                </div>
            </XlContainer>
            <div className="bg-white w-full h-1/5 absolute bottom-0 rounded-t-3xl z-50"></div>
            <HeroAnimatedCircles />
        </div>
        </>
    );
}