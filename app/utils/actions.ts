import db from "@/app/utils/db";

/**
 * Fetch featured products.
 * Returns products where `featured = true`,
 * ordered by newest first.
 */
export const fetchFeaturedProducts = async () => {
    try {
        return await db.product.findMany({
            where: {
                featured: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    } catch (error) {
        console.error("Failed to fetch featured products", error);
        throw new Error("Could not load featured products");
    }
};

/**
 * Fetch all products with pagination.
 *
 * @param page - Current page number (1-based)
 * @param pageSize - Number of items per page
 */
export const fetchAllProducts = async (
    page: number = 1,
    pageSize: number = 20,
) => {
    // Ensure page and pageSize are always valid
    const safePage = Math.max(page, 1);
    const safePageSize = Math.max(pageSize, 1);

    try {
        return await db.product.findMany({
            skip: (safePage - 1) * safePageSize,
            take: safePageSize,
            orderBy: {
                createdAt: "desc",
            },
        });
    } catch (error) {
        console.error("Failed to fetch products", error);
        throw new Error("Could not load products");
    }
};
