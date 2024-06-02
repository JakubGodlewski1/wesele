import {useState} from "react";
import {IoMdCloseCircleOutline} from "react-icons/io";

const Gallery = ({photoUrls}:{photoUrls:{url:string}[]} ) => {
    const [fullImg, setFullImg] = useState<string | null>(null)

    return (
        <div>
            {
                fullImg && <div className="fixed inset w-screen h-screen z-50 bg-black top-0 left-0 flex items-center justify-center">
                    <IoMdCloseCircleOutline size={32} onClick={()=>setFullImg(null)} color="white" className="absolute top-5 right-5 cursor-pointer"/>
                    <img className="object-contain w-full h-full" src={fullImg} alt="Duże zdjęcie"/>
                </div>
            }

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photoUrls.map(p => (
                    <img onClick={() => setFullImg(p.url)} key={p.url}
                         className="w-full h-full object-cover cursor-pointer" src={p.url} alt="Zdjęcie"/>
                ))}
            </div>
        </div>

    );
};

export default Gallery;