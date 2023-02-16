import { LgContainer } from "components/Global/Containers"

const Article = () => {
    return (
        <LgContainer >
            <div className="w-full flex flex-col bg-white mx-auto font-rubikbold">
                <h2 className="uppercase text-center text-purple-300/[0.6] ">Co w bambusie piszczy</h2>
                <h1 className="uppercase text-center text-3xl text-purple-900 mb-10">Tytuł Jakiegoś tam artykułu</h1>
                <div className="bg-purple-50 w-full aspect-[5/2] rounded-2xl mb-3 "></div>
                <div className="flex mb-8 text-xs sm:text-sm flex-col sm:flex-row">
                    <div className="rounded-md bg-purple-900 text-white px-2 mr-2 text-center my-auto py-3">25 lis 2023</div>
                    <div className="flex gap-y-1 text-purple-900 my-auto py-2">
                        <div className="bg-purple-50 rounded-md pl-1 py-2">#buffmastera</div>
                        <div className="bg-purple-50 rounded-md pl-1 py-2">#scaminternetowy</div>
                        <div className="bg-purple-50 rounded-md pl-1 py-2">#pandonowości</div>
                        <div className="bg-purple-50 rounded-md pl-1 py-2">#kabaczekgigant</div>
                    </div>
                </div>
                <div className="font-rubik text-xl flex flex-col gap-y-10">
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