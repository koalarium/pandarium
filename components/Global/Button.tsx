type Props ={
    content: string,
    variant: string,
    className?: string
}

let btnBoxShadow = ''
let btnActiveShadow = ''
let btnActiveTransform = ''

const Button = ({className, content,variant}: Props) => {
    if(variant==='0'){
        btnBoxShadow = 'shadow-[0_7px_0_0_#7e22ce]'
        btnActiveShadow = 'hover:shadow-[0_0_0_0_#7e22ce]'
        btnActiveTransform ='hover:translate-y-[2px]'
    } else if(variant==='1'){
        btnBoxShadow = 'shadow-[7px_0_0_0_#7e22ce]'
        btnActiveShadow = 'hover:shadow-[0_0_0_0_#7e22ce]'
        btnActiveTransform = 'hover:translate-x-[2px]'
    }

    return (
        <button className={`bg-purple-300 text-white text-sm md:text-xl z-50 lg:text-xl px-12 py-2 lg:py-3 xl:py-4 lg:px-16 xl:px-20 uppercase font-rubikbold rounded-xl lg:rounded-2xl hover:bg-[#c153e0] transition-all duration-300 ${btnBoxShadow}  ${btnActiveShadow} ${btnActiveTransform} ${className}`}>{content}</button>
    );
}

export default Button;