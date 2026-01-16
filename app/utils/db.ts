// import { PrismaClient } from "@/app/generated/prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";
// // import { Pool } from "pg";

// // const pool = new Pool({
// //     connectionString: process.env.DATABASE_URL,
// // });

// const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

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

// export const prisma = new PrismaClient({ adapter });
// export default db;
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const db =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = db;
}

export default db;
