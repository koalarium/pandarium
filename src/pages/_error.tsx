import Button from "../components/Forms/Button";
import Image from "next/image";
import { useRouter } from "next/router";

const Error = ({ statusCode }: any) => {

    const router = useRouter();

    const returnHome = () => {
        router.push('/');
    }

    return (
        <div className="w-full h-[100vh] flex overflow-hidden bg-purple-900 relative">
            <div className="absolute flex top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] h-fit w-full bg-black-100/[.2] shadow-2xl py-12 px-4">
                <div className="my-auto mx-auto lg:mr-12 lg:ml-auto">
                    <div className="mx-auto lg:ml-auto my-auto flex flex-col">
                        <span className="text-3xl lg:text-5xl font-rubikbold text-white flex justify-center align-middle">{ statusCode }<div className="w-[10px] h-[35px] lg:h-[50px] rounded-md mx-6 bg-purple-300"></div>Ups...</span>
                        <p className="mt-12 text-base lg:text-xl text-center text-white/[.85]">Inżynier Ignacy, zaprasza cię do strony głównej, <br/> abyś na spokojnie mógł się odnaleźć!</p>
                        <Button onClick={ returnHome } className="mt-12 mx-auto">Powrót</Button>
                    </div>
                </div>
                <div className="relative aspect-square w-[400px] my-auto -translate-y-5 hidden lg:block mr-auto mt-4">
                    <Image fill className="object-contain drop-shadow-2xl animate-pandaHero" src="/images/pandas/engineer/engineer-outline.png" alt="404.jpg"/>
                </div>
            </div>
        </div>
    );
}

Error.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error;