type Props = {
    primary: string,
    secondary: string,
}

const GameTitle = ({primary, secondary }:Props) => {
    return (
        <div className="w-fit h-fit">
            <div className="text-left flex flex-col">
                <h5 className="font-rubikbold text-xl sm:text-3xl md:text-4xl xl:text-5xl text-purple-900">{primary}</h5>
                <h4 className="font-rubikbold text-lg sm:text-xl md:text-2xl xl:text-3xl text-purple-500">{secondary}</h4>
            </div>
        </div>
    );
}

export default GameTitle;