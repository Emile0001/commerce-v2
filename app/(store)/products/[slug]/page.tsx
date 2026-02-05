"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

/**
 * ProductDetails (UI only)
 * - Shadcn UI + Tailwind
 * - Press-on nails sizing (XS/S/M/L) + nail shape
 * - No "Buy now"
 * - Accordions like your reference image
 */
export default function ProductDetails() {
    // Mock product (UI-only)
    const product = {
        name: "Colourful Nails – Luxe Press-On Set",
        price: 299,
        compareAtPrice: 349,
        stockNote: "Low stock · 7 sets left",
        description:
            "Salon-finish press-on nails with a comfortable fit and durable wear. Reusable, lightweight, and designed for easy at-home application.",
        images: [
            "/images/products/press-on-1.jpg",
            "/images/products/press-on-2.jpg",
            "/images/products/press-on-3.jpg",
            "/images/products/press-on-4.jpg",
            "/images/products/press-on-5.jpg",
        ],
    };

    // UI-only “selected” values (no real logic needed, but helps the layout look real)
    const [activeImage, setActiveImage] = React.useState(product.images[0]);
    const [size, setSize] = React.useState<string>("M");
    const [shape, setShape] = React.useState<string>("Almond");

    // Common press-on “set sizes” customers choose from:
    // XS / S / M / L (sometimes XL/custom, but these are the typical retail options)
    const SIZES = ["XS", "S", "M", "L"] as const;

    const SHAPES = [
        "Round",
        "Square",
        "Squoval",
        "Almond",
        "Coffin",
        "Stiletto",
    ] as const;

    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
            <div className="grid items-start gap-10 lg:grid-cols-2">
                {/* LEFT: Gallery */}
                <div className="grid gap-4">
                    <div className="grid grid-cols-[72px_1fr] gap-4">
                        {/* Thumbnails */}
                        <div className="flex flex-col gap-3">
                            {product.images.map((src) => {
                                const isActive = src === activeImage;
                                return (
                                    <button
                                        key={src}
                                        type="button"
                                        onClick={() => setActiveImage(src)}
                                        className={cn(
                                            "relative h-16 w-16 overflow-hidden rounded-lg border bg-muted transition",
                                            isActive
                                                ? "border-primary ring-2 ring-primary/20"
                                                : "border-border hover:border-primary/60",
                                        )}
                                        aria-label="View product image"
                                    >
                                        <Image
                                            src={src}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                            sizes="64px"
                                            priority={isActive}
                                        />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Main image */}
                        <Card className="relative overflow-hidden rounded-2xl self-start">
                            <div className="relative aspect-[4/5] max-h-[640px] w-full">
                                <Image
                                    src={activeImage}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 520px, 100vw"
                                    priority
                                />
                            </div>
                        </Card>
                    </div>

                    {/* Optional: small badges under gallery */}
                    {/* <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Reusable</Badge>
                        <Badge variant="secondary">Salon finish</Badge>
                        <Badge variant="secondary">Beginner-friendly</Badge>
                    </div> */}
                </div>

                {/* RIGHT: Product info */}
                <div className="flex flex-col gap-5">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-3">
                            <p className="text-xl font-semibold">
                                R{product.price.toFixed(0)}
                            </p>
                            <p className="text-sm text-muted-foreground line-through">
                                R{product.compareAtPrice.toFixed(0)}
                            </p>
                        </div>

                        <p className="text-sm text-muted-foreground">
                            {product.description}
                        </p>

                        <div className="flex items-center gap-2 pt-1">
                            <span className="inline-flex h-2 w-2 rounded-full bg-amber-500" />
                            <p className="text-sm text-muted-foreground">
                                {product.stockNote}
                            </p>
                        </div>
                    </div>

                    <Separator />

                    {/* Options */}
                    <div className="space-y-6">
                        {/* Size */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between gap-3">
                                <p className="text-sm font-medium">Size</p>
                                <button
                                    type="button"
                                    className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
                                >
                                    Size guide
                                </button>
                            </div>

                            <RadioGroup
                                value={size}
                                onValueChange={setSize}
                                className="grid grid-cols-4 gap-2"
                            >
                                {SIZES.map((s) => (
                                    <LabelPill key={s} value={s} label={s} />
                                ))}
                            </RadioGroup>

                            <p className="text-xs text-muted-foreground">
                                Typical press-on sets come in XS / S / M / L. If
                                you’re between sizes, go up for comfort.
                            </p>
                        </div>

                        {/* Shape */}
                        <div className="space-y-2">
                            <p className="text-sm font-medium">Nail shape</p>

                            <RadioGroup
                                value={shape}
                                onValueChange={setShape}
                                className="grid grid-cols-2 gap-2 sm:grid-cols-3"
                            >
                                {SHAPES.map((sh) => (
                                    <LabelPill key={sh} value={sh} label={sh} />
                                ))}
                            </RadioGroup>
                        </div>

                        {/* CTA */}
                        <div className="pt-1">
                            <Button className="w-full" size="lg">
                                Add to cart
                            </Button>
                        </div>
                    </div>

                    {/* Accordions (like your reference) */}
                    <div className="pt-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="overview">
                                <AccordionTrigger>
                                    Product Overview
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                                        <li>
                                            Premium press-on set designed for a
                                            snug, natural fit.
                                        </li>
                                        <li>
                                            Lightweight feel with a glossy
                                            salon-style finish.
                                        </li>
                                        <li>
                                            Reusable with proper removal and
                                            care.
                                        </li>
                                        <li>
                                            Best wear time varies by application
                                            method and lifestyle.
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="included">
                                <AccordionTrigger>
                                    What’s Included
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                                        <li>Press-on nails (full set)</li>
                                        <li>Adhesive tabs (quick wear)</li>
                                        <li>Nail file + mini buffer</li>
                                        <li>Cuticle stick + prep wipe</li>
                                        <li>Application & care card</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="application">
                                <AccordionTrigger>
                                    Application Tips
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <p>
                                            For best hold: prep is everything.
                                            Remove oils, gently buff, and press
                                            firmly.
                                        </p>
                                        <ol className="list-decimal space-y-2 pl-5">
                                            <li>
                                                Wash hands and dry completely.
                                            </li>
                                            <li>
                                                Push back cuticles and lightly
                                                buff the nail surface.
                                            </li>
                                            <li>
                                                Clean nails with the prep wipe
                                                and let dry.
                                            </li>
                                            <li>
                                                Select correct sizes, then apply
                                                tabs and press 20–30s.
                                            </li>
                                            <li>
                                                Avoid water for ~1 hour after
                                                application.
                                            </li>
                                        </ol>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="sizeguide">
                                <AccordionTrigger>Size Guide</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <p>
                                            Choose the closest set size
                                            (XS/S/M/L). If one nail is between
                                            sizes, pick the slightly larger nail
                                            and file the sides for a perfect
                                            match.
                                        </p>
                                        <div className="rounded-xl border bg-muted/40 p-3">
                                            <p className="text-xs font-medium text-foreground">
                                                Quick tip:
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                Lay nails over your natural nail
                                                edge-to-edge. If it doesn’t
                                                fully cover the sides, go up a
                                                size.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="care">
                                <AccordionTrigger>
                                    Care & Removal
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <p>
                                            To reuse your set, remove
                                            gently—never rip. Use warm soapy
                                            water or an oil-based remover.
                                        </p>
                                        <ul className="list-disc space-y-2 pl-5">
                                            <li>
                                                Soak in warm water + a little
                                                oil for 10–15 minutes.
                                            </li>
                                            <li>
                                                Lift from the sides slowly using
                                                the cuticle stick.
                                            </li>
                                            <li>
                                                Store nails in the box to keep
                                                shape and finish.
                                            </li>
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="shipping">
                                <AccordionTrigger>
                                    Shipping & Returns
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <p>
                                            Shipping timelines and return
                                            eligibility will display here. (UI
                                            placeholder.)
                                        </p>
                                        <ul className="list-disc space-y-2 pl-5">
                                            <li>
                                                Processing: 1–3 business days
                                            </li>
                                            <li>
                                                Delivery: depends on your
                                                courier/region
                                            </li>
                                            <li>
                                                Returns: unopened/unused items
                                                only
                                            </li>
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * LabelPill
 * - RadioGroup item styled like selectable pills (UI pattern similar to Shopify size/variant selectors)
 */
function LabelPill({ value, label }: { value: string; label: string }) {
    return (
        <div className="relative">
            <RadioGroupItem value={value} id={value} className="peer sr-only" />
            <label
                htmlFor={value}
                className={cn(
                    "flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium",
                    "bg-background transition hover:border-primary/60",
                    "peer-data-[state=checked]:border-primary peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-primary/20",
                )}
            >
                {label}
            </label>
        </div>
    );
}
