import db from "@/app/utils/db";

//Fetch Featured products from products model where featured = true
export const fetchFeaturedProducts = async () => {
    try {
        return await db.product.findMany({
            where: { featured: true },
            orderBy: { createdAt: "desc" },
        });
    } catch (error) {
        console.error("Failed to fetch featured products", error);
        throw new Error("Could not load featured products");
    }
};

//Fetch all products
export const fetchAllProducts = async (page = 1, pageSize = 20) => {
    return db.product.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { createdAt: "desc" },
    });
};
