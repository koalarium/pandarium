import { LgContainer } from "components/Global/Containers";
import Title from "components/Global/Title";

const Info = () => {
    return (
        <LgContainer>
            <div className="flex gap-20 text-xl flex-col mx-20">
                <div className="flex gap-10">
                    <div className="bg-purple-50 h-fit w-1/2 flex flex-col grow rounded-3xl p-10">
                        <p className="leading-relaxed pt-5 ">Znajdziesz tutaj wszystkie popularne gry
                        umiejscowione na jednej platformie do
                        wspólnej gry z Twoimi znajomymi.</p>
                        <p className="leading-relaxed pb-5 mt-10">
                        Wszystko zostało stworzone z myślą o
                        ludziach, którzy uwielbiają minigierki lub
                        chcą po prostu zagrać w planszówki online.  
                        </p>
                    </div>
                    <div className="rounded-3xl w-1/2 bg-black"></div>
                </div> 
                <div className="flex gap-10">
                    <div className="rounded-3xl bg-black w-2/3"></div>
                    <div className="bg-purple-50 h-fit w-1/3 flex flex-col rounded-3xl p-10">
                        <p className="leading-relaxed pt-5 ">Znajdziesz tutaj wszystkie popularne gry
                        umiejscowione na jednej platformie do
                        wspólnej gry z Twoimi znajomymi.</p>
                        <p className="leading-relaxed pb-5 mt-10">
                        Wszystko zostało stworzone z myślą o
                        ludziach, którzy uwielbiają minigierki lub
                        chcą po prostu zagrać w planszówki online.</p>
                    </div>
                </div>
            </div>
        </LgContainer>
    );
}

export default Info;