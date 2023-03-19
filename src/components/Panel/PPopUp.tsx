import { useEffect, useState } from "react";
import Button from "../Forms/Button";
import { Input } from "../Forms/Input";

type Props =  {
    user?: string,
    open: boolean,
}

const PPopUp = ({ user, open }: Props) => {

    const [nick, setNick] = useState("");
    const [gameCode, setGameCode] = useState("");

    useEffect(() => {

        if (user) {
            setNick(user);
        }

    }, [])

    return (
        <div className={`${ open ? "fixed translate-y-[0%]" : "hidden -translate-y-[300%]" } duration-300 delay-300 flex z-[9999] w-full h-[100vh] bg-purple-950/[0.7] backdrop-blur-md`}>
            <div className="flex bg-purple-300 h-[50vh] mx-auto my-auto w-[80%] p-3 rounded-[35px] shadow-xl">
                <div className="bg-purple-900 rounded-3xl flex flex-col h-full w-full justify-center align-middle">
                    <h2 className="font-rubikbold text-white text-3xl uppercase mx-auto">Dołącz do pokoju:</h2>
                    <Input type="text" onChange={(e: any) => setNick(e.target.value) } className="w-1/5 mx-auto mt-5" placeholder="Nick" value={ nick } required disabled={ user ? true : false } readonly={ user ? true : false }/>
                    <Input type="text" onChange={ (e: any) => setGameCode(e.target.value) } className="w-1/5 mx-auto mt-2" value={ gameCode } placeholder="np. 5SD4TXT1Z"/>
                    <Button className="mx-auto mt-5">DOŁĄCZ</Button>
                </div>
            </div>
        </div>
    );
}

export default PPopUp;