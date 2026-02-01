// app/utils/link.ts
import type React from "react";

export type NavLeaf = {
    title: string;
    url: string;
};

export type NavGroup = {
    title: string; // e.g. TOPS
    items: NavLeaf[];
};

export type NavPromo = {
    eyebrow?: string; // e.g. "SPRING SUMMER 2024"
    title: string; // e.g. "NEW SEASON"
    cta: string; // e.g. "SHOP NOW"
    url: string;
    imageSrc: string;
    imageAlt: string;
};

export type MegaMenuItem = {
    title: string; // MEN
    url?: string; // optional landing
    groups: NavGroup[];
    promo?: NavPromo;
};

export interface NavbarMegaPropsData {
    logo: {
        url: string;
        src: string;
        alt: string;
        title: string;
        className?: string;
    };
    menu: MegaMenuItem[];
    auth: {
        login: { title: string; url: string };
        signup: { title: string; url: string };
    };
}

/**
 * Dummy data shaped like the screenshots:
 * - MEN/WOMEN have 3 columns + promo image
 * - ACCESSORIES has 1 column + promo image
 */
export const NAVBAR_MEGA_DATA: NavbarMegaPropsData = {
    logo: {
        url: "/",
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
        alt: "logo",
        title: "SEVENTH",
    },
    menu: [
        {
            title: "MEN",
            url: "/men",
            groups: [
                {
                    title: "TOPS",
                    items: [
                        { title: "ALL TOPS", url: "/men/tops" },
                        { title: "T-SHIRTS", url: "/men/tops/t-shirts" },
                        {
                            title: "HOODIES & SWEATSHIRT",
                            url: "/men/tops/hoodies",
                        },
                        { title: "JACKETS", url: "/men/tops/jackets" },
                        { title: "KNITWEAR", url: "/men/tops/knitwear" },
                        {
                            title: "LONG SLEEVES",
                            url: "/men/tops/long-sleeves",
                        },
                        { title: "SHIRT", url: "/men/tops/shirts" },
                    ],
                },
                {
                    title: "BOTTOMS",
                    items: [
                        { title: "ALL BOTTOMS", url: "/men/bottoms" },
                        { title: "PANTS", url: "/men/bottoms/pants" },
                        { title: "JEANS", url: "/men/bottoms/jeans" },
                        { title: "SWEATPANTS", url: "/men/bottoms/sweatpants" },
                        { title: "SHORTS", url: "/men/bottoms/shorts" },
                        { title: "SWIMWEAR", url: "/men/bottoms/swimwear" },
                    ],
                },
                {
                    title: "SEASON HIGHLIGHTS",
                    items: [
                        {
                            title: "SPRING SUMMER 2024 RESORT",
                            url: "/men/ss24-resort",
                        },
                        { title: "CLASSICS", url: "/men/classics" },
                        { title: "ESSENTIALS", url: "/men/essentials" },
                        { title: "CO-ORDS", url: "/men/co-ords" },
                    ],
                },
            ],
            promo: {
                eyebrow: "SPRING SUMMER 2024",
                title: "NEW SEASON",
                cta: "SHOP NOW",
                url: "/men/ss24",
                imageSrc:
                    "https://images.unsplash.com/photo-1520975958225-1c2d10f3b8df?auto=format&fit=crop&w=1600&q=80",
                imageAlt: "Model wearing dark outerwear",
            },
        },
        {
            title: "WOMEN",
            url: "/women",
            groups: [
                {
                    title: "TOPS",
                    items: [
                        { title: "ALL TOPS", url: "/women/tops" },
                        { title: "T-SHIRTS", url: "/women/tops/t-shirts" },
                        { title: "KNITWEAR", url: "/women/tops/knitwear" },
                        { title: "JACKETS", url: "/women/tops/jackets" },
                        { title: "SHIRTS", url: "/women/tops/shirts" },
                    ],
                },
                {
                    title: "BOTTOMS",
                    items: [
                        { title: "ALL BOTTOMS", url: "/women/bottoms" },
                        { title: "PANTS", url: "/women/bottoms/pants" },
                        { title: "JEANS", url: "/women/bottoms/jeans" },
                        { title: "SKIRTS", url: "/women/bottoms/skirts" },
                    ],
                },
                {
                    title: "SEASON HIGHLIGHTS",
                    items: [
                        { title: "SPRING SUMMER 2024", url: "/women/ss24" },
                        { title: "ESSENTIALS", url: "/women/essentials" },
                        { title: "CO-ORDS", url: "/women/co-ords" },
                    ],
                },
            ],
            promo: {
                eyebrow: "SPRING SUMMER 2024",
                title: "EDITORIAL",
                cta: "SHOP NOW",
                url: "/women/ss24",
                imageSrc:
                    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
                imageAlt: "Editorial image",
            },
        },
        {
            title: "ACCESSORIES",
            url: "/accessories",
            groups: [
                {
                    title: "ACCESSORIES",
                    items: [
                        { title: "ALL ACCESSORIES", url: "/accessories" },
                        { title: "BAGS", url: "/accessories/bags" },
                        { title: "HEADWEAR", url: "/accessories/headwear" },
                        { title: "SOCKS", url: "/accessories/socks" },
                        { title: "GIFT CARD", url: "/accessories/gift-card" },
                        { title: "OTHER", url: "/accessories/other" },
                    ],
                },
            ],
            promo: {
                eyebrow: "NEW SEASON",
                title: "BAGS",
                cta: "SHOP NOW",
                url: "/accessories/bags",
                imageSrc:
                    "https://images.unsplash.com/photo-1520975869010-46c3f1cde7c2?auto=format&fit=crop&w=1600&q=80",
                imageAlt: "Bag product shot",
            },
        },
        {
            title: "COLLECTIONS",
            url: "/collections",
            groups: [
                {
                    title: "COLLECTIONS",
                    items: [
                        {
                            title: "SPRING SUMMER 2024",
                            url: "/collections/ss24",
                        },
                        { title: "RESORT", url: "/collections/resort" },
                        { title: "CLASSICS", url: "/collections/classics" },
                        { title: "ESSENTIALS", url: "/collections/essentials" },
                    ],
                },
            ],
        },
    ],
    auth: {
        login: { title: "LOG IN", url: "/login" },
        signup: { title: "REGISTER", url: "/register" },
    },
};
