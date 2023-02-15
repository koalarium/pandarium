type Props ={
    content: string,
    variant: string,
    className?: string
}

let btnBoxShadow = ''
let btnActiveShadow = ''
let btnActiveTransform = ''

// variant 0: cien na dole, variant 1: cien po prawej stronie
const Button = ({className, content,variant}: Props) => {
    if(variant==='0'){
        btnBoxShadow = 'shadow-[0_5px_0_0_#7e22ce]'
        btnActiveShadow = 'hover:shadow-[0_0_0_0_#7e22ce]'
        btnActiveTransform ='hover:translate-y-[2px]'
    } else if(variant==='1'){
        btnBoxShadow = 'shadow-[5px_0_0_0_#7e22ce]'
        btnActiveShadow = 'hover:shadow-[0_0_0_0_#7e22ce]'
        btnActiveTransform = 'hover:translate-x-[2px]'
    }

    return (
        <>
            <button className={`bg-purple-300 text-white text-xs md:mr-auto md:text-sm mt-8 z-50 lg:text-md lg:py-3 lg:px-12 uppercase font-bold px-10 py-2 rounded-lg hover:bg-[#c153e0] transition-all duration-300 ${btnBoxShadow}  ${btnActiveShadow} ${btnActiveTransform} ${className}`}>{content}</button>
        </>
    );
}

export default Button;