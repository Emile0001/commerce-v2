import { PrismaClient, Prisma } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
    adapter,
});

const products: Prisma.ProductCreateInput[] = [
    {
        name: "Trendy Leopard Print",
        slug: "Trendy-Leopard-Print",
        category: "Animal Pattern",
        images: [
            "https://images.pexels.com/photos/34835303/pexels-photo-34835303.jpeg",
            "https://images.pexels.com/photos/34835299/pexels-photo-34835299.jpeg",
        ],
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        stock: 4,
        price: 95.95,
        rating: 4.5,
        numReviews: 10,
        isFeatured: true,
        banner: "",
    },
    {
        name: "Elegant Red and White Nail Art",
        slug: "Elegant-Red-and-White-Nail-Art",
        category: "Glitter",
        images: [
            "https://images.pexels.com/photos/34871553/pexels-photo-34871553.jpeg",
            "https://images.pexels.com/photos/34871614/pexels-photo-34871614.jpeg",
            "https://images.pexels.com/photos/34871560/pexels-photo-34871560.jpeg",
            "https://images.pexels.com/photos/34871734/pexels-photo-34871734.jpeg",
        ],
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        stock: 4,
        price: 325.95,
        rating: 4.1,
        numReviews: 60,
        isFeatured: true,
        banner: "",
    },
    {
        name: "Nail Art with Glitter",
        slug: "Nail-Art-with-Glitter",
        category: "Glitter",
        images: [
            "https://images.pexels.com/photos/34835280/pexels-photo-34835280.jpeg",
            "https://images.pexels.com/photos/5871222/pexels-photo-5871222.jpeg",
            "https://images.pexels.com/photos/34835283/pexels-photo-34835283.jpeg",
            "https://images.pexels.com/photos/28712961/pexels-photo-28712961.jpeg",
        ],
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        stock: 4,
        price: 168.59,
        rating: 4.8,
        numReviews: 80,
        isFeatured: true,
        banner: "",
    },
    {
        name: "Turquoise Nail Art",
        slug: "Turquoise-Nail-Art",
        category: "Animal Pattern",
        images: [
            "https://images.pexels.com/photos/36207029/pexels-photo-36207029.jpeg",
            "https://images.pexels.com/photos/14396082/pexels-photo-14396082.jpeg",
            "https://images.pexels.com/photos/7664093/pexels-photo-7664093.jpeg",
            "https://images.pexels.com/photos/34971857/pexels-photo-34971857.jpeg",
        ],
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        stock: 4,
        price: 245.9,
        rating: 4.9,
        numReviews: 11,
        isFeatured: true,
        banner: "",
    },
];

export async function main() {
    for (const product of products) {
        await prisma.product.create({ data: product });
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
