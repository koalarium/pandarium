import Image from "next/image";
import { useEffect, useState } from "react";
import CharacterTile from "../Global/CharacterTile";
import pandas from "../../jsons/pandas.json";
import { hasCookie, getCookie, setCookie, deleteCookie } from "cookies-next";
import { useSession } from "next-auth/react";

type Props = {
    user?: any,
}

const PDropDown = ({ user }: Props) => {

    let panda = "panda";
    if ( hasCookie("authPanda") ) {
        panda = getCookie("authPanda")!.toString();
    }

    const [open, setOpen] = useState(false);
    const [selectedPanda, setSelectedPanda] = useState(panda);
 
    const changePanda = async (name: string) => {

        setSelectedPanda(name);

        if (user) {

            setCookie("authPanda", name);

            const id = user.id;
            const data = { name, id }
            const res = await fetch('/api/user/user', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });
    
        } else {
            
            setCookie("panda", name);

        }
     
    }


    useEffect(() => {

        if (typeof user === 'undefined') {
            if ( hasCookie("panda") ) {
                const panda: string = getCookie("panda")!.toString();
                setSelectedPanda(panda)
            }
        } else {
            let panda = "panda";
            if ( hasCookie("authPanda") ) {
                panda = getCookie("authPanda")!.toString();
            }
            setSelectedPanda(panda);
        }

    }, [])
    
    
    return (
        <div onClick={ () => setOpen(!open) } className="ml-auto mt-5 mr-5 flex hover:bg-purple-950/[.9] bg-purple-950/[.5] cursor-pointer rounded-2xl pl-8 pr-2 py-2 duration-300 relative">
            <p className="text-white font-rubikbold min-w-[110px] my-auto mr-10 text-lg">{ user ? user.nick : "Gość" }</p>
            <div className="w-full aspect-square relative bg-white rounded-2xl overflow-hidden">
                <Image fill className="object-cover" src={ pandas.find(p => p.name == selectedPanda)!.images.pandaSVG ? pandas.find(p => p.name == selectedPanda)!.images.pandaSVG : "panda"  } alt=""/>
            </div>
            <div className={`bg-purple-950/[.5] w-full duration-300 ${open ? "max-h-[350px]" : "max-h-0" } absolute left-0 translate-y-[100%] -bottom-[10px] rounded-2xl overflow-hidden`}>
                <div className="flex flex-wrap gap-4 justify-center px-3 py-3">
                    { pandas.slice(0,9).map((p, index) => (
                        <div key={ p.name+index } >
                            <CharacterTile setSelectedPanda={ () => changePanda(p.name) } className="w-[60px!important]" panda={ p.name } variant="3" />
                        </div>
                    ))}
                    <button className="w-full hover:bg-purple-300/[.2] duration-300 border-[2px] border-transparent hover:border-purple-300 bg-purple-300 text-sm text-white hover:text-purple-300 font-rubikbold rounded-xl py-2 uppercase">Zobacz więcej</button>
                </div>
            </div>
        </div>  
    );
}

export default PDropDown;