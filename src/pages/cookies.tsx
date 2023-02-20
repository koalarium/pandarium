import { XlContainer } from "@/components/Global/Containers";

const cookies = () => {
    return (
        <XlContainer >
            <div className="border-purple-900 border-2 rounded-2xl h-fit w-fit mx-auto">
                <div className="flex flex-col justify px-12">
                    <div className="w-2/3 h-[12px] bg-purple-500 rounded-md mx-auto mt-4 mb-1 opacity-60 md:mt-4"></div>
                    <h1 className="text-center font-rubikbold text-purple-900 uppercase mb-2 mt-2 md:text-3xl md:mb-4">Polityka plików cookies</h1>  
                </div>
                <div className="px-4 mb-1">
                    <h2 className="font-rubikbold mb-1 ml-2 md:text-xl">Czym są pliki cookies?</h2>
                    <p className="leading-relaxed mx-2 text-sm my-2 indent-4 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam neque deleniti repellat suscipit minus atque, ab itaque architecto ea dolores ratione quam tenetur inventore! Ipsa, iste minus eaque esse eligendi, quibusdam nam aperiam eos dolore odio similique porro veritatis nihil. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ipsum id aspernatur illo quasi similique ratione distinctio, facere assumenda fuga eius sed mollitia vitae est?</p>
                </div>
                <div className="px-4 mb-1">
                    <h3 className="font-rubikbold mb-1 ml-2 md:text-xl">Dlaczego ich używamy?</h3>
                    <p className="leading-relaxed mx-2 text-sm my-2 indent-4 text-left pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo tempora fuga ad dignissimos quae adipisci incidunt expedita dolore necessitatibus voluptatum illo maiores provident, voluptates quos fugit explicabo, ratione ullam delectus corporis quaerat quia aperiam recusandae hic. Expedita, commodi eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolores quis adipisci quod ea aliquam maiores voluptate rerum esse assumenda quae rem, officiis accusantium labore?</p>
                </div>
            </div>    
        </XlContainer>              
    );
}
export default cookies;  