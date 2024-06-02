import main_mobile from "../assets/main_mobile.jpg"
import main_desktop from "../assets/main_desktop.jpg"
import CountdownTImer from "../components/countdownTImer.tsx";

const StronaGlowna = () => {

    return (
        <div>
            <div className="w-screen max-h-[calc(100vh-64px)] overflow-hidden relative mb-10">
                <div className="absolute inset-0 z-10 bg-black/40 h-full flex flex-col justify-center items-center text-center gap-4 text-white">
                        <h2 className="text-lg md:text-2xl">Pobieramy się!</h2>
                        <h1 className="text-5xl md:text-7xl butterfly-kids-bold">Paulina & Paweł</h1>
                        <span className="text-md md:text-lg">24 października 2024 <br/> godz: 16:00</span>
                </div>
                <img className="object-cover md:hidden" src={main_mobile} alt="hero"/>
                <img className="object-cover hidden md:block" src={main_desktop} alt="hero"/>
            </div>
            <span className="text-2xl block text-center mb-2">Do wesela zostało:</span>
            <CountdownTImer/>
            <div className="p-6 max-w-screen-xl m-auto">
                <h2 className="font-bold text-2xl mb-2 mt-12">Witajcie drodzy goście</h2>
                <p className="text-justify">Witamy na naszej stronie ślubnej! Cieszymy się, że możemy dzielić ten specjalny dzień z Tobą. Już nie
                    możemy się doczekać
                    tego wielkiego dnia! Na tej stronie znajdziesz przydatne informacje o ślubie i miejscu wesela, aby
                    ułatwić Twoje przybycie.
                    Zabierz ze sobą wygodne buty, aby bawić się z nami do białego rana, a w przerwach a w przerwach
                    kosztując wyśmienite dania.
                    Czekamy na ciebie.
                </p>
                <div className="flex flex-col mt-10">
                    <span className="text-sm">Adres ceremonii ślubnej</span>
                    <span className="font-bold">
                        Kościół pw. Matki Bożej Nieustającej Pomocy <br/>
                        Trzcińsko-Zdrój
                    </span>
                    <iframe
                        className="border-0 w-[calc(100vw-48px)] aspect-video max-w-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9612.052769667374!2d14.597429639988112!3d52.96617708046145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47075ae1e128bddf%3A0x2be326e3a4527d57!2sParafia%20rzymskokatolicka%20Matki%20Boskiej%20Nieustaj%C4%85cej%20Pomocy!5e0!3m2!1sen!2spl!4v1711825345674!5m2!1sen!2spl"
                        allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex flex-col mt-4">
                    <span className="text-sm">Adres wesela</span>
                    <span className="font-bold">
                        Ranczo radzicz <br/>
                        Róźańsko
                    </span>
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