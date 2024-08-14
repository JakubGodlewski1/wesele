import {Outlet, useLocation} from "react-router";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import rose1 from "./../assets/bgImages/rose tr.png"
import rose2 from "./../assets/bgImages/roses3 tr.png"
import heart1 from "./../assets/bgImages/hearts.png"
import heart2 from "./../assets/bgImages/hearts4 transparent.png"
import {useEffect, useState} from "react";

const RootLayout = () => {
    const pathame = useLocation().pathname
    const [randomDistances, setRandomDistances] = useState<number[]>([])
    const generateTopDistance = () => {
        let randomNr = Math.floor(Math.random() *200)
        if (pathame==="/"){
            randomNr = randomNr + 100
        }

        return randomNr
    }

    useEffect(() => {
        setRandomDistances([
            generateTopDistance(),
            generateTopDistance(),
            generateTopDistance(),
            generateTopDistance()
        ])
    }, [pathame]);


    if (randomDistances.length===0) {
        return <div>Ładowanie...</div>
    }

    return (
        <div className=" min-h-dvh flex flex-col relative overflow-hidden">
            <Navbar/>
            <div className={` mx-auto w-full ${pathame === "/" ? "p-0" : "p-6 max-w-screen-xl overflow-hidden "}`}>
                <img style={{top:`${randomDistances[0]+"vh"}`}} className={` left-[10vw] absolute h-[40vh]  opacity-20 rotate-12`}src={rose1} alt=""/>
                <img style={{top:`${randomDistances[1]+"vh"}`}} className={`left-[20vw] absolute h-[40vh]  opacity-20 rotate-12`} src={rose2} alt=""/>
                <img style={{top:`${randomDistances[2]+"vh"}`}} className={`right-0 absolute h-[30vh] opacity-20 z-10 rotate-12`} src={heart1} alt=""/>
                <img style={{top:`${randomDistances[3]+"vh"}`}} className={`right-[5vw] absolute h-[10vh]  opacity-20 rotate-12`} src={heart2} alt=""/>
                <div className="relative z-20 overflow-hidden">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;