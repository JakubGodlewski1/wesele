export interface Person {
    family: number;
    name: string;
    present: string | null;
    accommodation: string | null
    id: string,
    personId: number
}
export const groupByFamily = (people: Person[]): Person[][] => {
    const grouped = people.reduce((acc: { [key: number]: Person[] }, person: Person) => {
        const { family } = person;
        if (!acc[family]) {
            acc[family] = [];
        }
        acc[family].push(person);
        return acc;
    }, {});

    return Object.values(grouped);
};