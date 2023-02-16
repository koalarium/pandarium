const ArticleThump = () => {
    return (
        <div className="bg-purple-10 aspect-[4/3] w-full rounded-3xl flex flex-col">
            <div className="px-6 py-7">
                <div className="bg-purple-50 w-full aspect-[3/2] mx-auto rounded-[30px] relative overflow-hidden">
                    <p className="absolute bg-purple-900 w-1/3 bottom-0 right-0 font-rubikbold text-white text-xs py-2 text-center rounded-md">25 lis 2013</p>
                </div>
                <div className="mt-5 ml-5">
                    <h5 className="font-rubikbold text-purple-900 uppercase text-2xl">Pandy podbijają Polskę</h5>
                    <p className="text-purple-500 text-md mt-1 leading-tight w-[18ch] sm:w-[30ch]  md:w-[26ch] lg:w-[24ch] 2lg:w-[40ch]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid praesentium eius </p>
                </div>
            </div>
        </div>
    );
}

export default ArticleThump;