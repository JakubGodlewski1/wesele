import UploadForm from "../components/UploadForm.tsx";
import Gallery from "../components/Gallery.tsx";
import {useFirestore} from "../hooks/useFirestore.tsx";

const GaleriaOdLudzi = () => {
   const {docs} =  useFirestore("files")
    const urls = docs as {url: string}[]

    return (
        <div>
            <UploadForm/>
            <Gallery photoUrls={urls}/>
        </div>
    );
};

export default GaleriaOdLudzi;