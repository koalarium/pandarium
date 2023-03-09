type Props = {
    className?: string,
    children: string,
    onClick?: any,
}

const Button = ({className, children, onClick}: Props) => {
    return (
        <>
            <button onClick={ onClick ? onClick : () => {} } className={`${ className ? className : "" } hover:bg-white/[0.9] hover:text-purple-300 duration-300 bg-purple-300 rounded-xl py-3 px-8 md:px-24 w-fit font-rubikbold uppercase text-base xl:text-lg`}>{ children }</button> 
        </>
    );
}

export default Button;