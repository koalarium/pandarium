const Hero = () => {
    return (
    
        <div className='h-screen w-screen text-white bg-purple-900 m-0 p-0 relative overflow-hidden'>
            <div className="text-center w-full flex flex-col md:flex-row top-0 h-4/5 justify-center align-center relative">
                <div className="z-10">
                    <h1 className="text-2xl font-rubikbold mx-auto md:text-3xl md:hidden">Pandarium</h1>
                    <p className="mt-2 font-rubik text-sm px-2 opacity-60 mx-auto md:hidden">Minigierki od graczy stworzone dla graczy</p>
                    <button className="relative uppercase font-rubikbold bg-purple-300 text-xs py-2 px-10 rounded-xl mt-8 mx-auto z-50 md:hidden  ">Zobacz gry</button>
                </div>

                {/* >=md: */}
                <div className="hidden md:flex flex-col w-56 lg:w-64 justify-center align-left my-auto text-left z-10">
                    <h1 className="text-3xl font-rubikbold lg:text-4xl ">Pandarium</h1>
                    <p className="mt-2 font-rubik text-md opacity-60 lg:text-lg ">Minigierki od graczy stworzone dla graczy</p>
                    <button className=" relative uppercase font-rubikbold bg-purple-300 text-sm py-2 px-10 rounded-xl mt-8 mr-auto z-50 lg:text-md lg:py-3 lg:px-12">Zobacz gry</button>
                </div>
                <div className="hidden md:flex flex-col w-1/2 h-60 justify-center align-center md:my-auto">
                    
                </div>

                <div className="w-[150px] md:w-[350px] aspect-square absolute animate-moveLeft -top-20 -left-10 bg-purple-300 rounded-full blur-[150px]"></div>
                <div className="w-[250px] md:w-[450px] aspect-square absolute animate-moveLeft -top-20 right-96 bg-purple-300 rounded-full blur-[150px]"></div>
                <div className="w-[500px] md:w-[700px] aspect-square absolute animate-moveRight -bottom-80 left-20 bg-purple-300 rounded-full blur-[150px]"></div>
                <div className="w-[300px] md:w-[500px] aspect-square absolute animate-moveRight -bottom-40 -right-2 bg-purple-300 rounded-full blur-[150px]"></div>

            {/* <div className="w-40 h-40 bg-black"></div> */}
            </div>
            <div className="bottom-0 w-full h-28 bg-white absolute rounded-t-3xl md:rounded-t-[60px] lg:rounded-t-[70px]">
                
            </div>
        </div>
        
    );
}

export default Hero;