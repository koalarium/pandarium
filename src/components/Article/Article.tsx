import { XlContainer } from "../Global/Containers";

const Article = () => {
    return (
        <XlContainer>
            <div className="w-full mx-auto mt-12">

                <h2 className="uppercase text-center text-purple-300/[0.6] text-lg sm:text-2xl md:text-3xl xl:text-4xl font-rubikbold ">Co w bambusie piszczy</h2>
                <h1 className="uppercase text-center text-xl sm:text-3xl md:text-4xl xl:text-5xl text-purple-900 mb-10 font-rubikbold">Tytuł Jakiegoś tam artykułu</h1>

                <div className="bg-purple-50 w-full aspect-[16/9] rounded-2xl md:rounded-[35px] mb-3"></div>

                <div className="flex mb-8 flex-col h-fit sm:flex-row my-8">
                    <div className="my-auto flex-none align-middle rounded-xl bg-purple-900 text-white px-6 mr-0 sm:mr-2 mb-4 sm:mb-0 text-xl text-center py-3 sm:py-6 font-rubikbold">25 lis 2023</div>
                    <div className="flex flex-row flex-wrap justify-evenly sm:justify-start text-purple-900 gap-2 font-rubikbold">
                        <div className="bg-purple-50 rounded-lg h-fit">
                            <p className="px-2 py-1">#buffmastera</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg h-fit">
                            <p className="px-2 py-1">#buffmastera</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg h-fit">
                            <p className="px-2 py-1">#buffmastera</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg h-fit">
                            <p className="px-2 py-1">#buffmastera</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg h-fit">
                            <p className="px-2 py-1">#buffmastera</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg h-fit">
                            <p className="px-2 py-1">#buffmastera</p>
                        </div>
                    </div>
                </div>
                <div className="text-base text-purple-950 md:text-lg flex flex-col gap-y-10 text-justify my-12 indent-2 md:indent-6 break-keep mr-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit purus, posuere
                    bibendum maximus a, sollicitudin sed eros. Donec id iaculis ex. Aliquam ac rutrum
                    magna. Quisque mattis tincidunt interdum. Sed ut elementum libero. Morbi non nisl
                    leo. Vestibulum efficitur blandit risus vel mattis. In pretium metus sit amet mi
                    sollicitudin finibus. Sed a eros vitae leo elementum pharetra sed et purus. Maecenas
                    vitae neque metus. Nullam facilisis hendrerit efficitur.</p>
                    <p>Vestibulum rutrum pharetra odio, non bibendum neque. Nulla facilisi. Mauris
                    condimentum vulputate ante non iaculis. Nam in tristique magna, sit amet mollis
                    ligula. Maecenas vitae neque pharetra, bibendum dolor nec, molestie enim.
                    Maecenas lacinia enim et est venenatis hendrerit. Cras nec placerat lorem. Vivamus
                    facilisis imperdiet scelerisque. Ut egestas massa at sagittis sodales. Aliquam
                    scelerisque vestibulum tortor in hendrerit. Phasellus pulvinar tempor orci, at efficitur
                    diam egestas at. Duis pellentesque felis ut tempus convallis. Integer orci eros,
                    faucibus et sodales a, pretium in risus. Suspendisse ultricies eros lacus, ac suscipit
                    sapien pulvinar et.</p>
                    <p>Duis eget augue eget diam sagittis fringilla. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Vivamus gravida lorem in
                    massa pulvinar, eget lobortis mi maximus. Praesent sagittis, ante et placerat
                    imperdiet, ligula felis bibendum massa, id eleifend velit nibh ut magna. Donec vel</p>
                </div>
            </div>
        </XlContainer>
    );
}

export default Article