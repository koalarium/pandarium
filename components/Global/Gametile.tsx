type Props = {
    name: string;
}

const Gametile = ({name}: Props) => {
    let image ="";
    switch (name) {
        case "music pandas":
            name = "music pandas";
            image ="images/svgs/PANDA-square.svg";
            break;
        case "ludo club":
            name = "ludo club";
            image ="";
            break;
        case "forehead":
            name="forehead";
            image ="";
            break;
        case "game4":
            name ="game4";
            image ="";
            break;
        case "game5":
            name ="game5";
            image ="";
            break;
        case "game6":
            name ="game6";
            image ="";
            break;
        case "game7":
            name ="game7";
            image ="";
            break;
        case "game8":
            name ="game8";
            image ="";
            break;
        default:
            name = "Work in progress"
            image =""
            break;
    }


    return (
        <div className="static w-1/2 h-fit rounded-3xl mx-auto my-auto bg-purple-500">
            
            <div className="w-2/3 flex ">
            <img className="absolute z-10  opacity-60 hover:opacity-100 duration-300 " src={`${image}`} alt="Panda Music"/>
                <h4 className="uppercase z-20 text-white font-rubikbold text-6xl p-4 hover:opacity-0 duration-300">{name}</h4>

            </div>
        </div>
    );
}

export default Gametile;
