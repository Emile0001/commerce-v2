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
import { accountLinks } from "@/utils/accountLinks";
import { AuthButtons } from "../auth/AuthButtons";
import { UserAvatar } from "../user-avatar";
import { User } from "better-auth";

function AccountDropDown({ user }: { user?: User | null }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="flex gap-2 rounded-full h-10 w-10"
                >
                    {user ? (
                        <UserAvatar
                            name={user.name || "User"} // Fallback so .split() doesn't crash if name is missing
                            image={user.image}
                            className="h-full w-full"
                        />
                    ) : (
                        <UserIcon className="h-5 w-5" />
                    )}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56 p-2 space-y-1">
                {/* Only show user details and links if they are actually logged in */}
                {user ? (
                    <>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {user.name}
                                </p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    {user.email}
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        {accountLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                //TODO: Hide admin link from non-admin users
                                <DropdownMenuItem asChild key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="capitalize flex items-center gap-3 rounded-md px-3 py-2 text-sm cursor-pointer"
                                    >
                                        {Icon && (
                                            <Icon className="h-4 w-4 shrink-0" />
                                        )}
                                        <span className="capitalize">
                                            {link.label}
                                        </span>
                                    </Link>
                                </DropdownMenuItem>
                            );
                        })}
                        <DropdownMenuSeparator />
                    </>
                ) : (
                    // Optional: A label for logged-out users
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                )}

                {/* Always show the AuthButtons (Login/Logout) */}
                <div className="p-1">
                    <AuthButtons />
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
export default AccountDropDown;
