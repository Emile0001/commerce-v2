"use client";

import Link from "next/link";
import Image from "next/image";

import type { NavPromo } from "@/app/utils/link";
import { cn } from "@/lib/utils";

type Props = {
    promo: NavPromo;
    /**
     * Controls the image aspect ratio so desktop/mobile can match their layouts.
     * Desktop mega panel used aspect-[16/11]
     * Mobile sheet used aspect-[16/10]
     */
    aspectClassName?: string;
    className?: string;
};

export default function NavPromoCard({
    promo,
    aspectClassName = "aspect-[16/11]",
    className,
}: Props) {
    return (
        <div
            className={cn(
                "rounded-lg overflow-hidden border bg-background",
                className,
            )}
        >
            <Link href={promo.url} className="block">
                <div
                    className={cn("relative w-full bg-muted", aspectClassName)}
                >
                    <Image
                        src={promo.imageSrc}
                        alt={promo.imageAlt}
                        fill
                        className="object-cover"
                        sizes="360px"
                    />
                </div>

                <div className="p-4">
                    {promo.eyebrow && (
                        <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                            {promo.eyebrow}
                        </p>
                    )}

                    <p className="mt-1 text-sm font-medium">{promo.title}</p>

                    <p className="mt-2 text-sm underline underline-offset-4">
                        {promo.cta} →
                    </p>
                </div>
            </Link>
        </div>
    );
}
