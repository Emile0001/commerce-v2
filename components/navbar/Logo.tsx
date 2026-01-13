import Link from "next/link";
import { Button } from "../ui/button";
import { FaCross } from "react-icons/fa";

function Logo() {
    return (
        <Button size={"icon"} asChild>
            <Link href={"/"}>
                <FaCross />
            </Link>
        </Button>
    );
}
export default Logo;
