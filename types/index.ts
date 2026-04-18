import z from "zod";
import {
    forgotPasswordSchema,
    insertProductSchema,
    ResetPasswordSchema,
    signInSchema,
    signUpSchema,
} from "@/lib/validation";

export type SignUpValues = z.infer<typeof signUpSchema>;

export type SignInValues = z.infer<typeof signInSchema>;

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export type ResetPasswordValues = z.infer<typeof ResetPasswordSchema>;

export type Product = z.infer<typeof insertProductSchema> & {
    id: string;
    rating: string;
    numReviews: number;
    createdAt: Date;
};
