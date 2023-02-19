import Image from "next/image";

type Props ={
    primary: string,
    secondary: string,
    variant: string,
    className?: string
}

const HeroSmall = ({className, primary,secondary,variant}: Props) => {
    let pandaRotate = ''
    if(variant==='0'){
        pandaRotate = '-rotate-[20deg]'
    } else if(variant==='1'){
        pandaRotate = 'rotate-[20deg]'
    }

    return (
        <>
        <div className={`bg-purple-900 w-full h-44 lg:h-56 relative overflow-hidden select-none text-white ${className}`}>
            <div className="flex justify-between sm:justify-evenly xl:justify-between items-center h-4/5 mx-6 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-56 2xl:px-64">
                <div className="z-50">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-rubikbold">{primary}</h2>
                    <p className="opacity-60 sm:text-lg md:text-xl lg:text-2xl max-w-[14ch] sm:max-w-full">{secondary}</p>
                </div>
                <div className="z-10 h-48 sm:h-56 md:h-62 lg:h-80 w-48 sm:w-56 md:w-62 lg:w-80">
                        <div className="h-full w-full relative">
                        <Image fill className={`object-contain z-10 ${pandaRotate}`} src="/images/pandas/lion/lion-outline.png" alt="Cute panda dressed in lion costume"/>
                        </div>
                </div>
            </div>
            <div className="bg-white w-full h-1/5 absolute bottom-0 rounded-t-3xl lg:rounded-t-[200px] z-50"></div>
            <div className="w-[1npm50px] md:w-[450px] delay-200 aspect-square absolute animate-moveLeft -top-20 -left-10 bg-purple-300 rounded-full blur-[150px]"></div>
            <div className="w-[250px] md:w-[550px] delay-50 aspect-square absolute animate-moveLeft -top-20 right-96 bg-purple-300 rounded-full blur-[150px]"></div>
            <div className="w-[500px] md:w-[800px] delay-0 aspect-square absolute animate-moveRight -bottom-80 left-20 bg-purple-300 rounded-full blur-[150px]"></div>
            <div className="w-[300px] md:w-[600px] delay-300 aspect-square absolute animate-moveRight -bottom-40 -right-2 bg-purple-300 rounded-full blur-[150px]"></div>
        </div>
        </>
    );
}

export default HeroSmall;