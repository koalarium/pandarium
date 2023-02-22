type Props = {
    className?: string,
    children?: JSX.Element | JSX.Element[],
    vertical?: boolean,
    horizontal?: boolean,
}

export const SmContainer = ({ className, children, vertical=false, horizontal=true }: Props) => {
    return (
        <div className={`${ vertical ? "my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28" : "" } ${ horizontal ? "mx-2 sm:mx-4 md:mx-8 lg:mx-10 xl:mx-16 2xl:mx-20" : "" } ${ className }`}>
            { children }
        </div>
    );
}

export const MdContainer = ({ className, children, vertical=false, horizontal=true }: Props) => {
    return (
        <div className={`${ vertical ? "my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28" : "" } ${ horizontal ? " mx-4 sm:mx-6 md:mx-14 lg:mx-16 xl:mx-20 2xl:mx-24" : "" } ${ className }`}>
            { children }
        </div>
    );
}
export const LgContainer = ({ className, children, vertical=false, horizontal=true }: Props) => {
    return (
        <div className={`${ vertical ? "my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28" : "" } ${ horizontal ? "mx-6 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-28 2xl:mx-56" : "" } ${ className }`}>
            { children }
        </div>
    );
}

export const XlContainer = ({ className, children, vertical=false, horizontal=true }: Props) => {
    return (
        <div className={`${ vertical ? "my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28" : "" } ${ horizontal ? "mx-6 sm:mx-10 md:mx-16 lg:mx-24 xl:max-w-[980px] xl:mx-auto" : "" } ${ className }`}>
            { children }
        </div>
    );
}

export const TitleContainer = ({ className, children, vertical, horizontal=true }: Props) => {
    return (
        <div className={`mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28 ${ className }`}>
            { children }
        </div>
    );
}
