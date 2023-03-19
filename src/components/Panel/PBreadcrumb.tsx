type Props = {
    primary: string,
    secondary: string,
    className?: string,
}

const PBreadcrumb = ({primary, secondary, className}: Props) => {
    return (
        <div className={`${ className } mb-4 mt-16 w-[100%] h-fit`}>
            <h2 className="uppercase text-white/[.7] text-2xl font-rubikbold">{ secondary }</h2>
            <h1 className="uppercase text-white/[.9] text-4xl font-rubikbold">{ primary }</h1>
        </div>
    );
}

export default PBreadcrumb;