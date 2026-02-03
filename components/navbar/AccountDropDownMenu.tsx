import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { accountLinks } from "@/components/navbar/accountLinks";

function AccountDropDownMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-4 max-w-25">
                    <UserIcon className="h-[1.2rem] w-[1.2rem]" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 p-2 space-y-1">
                {accountLinks.map((link) => {
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
export default AccountDropDownMenu;
