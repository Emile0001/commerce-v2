import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/app/utils/links";

function LinksDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-4 max-w-25">
                    <MenuIcon className="w-6 h-6" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 p-2 space-y-1">
                {links.map((link) => {
                    const Icon = link.icon;
                    return (
                        <DropdownMenuItem asChild key={link.href}>
                            <Link
                                href={link.href}
                                className="capitalize flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent"
                            >
                                {Icon && <Icon className="h-4 w-4 shrink-0" />}
                                <span className="capitalize">{link.label}</span>
                            </Link>
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
export default LinksDropdown;
