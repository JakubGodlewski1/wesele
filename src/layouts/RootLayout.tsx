import {Outlet, useLocation} from "react-router";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";


const RootLayout = () => {
    const pathame = useLocation().pathname

    return (
        <div className="min-h-dvh flex flex-col">
            <Navbar/>
            <div className={`mx-auto w-full ${pathame==="/" ? "p-0" : "p-6 max-w-screen-xl "}`}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;