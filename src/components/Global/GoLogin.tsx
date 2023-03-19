import { useRouter } from "next/router";
import { BsXDiamondFill } from "react-icons/bs"

const GoLogin = () => {

    const router = useRouter();

    const redirectToPanel = () => {
        router.push("/panel");
    }

    return (
        <div onClick={ redirectToPanel } className="group fixed z-[9999] right-[2%] top-[3%] flex cursor-pointer">
            <div className="group-hover:bg-black-100/[0.5] delay-0 group-hover:delay-75 bg-black-100/[0.3] group-hover:rounded-l-none rounded-xl p-4 duration-300 flex">
                <BsXDiamondFill className="group-hover:fill-white group-hover:scale-[0.8] w-[24px] h-[24px] fill-white group-hover:rotate-180 duration-300"/>
            </div>
            <div className="bg-black-100/[0.5] delay-75 group-hover:delay-0 backdrop-blur-2xl flex justify-left group-hover:max-w-[155px] max-w-[0px] px-0 py-4 group-hover:px-12 overflow-hidden group-hover:border-[0px] border-r-0 border-purple-10/[0] group-hover:border-purple-100/[.2] align-middle rounded-l-xl absolute -translate-x-[100%] duration-300 -z-10">
                <p className="my-auto font-rubikbold text-white">PANEL</p>
            </div>
        </div>
        
    );
}

export default GoLogin;