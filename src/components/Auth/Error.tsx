import { BsFillExclamationTriangleFill } from 'react-icons/bs';

const Error = ({ message }: any) => {
    return (
        <p className={`text-white bg-purple-300 rounded-lg font-rubikbold text-base md:text-xl py-2 text-center animate-pulse duration-300 delay-75 flex justify-center align-middle justify-items-center`}><BsFillExclamationTriangleFill className="my-auto mx-3 text-lg"/> <span className="w-4/5">{ message }</span></p> 
    );
}

export default Error;