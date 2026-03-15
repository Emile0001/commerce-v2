import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, { provider: "postgresql" }),
    baseURL: "http://localhost:3000",
    emailAndPassword: { enabled: true },
    user: {
        additionalFields: {
            role: {
                type: "string",
                input: false, //set to false in order to disable user from setting role them selves
            },
        },
    },
});
export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
