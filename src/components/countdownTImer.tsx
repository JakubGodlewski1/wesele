import {useEffect, useState} from "react";

const weddingDate= "2024-10-26T16:00"

const CountdownTImer = () => {
    const [timer, setTimer] = useState<null | {days: number, hours: number, minutes: number, seconds: number}>(null)
    function getTimeDifference(start: string, end: string): { days: number, hours: number, minutes: number, seconds: number } {
        // Parse the dates
        const startDate = new Date(start);
        const endDate = new Date(end);

        // Calculate the difference in milliseconds
        let difference = Math.abs(endDate.getTime() - startDate.getTime());

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        difference -= days * (1000 * 60 * 60 * 24);

        const hours = Math.floor(difference / (1000 * 60 * 60));
        difference -= hours * (1000 * 60 * 60);

        const minutes = Math.floor(difference / (1000 * 60));
        difference -= minutes * (1000 * 60);

        const seconds = Math.floor(difference / 1000);

        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    useEffect(() => {
        setInterval(()=>{
            const time = getTimeDifference(new Date().toISOString(), weddingDate)
            setTimer(time)
        },1000)
    }, []);



    if (!timer){
        return <span className="block text-center mb-2">Obliczam...</span>
    }

    return (
        <div className="flex items-center justify-center m-auto space-x-4 text-2xl md:text-5xl font-bold w-[60%]">
            <div className="flex flex-col items-center">
                <span className="text-gray-800">{timer.days}</span>
                <span className="text-xs text-gray-500">{timer.days === 1 ? "dzień" : "dni"}</span>
            </div>
            <span className="self-start">:</span>
            <div className="flex flex-col items-center">
                <span className="text-gray-800">{timer.hours}</span>
                <span className="text-xs text-gray-500">{timer.hours === 1 ? "godzina" : timer.hours < 5 && timer.hours > 1 ? "godziny" : "godzin"}</span>
            </div>
            <span className="self-start">:</span>
            <div className="flex flex-col items-center">
                <span className="text-gray-800">{timer.minutes}</span>
                <span className="text-xs text-gray-500">{timer.minutes === 1 ? "minuta" : timer.minutes < 5 && timer.minutes > 1 ? "minuty" : "minut"}</span>
            </div>
            <span className="self-start">:</span>
            <div className="flex flex-col items-center">
                <span className="text-gray-800">{timer.seconds}</span>
                <span className="text-xs text-gray-500">{timer.seconds === 1 ? "sekunda" : timer.seconds < 5 && timer.seconds > 1 ? "sekundy" : "sekund"}</span>
            </div>
        </div>
    );
};

export default CountdownTImer;