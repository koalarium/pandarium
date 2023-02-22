type Props = {
    children?: JSX.Element | JSX.Element[],
    className?: string;
    id?: string;
}

const Section = ({children, className, id}: Props) => {
    return (
        <div id={ id ? id : "" } className={`pt-28 sm:pt-48 md:pt-48 lg:pt-48 2xl:pt-48 ${className}`}>
            { children }
        </div>
    );
}

export default Section;