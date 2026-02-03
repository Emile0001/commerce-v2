"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAVBAR_MEGA_DATA, type MegaMenuItem } from "@/app/utils/link";

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

import { Logo } from "./Logo";
import DarkMode from "./DarkMode";
import { AuthButtons } from "./AuthButtons";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import AccountDropDownMenu from "./AccountDropDownMenu";

type Props = {
    className?: string;
};

export function NavbarMega({ className }: Props) {
    const { logo, menu, auth } = NAVBAR_MEGA_DATA;

    return (
        <header
            className={cn(
                "border-b bg-background/80 backdrop-blur sticky top-0 z-50",
                className,
            )}
        >
            <div className="mx-auto max-w-6xl xl:max-w-7xl px-8">
                {/* Desktop */}
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
                                    <DesktopTopItem
                                        key={item.title}
                                        item={item}
                                    />
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

                {/* Mobile */}
                <div className="lg:hidden py-4 flex items-center justify-between">
                    <Logo
                        url={logo.url}
                        src={logo.src}
                        alt={logo.alt}
                        title={logo.title}
                    />

                    <div className="flex items-center gap-1">
                        <NavSearch />
                        <DarkMode />
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
                                        <CartButton numItemsInCart={9} />
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="p-4">
                                    {/* Top-level (MEN/WOMEN/...) accordions */}
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex flex-col gap-4"
                                    >
                                        {menu.map((top) => (
                                            <MobileTopItem
                                                key={top.title}
                                                item={top}
                                            />
                                        ))}
                                    </Accordion>

                                    <div className="mt-6">
                                        <AuthButtons
                                            login={auth.login}
                                            signup={auth.signup}
                                        />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}

/* ----------------------------- Desktop item ----------------------------- */

function DesktopTopItem({ item }: { item: MegaMenuItem }) {
    // If you want simple links without a dropdown for some items:
    const hasDropdown = item.groups?.length > 0;

    if (!hasDropdown) {
        return (
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link
                        href={item.url ?? "#"}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors hover:bg-muted hover:text-accent-foreground"
                    >
                        {item.title}
                    </Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xs uppercase tracking-widest">
                {item.title}
            </NavigationMenuTrigger>

            {/* Wide mega panel like screenshots */}
            <NavigationMenuContent className="bg-popover text-popover-foreground">
                <div className="w-[980px] p-8">
                    <div className="grid grid-cols-[1fr_360px] gap-10">
                        {/* LEFT: multi columns */}
                        <div
                            className={cn(
                                "grid gap-10",
                                item.groups.length >= 3
                                    ? "grid-cols-3"
                                    : "grid-cols-2",
                            )}
                        >
                            {item.groups.map((group) => (
                                <div key={group.title}>
                                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                                        {group.title}
                                    </p>

                                    <ul className="mt-4 space-y-2">
                                        {group.items.map((leaf) => (
                                            <li key={leaf.url}>
                                                <Link
                                                    href={leaf.url}
                                                    className="text-sm hover:underline underline-offset-4"
                                                >
                                                    {leaf.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT: promo image + CTA */}
                        <div className="rounded-lg overflow-hidden border bg-background">
                            {item.promo ? (
                                <Link href={item.promo.url} className="block">
                                    <div className="relative aspect-[16/11] w-full bg-muted">
                                        <Image
                                            src={item.promo.imageSrc}
                                            alt={item.promo.imageAlt}
                                            fill
                                            className="object-cover"
                                            sizes="360px"
                                        />
                                    </div>

                                    <div className="p-4">
                                        {item.promo.eyebrow && (
                                            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                                                {item.promo.eyebrow}
                                            </p>
                                        )}
                                        <p className="mt-1 text-sm font-medium">
                                            {item.promo.title}
                                        </p>
                                        <p className="mt-2 text-sm underline underline-offset-4">
                                            {item.promo.cta} →
                                        </p>
                                    </div>
                                </Link>
                            ) : (
                                <div className="p-4 text-sm text-muted-foreground">
                                    No promo configured.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
}

/* ------------------------------ Mobile item ----------------------------- */

function MobileTopItem({ item }: { item: MegaMenuItem }) {
    return (
        <AccordionItem value={item.title} className="border-b-0">
            <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                {item.title}
            </AccordionTrigger>

            <AccordionContent className="mt-3">
                {/* mimic the screenshot: groups with a plus toggle */}
                <Accordion
                    type="single"
                    collapsible
                    className="flex flex-col gap-3"
                >
                    {item.groups.map((group) => (
                        <AccordionItem
                            key={group.title}
                            value={`${item.title}-${group.title}`}
                            className="border rounded-md px-3"
                        >
                            <AccordionTrigger className="py-3 text-sm font-semibold uppercase tracking-wider hover:no-underline">
                                {group.title}
                            </AccordionTrigger>
                            <AccordionContent className="pb-3">
                                <ul className="space-y-2">
                                    {group.items.map((leaf) => (
                                        <li key={leaf.url}>
                                            <Link
                                                href={leaf.url}
                                                className="text-sm"
                                            >
                                                {leaf.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {item.promo && (
                    <Link href={item.promo.url} className="mt-5 block">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted">
                            <Image
                                src={item.promo.imageSrc}
                                alt={item.promo.imageAlt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 600px"
                            />
                        </div>
                        <div className="mt-3">
                            {item.promo.eyebrow && (
                                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                                    {item.promo.eyebrow}
                                </p>
                            )}
                            <p className="mt-1 text-sm font-medium">
                                {item.promo.title}
                            </p>
                            <p className="mt-2 text-sm underline underline-offset-4">
                                {item.promo.cta} →
                            </p>
                        </div>
                    </Link>
                )}
            </AccordionContent>
        </AccordionItem>
    );
}
