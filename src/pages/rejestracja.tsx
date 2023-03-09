import HeroAnimatedCircles from "../components/Hero/HeroAnimatedDiv";
import Head from 'next/head';
import { TitleContainer } from "../components/Global/Containers";
import Title from "../components/Global/Title";
import { Input } from "../components/Forms/Input";
import Button from "../components/Forms/Button";
import { useEffect, useState } from "react";
import Link from "next/link";
import CirclesLayout from "./layouts/CirclesLayout";

const Rejestracja = () => {

        const [login, setLogin] = useState("");
        const [password, setPassword] = useState("");
        const [repeatPassword, setRepeatPassword] = useState("");
        const [age, setAge] = useState("");
        const [acceptTerms, setAcceptTerms] = useState(false);

        useEffect(() => {
            
        }, [])

    return (
        <>
            <CirclesLayout className="xl:w-[60vw] 2xl:w-[40vw] h-fit rounded-3xl px-6 sm:px-12 py-20 backdrop-blur-3xl flex flex-col">
                    
                <Head>
                    <title>Pandarium - zarejestruj się</title>
                    <meta name="description" content="Poznaj nasze wszystkie minigierki oraz najbardziej urocze pandy w przebraniach!" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="gap-2 md:gap-4">
                    <div className="mb-6 md:mb-12">
                        <h1 className="font-rubikbold uppercase text-base sm:text-xl md:text-2xl xl:text-3xl text-center text-white/[0.7]">Pandarium</h1>
                        <h2 className="font-rubikbold uppercase text-xl sm:text-3xl md:text-4xl xl:text-5xl text-center">Rejestacja</h2>
                    </div>
                    <div className="w-[100%] xl:w-[80%] mx-auto flex flex-col gap-3">
                        <Input onChange={ (e: any) => { setLogin(e.target.value) } } value={ login } placeholder="E-mail" type="email"/>
                        <Input onChange={ (e: any) => { setAge(e.target.value) } } value={ age } placeholder="Wiek" type="number"/>
                        <Input onChange={ (e: any) => { setPassword(e.target.value) } } value={ password } placeholder="Hasło" type="password"/>
                        <Input onChange={ (e: any) => { setRepeatPassword(e.target.value) } } value={ repeatPassword } placeholder="Potwierdź hasło" type="password"/>
                        <Input onChange={ (e: any) => { setAcceptTerms(e.target.value) } } value={ acceptTerms } label="[WARUNKI]" type="checkbox" className="mr-auto"/>
                        <Button className="mx-auto mt-6 md:mt-12">Zarejestruj się</Button>
                    </div>
                </div>
                
            </CirclesLayout>
        </>
    );
}

export default Rejestracja;