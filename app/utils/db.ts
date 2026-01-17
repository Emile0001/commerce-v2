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

// export default db;
import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
};

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter,
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
