import {Accordion, AccordionItem} from "@nextui-org/react";
import {songs} from "../data/songs.ts";

const Spiewnik = () => {
    return (
        <Accordion>
            {songs.map(s=>(
                <AccordionItem as="pre" key={s.content} aria-label={s.title} title={s.title}>
                    {s.content}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default Spiewnik;