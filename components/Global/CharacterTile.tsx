import Image from "next/image";
type Props ={
    variant: string,
    panda?: string,
    selected?: boolean,
}
const CharacterTile = ({variant, panda, selected=false} : Props) => {
    let pandaHead = "";
    let pandaBody = "";
    let pandaFull = "";
    let background = "";
    let border ="";
    
    switch (panda) {
        case "panda":
            pandaHead = "/images/pandas/panda/panda-head.png";
            pandaBody = "/images/pandas/panda/panda-body.png";
            pandaFull = "/images/pandas/panda/panda.png";
            background = "bg-black";
            border = "hover:bg-black";
            
            break;

        case "lion":
            pandaHead = "/images/pandas/lion/lion-head.png";
            pandaBody = "/images/pandas/lion/lion-body.png";
            pandaFull = "/images/pandas/lion/lion.png";
            background = "bg-orange-300";
            border = "hover:bg-orange-500";

            break;

        case "cricket":
            pandaHead = "/images/pandas/cricket/cricket-head.png";
            pandaBody = "/images/pandas/cricket/cricket-body.png";
            pandaFull = "/images/pandas/cricket/cricket.png";
            background = "bg-green-500";
            border = "hover:bg-green-600";

            break;

        case "cow":
            pandaHead = "/images/pandas/cow/cow-head.png";
            pandaBody = "/images/pandas/cow/cow-body.png";
            pandaFull = "/images/pandas/cow/cow.png";
            background = "bg-purple-300/[0.8]";
            border= "hover:bg-pink-100";

            break;

        case "sheep":
            pandaHead = "/images/pandas/sheep/sheep-head.png";
            pandaBody = "/images/pandas/sheep/sheep-body.png";
            pandaFull = "/images/pandas/sheep/sheep.png";
            background = "bg-blue-500";
            border = "hover:bg-blue-500";
            
            break;
            
        case "unicorn":
            pandaHead = "/images/pandas/unicorn/unicorn-head.png";
            pandaBody = "/images/pandas/unicorn/unicorn-body.png";
            pandaFull = "/images/pandas/unicorn/unicorn.png";
            background = "bg-pink-300";
            border = "hover:bg-pink-300";

            break;

        case "ladybug":
            pandaHead = "";
            pandaBody = "";
            pandaFull = "";
            background = "";
            border = "";

            break;

        default:
            pandaHead ="";
            pandaBody ="";
            pandaFull ="";
            background = "";
            border = "";
            
            break;
    }
    return (
        <>
            <div>   
                
            {/* Wariant głowa */}

            {variant =="0" ?
                <div className={`cursor-pointer group w-28 md:w-36 lg:w-44 2xl:w-56 items-center justify-center flex aspect-square rounded-[calc(100%/3.2)] bg-transparent ${border} duration-300`}>
                    <div className={`bg-white items-center justify-center flex relative w-[90%] aspect-square rounded-[30%]`}>
                        <div className={`w-[80%] overflow-hidden group-hover:w-full scale-105 duration-300 ${background} bg-opacity-50 hover:bg-opacity-75 rounded-[30%] object-cover absolute aspect-square z-10`}>
                            <div className="aspect-square relative w-full z-20">
                                <Image src={`${pandaHead}`} fill className="scale-125 object-cover absolute group-hover:scale-[1.15] duration-300" alt="panda"/>
                            </div>    
                        </div>
                    </div>
                </div>
        
            : null }

            {/* Wariant część ciała */}

            {variant =="1" ? 
                <div className={`cursor-pointer overflow-hidden group w-28 md:w-36 lg:w-44 2xl:w-56 items-center justify-center flex aspect-square rounded-[calc(100%/3.2)] bg-transparent ${border} duration-300`}>
                    <div className={`overflow-hidden bg-white items-center justify-center flex relative w-[90%] aspect-square rounded-[calc(100%/3.2)]`}>
                        <div className="aspect-square relative w-full z-20">
                            <Image src={`${pandaBody}`} fill className="absolute group-hover:scale-[1.15] duration-300" alt="panda"/>
                        </div>
                        <div className={`w-[80%] group-hover:w-[105%] duration-300 ${background} opacity-50 group-hover:opacity-75 group-hover:brightness-125 rounded-[calc(100%/3.2)] object-cover absolute aspect-square z-10`}></div>
                    </div>
                </div>

            : null }

            {/* Wariant cała panda */}

            {variant =="2" ? 
                <div className={`cursor-pointer overflow-hidden group w-28 md:w-36 lg:w-44 2xl:w-56 items-center justify-center flex aspect-square rounded-[calc(100%/3.2)] bg-transparent ${border} duration-300`}>
                    <div className={`overflow-hidden bg-white items-center justify-center flex relative w-[90%] aspect-square rounded-[calc(100%/3.2)]`}>
                        <div className="aspect-square relative w-full z-20 mb-1">
                            <Image src={`${pandaFull}`} fill className="absolute group-hover:scale-[1.15] duration-300" alt="panda"/>
                        </div>
                        <div className={`w-[80%] group-hover:w-[105%] duration-300 ${background} opacity-50 group-hover:opacity-75 group-hover:brightness-125 rounded-[calc(100%/3.2)] object-cover absolute aspect-square z-10`}></div>
                    </div>
                </div>

                : null }
            </div>
        </>
    );
}

export default CharacterTile;
