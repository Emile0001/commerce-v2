// components/nav/AuthButtons.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AuthButtons({
    login,
    signup,
}: {
    login: { title: string; url: string };
    signup: { title: string; url: string };
}) {
    return (
        <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
                <Link href={login.url}>{login.title}</Link>
            </Button>
            <Button asChild size="sm">
                <Link href={signup.url}>{signup.title}</Link>
            </Button>
        </div>
    );
}
