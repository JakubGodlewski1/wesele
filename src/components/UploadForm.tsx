// import { ChangeEvent, useState } from "react";
//
// const UploadForm = () => {
//     const [files, setFiles] = useState<null | File[]>(null);
//     const [error, setError] = useState<null | string>(null)
//     const pending = false
//
//     const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         const selectedFiles = e.target.files;
//
//         if(selectedFiles && selectedFiles.length > 0) {
//             const filesArray: File[] = [];
//             let err =  false
//             setError(null)
//             for(let i = 0; i < selectedFiles.length; i++) {
//                 const file = selectedFiles[i];
//                 console.log(file.type)
//                 if(file.type.startsWith("image")) {
//                     filesArray.push(file);
//                 }else {
//                     setError("Jeden bądź więcej plików nie jest zdjęciem")
//                     err = true
//                 }
//             }
//             //check if there was no error during the files selection, if not, proceed with the upload
//             if (!err && filesArray.length > 0){
//                 setFiles(filesArray)
//               // await addFiles(filesArray)
//             }
//         }
//     };
//
//     return (
//         <form className="flex flex-col">
//             <p className="mb-2">Hej, Kochani Goście! Chcemy, abyście czuli się jak prawdziwi paparazzi na naszym ślubie! Tutaj możecie dodawać wszystkie swoje najlepsze ujęcia z tego wyjątkowego dnia. Niech stanie się z tego prawdziwa galeria wspomnień, pełna uśmiechów, spontanicznych chwil i niezapomnianych momentów! Zdjęcia czyż nie są najlepszym sposobem na uchwycenie tych cudownych wspomnień? Zapraszamy Was do dzielenia się Waszymi kreatywnymi ujęciami!</p>
//             <label className="flex justify-center">
//               <input onChange={changeHandler} multiple={true} type="file" className="h-0 w-0 opacity-0"/>
//               <div className="border-2 border-black/50 py-1 px-2.5 rounded-lg">{
//                   pending ? "Dodawnie..." : "Dołącz swoje zdjęcie/filmik"
//               }</div>
//             </label>
//         </form>
//     );
// };
//
// export default UploadForm;
