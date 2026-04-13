"use server";

import prisma from "@/lib/prisma";

//fetch featured products

export const fetchFeaturedProducts = async () => {
    const products = await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
        where: {
            isFeatured: true,
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

    return prisma.product.findMany({
        where: q
            ? {
                  OR: [
                      { name: { contains: q, mode: "insensitive" } },
                      { description: { contains: q, mode: "insensitive" } },
                  ],
              }
            : undefined,
        orderBy: { createdAt: "desc" },
    });
};

//Single product setup

import { redirect } from "next/navigation";

export const fetchSingleProduct = async (productId: string) => {
    const product = await prisma.product.findUnique({
        where: {
            id: productId,
        },
    });
    if (!product) {
        redirect("/products");
    }
    return product;
};
