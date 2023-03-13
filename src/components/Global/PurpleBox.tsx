type Props = {
    children?: JSX.Element | JSX.Element[],
    title: string,
}

const PurpleBox = ( {children, title}: Props ) => {
    return (
        <>
           <div id="zasady" className="md:basis-[47.9%] xl:basis-1/4 bg-purple-900 rounded-3xl flex-col flex h-96 xl:h-full w-full">
                <div className="w-fit p-2 m-4 uppercase rounded-xl text-white font-rubikbold bg-purple-950/[0.8]">
                    <h5 className="mx-4 text-lg">{ title }</h5>
                </div>
                <div className="overflow-y-scroll overscroll-contain scrollbar-hidden">

                    { children }
                    
                </div>
            </div> 
        </>
    );
}

export default PurpleBox;