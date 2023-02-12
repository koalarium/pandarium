type Props = {
    main: string,
    secondary?: string,
}

const Us = ({main, secondary}: Props) => {
    return (
        
        <div className="h-80 w-screen bg-green-900 px-14 py-10">
            <div className="grid grid-cols-4 gaps-4 justify-items-center">
                <div className="aspect-square   bg-green-500 rounded-full w-full lg:w-[150px] "></div>
                <div className="aspect-square   bg-green-500 rounded-full w-full lg:w-[150px] "></div>
                <div className="aspect-square   bg-green-500 rounded-full w-full lg:w-[150px] "></div>
                <div className="aspect-square   bg-green-500 rounded-full w-full lg:w-[150px] "></div>
            </div>    
            <div className="grid grid-cols-5 gaps-4 justify-items-center">
                <div className="aspect-square   bg-green-500 rounded-full w-full lg:w-[150px] "></div>
                <div className="aspect-square   bg-green-500 rounded-full w-full lg:w-[150px] "></div>
                <div className="aspect-square   bg-green-500 rounded-full w-full lg:w-[150px] "></div>
                <div className="aspect-square   bg-green-500 rounded-full w-full lg:w-[150px] "></div>
                <div className="aspect-square   bg-green-500 rounded-full w-full lg:w-[150px] "></div>
            </div>
        </div>
    );
}

export default Us;