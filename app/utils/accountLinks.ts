import {
    HomeIcon,
    LucideIcon,
    ShieldIcon,
    UserIcon,
    HeartIcon,
    ShoppingCartIcon,
    ShoppingBagIcon,
} from "lucide-react";

type NavLink = {
    href: string;
    label: string;
    icon?: LucideIcon;
};

export const accountLinks: NavLink[] = [
    { href: "/", label: "home", icon: HomeIcon },
    { href: "/admin", label: "admin", icon: ShieldIcon },
    { href: "/profile", label: "profile", icon: UserIcon },
    { href: "/favorites", label: "favorites", icon: HeartIcon },
    { href: "/cart", label: "cart", icon: ShoppingCartIcon },
    { href: "/orders", label: "orders", icon: ShoppingBagIcon },
];
