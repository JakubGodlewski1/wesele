import {useEffect, useState} from "react";
import {projectFirestore} from "../firebase/config.ts";

export const useFirestore = (collection: string) => {
    const [docs, setDocs] = useState<object[]>([])
    const [error, setError] = useState<null | string>(null)
    const [pending, setPending] = useState(false)
    const [success,setSuccess] = useState(false)


    const confirmArrival = async (personDetails:{
        name: string,
        numberOfGuests: string,
        numberOfGuestsRequiringAccommodation: string,
        additionalInfo: string
    }) => {
        const collectionRef = projectFirestore.collection(collection)
        setError(null)
        try {
            setPending(true)
          await collectionRef.add(personDetails)
            setSuccess(true)
        }catch (err){
            setError("Wystąpił błąd, spróbuj ponownie później bądź potwierdź przybycie telefonicznie")
        }finally {
            setPending(false)
        }
    }

    useEffect(() => {
        let collectionRef;
        if (collection==="guests"){
            collectionRef = projectFirestore.collection(collection)
        }else{
            collectionRef =  projectFirestore.collection(collection)
                .orderBy('createdAt', 'desc')
        }

       const unsub = collectionRef
           .onSnapshot((snapshot)=>{
            const documents:{url:string}[] = []
            snapshot.docs.forEach(d=>{
                documents.push(d.data() as {url:string})
            })
            setDocs(documents)
        })

        return ()=> unsub()
    }, [collection]);

    return {docs, confirmArrival, error, pending, success}
}