import {
    HomeIcon,
    LucideIcon,
    BookAIcon,
    ShirtIcon,
    HeartIcon,
    ShoppingCartIcon,
    ShoppingBagIcon,
} from "lucide-react";

type NavLink = {
    href: string;
    label: string;
    icon?: LucideIcon;
};

export const links: NavLink[] = [
    { href: "/", label: "home", icon: HomeIcon },
    { href: "/about", label: "about", icon: BookAIcon },
    { href: "/products", label: "products", icon: ShirtIcon },
    { href: "/favorites", label: "favorites", icon: HeartIcon },
    { href: "/cart", label: "cart", icon: ShoppingCartIcon },
    { href: "/orders", label: "orders", icon: ShoppingBagIcon },
];
