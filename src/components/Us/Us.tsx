import Image from 'next/image';
import { useState } from 'react';
import { LgContainer, MdContainer, SmContainer, XlContainer } from '../Global/Containers';

const Us = () => {

    const people = [
        {
            name: 'Mateusz Krysiak',
            quote: 'Od zawsze chciałem stworzyć miejsce w Internecie, które naprawdę będzie jednym z lepszych!',
            photo: 'mati.jpg',
            roles: ['Project Manager', 'UX/UI Designer', 'Fullstack Developer', 'DevOps'],
        },
        {
            name: 'Olga Siek',
            quote: 'Od zawsze chciałem stworzyć miejsce w Internecie, które naprawdę będzie jednym z lepszych!',
            photo: 'olga.png',
            roles: ['Frontend Developer', 'Graphic Designer'],
        },
        {
            name: 'Michał Świercz',
            quote: 'Mamy tu trzy sposoby działania: właściwy sposób, zły sposób i sposób, w jaki ja to robię',
            photo: 'michal.jpg',
            roles: ['Frontend Developer', 'Graphic Designer'],
        },
        {
            name: 'Kacper Krawiec',
            quote: 'Jeżeli kiedyś wygram na loterii miliard, całą nagrodę przekaże mojemu największemu hejterowi.',
            photo: 'kacper.jpg',
            roles: ['Frontend Developer'],
        },
        {
            name: 'Jakub Grabowski',
            quote: 'Nie bój się śmierci, lękaj się nieprzeżytego życia',
            photo: 'kuba.jpg',
            roles: ['Frontend Developer'],
        },
        {
            name: 'Ignacy Zieliński',
            quote: 'Jesteśmy taką historią, jaką sobie opowiadamy.',
            photo: 'ignacy.jpg',
            roles: ['Frontend Developer'],
        },
    ]
    
    const [currentPerson, setCurrentPerson] = useState(people[0]);

    const hoverHandler = (e: any) => {
        let person: any = people.find(p => p.name == e.target.alt);
        setCurrentPerson(person);
    }

    const nullHandler = () => {}
    
    return (
        <>  
            <LgContainer>
                <div className="animate-[rotatePictures_12s_linear_2s_infinite_reverse] animate-[moveAround_12s_linear_2s_infinite] hidden"></div>
                <div className="animate-[rotatePictures_12s_linear_4s_infinite_reverse] animate-[moveAround_12s_linear_4s_infinite] hidden"></div>
                <div className="animate-[rotatePictures_12s_linear_6s_infinite_reverse] animate-[moveAround_12s_linear_6s_infinite] hidden"></div>
                <div className="animate-[rotatePictures_12s_linear_8s_infinite_reverse] animate-[moveAround_12s_linear_8s_infinite] hidden"></div>
                <div className="animate-[rotatePictures_12s_linear_10s_infinite_reverse] animate-[moveAround_12s_linear_10s_infinite] hidden"></div>

                <div className="h-[600px] bg-green-900 w-full px-6 md:px-20 py-12 relative rounded-[60px] overflow-hidden">
                    <div className="border-green-500 border-[5px] rounded-full w-[48%] min-[430px]:w-[44%] min-[480px]:w-[38%] min-[530px]:w-[35%] sm:w-[36%] aspect-square min-[430px]:translate-x-[50%] min-[480px]:translate-x-[75%] min-[530px]:translate-x-[90%] sm:-translate-x-[15%] -translate-x-[-50%] translate-y-[23%] absolute bottom-0 left-0 z-20">
                        <div className="w-full h-full overflow-hidden rounded-full z-10 absolute">
                            <Image className="object-cover" fill src={ `/`+currentPerson.photo } alt={ currentPerson.photo }/>
                        </div>
                        { people.map((p, index) => (
                            <div key={index} className="absolute w-[35%] aspect-[38/100] left-1/2 bottom-1/2 -translate-x-1/2 group z-10">
                                <div className={"absolute h-full w-full origin-[50%_100%] -rotate-[115deg] lg:-rotate-45 "+(index == 0 ? `animate-[moveAround_12s_linear_0s_infinite]` : `animate-[moveAround_12s_linear_${index*2+"s_"}infinite]`) } >
                                    <div className={`relative rounded-full overflow-hidden aspect-square border-[5px] border-transparent group-hover:border-green-300 duration-300 -translate-x-1/2 w-full `+(index == 0 ? "animate-rotatePictures" : `animate-[rotatePictures_12s_linear_${index*2+"s_"}infinite_reverse]`)}>
                                        <Image alt={p.name} fill className={`object-cover duration-300 group-hover:scale-[1.2] hover:border-green-300 cursor-pointer inset-0 border-[5px] border-green-500 w-full aspect-square rounded-full `} src={"/"+p.photo}   onMouseEnter={ currentPerson.name !== p.name ? hoverHandler : nullHandler } />
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>

                    <div className="justify-items-end h-content hidden lg:grid absolute z-10 right-24 top-12">
                        <div className="h-full flex">
                            <div className="order-last h-content w-2 2xl:w-3 bg-white/[.5] rounded-sm ml-5"></div>
                            <div className="text-right flex flex-col ml-7 mr-2">
                                <h5 className="uppercase font-rubikbold mt-2 lg:mt-3 lg:mb-1 2xl:mt-4 2xl:mb-2 text-lg sm:text-2xl md:text-3xl xl:text-4xl text-white/[.5]">Nasza pandowa rodzina</h5>
                                <h4 className="uppercase font-rubikbold text-xl sm:text-3xl md:text-4xl xl:text-5xl text-white">Poznaj nasz zespół</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit mx-auto lg:hidden absolute z-10 inset-x-0"><div className="text-center w-full "><div className="flex md:mb-1 lg:mb-2">  <h5 className="text-left font-rubikbold text-xl sm:text-3xl md:text-4xl xl:text-5xl uppercase flex-none text-white/[.5]">Nasza pandowa rodzina</h5><div className="h-2 lg:h-3 w-full my-auto ml-2 bg-white/[.5] grow rounded-sm"></div></div><h4 className="uppercase font-rubikbold text-lg sm:text-2xl md:text-3xl xl:text-4xl text-white ">Poznaj nasz zespół</h4></div></div>
                    
                    <div className="w-full h-full flex flex-col justify-end items-center absolute z-10 inset-x-0 lg:right-24 lg:-left-24 top-24 lg:top-36">  
                        <h5 id="name" className="text-green-500 mt-14 lg:mt-28 lg:ml-auto font-rubikbold text-lg sm:text-xl md:text-2xl xl:text-3xl bg-white/[0.9] w-fit px-5 py-2 rounded-xl ">{ currentPerson.name }</h5>
                        <p className="text-center lg:text-right w-[30ch] lg:w-[40ch] 2xl:w-[45ch] lg:ml-auto text-white text-md md:text-xl xl:text-2xl italic my-5">{ `"`+currentPerson.quote+`"` }</p>
                        <div className="mx-auto lg:mr-0 lg:ml-auto text-center lg:text-right mt-3 mb-auto gap-4 w-[35ch] lg:w-[50ch] flex flex-wrap flex-row-reverse justify-center lg:justify-start">
                            { currentPerson.roles.map((cp: any, index) => (
                                <span key={index} className="text-sm lg:text-xl text-white bg-white/[.2] rounded-xl px-5 py-2">{ cp }</span>
                            ))}
                        </div>
                    </div>
                    <Image alt="babmuses" fill className="object-left object-cover z-0 opacity-50" src="/images/patterns/big-bambos.svg"></Image>
                </div>
            </LgContainer>
        </>
    
    );
}

export default Us;