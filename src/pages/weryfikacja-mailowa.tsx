import CirclesLayout from "./layouts/LoginLayout"
import Head from 'next/head';
import Error from "../components/Auth/Error";

const WeryfikacjaMailowa = () => {
    return (
        <CirclesLayout className="xl:w-[60vw] 2xl:w-[40vw] h-fit rounded-3xl px-6 sm:px-12 py-20 backdrop-blur-3xl flex flex-col">
            <Head>
                    <title>Pandarium - zarejestruj się</title>
                    <meta name="description" content="Poznaj nasze wszystkie minigierki oraz najbardziej urocze pandy w przebraniach!" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="mb-6 md:mb-12">
                    <h1 className="font-rubikbold uppercase text-base sm:text-xl md:text-2xl text-center text-white/[0.7]">Pandarium</h1>
                    <h2 className="font-rubikbold uppercase text-xl sm:text-3xl md:text-4xl text-center">Konto zostało utworzone!</h2>
                </div>
                <div className="w-[100%] xl:w-[80%] mx-auto flex flex-col gap-3">
                    <Error message="Sprawdź podany mail, w celu weryfikacji!" />
                </div>
        </CirclesLayout>
    );
}

export default WeryfikacjaMailowa;