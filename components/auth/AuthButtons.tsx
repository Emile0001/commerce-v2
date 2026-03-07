"use client";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export function AuthButtons() {
    const router = useRouter();

    async function handleSignOut() {
        const { error } = await authClient.signOut();
        if (error) {
            toast.error(error.message || "Something went wrong");
        } else {
            toast.success("Signed out successfully");
            router.push("/sign-in");
        }
    }

    return (
        <DropdownMenuItem onClick={handleSignOut}>
            <LogOutIcon className="size-4" /> <span>Sign out</span>
        </DropdownMenuItem>
    );
}
