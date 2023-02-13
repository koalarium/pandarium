import Button from "components/Global/Button";


const Hero = () => {
    return (
    
        <div className='h-screen w-screen text-white bg-purple-900 m-0 p-0 relative overflow-hidden'>
            <div className="text-center w-full flex flex-col md:flex-row top-0 h-4/5 justify-center items-center relative">
                <div className="z-10 w-full flex flex-col justify-center items-center md:items-left md:text-left md:w-56 lg:w-64">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-rubikbold md:mr-auto">Pandarium</h1>
                    <p className="mt-2 font-rubik text-sm md:text-md lg:text-lg px-2 opacity-60 md:mr-auto md:px-0 max-w-[20ch]">Minigierki od graczy stworzone dla graczy</p>
                    <div className="md:mr-auto">
                        <Button variant="0" content="zobacz gry"/>
                    </div>
                </div>
                
                <div className="hidden md:flex flex-col w-1/2 h-60 justify-center items-center md:my-auto">
                </div>

                <div className="w-[150px] md:w-[350px] aspect-square absolute animate-moveLeft -top-20 -left-10 bg-purple-300 rounded-full blur-[150px]"></div>
                <div className="w-[250px] md:w-[450px] aspect-square absolute animate-moveLeft -top-20 right-96 bg-purple-300 rounded-full blur-[150px]"></div>
                <div className="w-[500px] md:w-[700px] aspect-square absolute animate-moveRight -bottom-80 left-20 bg-purple-300 rounded-full blur-[150px]"></div>
                <div className="w-[300px] md:w-[500px] aspect-square absolute animate-moveRight -bottom-40 -right-2 bg-purple-300 rounded-full blur-[150px]"></div>
            </div>
            <div className="bottom-0 w-full h-28 bg-white absolute rounded-t-3xl md:rounded-t-[60px] lg:rounded-t-[70px]">
                
            </div>
        </div>
        
    );
}

export default Hero;