import { Product } from "@/app/generated/prisma/client";
import { formatCurrency } from "@/app/utils/format";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

/**
 * ProductsGrid
 *
 * Displays a responsive grid of product cards.
 * Each card links to the product detail page and allows
 * the user to toggle the product as a favorite.
 *
 * This component is purely presentational:
 * - It does NOT fetch data
 * - It assumes `products` is already validated
 */
function ProductsGrid({ products }: { products: Product[] }) {
    return (
        // Responsive grid layout
        <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
                // Destructure commonly used fields for clarity
                const { id, name, price, image } = product;

                // Format price once per product (avoid formatting in JSX)
                const formattedPrice = formatCurrency(price);

                return (
                    // Each product is wrapped in an <article> for semantic HTML
                    <article key={id} className="group relative">
                        {/* 
                            Entire card is clickable and routes to
                            the product detail page 
                        */}
                        <Link href={`/products/${id}`}>
                            <Card className="transform transition-shadow duration-500 group-hover:shadow-xl">
                                <CardContent className="p-4">
                                    {/* 
                                        Image container must be relative
                                        because next/image uses absolute positioning
                                    */}
                                    <div className="relative h-64 md:h-48 overflow-hidden rounded">
                                        <Image
                                            src={image}
                                            alt={name}
                                            fill
                                            sizes="(max-width: 768px) 100vw,
                                                   (max-width: 1200px) 50vw,
                                                   33vw"
                                            /*
                                                Do NOT use `priority` for all images.
                                                Reserve it for hero / above-the-fold images
                                                to avoid performance issues.
                                            */
                                            className="w-full rounded object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Product name and price */}
                                    <div className="mt-4 text-center">
                                        <h2 className="text-lg capitalize">
                                            {name}
                                        </h2>
                                        <p className="mt-2 text-muted-foreground">
                                            {formattedPrice}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>

                        {/* 
                            Favorite toggle button
                            Positioned absolutely so it floats above the card
                            without interfering with the link layout
                        */}
                        <div className="absolute top-7 right-7 z-10">
                            <FavoriteToggleButton productId={id} />
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

export default ProductsGrid;
