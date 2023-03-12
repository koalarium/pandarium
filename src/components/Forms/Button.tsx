type Props = {
    className?: string,
    children: string,
    onClick?: any,
    type?: 'submit' | 'reset' | 'button',
}

const Button = ({ className, children, onClick, type="button" }: Props) => {
    return (
        <>
            <button onClick={ onClick ? onClick : () => {} } type={ type } className={`${ className ? className : "" } hover:bg-white/[0.9] hover:text-purple-300 text-white duration-300 bg-purple-300 rounded-xl py-3 px-8 md:px-24 w-fit font-rubikbold uppercase text-base xl:text-lg`}>{ children }</button> 
        </>
    );
}

export default Button;