import { ChangeEvent, useState } from "react";
import {useStorage} from "../hooks/useStorage.ts";
import {Progress} from "@nextui-org/react";

const UploadForm = () => {
    const [files, setFiles] = useState<null | File[]>(null);
    const [error, setError] = useState<null | string>(null)

    const {error:uploadError, progress, urls, addFiles, pending} = useStorage()

    const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const selectedFiles = e.target.files;

        if(selectedFiles && selectedFiles.length > 0) {
            const filesArray: File[] = [];
            let err =  false
            setError(null)
            for(let i = 0; i < selectedFiles.length; i++) {
                const file = selectedFiles[i];
                console.log(file.type)
                if(file.type.startsWith("image")) {
                    filesArray.push(file);
                }else {
                    setError("Jeden bądź więcej plików nie jest zdjęciem")
                    err = true
                }
            }
            //check if there was no error during the files selection, if not, proceed with the upload
            if (!err && filesArray.length > 0){
                setFiles(filesArray)
              await addFiles(filesArray)
            }
        }
    };

    return (
        <form className="flex flex-col">
            <label className="flex justify-center">
              <input onChange={changeHandler} multiple={true} type="file" className="h-0 w-0 opacity-0"/>
              <div className="border-2 border-black/50 py-1 px-2.5 rounded-lg">{
                  pending ? "Dodawnie..." : "Dodaj zdjęcia +"
              }</div>
            </label>
            <div className="flex mx-auto justify-center my-3">
                {files && files.length > 0 && files?.length !== urls.length &&
                    <Progress aria-label="Ładowanie..." value={progress} className="max-w-md w-[50vw] mt-2"/>
            }
                {error && <span className="bg-red-200 rounded-xl mt-2 inline-block p-2">{error}</span>}
                {uploadError && <span className="bg-red-200 rounded-xl mt-2 p-2">{uploadError}</span>}
            </div>
        </form>
    );
};

export default UploadForm;
