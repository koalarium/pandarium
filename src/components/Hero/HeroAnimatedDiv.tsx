type Props = {
    className?: string,
}

const HeroAnimatedCircles = ({ className }: Props) => {
    return (
        <div className={ className ? className : ""}>
            <div className="w-[1npm50px] md:w-[450px] delay-200 aspect-square absolute animate-moveLeft -top-20 -left-10 bg-purple-300 rounded-full blur-[150px]"></div>
            <div className="w-[250px] md:w-[550px] delay-50 aspect-square absolute animate-moveLeft -top-20 right-96 bg-purple-300 rounded-full blur-[150px]"></div>
            <div className="w-[500px] md:w-[800px] delay-0 aspect-square absolute animate-moveRight -bottom-80 left-20 bg-purple-300 rounded-full blur-[150px]"></div>
            <div className="w-[300px] md:w-[600px] delay-300 aspect-square absolute animate-moveRight -bottom-40 -right-2 bg-purple-300 rounded-full blur-[150px]"></div>
        </div>
    );
}

export default HeroAnimatedCircles;