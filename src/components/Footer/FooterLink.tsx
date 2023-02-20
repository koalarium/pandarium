import Link from "next/link";

type Props = {
    href: string,
    className?: string,
    children?: string | JSX.Element,
}

const FooterLink = ({ href, className, children }: Props) => {
    return (
        <>
            <Link href={href} className={ className+` group overflow-hidden w-fit` }>
                { children }
                <div className="opacity-0 -translate-x-full group-hover:translate-x-0 group-hover:opacity-70 h-[2px] rounded-xl w-full bg-white  duration-300"></div>
            </Link>
        </>
    );
}

export default FooterLink;