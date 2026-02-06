"use client";

import type { MegaMenuItem } from "@/app/utils/link";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

import NavPromoCard from "./NavPromoCard";

export default function MobileTopItem({ item }: { item: MegaMenuItem }) {
    return (
        <AccordionItem value={item.title} className="border-b-0">
            <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                {item.title}
            </AccordionTrigger>

            <AccordionContent className="mt-3">
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
                    <div className="mt-5">
                        <NavPromoCard
                            promo={item.promo}
                            aspectClassName="aspect-[16/10]"
                            className="bg-background"
                        />
                    </div>
                )}
            </AccordionContent>
        </AccordionItem>
    );
}
