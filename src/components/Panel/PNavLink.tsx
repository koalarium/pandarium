import Link from "next/link";
import { BsXDiamondFill } from "react-icons/bs";

type Props = {
    icon: any,
    text?: string,
    selected?: boolean,
    link: string,
    className?: string,
}

const PNavLink = ({icon, text, selected=false, link}: Props) => {
    return (
        <Link href={ link }>
            <div className="group w-[70%] aspect-square mx-auto flex rounded-[20px] hover:bg-purple-300/[.2] cursor-pointer duration-300">
                { icon }
            </div>
        </Link>
        
    );
}

export default PNavLink;