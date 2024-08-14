import {
    Link,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Navbar as NavbarComponent,
    Button
} from "@nextui-org/react";
import {useState} from "react";
import {useLocation} from "react-router";

const menuItems = [
    {
        label: "Strona główna",
        href: "/"
    },
    {
        label: "Śpiewnik",
        href: "/spiewnik"
    },
    {
        label: "Ustawienia stołów",
        href: "/ustawienia-stolow"
    },
    {
        label: "Harmonogram",
        href: "/harmonogram"
    },

    {
        label: "Zdjęcia i filmiki Gości",
        href: "/zdjecia-i-filmiki-gosci"
    },
    {
        label: "Zdjęcia od fotografa",
        href: "/zdjecia-od-fotografa"
    }
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = useLocation().pathname

    return (

        <NavbarComponent
            maxWidth="xl"
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="lg:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <NavbarContent className="hidden lg:flex gap-4" justify="start">
                {/*DESKTOP MENU*/}
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={pathname === item.href ? "primary" : "foreground"}
                            href={item.href}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent className="hidden lg:flex gap-4" justify="end">
                <Button
                    className="ml-auto"
                    color="primary"
                    as={Link}
                    href="potwierdz-obecnosc"
                >
                    Potwierdź obecność
                </Button>
            </NavbarContent>
            <NavbarMenu>
                {/*MOBILE MENU*/}
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            onClick={()=>setIsMenuOpen(false)}
                            className="w-full"
                            color={pathname === item.href ? "primary" : "foreground"}
                            href={item.href}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <Button
                    onClick={()=>setIsMenuOpen(false)}
                    className="self-start"
                    color="primary"
                    as={Link}
                    href="potwierdz-obecnosc"
                >
                    Potwierdź obecność
                </Button>
            </NavbarMenu>
        </NavbarComponent>
    );
};

export default Navbar;