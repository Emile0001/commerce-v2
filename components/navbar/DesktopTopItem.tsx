"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import type { MegaMenuItem } from "@/app/utils/link";

import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import NavPromoCard from "./NavPromoCard";

export default function DesktopTopItem({ item }: { item: MegaMenuItem }) {
    const hasDropdown = item.groups.length > 0;

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

            <NavigationMenuContent className="bg-popover text-popover-foreground">
                <div className="w-[980px] p-8">
                    <div className="grid grid-cols-[1fr_360px] gap-10">
                        {/* LEFT: groups/columns */}
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

                        {/* RIGHT: promo */}
                        {item.promo ? (
                            <NavPromoCard
                                promo={item.promo}
                                aspectClassName="aspect-[16/11]"
                            />
                        ) : (
                            <div className="rounded-lg overflow-hidden border bg-background p-4 text-sm text-muted-foreground">
                                No promo configured.
                            </div>
                        )}
                    </div>
                </div>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
}
