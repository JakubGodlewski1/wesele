import {useFirestore} from "../hooks/useFirestore.tsx";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";

const Potwierdzenia = () => {
    const {docs}  = useFirestore("guests")

    const people = docs as {
        name: string,
        numberOfGuests: string,
        numberOfGuestsRequiringAccommodation: string,
        additionalInfo: string}[]

    console.log(people)
    return (
        <div>
            {docs.length > 0 &&
                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>Imię i nazwisko</TableColumn>
                        <TableColumn>ilość osób towarzyszących</TableColumn>
                        <TableColumn>ilość osób potrzebujących noclegu</TableColumn>
                        <TableColumn>Dodatkowe info</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {
                            people.map(p=>(
                                <TableRow key={p.name}>
                                    <TableCell>{p.name}</TableCell>
                                    <TableCell>{p.numberOfGuests}</TableCell>
                                    <TableCell>{p.numberOfGuestsRequiringAccommodation}</TableCell>
                                    <TableCell>{p.additionalInfo}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            }
        </div>
    );
};

export default Potwierdzenia;