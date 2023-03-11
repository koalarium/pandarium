import Link from "next/link";

type Props = {
    placeholder?: string,
    type: string,
    className?: string,
    value?: any,
    onChange?: any,
    label?: string,
    hidden?: boolean,
    readonly?: boolean,
    disabled?: boolean,
    required?: boolean,
    name?: string,
}

export const Input = ({placeholder="", type, className, value="", onChange, label, hidden=false, disabled=false, readonly=false, name="" , required=false}: Props) => {
    return (
        <div className={`flex ${type=="checkbox" ? "ml-2 mt-2" : "" }`}>
            { label ? 
            <label className={`${type=="checkbox" ? "mx-auto" : "" } text-base md:text-lg font-rubikmedium`}>{ label!="[WARUNKI]" ? label : <>Zgadzam się na <Link className="text-purple-300" href="/polityka-prywatnosci">warunki korzystania</Link> z serwisu</> }</label>
            : null }
            <input placeholder={ placeholder } value={ value } name={ name } disabled={ disabled ? true : false } readOnly={ readonly ? true : false } required={ required ? true : false } hidden={ hidden ? true : false } type={ type } onChange={ onChange ? onChange : () => {} } className={`${ className ? className : "" } ${ type=="checkbox" ? "w-1/12 cursor-pointer" : "w-full" } text-base md:text-lg rounded-2xl py-3 px-5 border-[4px] bg-white text-purple-950 border-purple-900/[.7] active:border-purple-300 focus-visible:border-purple-300 focus:border-purple-300/[1] focus:outline-0 target:outline-0 file:bg-purple-300 file:text-white file:px-4 file:py-1 file:rounded-xl file:border-none file:mr-4 selection:bg-purple-300/[0.3] active:outline-0 focus-within:outline-0 duration-300`}/>
        </div>
    );
}