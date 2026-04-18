import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/lib/generated/prisma/client";
// import { Product } from "@/types";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";
import ProductPrice from "./product-price";

function ProductsList({ products }: { products: Product[] }) {
    return (
        <div className="mt-12 grid gap-y-8">
            {products.map((product) => {
                const { id, name, slug, price, images } = product;

                return (
                    <article key={id} className="group relative">
                        <Link href={`/products/${slug}`}>
                            <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                                <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                                    <div className="relative h-64  md:h-48 md:w-48">
                                        <Image
                                            src={images[1]}
                                            alt={name}
                                            fill
                                            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                                            priority
                                            className="w-full rounded-md object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold capitalize">
                                            {name}
                                        </h2>
                                    </div>
                                    <ProductPrice
                                        value={Number(price)}
                                        className="mt-2 text-muted-foreground"
                                    />
                                </CardContent>
                            </Card>
                        </Link>
                        <div className="absolute bottom-8 right-8 z-10">
                            <FavoriteToggleButton productId={id} />
                        </div>
                    </article>
                );
            })}
        </div>
    );
}
export default ProductsList;
