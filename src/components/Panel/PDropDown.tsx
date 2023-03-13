import Image from "next/image";
import { useEffect, useState } from "react";
import CharacterTile from "../Global/CharacterTile";
import pandas from "../../jsons/pandas.json";
import { hasCookie, getCookie, setCookie, deleteCookie } from "cookies-next";
import { getSession } from "next-auth/react";

type Props = {
    user?: any,
}

const PDropDown = ({ user }: Props) => {

    const [open, setOpen] = useState(false);
    const [selectedPanda, setSelectedPanda] = useState("panda");

    const changePanda = async (name: string) => {

        setSelectedPanda(name);

        if (user) {
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
            
            console.log("selectedPanda: "+name);
            deleteCookie('panda');
            setCookie("panda", name);

        }

    }


    useEffect(() => {

        if(!user) {
            if(hasCookie("panda")) {
                const panda: string = getCookie("panda")!.toString();
                setSelectedPanda(panda)
            }
        } else {
   
        }

    }, [])
    
    
    return (
        <div onClick={ () => setOpen(!open) } className="ml-auto mt-5 mr-5 flex hover:bg-purple-950/[.9] bg-purple-950/[.7] cursor-pointer rounded-2xl pl-8 pr-2 backdrop-blur-3xl py-2 duration-300">
            <p className="text-white font-rubikbold min-w-[110px] my-auto mr-10 text-lg">{ user ? user.nick : "Gość" }</p>
            <div className="w-full aspect-square relative bg-white rounded-2xl overflow-hidden">
                <Image fill className="object-cover" src={ pandas.find(p => p.name == selectedPanda)!.images.pandaBody ? pandas.find(p => p.name == selectedPanda)!.images.pandaBody : "panda"  } alt=""/>
            </div>
            <div className={`bg-purple-950/[.7] backdrop-blur-3xl w-full duration-200 ${open ? "max-h-[350px]" : "max-h-0" } absolute left-0 translate-y-[100%] -bottom-[10px] rounded-2xl overflow-hidden`}>
                <div className="flex flex-wrap gap-4 justify-center px-3 py-3">
                    { pandas.slice(0,9).map((p, index) => (
                        <>
                            <CharacterTile key={ index } setSelectedPanda={ () => changePanda(p.name) } className="w-[60px!important]" panda={ p.name } variant="0" />
                        </>
                    ))}
                    <button className="w-full hover:bg-purple-300/[.2] duration-300 border-[2px] border-transparent hover:border-purple-300 bg-purple-300 text-sm text-white hover:text-purple-300 font-rubikbold rounded-xl py-2 uppercase">Zobacz więcej</button>
                </div>
            </div>
        </div>  
    );
}

export default PDropDown;