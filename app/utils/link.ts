import type React from "react";

export type NavLeaf = {
    title: string;
    url: string;
};

export type NavGroup = {
    title: string; // column heading
    items: NavLeaf[];
};

export type NavPromo = {
    eyebrow?: string;
    title: string;
    cta: string;
    url: string;
    imageSrc: string;
    imageAlt: string;
};

export type MegaMenuItem = {
    title: string; // top-level menu label
    url?: string;
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
 * Colourful Nails mega menu data
 * - SHOP/STYLES/OCCASIONS have multi-column groups + promo
 * - LEARN + CUSTOM are simpler but still consistent with MegaMenuItem
 */
export const NAVBAR_MEGA_DATA: NavbarMegaPropsData = {
    logo: {
        url: "/",
        src: "/images/logo/Colourfull_Nails_Logo.png",
        alt: "Colourful Nails logo",
        title: "",
        className: "h-8 w-auto",
    },

    menu: [
        {
            title: "SHOP",
            url: "/shop",
            groups: [
                {
                    title: "SHOP BY FINISH",
                    items: [
                        { title: "ALL PRESS-ON SETS", url: "/shop" },
                        { title: "GLOSSY", url: "/shop/finish/glossy" },
                        { title: "MATTE", url: "/shop/finish/matte" },
                        {
                            title: "CHROME / MIRROR",
                            url: "/shop/finish/chrome",
                        },
                        {
                            title: "VELVET / MAGNETIC",
                            url: "/shop/finish/velvet-magnetic",
                        },
                        {
                            title: "HOLOGRAPHIC",
                            url: "/shop/finish/holographic",
                        },
                    ],
                },
                {
                    title: "SHOP BY LENGTH",
                    items: [
                        { title: "SHORT", url: "/shop/length/short" },
                        { title: "MEDIUM", url: "/shop/length/medium" },
                        { title: "LONG", url: "/shop/length/long" },
                        { title: "EXTRA LONG", url: "/shop/length/extra-long" },
                    ],
                },
                {
                    title: "SHOP BY SHAPE",
                    items: [
                        { title: "ALMOND", url: "/shop/shape/almond" },
                        { title: "COFFIN", url: "/shop/shape/coffin" },
                        { title: "SQUARE", url: "/shop/shape/square" },
                        { title: "OVAL", url: "/shop/shape/oval" },
                        { title: "STILETTO", url: "/shop/shape/stiletto" },
                        { title: "ROUND", url: "/shop/shape/round" },
                    ],
                },
            ],
            promo: {
                eyebrow: "NEW THIS WEEK",
                title: "NEW DROPS",
                cta: "SHOP NEW",
                url: "/shop/new",
                imageSrc:
                    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=80",
                imageAlt: "Fresh press-on nails set",
            },
        },

        {
            title: "STYLES",
            url: "/styles",
            groups: [
                {
                    title: "TRENDING",
                    items: [
                        {
                            title: "3D NAIL ART (BEADS, STUDS)",
                            url: "/styles/3d",
                        },
                        {
                            title: "AURA / GRADIENT",
                            url: "/styles/aura-gradient",
                        },
                        {
                            title: "CHROME / MIRROR FINISH",
                            url: "/styles/chrome-mirror",
                        },
                        {
                            title: "VELVET / MAGNETIC POLISH",
                            url: "/styles/velvet-magnetic",
                        },
                        { title: "CHECKERBOARD", url: "/styles/checkerboard" },
                    ],
                },
                {
                    title: "MINIMALIST",
                    items: [
                        {
                            title: "NEGATIVE SPACE",
                            url: "/styles/negative-space",
                        },
                        { title: "FINE-LINE ART", url: "/styles/fine-line" },
                        {
                            title: "DOTTING / MICRO-DETAILS",
                            url: "/styles/dotting",
                        },
                        {
                            title: "NEUTRAL CLEAN SETS",
                            url: "/styles/neutral-clean",
                        },
                    ],
                },
                {
                    title: "BOLD & ARTISTIC",
                    items: [
                        { title: "MARBLE EFFECT", url: "/styles/marble" },
                        { title: "SPLATTER PAINT", url: "/styles/splatter" },
                        {
                            title: "ANIMAL PRINTS (LEOPARD)",
                            url: "/styles/animal-prints",
                        },
                        {
                            title: "METALLIC ACCENTS",
                            url: "/styles/metallic-accents",
                        },
                        { title: "ABSTRACT ART", url: "/styles/abstract" },
                    ],
                },
            ],
            promo: {
                eyebrow: "TOP TREND",
                title: "AURA SETS",
                cta: "SHOP AURA",
                url: "/styles/aura-gradient",
                imageSrc: "/images/Nav/nailimage01.jpg",
                imageAlt: "Aura gradient nail art",
            },
        },

        {
            title: "OCCASIONS",
            url: "/occasions",
            groups: [
                {
                    title: "CLASSIC & ELEGANT",
                    items: [
                        {
                            title: "FRENCH MANICURE",
                            url: "/occasions/classic/french",
                        },
                        {
                            title: "REVERSE FRENCH TIPS",
                            url: "/occasions/classic/reverse-french",
                        },
                        {
                            title: "NUDE PALETTES",
                            url: "/occasions/classic/nudes",
                        },
                        {
                            title: "SOFT PASTEL SWIRLS",
                            url: "/occasions/classic/pastel-swirls",
                        },
                    ],
                },
                {
                    title: "SEASONAL",
                    items: [
                        {
                            title: "HOLIDAY THEMED",
                            url: "/occasions/seasonal/holiday",
                        },
                        { title: "FLORAL", url: "/occasions/seasonal/floral" },
                        {
                            title: "SUMMER BRIGHTS",
                            url: "/occasions/seasonal/summer-brights",
                        },
                        {
                            title: "DARK MOODY FLORALS",
                            url: "/occasions/seasonal/moody-florals",
                        },
                    ],
                },
                {
                    title: "EVENT READY",
                    items: [
                        { title: "BRIDAL", url: "/occasions/event/bridal" },
                        {
                            title: "BIRTHDAY GLAM",
                            url: "/occasions/event/birthday",
                        },
                        {
                            title: "DATE NIGHT",
                            url: "/occasions/event/date-night",
                        },
                        {
                            title: "FESTIVAL / PARTY",
                            url: "/occasions/event/festival",
                        },
                    ],
                },
            ],
            promo: {
                eyebrow: "EVENT READY",
                title: "BRIDAL EDIT",
                cta: "SHOP BRIDAL",
                url: "/occasions/event/bridal",
                imageSrc:
                    "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1600&q=80",
                imageAlt: "Elegant neutral manicure",
            },
        },

        {
            title: "CUSTOM",
            url: "/custom",
            groups: [
                {
                    title: "CUSTOM ORDER",
                    items: [
                        { title: "BUILD YOUR SET", url: "/custom/build" },
                        { title: "UPLOAD INSPIRATION", url: "/custom/upload" },
                        { title: "CHOOSE SHAPE & LENGTH", url: "/custom/size" },
                        {
                            title: "ADD 3D CHARMS",
                            url: "/custom/add-ons/3d-charms",
                        },
                        {
                            title: "ADD CHROME / VELVET",
                            url: "/custom/add-ons/finishes",
                        },
                    ],
                },
                {
                    title: "SIZING & FIT",
                    items: [
                        { title: "SIZE GUIDE", url: "/learn/size-guide" },
                        {
                            title: "MEASURING KIT",
                            url: "/shop/accessories/measuring-kit",
                        },
                        {
                            title: "HOW TO MEASURE",
                            url: "/learn/how-to-measure",
                        },
                        { title: "FAQ: FIT & COMFORT", url: "/learn/faq#fit" },
                    ],
                },
            ],
            promo: {
                eyebrow: "MADE FOR YOU",
                title: "CUSTOM SETS",
                cta: "START CUSTOM",
                url: "/custom/build",
                imageSrc: "/images/Nav/nailimage02.jpg",
                imageAlt: "Custom nail art being applied",
            },
        },

        {
            title: "LEARN",
            url: "/learn",
            groups: [
                {
                    title: "HOW IT WORKS",
                    items: [
                        {
                            title: "APPLICATION GUIDE",
                            url: "/learn/application",
                        },
                        { title: "REMOVAL GUIDE", url: "/learn/removal" },
                        { title: "CARE TIPS", url: "/learn/care" },
                        { title: "FAQ", url: "/learn/faq" },
                    ],
                },
                {
                    title: "ABOUT",
                    items: [
                        { title: "ABOUT COLOURFUL NAILS", url: "/about" },
                        {
                            title: "HANDCRAFTED PROCESS",
                            url: "/learn/handcrafted",
                        },
                        {
                            title: "SHIPPING & RETURNS",
                            url: "/shipping-returns",
                        },
                        { title: "CONTACT", url: "/contact" },
                    ],
                },
            ],
            promo: {
                eyebrow: "MADE FOR YOU",
                title: "CUSTOM SETS",
                cta: "START CUSTOM",
                url: "/custom/build",
                imageSrc: "/images/Nav/nailimage03.jpg",
                imageAlt: "Custom nail art being applied",
            },
        },
    ],

    auth: {
        login: { title: "LOG IN", url: "/login" },
        signup: { title: "REGISTER", url: "/register" },
    },
};
