"use client";

import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import type { NavbarMegaPropsData } from "@/app/utils/navigationLinks";

import { Logo } from "./Logo";
import NavSearch from "./NavSearch";
import DarkMode from "./DarkMode";
import AccountDropDown from "./AccountDropDown";
import CartButton from "./CartButton";
import DesktopNavItems from "./DesktopNavItems";

// type Props = Pick<NavbarMegaPropsData, "logo" | "menu">;

export type AuthUser = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
};

type Props = NavbarMegaPropsData & {
    user?: AuthUser;
};

export default function DesktopNav({ logo, menu, user }: Props) {
    return (
        <nav className="hidden lg:flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
                <Logo
                    url={logo.url}
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                />

                <NavigationMenu>
                    <NavigationMenuList>
                        {menu.map((item) => (
                            <DesktopNavItems key={item.title} item={item} />
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex items-center gap-1">
                <NavSearch />
                <DarkMode />
                <AccountDropDown user={user} />
                <CartButton numItemsInCart={9} />
            </div>
        </nav>
    );
}
