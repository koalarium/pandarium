import Head from 'next/head';
import { Input } from "../components/Forms/Input";
import Button from "../components/Forms/Button";
import { useEffect, useRef, useState } from "react";
import Error from '../components/Auth/Error';
import Router, { useRouter } from 'next/router'
import LoginLayout from './layouts/LoginLayout';

const Rejestracja = () => {

        const [login, setLogin] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [repeatPassword, setRepeatPassword] = useState("");
        const [birthday, setBirthday] = useState("");
        const [acceptTerms, setAcceptTerms] = useState(false);
        const [result, setResult] = useState<any>(false);
        const router = useRouter();

        const submitHandler = async () => {

            if (login == "" || password == "" || birthday == "" || email == "") {
                setResult({message: "Nie uzupełniono wszystkich danych"});
                return;
            } 

            if (!acceptTerms) {
                setResult({message: "Nie zaakceptowano warunków!"});
                return;
            }

            const data = { login, email, password, repeatPassword, birthday, acceptTerms }

            const res = await fetch('/api/user/register', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });

            setResult(await res.json());

            if (res.status == 201){
                Router.push('/weryfikacja-mailowa');
            }
        }

        useEffect(() => {
        }, [])

    return (
        <>
            <LoginLayout className="xl:w-[60vw] 2xl:w-[40vw] h-fit rounded-3xl px-6 sm:px-12 py-20 backdrop-blur-3xl flex flex-col">
                    
                <Head>
                    <title>Pandarium - zarejestruj się</title>
                    <meta name="description" content="Poznaj nasze wszystkie minigierki oraz najbardziej urocze pandy w przebraniach!" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="">
                    <div className="mb-6 md:mb-12">
                        <h1 className="font-rubikbold uppercase text-base sm:text-xl md:text-2xl text-center text-white/[0.7]">Pandarium</h1>
                        <h2 className="font-rubikbold uppercase text-xl sm:text-3xl md:text-4xl text-center">Rejestacja</h2>
                    </div>
                    <div className="w-[100%] xl:w-[80%] mx-auto flex flex-col gap-3">
                        { result && result.message != "Użytkownik został stworzony!" ?
                            <Error message={ result.message } />
                        : <></>}
                        <Input onChange={ (e: any) => { setLogin(e.target.value) } } value={ login } placeholder="Nick" type="text" required/>
                        <Input onChange={ (e: any) => { setEmail(e.target.value) } } value={ email } placeholder="E-mail" type="email" required/>
                        <Input onChange={ (e: any) => { setBirthday(e.target.value) } } value={ birthday } placeholder="Data urodzenia" type="date" required/>
                        <Input onChange={ (e: any) => { setPassword(e.target.value) } } value={ password } placeholder="Hasło" type="password" required/>
                        <Input onChange={ (e: any) => { setRepeatPassword(e.target.value) } } value={ repeatPassword } placeholder="Potwierdź hasło" type="password" required/>
                        <Input onChange={ (e: any) => { setAcceptTerms(!acceptTerms) } } value={ acceptTerms } label="[WARUNKI]" type="checkbox" className="mr-auto" required/>
                        <Button onClick={ submitHandler } type="submit" className="mx-auto mt-6 md:mt-12">Zarejestruj się</Button>
                    </div>
                </div>

            </LoginLayout>
        </>
    );
}

export default Rejestracja;