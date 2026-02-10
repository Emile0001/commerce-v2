import FeaturedProductsLoading from "@/components/home/FeaturedProductsLoading";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

import { Suspense } from "react";

function HomePage() {
    return (
        <>
            <Hero />

            <Suspense fallback={<FeaturedProductsLoading />}>
                <FeaturedProducts />
            </Suspense>
        </>
    );
}
export default HomePage;
