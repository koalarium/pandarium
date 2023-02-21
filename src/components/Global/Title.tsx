type Props = {
    color: string,
    position: string,
    variant?: string,
    bg?: string,
    primary: string,
    secondary: string,
    className?: string,
}

const Title = ({className, primary, secondary, color, position, variant, bg}: Props) => {

    let secondaryColor = "";
    let primaryColor = "";
    let lineColor ="";
    
    switch (color) {
        case "purple":
            secondaryColor = "text-purple-300/[.5]";
            primaryColor = "text-purple-900";
            lineColor = "bg-purple-100";
            break;
        case "green":
            secondaryColor = "text-green-300/[.5]";
            primaryColor = "text-green-900";
            lineColor = "bg-green-500";
            break;
        case "blue":
            secondaryColor = "text-blue-300/[.5]";
            primaryColor = "text-blue-900";
            lineColor = "bg-blue-100";
            break;
        case "orange":
            secondaryColor = "text-orange-300/[.5]";
            primaryColor = "text-orange-900";
            lineColor = "bg-orange-100";
            break;
        case "white":
            secondaryColor = "text-white/[.5]";
            primaryColor = "text-white";
            lineColor = "bg-white/[.5]";
            break;        
        default:
            secondaryColor = "text-white/[.5]";
            primaryColor = "text-white";
            lineColor = "bg-white/[.5]";
            break;
    }
    let background ="";
    switch(bg) {
        case "purple":
            background = "bg-purple-500";
            break;
        case "green":
            background = "bg-green-500";
            break;
        default:
            background = "";
            break;
    }

    return (
        <>
            {/* WERSJA ŚRODEK */}
            
            { (position=="center" && variant =="1") ? 

                <div className={`w-fit mx-auto ${className}`}>
                    <div className="text-center w-full ">
                        <div className="flex md:mb-1 lg:mb-2">  {/* //mb-2 przy wiekszych ekranacha */}
                            <h5 className={`text-left font-rubikbold text-xl sm:text-3xl md:text-4xl xl:text-5xl uppercase flex-none ${ secondaryColor }`}>{ secondary }</h5>
                            <div className={`h-2 lg:h-3 w-full my-auto ml-2 ${lineColor} grow rounded-sm`}></div>
                        </div>
                        <h4 className={`uppercase font-rubikbold text-lg sm:text-2xl md:text-3xl xl:text-4xl ${primaryColor} `}>{ primary }</h4>
                    </div>
                </div>

            : null }

            { (position=="center" && variant =="0") ? 

                <div className={`mx-auto w-3/4 ${className}`}>
                    <div className={`text-center flex flex-col items-center w-full ${background} rounded-2xl p-2 md:p-4 lg:p-6 2xl:p-8`}>
                        <div className="flex justify-center">
                            <h5 className={`font-rubikbold text-lg sm:text-2xl md:text-3xl xl:text-4xl uppercase flex-none mb-1 lg:mb-2 2xl:mb-4 ${ secondaryColor }`}>{ secondary }</h5>                            
                        </div>
                        <div className={`h-1 lg:h-1.5 2xl:h-2 w-1/3 my-auto ${lineColor} grow rounded-sm`}></div>
                        <h4 className={`uppercase font-rubikbold mt-1 text-xl sm:text-3xl md:text-4xl xl:text-5xl lg:mt-2 2xl:mt-4 2xl:mb-4 lg:mb-2 md:mb-1 ${primaryColor} `}>{ primary }</h4>       {/* mt-2 */}
                    </div>
                </div>
            
            : null } 


            {/* WERSJA PRAWO I LEWO */}

            { (position=="left" || position=="right")  ? 
            
                <div className={`${(position=="left" ? "grid justify-items-start h-content w-full" : "grid justify-items-end h-content w-full" )} ${className}`}>
                    <div className={`${className} h-full flex `}>
                        <div className={`${(position=="left" ? "order-first" : "order-last")} h-content w-2 2xl:w-3 ${lineColor} rounded-sm`}></div>
                        <div className={`${(position=="right" ? "text-right" : null)} flex flex-col ml-7 mr-2`}>
                            <h5 className={`uppercase font-rubikbold mt-2 lg:mt-3 lg:mb-1 2xl:mt-4 2xl:mb-2 text-lg sm:text-2xl md:text-3xl xl:text-4xl ${secondaryColor}`}>{ secondary }</h5>
                            <h4 className={`uppercase font-rubikbold text-xl sm:text-3xl md:text-4xl xl:text-5xl ${primaryColor}`}>{ primary }</h4>
                        </div>
                    </div>
                </div>

            : null }
        </>
    );
}

export default Title;

