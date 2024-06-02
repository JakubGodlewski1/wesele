import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC01iGm9DrViFEHYTYYHrgD0on9fGP9zBQ",
    authDomain: "wesele-92857.firebaseapp.com",
    projectId: "wesele-92857",
    storageBucket: "wesele-92857.appspot.com",
    messagingSenderId: "701490578563",
    appId: "1:701490578563:web:7357e9adf0be93b18587b6"
};

firebase.initializeApp(firebaseConfig)

export const projectStorage = firebase.storage()
export const projectFirestore = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

