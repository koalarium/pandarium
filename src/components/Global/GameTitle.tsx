type Props = {
    name: string,
}

const GameTitle = ( { name }: Props ) => {
    return (
        <div className="w-fit h-fit">
            <div className="text-left flex flex-col">
                <h5 className="uppercase font-rubikbold text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-purple-900">{ name }</h5>
                <h4 className="font-rubikbold text-lg sm:text-xl md:text-2xl xl:text-3xl text-purple-500">game lobby</h4>
            </div>
        </div>
    );
}

export default GameTitle;