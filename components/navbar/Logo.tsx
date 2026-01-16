import Link from "next/link";
import { Button } from "../ui/button";
import { HeartPlusIcon } from "lucide-react";

function Logo() {
    return (
        <Button size={"icon"} asChild>
            <Link href={"/"}>
                <HeartPlusIcon className="w-6 h-6" />
            </Link>
        </Button>
    );
}
export default Logo;
