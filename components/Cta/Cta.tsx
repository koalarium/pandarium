import Button from "components/Global/Button";
import Title from "components/Global/Title";

const CTA = () => {
    return (
        // <div className="h-full w-full flex flex-col sm:flex-row bg-purple-100 rounded-3xl uppercase py-6">              
        //     <div className="bg-purple-900 mx-auto h-3 w-1/3 sm:h-20 sm:w-3 rounded-sm opacity-50 my-auto sm:mx-3 sm:ml-8"></div>
        //     <div className="text-purple-900 font-rubikbold text-2xl mx-auto sm:mx-3 my-auto sm:mb-3 mt-3 flex">
        //         <p className="text-center sm:text-left text-xl sm:text-2xl my-auto">
        //             Sprawdź nowości!
        //         </p>
        //     </div> 
        //     <Button content="Zobacz aktualności" variant="0" className="sm:mx-auto sm:mr-32 my-auto ml-auto"/>                          
        // </div>   
        <div className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
            <div className="h-content lg:h-48 w-full flex flex-col lg:flex-row bg-purple-100 rounded-[50px] py-4 pb-6 md:pb-6 md:py-4 relative px-12 lg:px-24 overflow-hidden">
                <div className="flex flex-col lg:flex-row my-auto mx-auto lg:mx-0">
                    <div className="bg-purple-500 w-24 mx-auto my-2 lg:my-0 lg:w-[20px] h-[15px] sm:h-[20px] lg:h-24 rounded-lg lg:mr-8"></div>
                    <h4 className="text-purple-900 uppercase font-rubikbold text-xl sm:text-2xl md:text-3xl 2xl:text-4xl lg:w-[15ch] my-auto text-center lg:text-left">Bądź zawsze na bieżąco</h4>
                </div>
                <div className="mt-4 lg:my-auto mx-auto lg:ml-auto lg:mr-0">
                    <Button content="Zobacz aktualności" variant="0" className="mt-0"/>                          
                </div>
            </div>
        </div>         
    );
}

export default CTA;