import Image from "next/image";
import Button from "../Global/Button";

const CTA = () => {
    return (

        <div className="py-20 md:py-24 lg:py-28 xl:py-36 2xl:py-48">
            <div className="h-content lg:h-56 w-full flex flex-col lg:flex-row bg-purple-100 rounded-[50px] py-4 pb-6 md:pb-6 md:py-4 relative px-12 lg:px-24 overflow-hidden">
                <Image alt="images" fill src="/images/patterns/big-hearts-pattern.svg" className="object-cover absolute w-full h-full z-0 inset-0 opacity-[0.35] mix-blend-overlay"/>
                <div className="flex flex-col lg:flex-row my-auto mx-auto lg:mx-0 z-10">
                    <div className="bg-purple-500 w-1/2 mx-auto my-2 lg:my-0 lg:w-[20px] h-[15px] sm:h-[20px] lg:h-24 rounded-lg lg:mr-8"></div>
                    <h4 className="text-purple-900 uppercase font-rubikbold text-lg sm:text-2xl md:text-3xl xl:text-4xl lg:w-[15ch] my-auto text-center lg:text-left">Bądź zawsze na bieżąco</h4>
                </div>
                <div className="mt-4 lg:my-auto mx-auto lg:ml-auto lg:mr-0 z-10">
                    <Button content="Zobacz" variant="0" className="mt-0"/>                          
                </div>
            </div>
        </div>      
           
    );
}

export default CTA;