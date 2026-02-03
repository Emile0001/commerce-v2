"use client";

import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type CartButtonProps = {
    numItemsInCart?: number;
};

export default function CartButton({ numItemsInCart = 0 }: CartButtonProps) {
    return (
        <Button
            asChild
            variant="outline"
            size="icon"
            className="relative flex items-center justify-center"
            aria-label="Cart"
        >
            <Link href="/cart" className="relative">
                <ShoppingCartIcon className="size-5" />

                {numItemsInCart > 0 && (
                    <span className="absolute -top-3 -right-3 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                        {numItemsInCart}
                    </span>
                )}
            </Link>
        </Button>
    );
}
