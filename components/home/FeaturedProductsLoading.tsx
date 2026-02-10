//loading container for featured products

import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";

function FeaturedProductsLoading() {
    return (
        <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <LoadingProduct />
            <LoadingProduct />
            <LoadingProduct />
        </div>
    );
}

function LoadingProduct() {
    return (
        <article className="group relative">
            <Card className="transform transition-shadow duration-500 group-hover:shadow-xl">
                <CardContent className="p-4">
                    {/* image */}
                    <div className="relative h-64 md:h-48 overflow-hidden rounded">
                        <Skeleton className="h-full w-full" />
                    </div>

                    {/* name + price */}
                    <div className="mt-4 flex flex-col items-center gap-2">
                        <Skeleton className="h-5 w-2/3" />
                        <Skeleton className="h-4 w-1/3" />
                    </div>
                </CardContent>
            </Card>

            {/* favorite button placeholder */}
            <div className="absolute top-7 right-7 z-10">
                <Skeleton className="h-10 w-10 rounded-full" />
            </div>
        </article>
    );
}
export default FeaturedProductsLoading;
