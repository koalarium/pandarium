import { BsInstagram, BsFacebook } from "react-icons/bs"; 
import { FaDiscord } from "react-icons/fa";
import FooterLink from "./FooterLink";

type Props = {
    className?: string,
    small?: boolean,
}

const Footer = ({className, small = false}: Props) => {
    return (
        <>
            <div className="bg-purple-950 w-full mt-24 rounded-t-3xl overflow-hidden">

                { !small ? 
                <div className="p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
                    <div className="w-[16ch] mx-auto lg:m-0">
                        <h6 className="uppercase font-rubikbold text-white text-2xl xl:text-3xl 2xl:text-4xl text-center lg:text-left">Pandarium</h6>
                        <div className="mx-auto lg:m-0 w-[50%] md:w-[70%] xl:w-[100%] h-2 lg:h-3 xl:h-4 2xl:h-4 bg-purple-500/[0.8] rounded-md mt-2 lg:mt-3"></div>
                    </div>
                    <div className="mt-8 sm:mt-16 hidden lg:flex">
                        <div className="w-full xl:w-1/2 grid grid-cols-1 sm:grid-cols-3 text-base xl:text-lg">
                            <div className="flex flex-col gap-3">
                                <FooterLink href="" className="text-white">Twórcy</FooterLink>
                                <FooterLink href="" className="text-white">Pandarium roadmap</FooterLink>
                            </div>
                            <div className="flex flex-col gap-3">
                                <FooterLink href="" className="text-white">Wspieraj Pandy</FooterLink>
                                <FooterLink href="" className="text-white">Wspieraj Pandarium</FooterLink>
                            </div>
                            <div className="flex flex-col gap-3">
                                <FooterLink href="" className="text-white">Kontakt</FooterLink>
                                <FooterLink href="" className="text-white">FAQ</FooterLink>
                                <FooterLink href="" className="text-white">Gry</FooterLink>
                            </div>
                        </div>
                    </div>
                </div>
                : null }

                <div className={`p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 flex flex-col justify-center lg:flex-row `+(small ? `rounded-t-xl` : `lg:border-dotted border-none border-t-[5px] border-white/[0.2]`)}>
                    <div className="text-base xl:text-md gap-14 font-rubiklight mx-auto lg:ml-0 my-auto items-center hidden lg:flex">

                        { small ?
                        <div className="w-[16ch] mx-auto lg:m-0 lg:mr-4">
                            <h6 className="uppercase font-rubikbold text-white/[.6] text-2xl xl:text-3xl text-center lg:text-left">Pandarium</h6>
                            <div className="mx-auto lg:m-0 w-[50%] md:w-[70%] xl:w-[100%] h-2 lg:h-3 xl:h-4 bg-white/[0.2] rounded-md mt-1 lg:mt-2"></div>
                        </div>
                        :
                        <h6 className="text-white/[.7] uppercase">Pandarium &copy; 2023</h6>
                        }

                        <FooterLink href="" className="text-white/[.8]">Polityka prywatności</FooterLink>
                        <FooterLink href="" className="text-white/[.8]">Polityka ciasteczek</FooterLink>

                    </div>
                    <div className={`mx-auto lg:mt-0 lg:mr-0 lg:ml-auto flex gap-4 text-white my-auto `+(small ? `flex-wrap justify-center` : null)}>
                        
                        { small ? 
                        <h6 className="text-white/[.7] uppercase w-full text-center hidden lg:block">Pandarium &copy; 2023</h6>
                        : null }

                        <div className="group w-[44px] md:w-[45px] xl:w-[55px] aspect-square overflow-hidden border-2 px-2 flex rounded-full border-white cursor-pointer hover:border-facebook hover:bg-facebook duration-300">
                            <BsFacebook className="group-hover:scale-[0.8] duration-300 text-lg lg:text-2xl xl:text-3xl my-auto mx-auto"/>
                        </div>
                        <div className="group w-[44px] md:w-[45px] xl:w-[55px] aspect-square overflow-hidden border-2 px-2 flex rounded-full border-white cursor-pointer hover:border-instagram hover:bg-instagram duration-300">
                            <BsInstagram className="group-hover:scale-[0.8] duration-300 text-lg lg:text-2xl xl:text-3xl my-auto mx-auto"/>
                        </div>
                        <div className="group w-[44px] md:w-[45px] xl:w-[55px] aspect-square overflow-hidden border-2 px-2 flex rounded-full border-white cursor-pointer hover:border-discord hover:bg-discord duration-300">
                            <FaDiscord className="group-hover:scale-[0.8] duration-300 text-lg lg:text-2xl xl:text-3xl my-auto mx-auto"/>
                        </div>
                        
                    </div>
                    <h6 className="text-white/[.7] uppercase w-full text-center mt-6 block lg:hidden">Pandarium &copy; 2023</h6>
                </div>
            </div>
        </>
    );
}

export default Footer;