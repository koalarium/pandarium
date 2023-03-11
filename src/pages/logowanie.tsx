import HeroAnimatedCircles from "../components/Hero/HeroAnimatedDiv";
import Head from 'next/head';
import { TitleContainer } from "../components/Global/Containers";
import Title from "../components/Global/Title";
import { Input } from "../components/Forms/Input";
import Button from "../components/Forms/Button";
import { useEffect, useState } from "react";
import Link from "next/link";
import CirclesLayout from "./layouts/CirclesLayout";
import { Fa } from "react-icons/fa";

const Logowanie = () => {

        const [login, setLogin] = useState("");
        const [password, setPassword] = useState("");

        useEffect(() => {
            
        }, [])

    return (
        <>
            <CirclesLayout className="xl:w-[60vw] 2xl:w-[40vw] h-fit rounded-3xl px-6 sm:px-12 py-20 backdrop-blur-3xl flex flex-col">
                    
                <Head>
                    <title>Pandarium - logowanie</title>
                    <meta name="description" content="Poznaj nasze wszystkie minigierki oraz najbardziej urocze pandy w przebraniach!" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="gap-2 md:gap-4">
                    <div className="mb-6 md:mb-12">
                        <h1 className="font-rubikbold uppercase text-base sm:text-xl md:text-2xl text-center text-white/[0.7]">Pandarium</h1>
                        <h2 className="font-rubikbold uppercase text-xl sm:text-3xl md:text-4xl text-center">Logowanie</h2>
                    </div>
                    <div className="w-[100%] xl:w-[80%] mx-auto flex flex-col gap-3">
                        <Input onChange={ (e: any) => { setLogin(e.target.value) } } value={ login } placeholder="E-mail" type="text"/> 
                        <Input onChange={ (e: any) => { setPassword(e.target.value) } } value={ password } placeholder="Hasło" type="password"/>
                        <Button className="mx-auto mt-6 md:mt-12">Zaloguj się</Button>
                    </div>
                </div>
                
                <p className="mt-20 text-base md:text-lg mr-0 md:mr-5 text-center md:text-right">Nie masz konta? <Link href="/rejestracja" legacyBehavior><a className="font-rubikmedium text-purple-300/[0.8] hover:text-purple-100 duration-300 ml-1">Zarejestruj się.</a></Link></p>
                <p className="mt-1 text-base md:text-lg mr-0 md:mr-5 text-center md:text-right">Zapomniałeś hasła? <Link href="/przypomnij-haslo" legacyBehavior><a className="font-rubikmedium text-purple-300/[0.8] hover:text-purple-100 duration-300 ml-1">Przypomnij hasło.</a></Link></p>

            </CirclesLayout>
        </>
    );
}

export default Logowanie;