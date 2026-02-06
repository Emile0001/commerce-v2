import LoadingContainer from "@/components/layout/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

import { Suspense } from "react";

function HomePage() {
    return (
        <>
            <Hero />

            <Suspense fallback={<LoadingContainer />}>
                <FeaturedProducts />
            </Suspense>
        </>
    );
}
export default HomePage;
