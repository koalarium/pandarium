import { useEffect, useState } from "react";
import Button from "../Forms/Button";
import { Input } from "../Forms/Input";
import { ArrowRight, X } from 'react-bootstrap-icons';

type Props =  {
    user?: any,
    open: boolean,
    setOpen: any,
}

const PPopUp = ({ user, open, setOpen }: Props) => {

    const [nick, setNick] = useState("");
    const [gameCode, setGameCode] = useState("");

    useEffect(() => {

        if (user) {
            setNick(user);
        }

    }, [])

    return (
        <div onClick={ setOpen ? () => setOpen(false) : () => {} } className={`${ open ? "-translate-y-[0%]" : "-translate-y-[300%]" } fixed duration-300 flex z-[9999] w-full h-[100vh] bg-purple-950/[0.7] backdrop-blur-md cursor-pointer`}>
            <div className="absolute right-12 top-12 group"><X className="text-white text-5xl group-hover:scale-[1.5] duration-300" /></div>
            <div onClick={ (e: any) => { e.stopPropagation(); } } className={`${ open ? "scale-[1.0!important]" : "" } scale-[0] delay-200 duration-300 flex bg-purple-300 h-[60vh] mx-auto my-auto w-[50%] p-3 rounded-[35px] shadow-xl`}>
                <div className="bg-purple-900 rounded-3xl flex flex-col h-full w-full justify-center align-middle">
                    <h2 className="font-rubikbold text-white text-3xl uppercase mx-auto">Dołącz do pokoju:</h2>
                    <Input type="text" onChange={(e: any) => setNick(e.target.value) } className="w-[30rem] mx-auto mt-5" placeholder="Nick" value={ user ? user.nick : nick } required disabled={ user ? true : false } readonly={ user ? true : false }/>
                    <Input type="text" onChange={ (e: any) => setGameCode(e.target.value) } className="w-[30rem] mx-auto mt-2" value={ gameCode } placeholder="np. 5SD4TXT1Z"/>
                    <Button className="mx-auto mt-5">DOŁĄCZ</Button>
                </div>
            </div>
        </div>
    );
}

export default PPopUp;