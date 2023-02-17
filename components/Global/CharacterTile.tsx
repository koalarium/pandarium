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
            pandahead = "";
            pandabody = "";
            pandafull = "";
                
            break;
        case "cricket":
            pandahead = "";
            pandabody = "";
            pandafull = "";
                    
            break;
        case "cow":
            pandahead = "";
            pandabody = "";
            pandafull = "";
                        
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
                    <div className="bg-white aspect-square w-28 rounded-3xl hover:border hover:border-orange">
                        
                    </div>
                
                :null}
            </div>
        </>
    );
}

export default CharacterTile;


<div id="boxpomarancz bialy aspectratio square ustawic szerokosc">
        <div id="wfull aspectratio square z10">
            <Image></Image>
        </div>
        <div id="wfull aspectratio square pasteltlo z0">

        </div>
</div>