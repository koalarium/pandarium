type Props = {
    className?: string,
    children?: JSX.Element | JSX.Element[],
}

export const SmContainer = ({ className, children }: Props) => {
    return (
        <div className={`my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28 mx-2 sm:mx-4 md:mx-8 lg:mx-10 xl:mx-16 2xl:mx-20 ${ className }`}>
            { children }
        </div>
    );
}

export const MdContainer = ({ className, children }: Props) => {
    return (
        <div className={`my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28 mx-4 sm:mx-6 md:mx-14 lg:mx-16 xl:mx-20 2xl:mx-24 ${ className }`}>
            { children }
        </div>
    );
}
export const LgContainer = ({ className, children }: Props) => {
    return (
        <div className={`my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28 mx-6 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-28 2xl:mx-56 ${ className }`}>
            { children }
        </div>
    );
}

export const XlContainer = ({ className, children }: Props) => {
    return (
        <div className={`my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28 mx-6 sm:mx-10 md:mx-16 lg:mx-24 xl:max-w-[980px] xl:mx-auto ${ className }`}>
            { children }
        </div>
    );
}

export const TitleContainer = ({ className, children }: Props) => {
    return (
        <div className={`my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28 ${ className }`}>
            { children }
        </div>
    );
}

