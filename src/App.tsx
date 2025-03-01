import './App.css';
import {Route, Routes, useNavigate} from "react-router";
import StronaGlowna from "./pages/strona-glowna";
import RootLayout from "./layouts/RootLayout";
import Spiewnik from "./pages/spiewnik";
import GaleriaOdLudzi from "./pages/galeria-od-ludzi";
import GaleriaPro from "./pages/galeria-pro";
import UstawieniaStolow from "./pages/ustawienia-stolow";
import Harmonogram from "./pages/harmonogram";
import {NextUIProvider} from "@nextui-org/react";
import PotwierdzObecnosc from "./pages/potwierdz-obecnosc.tsx";

function App() {
    const navigate = useNavigate();

    return (
        <NextUIProvider navigate={navigate}>
            <Routes>
                <Route element={<RootLayout/>}>
                    <Route path="/" element={<StronaGlowna/>}/>
                    <Route path="/spiewnik" element={<Spiewnik/>}/>
                    <Route path="/zdjecia-i-filmiki-gosci" element={<GaleriaOdLudzi/>}/>
                    <Route path="/zdjecia-od-fotografa" element={<GaleriaPro/>}/>
                    <Route path="/ustawienia-stolow" element={<UstawieniaStolow/>}/>
                    <Route path="/harmonogram" element={<Harmonogram/>}/>
                    <Route path="/potwierdz-obecnosc" element={<PotwierdzObecnosc/>}/>
                </Route>
            </Routes>
        </NextUIProvider>

    );
}

export default App;
