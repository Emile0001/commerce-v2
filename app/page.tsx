import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

import { Suspense } from "react";
import ProductDetails from "./(root)/product/[slug]/page";
function HomePage() {
    return (
        <>
            <Hero />
            <ProductDetails />
            <Suspense fallback={<LoadingContainer />}>
                <FeaturedProducts />
            </Suspense>
        </>
    );
}
export default HomePage;
