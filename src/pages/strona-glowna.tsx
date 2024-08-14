import main_mobile from "../assets/main_mobile.jpg"
import main_desktop from "../assets/main_desktop.jpg"
import CountdownTImer from "../components/countdownTImer.tsx";
import weddding from "../assets/icons/wedding.png"
import church from "./../assets/icons/church.svg"

const StronaGlowna = () => {

    return (
        <div>
            <div className="w-screen max-h-[calc(100vh-64px)] overflow-hidden relative mb-10">
                <div className="absolute inset-0 z-10 bg-black/40 h-full flex flex-col justify-center items-center text-center gap-4 text-white">
                        <h2 className="text-lg md:text-2xl">Pobieramy się!</h2>
                        <h1 className="text-5xl md:text-7xl butterfly-kids-bold">Paulina & Paweł</h1>
                        <span className="text-md md:text-lg">26 października 2024 <br/> godz: 16:00</span>
                </div>
                <img className="object-cover md:hidden" src={main_mobile} alt="hero"/>
                <img className="object-cover hidden md:block" src={main_desktop} alt="hero"/>
            </div>
            <span className="text-3xl block text-center mb-2">Do wesela zostało:</span>
            <CountdownTImer/>
            <div className="p-6 max-w-screen-xl m-auto">
                <h2 className="font-bold text-2xl mb-2 mt-12">Witajcie Drodzy Goście!</h2>
                <p className="text-justify flex flex-col gap-5">
                   <span>Cieszymy się niezmiernie, że odwiedzacie naszą weselną stronę internetową. Jest to dla nas ogromna przyjemność móc Was wszystkich serdecznie powitać i podzielić się z Wami radością, która wypełnia nasze serca w tym wyjątkowym czasie, a wasze wsparcie i obecność w dniu naszego ślubu i wesela oznaczają dla nas wiele. Ten dzień będzie dla naszej miłości niezwykłym punktem kulminacyjnym, a my nie możemy się doczekać, abyście mogli być z nami, aby świętować tę niezwykłą okazję.</span>
                    <span>Na naszej stronie znajdziecie wszystkie niezbędne informacje, które pomogą Wam w planowaniu i organizacji Waszego udziału w naszym święcie. Znajdziecie tutaj adresy zarówno ceremonii ślubnej, jak i uroczystości weselnej, abyście mogli łatwo dotrzeć na miejsce.</span>
                    <span>Ponadto, przygotowaliśmy dla Was śpiewnik, w którym znajdziecie teksty piosenek, które razem będziemy mogli śpiewać i tańczyć przez całą noc. Harmonogram imprezy zawierać będzie wszystkie istotne informacje dotyczące przebiegu wydarzenia. Dodatkowo znajdziecie ustawienie stołów, dzięki czemu każdy z Was znajdzie informacje, przy którym stole siedzi.</span>
                    <span>Nie zabraknie również galerii zdjęć - jedna dedykowana Waszym wspomnieniom, gdzie będziecie mogli dodawać zdjęcia i filmy z tego wyjątkowego dnia, a druga, gdzie umieścimy profesjonalne fotografie i nagrania od naszego zespołu fotograficznego i kamerzysty.</span>
                    <span>Dodatkowo, na naszej stronie będziecie mogli potwierdzić Waszą obecność i zaznaczyć, czy będziecie chcieli dokupić nocleg.</span>
                    <span>Dziękujemy, że jesteście z nami w tym ważnym dla nas czasie i czekamy niecierpliwie na wspólne świętowanie!</span>
                    <span>Z miłością, Paulina i Paweł</span>
                </p>
                <div className="flex flex-col mt-10">
                    <div className="flex gap-2">
                        <img className="h-[72px]" src={church} alt="Ikona tańczącej pary"/>
                        <div className="flex flex-col">
                            <span className="text-medium">Miejsce ślubu</span>
                            <span className="font-bold">
                       Kościół pw. Matki Bożej Nieustającej Pomocy <br/>
                        Trzcińsko-Zdrój

                        </span>
                        </div>
                    </div>
                    <iframe
                        className="border-0 w-[calc(100vw-48px)] aspect-video max-w-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9612.052769667374!2d14.597429639988112!3d52.96617708046145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47075ae1e128bddf%3A0x2be326e3a4527d57!2sParafia%20rzymskokatolicka%20Matki%20Boskiej%20Nieustaj%C4%85cej%20Pomocy!5e0!3m2!1sen!2spl!4v1711825345674!5m2!1sen!2spl"
                        allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex flex-col mt-4">
                    <div className="flex gap-2">
                        <img className="h-[72px]" src={weddding} alt="Ikona tańczącej pary"/>
                        <div className="flex flex-col">
                            <span className="text-medium">Miejsce wesela</span>
                            <span className="font-bold">
                        Ranczo Radzicz <br/>
                        Róźańsko
                        </span>
                        </div>
                    </div>
                    <iframe
                        className="border-0 w-[calc(100vw-48px)] aspect-video max-w-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83823.15024148051!2d14.66531160486005!3d52.831097213222364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703bd24747ae4ef%3A0x50bc57395d0fa23a!2sRanczo%20Radzicz!5e0!3m2!1sen!2spl!4v1711825490701!5m2!1sen!2spl"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>

    );
};

export default StronaGlowna;