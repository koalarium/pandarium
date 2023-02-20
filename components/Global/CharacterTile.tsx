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
            background = "bg-orange";
            border = "hover:bg-orange";

            break;

        case "cricket":
            pandaHead = "/images/pandas/cricket/cricket-head.png";
            pandaBody = "/images/pandas/cricket/cricket-body.png";
            pandaFull = "/images/pandas/cricket/cricket.png";
            background = "bg-green-500";
            border = "hover:bg-green-300";

            break;

        case "cow":
            pandaHead = "/images/pandas/cow/cow-head.png";
            pandaBody = "/images/pandas/cow/cow-body.png";
            pandaFull = "/images/pandas/cow/cow.png";
            background = "bg-purple-300/[0.8]";
            border = "hover:bg-purple-300/[0.8]";

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
                    <div className="group bg-white items-center justify-center flex relative w-60 aspect-square rounded-[40px]">
                        <div className="overflow-hidden absolute w-60 z-30 aspect-square rounded-[40px] border-transparent border-[6px] hover:border-orange duration-300">
                            <div className="aspect-square relative w-full z-20 ">
                                <Image src={`${pandaHead}`} fill className="absolute" alt="panda"/>
                            </div>
                        </div>

                    <div className="w-48 overflow-hidden bg-orange/[.50] rounded-3xl object-cover absolute aspect-square z-10"></div>
                </div>

            : null }

            {/* Wariant część ciała */}

            {variant =="1" ? 
                <div className={`group w-64 items-center justify-center flex aspect-square rounded-[50px] bg-transparent ${border} duration-300`}>
                    <div className={`cursor-pointer overflow-hidden bg-white items-center justify-center flex relative w-60 aspect-square rounded-[40px]`}>
                        <div className="absolute w-60 z-30 aspect-square rounded-[40px]"></div>
                        <div className="aspect-square relative w-full z-20 ">
                            <Image src={`${pandaBody}`} fill className="absolute group-hover:scale-[1.15] duration-300" alt="panda"/>
                        </div>
                        <div className={`w-48 group-hover:w-full duration-300 ${background} opacity-50 group-hover:opacity-75 group-hover:brightness-125 rounded-3xl object-cover absolute aspect-square z-10`}></div>
                    </div>
                </div>
                
            : null }

            {/* Wariant cała panda */}

            {variant =="2" ? 
                <div className={`group w-64 items-center justify-center flex aspect-square rounded-[3.1rem] bg-transparent ${border} duration-300`}>
                    <div className={`cursor-pointer overflow-hidden bg-white items-center justify-center flex relative w-60 aspect-square rounded-[2.5rem]`}>
                        <div className="absolute w-60 z-30 aspect-square rounded-[2.5rem]"></div>
                        <div className="aspect-square relative w-full z-20 mb-1">
                            <Image src={`${pandaFull}`} fill className="absolute group-hover:scale-[1.15] duration-300" alt="panda"/>
                        </div>
                        <div className={`w-48 group-hover:w-full duration-300 ${background} opacity-50 group-hover:opacity-75 group-hover:brightness-125 rounded-3xl object-cover absolute aspect-square z-10`}></div>
                        </div>
                    </div>

                : null }
            </div>
        </>
    );
}

export default CharacterTile;


{/* <div id="boxpomarancz bialy aspectratio square ustawic szerokosc">
        <div id="wfull aspectratio square z10">
            <Image></Image>
        </div>
        <div id="wfull aspectratio square pasteltlo z0">

        </div>
</div> */}