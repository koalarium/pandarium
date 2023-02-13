import Button from "components/Global/Button";


const Hero = () => {
    return (
    
        <div className='h-screen w-screen text-white bg-purple-900 m-0 p-0 relative overflow-hidden'>
            <div className="text-center w-full flex flex-col md:flex-row top-0 h-4/5 justify-center items-center relative">
                <h1 className="text-2xl font-rubikbold mx-auto md:text-3xl md:hidden">Pandarium</h1>
                <p className="mt-2   font-rubik text-sm px-2 opacity-60 mx-auto md:hidden">Minigierki od graczy stworzone dla graczy</p>
                {/* <button className=" relative uppercase font-rubikbold bg-purple-300 text-xs  py-2 px-10 rounded-xl mt-8 mx-auto z-50 md:hidden  ">Zobacz gry</button> */}
                <div className="md:hidden">
                    <Button variant="0" content="zobacz gry"/>

                </div>

                {/* >=md: */}
                <div className="hidden md:flex flex-col w-56 lg:w-64 justify-center items-left my-auto text-left">
                    <h1 className="text-3xl font-rubikbold lg:text-4xl ">Pandarium</h1>
                    <p className="mt-2   font-rubik text-md opacity-60 lg:text-lg ">Minigierki od graczy stworzone dla graczy</p>
                    {/* <button className=" relative uppercase font-rubikbold bg-purple-300 text-sm  py-2 px-10 rounded-xl mt-8 mr-auto z-50 lg:text-md lg:py-3 lg:px-12">Zobacz gry</button> */}
                    <div className="mr-auto">
                    <Button variant="0" content="zobacz gry"/>

                    </div>
                </div>
                <div className="hidden md:flex flex-col w-1/2 h-60 justify-center items-center md:my-auto">
                    
                </div>

                <div className="w-60 h-64 absolute animate-spinRight  -top-20 -left-10 bg-purple-100 rounded-full blur-[80px] md:blur-[100px] md:w-[340px] md:h-[280px] md:"></div>
                <div className="w-60 h-64 absolute animate-spinRight -top-10 -right-20 bg-purple-500 rounded-full blur-[80px] md:blur-[100px] md:w-[340px] md:h-[280px] md:"></div>
                <div className="w-60 h-64 absolute animate-spinRight -bottom-40 -left-40 bg-purple-500 rounded-full blur-[80px] md:blur-[100px] md:w-[340px] md:h-[280px] md:left-20"></div>
                <div className="w-60 h-64 absolute animate-spinRight bottom-4 -right-40 bg-purple-300 rounded-full blur-[80px] md:blur-[100px] md:w-[340px] md:h-[280px] md:-bottom-40 md:-right-10"></div>

            {/* <div className="w-40 h-40 bg-black"></div> */}
            </div>
            <div className="bottom-0 w-full h-28 bg-white absolute rounded-t-3xl md:rounded-t-[60px] lg:rounded-t-[70px]">
                
            </div>
        </div>
        
    );
}

export default Hero;