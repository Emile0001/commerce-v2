import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

async function CartButton() {
    const numItemsInCart: number = 9;
    return (
        <Button
            asChild
            variant={"outline"}
            size={"icon"}
            className=" flex justify-center items-center relative"
        >
            <Link href={"/cart"}>
                <ShoppingCartIcon />
                <span className="absolute -top-3 -right-3 h-5 w-5 bg-primary text-white rounded-full flex justify-center items-center text-xs">
                    {numItemsInCart}
                </span>
            </Link>
        </Button>
    );
}
export default CartButton;
