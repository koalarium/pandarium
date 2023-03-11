import HeroAnimatedCircles from "../../components/Hero/HeroAnimatedDiv";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";


type Props = {
    children?: JSX.Element | JSX.Element[],
    className?: string,
}

const LoginLayout = ({ children, className }: Props) => {

    const router = useRouter();
    const { data: session} = useSession()

    if (session) {
      router.push('/')
    }

    return (
        <>
            <div className='h-[100vh] w-full text-white bg-purple-900 m-0 p-0 overflow-hidden relative'>
                <div className="absolute right-[50%] translate-x-[50%] top-[50%] -translate-y-[50%] z-50 flex flex-col">
                    <div className={`${ className ? className : "" } w-[95vw] bg-black-100/[0.2] `}>
                        { children }
                    </div>
                </div>
                <HeroAnimatedCircles className="-z-5 select-none"/>
            </div>

        </>
    );
}

export default LoginLayout;