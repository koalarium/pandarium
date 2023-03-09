import HeroAnimatedCircles from "../../components/Hero/HeroAnimatedDiv";
import { Head } from "next/document";

type Props = {
    children?: JSX.Element | JSX.Element[],
    className?: string,
}

const CirclesLayout = ({ children, className }: Props) => {
    return (
        <>
            <div className='h-[100vh] w-full text-white bg-purple-900 m-0 p-0 overflow-hidden relative'>
                <div className="absolute right-[50%] translate-x-[50%] top-[12%] sm:top-[15%] z-50 flex flex-col">
                    <div className={`${ className ? className : "" } w-[95vw] bg-black-100/[0.2] `}>
                        { children }
                    </div>
                </div>
                <HeroAnimatedCircles className="-z-5 select-none"/>
            </div>

        </>
    );
}

export default CirclesLayout;