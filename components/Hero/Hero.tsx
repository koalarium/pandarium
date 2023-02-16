import Button from "components/Global/Button";

const Hero = () => {
    return (
        <>
            <div className='h-screen text-white bg-purple-900 m-0 p-0 overflow-hidden'>
                <div className="text-center w-screen flex flex-col md:flex-row top-0 h-4/5 justify-center items-center relative">
                    <div className="z-10 w-full flex flex-col justify-center items-center md:text-left md:w-1/2">
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-rubikbold">Pandarium</h1>
                            <p className="mt-2 font-rubik text-sm sm:text-base lg:text-lg xl:text-xl px-2 opacity-60 md:px-0 max-w-[20ch] md:max-w-[18ch] xl:max-w-[20ch]">Minigierki od graczy stworzone dla graczy</p>
                            <div className="">
                                <Button className="md:mr-auto" variant="0" content="zobacz gry" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="hidden md:flex flex-col w-1/2 h-60 justify-center items-center md:my-auto">
                        <img className="z-10 w-[220px] lg:w-[300px] -rotate-[20deg] -translate-y-5 animate-pandaHero" src="images\pandas\lion\lion-500px-outline.png" alt="Panda dressed in lion costume"/>
                    </div>

                    <div className="w-[1npm50px] md:w-[450px] delay-200 aspect-square absolute animate-moveLeft -top-20 -left-10 bg-purple-300 rounded-full blur-[150px]"></div>
                    <div className="w-[250px] md:w-[550px] delay-50 aspect-square absolute animate-moveLeft -top-20 right-96 bg-purple-300 rounded-full blur-[150px]"></div>
                    <div className="w-[500px] md:w-[800px] delay-0 aspect-square absolute animate-moveRight -bottom-80 left-20 bg-purple-300 rounded-full blur-[150px]"></div>
                    <div className="w-[300px] md:w-[600px] delay-300 aspect-square absolute animate-moveRight -bottom-40 -right-2 bg-purple-300 rounded-full blur-[150px]"></div>

                </div>
                <div className="bottom-0 w-full h-28 bg-white absolute rounded-t-3xl md:rounded-t-[60px] lg:rounded-t-[70px]"></div>
            </div>
        </>
    );
}

export default Hero;