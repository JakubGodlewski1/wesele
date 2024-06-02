import {projectFirestore, projectStorage, timestamp} from "../firebase/config.ts";
import {useState} from "react";
export const useStorage = () => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState<string | null>(null)
    const [urls, setUrls] = useState<string[]>([])
    const [pending, setPending]= useState(false)

    const addFile = async (file:File) => {
        const storageRef = projectStorage.ref(file.name)
        storageRef.put(file).on("state_changed", snap=>{
            const percentage = (snap.bytesTransferred/snap.totalBytes) * 100
            setProgress(percentage)
        }, error=>{
            setError(error.message)
            return
        }, async ()=>{
            const url = await storageRef.getDownloadURL()
            //add url to database
            const collectionRef = projectFirestore.collection("files")
            const createdAt = timestamp();
            await collectionRef.add({url, createdAt})
            setUrls(p=>[...p, url])
        })
    }

    const addFiles = async (files: File[]) => {
        setPending(true);
        setError(null);
        setUrls([]);
        setProgress(0);

        if (files.length > 0) {
            try {
                await Promise.all(files.map(addFile));
            } catch (error) {
                setError("Błąd przy dodawniu zdjęć");
            } finally {
                setPending(false);
            }
        } else {
            setPending(false);
        }
    }


    return {progress, error, urls, addFiles, pending}
}