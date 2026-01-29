import Link from "next/link";
import { LayoutGridIcon, LayoutListIcon } from "lucide-react";

import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/app/utils/actions";

/**
 * ProductsContainer
 *
 * Server component that fetches products and renders either:
 * - empty state
 * - grid layout
 * - list layout
 */
async function ProductsContainer({
    layout,
    search,
}: {
    layout: string;
    search: string;
}) {
    /**
     * Fetch products using the search term from the URL.
     * Since `fetchAllProducts` accepts an options object, this is safe and readable.
     */
    const products = await fetchAllProducts({ search });

    // Used for header count + empty state
    const totalProducts = products.length;

    /**
     * Preserve search term while switching layout.
     * encodeURIComponent prevents broken URLs for spaces/special characters.
     */
    const searchTerm = search ? `&search=${encodeURIComponent(search)}` : "";

    return (
        <>
            {/* HEADER: count + layout toggle */}
            <section>
                <div className="flex justify-between items-center">
                    {/* Count label; `!== 1` handles 0 correctly ("0 products") */}
                    <h4 className="font-medium text-lg">
                        {totalProducts} product{totalProducts !== 1 && "s"}
                    </h4>

                    {/* Layout toggles */}
                    <div className="flex gap-x-4">
                        <Button
                            variant={layout === "grid" ? "default" : "ghost"}
                            size="icon"
                            asChild
                        >
                            <Link href={`/products?layout=grid${searchTerm}`}>
                                <LayoutGridIcon />
                            </Link>
                        </Button>

                        <Button
                            variant={layout === "list" ? "default" : "ghost"}
                            size="icon"
                            asChild
                        >
                            <Link href={`/products?layout=list${searchTerm}`}>
                                <LayoutListIcon />
                            </Link>
                        </Button>
                    </div>
                </div>

                <Separator className="mt-4" />
            </section>

            {/* PRODUCTS: empty state OR chosen layout */}
            <div>
                {totalProducts === 0 ? (
                    <h5 className="text-2xl mt-16">
                        Sorry, no products matched your search...
                    </h5>
                ) : layout === "grid" ? (
                    <ProductsGrid products={products} />
                ) : (
                    <ProductsList products={products} />
                )}
            </div>
        </>
    );
}

export default ProductsContainer;
