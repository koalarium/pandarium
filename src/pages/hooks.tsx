import { useRef, useState } from "react";

const Hooks = () => {

    let zmienna = 0;
    let [zmienna2, setZmienna2] = useState(0)
    let zmienna3 = useRef(0);

    return (
        <div className="flex w-full h-full">
            <div className="mx-auto mt-24 flex gap-4">
                <button onClick={ () => { zmienna++;  console.log(zmienna); } } className="border-[2px] border-green-300 px-4 py-2">Counter: {zmienna}</button>
                <button onClick={ () => { setZmienna2(++zmienna2);  console.log(zmienna2); } } className="border-[2px] border-green-300 px-4 py-2">Counter: {zmienna2}</button>
                <button onClick={ () => { zmienna3.current+=1;  console.log(zmienna3); } } className="border-[2px] border-green-300 px-4 py-2">Counter: {zmienna3.current}</button>
            </div>
        </div>
    );
}

export default Hooks;