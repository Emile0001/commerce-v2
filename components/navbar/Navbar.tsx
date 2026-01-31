// import { Suspense } from "react";
// import Container from "../global/Container";
// import CartButton from "./CartButton";
// import DarkMode from "./DarkMode";
// import LinksDropdown from "./LinksDropdown";
// import Logo from "./Logo";
// import NavSearch from "./NavSearch";

// function Navbar() {
//     return (
//         <nav className="border-b">
//             <Container className="flex flex-col flex-wrap py-8 gap-4 sm:flex-row sm:justify-between sm:items-center ">
//                 <Logo />
//                 <Suspense>
//                     <NavSearch />
//                 </Suspense>
//                 <div className="flex gap-4 items-center">
//                     <CartButton />
//                     <DarkMode />
//                     <LinksDropdown />
//                 </div>
//             </Container>
//         </nav>
//     );
// }
// export default Navbar;

"use client";
import { cn } from "@/lib/utils";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
    return (
        <section>
            <div>
                {/* ============================== DESKTOP NAV ============================== */}
                <nav>
                    {/* Left side: logo + menu */}
                    <div>
                        {/* Logo */}
                        <div>
                            {/* Desktop navigation menu */}
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {/* {menu.map((item) => renderMenuItem(item))} */}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div>
                        {/* Login Button */}
                        <Button>Login</Button>
                        {/* Sign-up Button */}
                        <Button>Sign up</Button>
                    </div>
                </nav>

                {/* ============================== MOBILE NAV =============================== */}
                <div>
                    <div>
                        {/* Logo */}
                        {/* Slide-over menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button>
                                    <MenuIcon />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>{/* Logo */}</SheetTitle>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Navbar;
