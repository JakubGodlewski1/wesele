import {Accordion, AccordionItem} from "@nextui-org/react";

const songs = [
    {
        title: "Pionenka o komarze",
        content: "content 1"
    },
       {
        title: "Wlazł kotek na płotek",
        content: "content 2"
    }

]

const Spiewnik = () => {
    return (
        <Accordion>
            {songs.map(s=>(
                <AccordionItem key={s.content} aria-label={s.title} title={s.title}>
                    {s.content}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default Spiewnik;