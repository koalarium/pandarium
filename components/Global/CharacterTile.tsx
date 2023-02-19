import Image from "next/image";
type Props ={
    variant: string,
    panda?: string,
    selected?: boolean,
}
const CharacterTile = ({variant, panda, selected} : Props) => {
    let pandahead = "";
    let pandabody = "";
    let pandafull = "";
    selected = false;
    switch (panda) {
        case "panda":
            pandahead = "/images/pandas/panda/panda-head.png";
            pandabody = "/images/pandas/panda/panda-body.png";
            pandafull = "/images/pandas/panda/panda.png";
            
            break;
        case "lion":
            pandahead = "/images/pandas/lion/lion-head.png";
            pandabody = "/images/pandas/lion/lion-body.png";
            pandafull = "/images/pandas/lion/lion.png";
                
            break;
        case "cricket":
            pandahead = "";
            pandabody = "";
            pandafull = "";
                    
            break;
        case "cow":
            pandahead = "/images/pandas/cow/cow-head.png";
            pandabody = "/images/pandas/cow/cow-body.png";
            pandafull = "/images/pandas/cow/cow.png";
                        
            break;
        case "unicorn":
            pandahead = "";
            pandabody = "";
            pandafull = "";
                            
            break;        
        case "ladybug":
            pandahead = "";
            pandabody = "";
            pandafull = "";
                                
            break;                    
        default:
            pandahead ="";
            pandabody ="";
            pandafull ="";
            break;
    }
    return (
        <>
            <div>   
                
            {/* Wariant głowa */}

            {variant =="0" ? 
                    <div className="h-28 w-28 md:h-32 md:w-32 lg:w-40 lg:h-40 2xl:w-48 2xl:h-48 bg-purple-500 rounded-3xl flex items-center justify-center">   
                        <div className="relative h-24 w-24 md:h-28 md:w-28 lg:w-36 lg:h-36 2xl:w-40 2xl:h-40 rounded-2xl bg-green-500">
                            <Image src={`${pandahead}`} fill className="object-cover absolute" alt="panda"/>
                        </div>
                    </div>
                :null}

            {/* Wariant część ciała */}

            {variant =="1" ? 
                    <div className="h-28 w-28 md:h-32 md:w-32 lg:w-40 lg:h-40 2xl:w-48 2xl:h-48 bg-purple-500 rounded-3xl flex items-center justify-center">   
                        <div className="relative h-24 w-24 md:h-28 md:w-28 lg:w-36 lg:h-36 2xl:w-40 2xl:h-40 rounded-2xl bg-green-500">
                            <Image src={`${pandabody}`} fill className="object-cover absolute" alt="panda"/>
                        </div>
                    </div>
                
                :null}

            {/* Wariant cała panda */}

                {variant =="2" ? 
                    <div className="bg-white items-center justify-center flex relative w-60 aspect-square rounded-[40px]">
                        <div className="absolute w-60 z-30 aspect-square rounded-[40px] hover:border-[6px] hover:border-orange"></div>
                        <div className="aspect-square relative w-full z-20 ">
                            <Image src={`${pandabody}`} fill className="absolute" alt="panda"/>
                        </div>
                        <div className="w-52 bg-orange/[.50] rounded-3xl object-cover absolute aspect-square z-10"></div>
                    </div>
                
                :null}
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