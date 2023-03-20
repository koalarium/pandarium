import HeroAnimatedCircles from "../../components/Hero/HeroAnimatedDiv";
import { useState } from "react";
import Head from "next/head"
import { Circle, X } from "react-bootstrap-icons";

const KolkoIKrzyzyk = () => {

    const [matrix, setMatrix] = useState();
    console.log(matrix);
    return (
        <>
            <Head>
                <title>PANDARIUM - kółko i krzyżyk</title>
            </Head>
            <div className="w-full h-[100vh] bg-purple-900 flex overflow-hidden relative">
                
                <div className="aspect-square w-[650px] my-auto bg-white mx-auto z-[100] rounded-3xl flex flex-wrap overflow-hidden gap-2 justify-center">

                    {
                        // matrix.map((m: string) => (
                        //     <div className="bg-purple-500 w-[32%] h-[32%]">
                        //         { m == "X" ? 
                        //             <X className="mx-auto my-auto text-white text-[200px]"/>
                        //         :
                        //             <></>
                        //         }
                        //         { m == "O" ? 
                        //             <Circle className="mx-auto my-auto text-white text-[120px]"/>
                        //         :
                        //             <></>
                        //         }
                        //     </div>
                        // ))
                    }

                </div>    
                
                <HeroAnimatedCircles className="z-[1]"/>
            
            </div>
        </>
    );
}

export default KolkoIKrzyzyk;