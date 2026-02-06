"use client";

import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import type { NavbarMegaPropsData } from "@/app/utils/link";

import { Logo } from "./Logo";
import NavSearch from "./NavSearch";
import DarkMode from "./DarkMode";
import AccountDropDownMenu from "./AccountDropDownMenu";
import CartButton from "./CartButton";
import DesktopTopItem from "./DesktopTopItem";

type Props = Pick<NavbarMegaPropsData, "logo" | "menu">;

export default function DesktopNav({ logo, menu }: Props) {
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
                            <DesktopTopItem key={item.title} item={item} />
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex items-center gap-1">
                <NavSearch />
                <DarkMode />
                <AccountDropDownMenu />
                <CartButton numItemsInCart={9} />
            </div>
        </nav>
    );
}
