import {Button, Input, Textarea} from "@nextui-org/react";
import { useState, ChangeEvent, FormEvent } from "react";
import {useFirestore} from "../hooks/useFirestore.tsx";

interface FormData {
    name: string;
    numberOfGuests: string
    numberOfGuestsRequiringAccommodation: string,
    additionalInfo: string
}

const PotwierdzObecnosc = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        numberOfGuests: "",
        numberOfGuestsRequiringAccommodation: "",
        additionalInfo: ""
    });

    const {confirmArrival, pending, error, success} = useFirestore("guests")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        confirmArrival(formData)
    };

    return (
        <div>
            {success ?
                <div className="bg-green-200 rounded-xl mt-2 inline-block p-2">Poprawnie potwierdzono przybycie. Do zobaczenia na weselu! (:</div>
                :
                <form onSubmit={handleSubmit} className="p-8 bg-gray-300 rounded-lg flex flex-col gap-4">
                    <label>
                        <span>Imię i nazwisko</span>
                        <Input

                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Ilość osób towarzyszących</span>
                        <Input
                            inputMode="numeric"
                            type="number"
                            name="numberOfGuests"
                            value={formData.numberOfGuests}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Ilość osób potrzebujących noclegu</span>
                        <Input
                            inputMode="numeric"
                            type="number"
                            name="numberOfGuestsRequiringAccommodation"
                            value={formData.numberOfGuestsRequiringAccommodation}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Dodatkowe informacje</span>
                        <Textarea
                            type="text"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                        />
                    </label>

                    <Button color="primary" type="submit">{
                        pending ? "Potwierdzanie..." : "Potwierdź przybycie"
                    }</Button>
                </form>
            }
            {error && <span className="bg-red-200 rounded-xl mt-2 inline-block p-2">{error}</span>}
        </div>
    );
};

export default PotwierdzObecnosc;
