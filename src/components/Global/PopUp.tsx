import React from 'react';
import { useEffect } from 'react';

type Props = {
    open: boolean,
}

const PopUp = ({ open }: Props) => {
    useEffect(() => {
        const body = document.querySelector("body");
        if ( open ) {
            body?.classList.add("overflow-y-hidden");
            body?.classList.add("h-[100vh]");
        } else {
            body?.classList.remove("overflow-y-hidden");
            body?.classList.remove("h-[100vh]");
        }
    })
    return (
        <>  
            <div className={` ${open ? '' : 'hidden'} fixed flex w-full h-full z-[1000] bg-green-1000/[0.9] overflow-y-hidden`}>
                    <div className="flex w-[1100px] aspect-[4/2] bg-green-500 mx-auto my-auto rounded-3xl">
                        <div className="w-full h-full bg-green-900 m-3 rounded-3xl">
                            <div id="pojemnik" className="flex justify-between rounded-xl group  duration-300 mx-4 my-4 p-2 px-8">
                                <p id="zasada" className="flex order-first text-white font-rubikbold text-2xl m-2" >Czas na ruch</p>
                                <input className="flex order-last text-white text-center text-base md:text-lg rounded-2xl py-3 px-5 border-[4px] bg-green-500 border-green-900/[.7] active:border-green-300 focus-visible:border-green-300 focus:border-green-300/[1] focus:outline-0 target:outline-0 file:bg-green-300 file:text-white file:px-4 file:py-1 file:rounded-xl file:border-none file:mr-4 selection:bg-green-300/[0.3] active:outline-0 focus-within:outline-0 duration-300" />
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}
export default PopUp;

// div 100% w i h strony absolute wysoki index np 1000 caly div bg wyszarzone opacity i backdropblur
// usestate open bool
//scroll onclick