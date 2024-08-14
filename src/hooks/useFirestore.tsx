import {useState} from "react";
import {db} from "../firebase/config.ts";
import {collection, getDocs, addDoc, updateDoc, doc} from "firebase/firestore"

export const useFirestore = (collectionName: string) => {
    const [error, setError] = useState<null | string>(null)
    const [pending, setPending] = useState(false)

    const getDocuments = async () => {
        try {
            setError(null)
            setPending(true)

            const ref = collection(db, collectionName)
            const snapshot =await getDocs(ref)
            const documents = []
            snapshot.docs.forEach(doc=>{
                documents.push({id:doc.id, ...doc.data()})
            })

        }catch (err:unknown){
            console.log(err)
            setError("Something went wrong")
        }finally {
            setPending(false)
        }
    }

    const addDocument = async (doc: object) => {
        const ref = collection(db, collectionName)
        try {
            setPending(true)
            await addDoc(ref, doc)
        }catch (err){
            console.error(err)
            setError("Something went wrong")
        }finally {
            setPending(false)
        }
    }

    const updateDocument = async (id: string, updatedFields: object) => {
        try {
            setPending(true);
            setError(null);

            const docRef = doc(db, collectionName, id);
            await updateDoc(docRef, updatedFields);
        } catch (err) {
            console.error(err);
            setError("Something went wrong");
        } finally {
            setPending(false);
        }
    };

    return {addDocument, getDocuments, updateDocument, error, pending}
}