import { BsFillExclamationTriangleFill } from 'react-icons/bs';

const Error = ({ message }: any) => {
    return (
        <p className={`${message ? "opacity-100" : "opacity-0"} text-white bg-purple-300 rounded-lg font-rubikbold text-xl py-2 text-center animate-pulse duration-300 delay-75 flex justify-center align-middle justify-items-center`}><BsFillExclamationTriangleFill className="my-auto mr-3 text-lg"/> { message }</p> 
    );
}

export default Error;