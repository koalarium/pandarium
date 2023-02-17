import { LgContainer } from "components/Global/Containers"

const Article = () => {
    return (
        <LgContainer >
            <div className="w-full mx-auto">

                <h2 className="uppercase text-center text-purple-300/[0.6] font-rubikbold ">Co w bambusie piszczy</h2>
                <h1 className="uppercase text-center text-3xl text-purple-900 mb-10 font-rubikbold">Tytuł Jakiegoś tam artykułu</h1>

                <div className="bg-purple-50 w-full aspect-[5/2] rounded-2xl mb-3"></div>

                <div className="flex mb-8 flex-col h-fit sm:flex-row">
                    <div className="my-auto flex align-middle rounded-md bg-purple-900 text-white px-2 mr-2 text-xs sm:text-sm text-center py-3 font-rubikbold">25 lis 2023</div>
                    <div className="flex flex-row h-fit flex-wrap text-purple-900 my-auto gap-2 font-rubikbold">
                            <div className="bg-purple-50 rounded-md"><p className="px-2 py-1">#buffmastera</p></div>
                            <div className="bg-purple-50 rounded-md"><p className="px-2 py-1">#scaminternetowy</p></div>
                            <div className="bg-purple-50 rounded-md"><p className="px-2 py-1">#pandonowości</p></div>
                            <div className="bg-purple-50 rounded-md"><p className="px-2 py-1">#kabaczekgigant</p></div>                    
                    </div>
                </div>
                <div className="font-rubik text-md flex flex-col gap-y-10">
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
        </LgContainer>
    );
}

export default Article