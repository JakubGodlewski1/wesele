import {Button, Input, Select, SelectItem} from "@nextui-org/react";
import { useState} from "react";
import {useCollection} from "../hooks/useCollection.ts";
import {groupByFamily, Person} from "../utils/groupByFamily.ts";
import {useFirestore} from "../hooks/useFirestore.tsx";
import {FaSearch} from "react-icons/fa";

const PotwierdzObecnosc = () => {

    const [search, setSearch] = useState("");
    const {documents} = useCollection("guests")
    const [present, setPresent] = useState<string>("")
    const [accommodation, setAccommodation] = useState<string>("")
    const {updateDocument, pending} = useFirestore("guests")
    const [currentdUserId, setCurrentUserId] = useState("")

    if (!documents){
        return <div>ładowanie...</div>
    }

    const families = groupByFamily(documents as Person[])
    const handleSubmit = async (personId:string) => {
        if (present.length===0 || accommodation.length===0){
            setPresent("")
            setAccommodation("")
            return
        }
        setCurrentUserId(personId)
        await updateDocument(personId, {present, accommodation})
        setCurrentUserId("")
    }

    return (
        <div>
            <div className="bg-warning p-2 mb-4 rounded-md text-justify">
                <p>
                    Pragniemy poinformować, że istnieje możliwość rezerwacji noclegów dla naszych gości. Niestety miejsc noclegowych jest mniej niż gości, dlatego pierwszeństwo będą miały osoby przyjezdne z daleka. Osoby dla których zabraknie miejsca noclegowego zostaną poinformowane.
                    Dziękujemy za zrozumienie.
                </p>
            </div>
            <Input
                startContent={<FaSearch />}
                className="border-2 rounded-lg"
                color="primary"
                size="lg"
                placeholder="Wpisz swoje imię i nazwisko"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="pl-4 hidden md:grid grid-cols-4 py-2 mt-10 bg-blue-100">
                <span className="">Imię i nazwisko</span>
                <span>Potwierdź obecność</span>
                <span>Potrzebujesz noclegu?</span>
                <span></span>
            </div>
            <div>
                {
                    families.filter(family=>{
                        if (search.length===0){
                            return true
                        }
                       return family.some(p=>p.name.toLowerCase().includes(search.toLowerCase()))

                    }).map((family, i)=>(
                        <div key={i} className="odd:bg-white even:bg-slate-200">
                            {
                                family.sort((a,b)=>a.personId-b.personId).
                                map(person=>(
                                    <div
                                        className={`
                                        
                                        grid grid-cols-1 md:grid-cols-4 gap-4 px-2 py-0.5`
                                    }
                                        key={person.name}
                                    >
                                        <div className="p-2 border-b-1 font-medium ">{person.name}</div>
                                        <Select
                                            classNames={{
                                                trigger: "border-gray-500"
                                            }}
                                            selectedKeys={person.present ? [person.present] : undefined}
                                            aria-label="Będziesz bawić się z nami na weselu?"
                                            variant="bordered"
                                            placeholder="Będziesz bawić się z nami na weselu?"
                                            onChange={(e)=>setPresent(e.target.value)}
                                        >
                                            {[{key: "Tak, będę", value:"Tak, będę"}, {key: "Nie mogę uczestniczyć w uroczystości", value:"Nie mogę uczestniczyć w uroczystości"}].map((option) => (
                                                <SelectItem key={option.key}>
                                                    {option.value}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                            <Select
                                            classNames={{
                                                trigger: "border-gray-500"
                                            }}
                                            aria-label="Czy będziesz nocować?"
                                            variant="bordered"
                                            selectedKeys={person.accommodation ? [person.accommodation] : undefined}
                                            placeholder="Czy będziesz nocować?"
                                            onChange={(e)=>setAccommodation(e.target.value)}
                                        >
                                            {[{key: "Tak, (90zł/os)", value:"Tak, (90zł/os)"}, {key: "Nie", value:"Nie"}].map((option) => (
                                                <SelectItem key={option.key}>
                                                    {option.value}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        <Button
                                            onClick={()=>handleSubmit(person.id)}
                                            className="rounded-lg mb-2 md:mb-0"
                                            color={person.present ==="Tak, będę" ? "success" : person.present ? "danger" : "primary"}
                                        >
                                            {(pending && person.id === currentdUserId) ? "Wysyłanie": person.present ? "Wysłano!" : "Wyślij"}
                                        </Button>
                                    </div>

                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PotwierdzObecnosc;