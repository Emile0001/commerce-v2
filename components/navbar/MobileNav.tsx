"use client";

import { Menu as MenuIcon } from "lucide-react";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import type { NavbarMegaPropsData } from "@/app/utils/navigationLinks";

import { Logo } from "./Logo";
import DarkMode from "./DarkMode";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import AccountDropDown from "./AccountDropDown";
// import { AuthButtons } from "../auth/AuthButtons";
import MobileNavItems from "./MobileNavItems";

// type Props = Pick<NavbarMegaPropsData, "logo" | "menu">;
export type AuthUser = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
};

type Props = NavbarMegaPropsData & {
    user?: AuthUser;
};

export default function MobileNav({ logo, menu, user }: Props) {
    return (
        <div className="lg:hidden py-4 flex items-center justify-between">
            <Logo
                url={logo.url}
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
            />

            <div className="flex items-center gap-1">
                <DarkMode />
                <AccountDropDown user={user} />
                <CartButton numItemsInCart={9} />

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            aria-label="Open menu"
                        >
                            <MenuIcon className="size-4" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle className="flex gap-4 pr-10">
                                <NavSearch />
                            </SheetTitle>
                        </SheetHeader>

                        <div className="p-4">
                            <Accordion
                                type="single"
                                collapsible
                                className="flex flex-col gap-4"
                            >
                                {menu.map((top) => (
                                    <MobileNavItems
                                        key={top.title}
                                        item={top}
                                    />
                                ))}
                            </Accordion>

                            <SheetFooter>{/* kyk */}</SheetFooter>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}
