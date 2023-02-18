type Props = {
    className?: string,
    children?: JSX.Element | JSX.Element[],
}

const Articles = ({className, children}:Props) => {
    return (
        <div className={`grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 ${className}`}>{children}</div>
    );
}

export default Articles;