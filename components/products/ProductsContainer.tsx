import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsList from "@/components/products/ProductsList";
import { LayoutListIcon, LayoutGridIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/app/utils/actions";
import Link from "next/link";

/**
 * ProductsContainer
 *
 * Server component that:
 * - fetches products
 * - shows a header with total count
 * - allows switching between "grid" and "list" layouts via query params
 * - renders the appropriate view (grid/list) or an empty-state message
 *
 * Props typically come from `searchParams` in a Next.js route.
 */
async function ProductsContainer({
    layout,
    search,
}: {
    layout: string; // expected values: "grid" | "list" (any other value falls back to list below)
    search: string; // the current search term from query params
}) {
    // Fetch all products (note: currently not passing `search` into the fetch function)
    const products = await fetchAllProducts();

    // Total number of products returned from the fetch
    const totalProducts = products.length;

    // Build a query-string fragment to preserve the current search term when switching layouts
    // Example: "&search=lamp"
    const searchTerm = search ? `&search=${search}` : "";

    return (
        <>
            {/* HEADER: count + layout toggle buttons */}
            <section>
                <div className="flex justify-between items-center">
                    {/* Product count with basic pluralization */}
                    <h4 className="font-medium text-lg">
                        {totalProducts} product{totalProducts > 1 && "s"}
                    </h4>

                    {/* Layout toggle buttons: update URL query params to switch layout */}
                    <div className="flex gap-x-4">
                        {/* Grid layout button:
                - uses `asChild` so the Button styles the Link
                - "default" variant when active, otherwise "ghost" */}
                        <Button
                            variant={layout === "grid" ? "default" : "ghost"}
                            size="icon"
                            asChild
                        >
                            <Link href={`/products?layout=grid${searchTerm}`}>
                                <LayoutGridIcon />
                            </Link>
                        </Button>

                        {/* List layout button (same idea as grid) */}
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

                {/* Visual separator under the header */}
                <Separator className="mt-4" />
            </section>

            {/* PRODUCTS: empty state OR grid OR list */}
            <div>
                {totalProducts === 0 ? (
                    // Empty state when there are no products to display
                    <h5 className="text-2xl mt-16">
                        Sorry, no products matched your search...
                    </h5>
                ) : layout === "grid" ? (
                    // Grid view when layout=grid
                    <ProductsGrid products={products} />
                ) : (
                    // Fallback to list view (layout=list or anything else)
                    <ProductsList products={products} />
                )}
            </div>
        </>
    );
}

export default ProductsContainer;
