type Props ={
    content: string,
    variant: string,
    className?: string,
    onClick?: any,
    hero?: boolean,
}

const Button = ({className, content, variant, onClick, hero=false}: Props) => {
    return (
        <>
            <button onClick={ onClick ? onClick : () => {} } className={`${ className ? className : "" } ${ variant == "0"? "shadow-[0_6px_0_0_#7e22ce] hover:shadow-[0_0_0_0_#7e22ce] hover:translate-y-[2px] text-white" : variant == "1"? "shadow-[6px_0_0_0_#7e22ce] hover:shadow-[0_0_0_0_#7e22ce] hover:translate-x-[2px] text-white": variant == "2"? "shadow-[3px_-3px_0_0_#72A11D] hover:shadow-[0_0_0_0_#72A11D] hover:translate-x-[2px] hover:translate-y-[-2px] hover:bg-green-500 hover:text-white bg-white text-green-600": ""} ${hero==false? 'text-xs md:text-sm px-6 py-2 lg:py-3 lg:px-8 xl:px-10' : 'text-sm md:text-lg xl:text-xl px-12 py-2 lg:py-3 xl:py-4 lg:px-16 shadow-[0_6px_0_0_#7e22ce] ' } bg-purple-300 uppercase font-rubikbold z-50 hover:bg-[#c153e0] rounded-xl lg:rounded-2xl transition-all duration-300` }>{ content }</button> 
        </>
    );
}

export default Button;