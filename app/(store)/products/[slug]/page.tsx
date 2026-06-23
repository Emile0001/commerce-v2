import BreadCrumbs from "@/components/products/product-detail/BreadCrumbs";
import ProductImages from "@/components/products/product-detail/product-images";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

const ProductDetailPage = async (props: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await props.params;
    const product = await getProductBySlug(slug);
    if (!product) notFound();

    return (
        <>
            <section className="mx-auto w-full max-w-6xl px-4 py-10">
                {/* Breadcrumbs */}
                <BreadCrumbs name={slug} />
                <div className="grid items-start gap-10 lg:grid-cols-2">
                    {/* Product Gallery */}
                    <ProductImages images={product.images} />
                </div>
            </section>
        </>
    );
};

export default ProductDetailPage;
