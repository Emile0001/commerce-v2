// import { PrismaClient } from "@prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { Pool } from "pg";

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
// });

// const adapter = new PrismaPg(pool);

// const globalForPrisma = globalThis as unknown as {
//     prisma: PrismaClient | undefined;
// };

// const db =
//     globalForPrisma.prisma ??
//     new PrismaClient({
//         adapter,
//     });

// if (process.env.NODE_ENV !== "production") {
//     globalForPrisma.prisma = db;
// }

import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

// Global cache to prevent multiple instances during hot reloads
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// Create or reuse Prisma Client
const db =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
    });

// Store instance in development to avoid connection leaks
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = db;
}

export default db;
