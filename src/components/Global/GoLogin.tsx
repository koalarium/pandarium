import { useRouter } from "next/router";
import { BsXDiamondFill } from "react-icons/bs"

const GoLogin = () => {

    const router = useRouter();

    const redirectToPanel = () => {
        router.push("/panel");
    }

    return (
        <div className="group fixed z-[9999] right-[2%] top-[3%] flex">
            <div onClick={ redirectToPanel } className="group-hover:bg-black-100/[0.5] border-[2px] border-transparent group-hover:border-purple-100/[.2] bg-black-100/[0.3] group-hover:rounded-l-none rounded-xl p-4 cursor-pointer duration-300 flex">
                <BsXDiamondFill className="group-hover:fill-white group-hover:scale-[0.8] w-[24px] h-[24px] fill-white group-hover:rotate-180 duration-300"/>
            </div>
            <div className="bg-black-100/[0.5] backdrop-blur-2xl flex justify-left border-[2px] border-r-0 border-transparent group-hover:border-purple-100/[.2] align-middle rounded-l-xl px-12 py-4 absolute translate-x-[300%] group-hover:-translate-x-[100%] duration-300 -z-10">
                <p className="my-auto font-rubikbold text-white">PANEL</p>
            </div>
        </div>
        
    );
}

export default GoLogin;