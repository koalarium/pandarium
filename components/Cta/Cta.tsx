import Button from "components/Global/Button";

const Cta = () => {
    return (
        <div className="h-full w-full flex justify-between bg-purple-100 rounded-t-3xl uppercase">
               <div className="w-full h-full flex gap-x-2 py-10 pl-10">
                    <div className="bg-purple-900 h-20 w-3 rounded-sm opacity-50"></div>
                    <div className="text-purple-900 font-rubikbold text-3xl">
                       Daj nam hajs<br/>
                       Proszę           
                </div>
                <Button content="Wpłać datek" variant="1" className="ml-auto"/>
            </div>
        </div>            
    );
}

export default Cta;