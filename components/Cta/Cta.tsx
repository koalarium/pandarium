import Button from "components/Global/Button";

const CTA = () => {
    return (
        <div className="h-full w-full flex flex-col sm:flex-row bg-purple-100 rounded-3xl uppercase py-6">              
            <div className="bg-purple-900 mx-auto h-3 w-1/3 sm:h-20 sm:w-3 rounded-sm opacity-50 my-auto sm:mx-3 sm:ml-8 "></div>
            <div className="text-purple-900 font-rubikbold text-2xl mx-auto sm:mx-3 my-auto sm:mb-3 mt-3">
                    <p className="text-center sm:text-left text-xl sm:text-2xl my-auto">Daj nam hajs<br/>
                    Proszę     
                    </p>
            </div> 
            <Button content="Wpłać datek" variant="0" className="sm:mx-auto sm:mr-32 mt-5 my-auto mx-20"/>                          
        </div>            
    );
}

export default CTA;