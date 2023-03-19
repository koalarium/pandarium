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
    
    if (type == "checkbox") {

        return (
            <label className={`text-base md:text-lg font-rubikmedium mt-4 flex w-full cursor-pointer justify-items-center justify-center`}>

                { label ? 
                    label!="[WARUNKI]" ? <p>label</p> : <p className="ml-auto">Zgadzam się na <Link className="text-purple-300 hover:text-purple-100 duration-300" href="/polityka-prywatnosci">warunki korzystania</Link> z serwisu</p>
                : null }

                <input placeholder={ placeholder } value={ value } name={ name } disabled={ disabled ? true : false } readOnly={ readonly ? true : false } required={ required ? true : false } hidden={ hidden ? true : false } type={ type } onChange={ onChange ? onChange : () => {} } className={`${ className ? className : "" } h-[25px] aspect-square cursor-pointer ml-5 mr-auto accent-purple-300 hover:accent-purple-100 text-base md:text-lg rounded-[250px] py-3 px-5 border-[4px] bg-white border-purple-900/[.7] active:border-purple-300 focus-visible:border-purple-300 focus:border-purple-300/[1] focus:outline-0 target:outline-0 file:bg-purple-300 file:text-white file:px-4 file:py-1 file:rounded-xl file:border-none file:mr-4 active:outline-0 focus-within:outline-0 duration-300`}/>

            </label>
        );

    } else {

        return (
            <div className={`flex flex-col`}>
                { label ? 
                    <label className={`text-base md:text-lg font-rubikmedium mb-2`}>{ label }</label>
                : null }
                <input placeholder={ placeholder } value={ value } name={ name } disabled={ disabled ? true : false } readOnly={ readonly ? true : false } required={ required ? true : false } hidden={ hidden ? true : false } type={ type } onChange={ onChange ? onChange : () => {} } className={`${ className ? className : "" } w-full text-purple-950 text-base md:text-lg rounded-2xl py-3 px-5 border-[4px] bg-white border-purple-900/[.7] active:border-purple-300 focus-visible:border-purple-300 focus:border-purple-300/[1] focus:outline-0 target:outline-0 file:bg-purple-300 file:text-white file:px-4 file:py-1 file:rounded-xl file:border-none file:mr-4 selection:bg-purple-300/[0.3] active:outline-0 focus-within:outline-0 duration-300`}/>
            </div>
        );

    }
}