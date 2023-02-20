type Props={
    content:string,
    className?:string,
}

const Date = ({content, className}: Props) => {
    return (
        <>
            <div className={`my-auto flex-none align-middle rounded-xl bg-purple-900 text-white px-6 mr-0 sm:mr-2 mb-4 sm:mb-0 text-xl text-center py-6 font-rubikbold ${className} `}>{content}</div>
        </>
    );
}

export default Date;