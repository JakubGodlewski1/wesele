import {useEffect, useState} from "react";
import {collection, onSnapshot} from "firebase/firestore"
import {db} from "../firebase/config.ts";

export const useCollection = (collectionName: string) => {
    const [documents, setDocuments] = useState<unknown[] | null>(null)
    const [error, setError] = useState<null | string>(null)
    const [pending, setPending] = useState(false)


    useEffect(() => {
        const ref = collection(db, collectionName)
        let unsub  = ()=>{};
        try {
            setError(null)
            setPending(true)
           unsub = onSnapshot(ref, (snapshot)=>{
                const results:unknown[] = []
                snapshot.docs.forEach(doc=>{
                    results.push({...doc.data(), id:doc.id})
                })
                setDocuments(results)
            })
        }catch (err){
            setError("Something went wrong")
            console.error(err)
        }finally {
            setPending(false)
        }


        return ()=>unsub()
    }, [collectionName]);

    return {documents, error, pending}
}


