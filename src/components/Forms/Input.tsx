type Props = {
    placeholder: string,
    type: string,
    className?: string,
    value?: string,
    onChange?: any,
    label?: string,
    hidden?: boolean,
    readonly?: boolean,
    disabled?: boolean,
}

export const Input = ({placeholder, type, className, value, onChange, label, hidden=false, disabled=false, readonly=false}: Props) => {
    return (
        <>
            { label ? 
            <label>{ label }</label>
            : null }
            <input placeholder={ placeholder } value={ value ? value : "" } disabled={ disabled ? true : false } readOnly={ readonly ? true : false } hidden={ hidden ? true : false } type={ type } onChange={ onChange ? onChange : () => {} } className={`${ className ? className : "" } w-full text-base md:text-lg rounded-2xl py-3 px-5 border-[4px] bg-white text-purple-950 border-purple-900/[.7] active:border-purple-300 focus-visible:border-purple-300 focus:border-purple-300/[1] focus:outline-0 target:outline-0 file:bg-purple-300 file:text-white file:px-4 file:py-1 file:rounded-xl file:border-none file:mr-4 selection:bg-purple-300/[0.3] active:outline-0 focus-within:outline-0 duration-300`}/>
        </>
    );
}