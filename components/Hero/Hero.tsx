import Button from "components/Global/Button";
import Image from "next/image";

const Hero = () => {
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

                    <div className="w-[1npm50px] md:w-[450px] delay-200 aspect-square absolute animate-moveLeft -top-20 -left-10 bg-purple-300 rounded-full blur-[150px]"></div>
                    <div className="w-[250px] md:w-[550px] delay-50 aspect-square absolute animate-moveLeft -top-20 right-96 bg-purple-300 rounded-full blur-[150px]"></div>
                    <div className="w-[500px] md:w-[800px] delay-0 aspect-square absolute animate-moveRight -bottom-80 left-20 bg-purple-300 rounded-full blur-[150px]"></div>
                    <div className="w-[300px] md:w-[600px] delay-300 aspect-square absolute animate-moveRight -bottom-40 -right-2 bg-purple-300 rounded-full blur-[150px]"></div>

                </div>
                <div className="bottom-0 z-50 w-full h-1/6 bg-white absolute rounded-t-3xl md:rounded-t-[60px] lg:rounded-t-[70px]"></div>
            </div>
        </>
    );
}

export default Hero;