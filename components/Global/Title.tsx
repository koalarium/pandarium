type Props = {
    color: string,
    position: string,
    variant?: string,
    bg?: string,
    primary: string,
    secondary: string,
}

const Title = ({primary, secondary, color, position, variant, bg}: Props) => {

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
            lineColor = "bg-green-100";
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
    return (
        <>

            {/* WERSJA ŚRODEK */}

            { (position=="center" && variant =="1") ? 

                <div className="w-fit mx-auto">
                    <div className="text-center w-full">
                        <div className="flex mb-2">
                            <h5 className={`text-left font-rubikbold text-3xl uppercase flex-none ${ secondaryColor }`}>{ secondary }</h5>
                            <div className={`h-4 w-full my-auto ml-2 ${lineColor} grow rounded`}></div>
                        </div>
                        <h4 className={`uppercase font-rubikbold text-2xl ${primaryColor} `}>{ primary }</h4>
                    </div>
                </div>

            : null }

            { (position=="center" && variant =="0") ? 

                <div className="w-1/2 mx-auto">
                    <div className={`text-center flex flex-col items-center w-full bg-${bg}-500 rounded-2xl p-6`}>
                        <div className="flex justify-center">
                            <h5 className={`font-rubikbold text-xl uppercase flex-none mb-2 ${ secondaryColor }`}>{ secondary }</h5>                            
                        </div>
                        <div className={`h-2 w-1/2 my-auto ${lineColor} grow rounded`}></div>
                        <h4 className={`uppercase font-rubikbold text-3xl mt-2 ${primaryColor} `}>{ primary }</h4>
                    </div>
                </div>
            
            : null } 


            {/* WERSJA PRAWO I LEWO */}

            { (position=="left" || position=="right")  ? 
                <div>
                    <div className={`h-4 w-full my-auto ml-2 bg-purple-300/[.5] grow rounded`}></div>
                </div>
            : null }

        </>
    );
}

export default Title;






























/*
<div className={`
            ${bg =="purple" ? "bg-purple-100" : null}
            ${bg =="green" ? "bg-green-500" : null}
            ${bg =="blue" ? "bg-blue-500" : null}
            ${bg =="orange" ? "bg-orange-500" : null}
            ${bg =="black" ? "bg-black-500" : null}
            w-screen rounded`}>
                <div className={`
                ${variant == 1 ? "w-3 h-20 float-left mr-2 rounded" :null}
                ${color =="white" ? "bg-white opacity-40" : null}
                ${color =="purple" ? "bg-purple-100" : null}
                ${color =="green" ? "bg-green-500" : null}
                ${color =="blue" ? "bg-blue-500" : null}
                ${color =="orange" ? "bg-orange-500" : null}
                ${color =="black" ? "bg-black-500" : null}
                `}></div>

            <div className="flex flex-nowrap items-center uppercase">
                <h5 className={`
                    ${(position=="center" ? "text-center" : null)}
                    ${position=="right" ? "text-right" : null}
                    ${position=="left" ? "text-left" : null}
                    ${color =="white" ? "text-white opacity-40" : null}
                    ${color =="purple" ? "text-purple-100" : null}
                    ${color =="green" ? "text-green-500" : null}
                    ${color =="blue" ? "text-blue-500" : null}
                    ${color =="orange" ? "text-orange-500" : null}
                    ${color =="black" ? "text-black-500" : null}
                        font-rubikbold`}>{ secondary }</h5>

                    <div className={`
                    ${variant == 0 ? "w-16 h-3 items-center rounded ml-2" :null}
                    ${color =="white" ? "bg-white opacity-40" : null}
                    ${color =="purple" ? "bg-purple-100" : null}
                    ${color =="green" ? "bg-green-500" : null}
                    ${color =="blue" ? "bg-blue-500" : null}
                    ${color =="orange" ? "bg-orange-500" : null}
                    ${color =="black" ? "bg-black-500" : null}
                    `}></div>

            </div>
                <h4 className={`
                    ${(position=="center" ? "text-center" : null)}
                    ${position=="right" ? "text-right" : null}
                    ${position=="left" ? "text-left" : null}
                    ${color=="white" ? "text-white" : null}
                    ${color=="purple" ? "text-purple-900" : null}
                    ${color=="green" ? "text-green-900" : null}
                    ${color=="blue" ? "text-blue-900" : null}
                    ${color =="orange" ? "text-orange-900" : null}
                    ${color =="black" ? "text-black-900" : null}
                    font-rubikbold text-2xl uppercase`}>{ primary }</h4>
            </div>
            */