import db from "@/app/utils/db";

//fetch featured products

export const fetchFeaturedProducts = async () => {
    const products = await db.product.findMany({
        where: {
            featured: true,
        },
    });
    return products;
};

/**
 * fetchAllProducts
 *
 * Server-side DB fetch for all products, optionally filtered by a search term.
 *
 * - If `search` is empty/whitespace, we return all products.
 * - If `search` has content, we filter by name OR company (case-insensitive).
 */

export const fetchAllProducts = async ({
    search = "",
}: {
    search?: string;
} = {}) => {
    // Normalize the user input (prevents "   " counting as a real search)
    const q = search.trim();

    return db.product.findMany({
        where: q
            ? {
                  OR: [
                      { name: { contains: q, mode: "insensitive" } },
                      { company: { contains: q, mode: "insensitive" } },
                  ],
              }
            : undefined,
        orderBy: { createdAt: "desc" },
    });
};

//Single product setup

import { redirect } from "next/navigation";

export const fetchSingleProduct = async (productId: string) => {
    const product = await db.product.findUnique({
        where: {
            id: productId,
        },
    });
    if (!product) {
        redirect("/products");
    }
    return product;
};
