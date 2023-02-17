type Props={
    content:string,
    className?:string,
}

const Date = ({content, className}: Props) => {
    return (
        <div className={`my-auto align-middle font-rubikbold rounded-md bg-purple-900 text-white px-2 mr-2 text-xs sm:text-sm text-center py-3 ${className}`}>{content}</div>
    );
}

export default Date;