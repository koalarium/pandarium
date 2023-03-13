import Link from "next/link";
import { BsXDiamondFill } from "react-icons/bs";

type Props = {
    icon: any,
    text?: string,
    selected?: boolean,
    link: string,
    className?: string,
    onClick?: any
}

const PNavLink = ({icon, text, selected=false, link, onClick}: Props) => {
    return (
        <Link href={ link }>
            <div onClick={ onClick ? onClick : () => {} } className="group w-[70%] aspect-square mx-auto flex rounded-[20px] hover:bg-purple-300/[.2] cursor-pointer duration-300 relative">
                { icon }
                <div className="backdrop-blur-3xl bg-purple-950/[.7] max-w-[0px] md:group-hover:max-w-[200px] duration-300 rounded-2xl whitespace-nowrap flex translate-x-[100%] top-[50%] -translate-y-[50%] -right-[20px] absolute overflow-hidden">
                    <p className="text-white font-rubikbold px-5 py-3 uppercase mx-auto my-auto"> { text } </p>
                </div>
            </div>
        </Link>
        
    );
}

export default PNavLink;