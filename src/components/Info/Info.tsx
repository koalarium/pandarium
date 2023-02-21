import Image from "next/image";
import { LgContainer, TitleContainer } from "../Global/Containers";
import Title from "../Global/Title";

const Info = () => {
    return (
        <>
            <LgContainer >

                <TitleContainer>
                    <Title primary="Czym jest pandarium?" secondary="Poznaj nas lepiej" position="left" color="purple" />
                </TitleContainer>

                <div className="flex flex-col gap-4 text-center md:text-left">

                    <div className="flex flex-col xl:flex-row gap-4">

                        <div className="basis-1/3 flex-col items-center justify-center bg-purple-50 p-10 rounded-3xl">
                            <h6 className="text-base md:text-lg xl:text-xl mb-8">Pandarium jest to zbiór najpopularniejszych gier zebranych w jednym miejscu, abyś razem ze znajomymi mógł się cieszyć rozgrywką a nie jej poszukiwaniem!</h6>
                            <h6 className="text-base md:text-lg xl:text-xl">Połącz się z przyjaciółmi na Discordzie i razem odkrywajcie nasz Pandariowy świat. </h6>
                        </div>
                        <div className="basis-2/3 hidden xl:block">
                            <div className="w-full h-full md:mt-0 rounded-3xl relative overflow-hidden bg-purple-500">
                                <Image fill className="absolute object-cover opacity-40" src="/images/photos/gaming-chair.jpg" alt="panda-inzynier" />
                            </div>    
                        </div>

                    </div>

                    <div className="flex flex-col xl:flex-row gap-4">

                        <div className="basis-3/5">
                            <div className="w-full h-64 xl:h-full md:mt-0 rounded-3xl relative overflow-hidden bg-purple-500">
                                <Image fill className="absolute object-cover opacity-40" src="/images/photos/friends.jpg" alt="panda-inzynier" />
                            </div>    
                        </div>
                        <div className="basis-2/5 flex-col items-center justify-center bg-purple-50 p-10 rounded-3xl">
                            <h6 className="text-base md:text-lg xl:text-xl mb-8">Gry zostały stworzone z myślą o ludziach, którzy chcą spędzić czas z ich ulubioną osobą nawet oddaloną o setki kilometrów!</h6>
                            <h6 className="text-base md:text-lg xl:text-xl">Cały czas sukcesywnie ulepszamy naszą stronę, abyś mógł doświadczyć najlepszych wrażeń ;)</h6>
                        </div>

                    </div>

                </div>

                
            </LgContainer>
        </>
    );
}

export default Info;