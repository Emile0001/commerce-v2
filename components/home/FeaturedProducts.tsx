import { fetchFeaturedProducts } from "@/app/utils/actions";
import EmptyList from "../layout/EmptyList";
import SectionTitle from "../layout/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

async function FeaturedProducts() {
    const products = await fetchFeaturedProducts();
    if (products.length === 0) return <EmptyList />;
    return (
        <section className="pt-24">
            <SectionTitle text="featured products" />
            <ProductsGrid products={products} />
        </section>
    );
}
export default FeaturedProducts;
