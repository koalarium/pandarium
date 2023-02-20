import Image from "next/image";
import { LgContainer } from "../Global/Containers";
import Title from "../Global/Title";

const Info = () => {
    return (
        <LgContainer>
            <Title primary="Czym jest pandarium" secondary="Poznaj nas lepiej" position="left" color="purple" />
            <div className="flex w-full h-full gap-4 flex-col">
                <div className="md:flex md:flex-row gap-4">
                    <div className="bg-purple-50 rounded-3xl p-4 flex flex-col justify-evenly">
                        <p className="leading-relaxed px-4">
                        Znajdziesz tutaj wszystkie popularne gry
                        umiejscowione na jednej platformie do
                        wspólnej gry z Twoimi znajomymi.
                        </p>
                        <p className="leading-relaxed px-4">
                        Wszystko zostało stworzone z myślą o
                        ludziach, którzy uwielbiają minigierki lub
                        chcą po prostu zagrać w planszówki online.
                        </p>
                    </div>
                    <div className="w-full h-60 mt-4 md:mt-0 rounded-3xl relative"><Image fill className="absolute" src="/images/pandas/panda/panda_inzynier.png" alt="panda-inzynier" /></div>                
                </div>
                <div className="flex-col-reverse flex md:flex md:flex-row gap-4 absolute-cover">
                    <div className="w-full md:h-60 rounded-3xl relative"><Image fill className="" src="/images/pandas/panda/panda_inzynier.png" alt="panda-inzynier" /></div>
                    <div className="bg-purple-50 rounded-3xl p-4 flex justify-evenly flex-col">
                        <p className="leading-relaxed mb-2 px-4">
                        Znajdziesz tutaj wszystkie popularne gry
                        umiejscowione na jednej platformie do
                        wspólnej gry z Twoimi znajomymi.
                        </p>
                        <p className="leading-relaxed px-4">
                        Wszystko zostało stworzone z myślą o
                        ludziach, którzy uwielbiają minigierki lub
                        chcą po prostu zagrać w planszówki online.
                        </p>
                    </div>
                </div>
            </div>
        </LgContainer>
    );
}

export default Info;