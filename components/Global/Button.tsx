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
<<<<<<< HEAD
        <button className={`bg-purple-300 text-white text-xs sm:text-sm md:text-base mt-8 z-50 lg:text-md xl:text-lg lg:py-3 lg:px-12 uppercase font-bold px-10 py-2 rounded-lg hover:bg-[#c153e0] transition-all duration-300 ${btnBoxShadow}  ${btnActiveShadow} ${btnActiveTransform} ${className}`}>{content}</button>
=======
        <button className={`bg-purple-300 text-white text-md md:text-md z-50 lg:text-xl lg:py-4 lg:px-20 uppercase font-rubikbold px-12 py-4 rounded-2xl hover:bg-[#c153e0] transition-all duration-300 ${btnBoxShadow}  ${btnActiveShadow} ${btnActiveTransform} ${className}`}>{content}</button>
>>>>>>> b0a7246a0749ae4715be4e71d1154e4495a7f522
    );
}

export default Button;