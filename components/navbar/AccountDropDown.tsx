"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { accountLinks } from "@/app/utils/accountLinks";
import Image from "next/image";
import { AuthButtons } from "../auth/AuthButtons";

function AccountDropDown({ user }) {
    //TODO: Render real user info

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2 max-w-40">
                    {user.image ? (
                        <Image
                            src={user.image}
                            alt={user.image}
                            width={16}
                            height={16}
                            className="rounded-full object-cover"
                        />
                    ) : (
                        <UserIcon className="h-[1.2rem] w-[1.2rem]" />
                    )}
                    {/* <span className="max-w-40 truncate">{user.name}</span> */}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-45 p-2 space-y-1">
                <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {accountLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        //TODO: Hide admin link from non-admin users
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
                <DropdownMenuSeparator />
                <AuthButtons />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
export default AccountDropDown;
