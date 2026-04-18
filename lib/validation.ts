import z from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
    .string()
    .refine(
        (value) =>
            /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
        "Price must have exactly two decimal places",
    );

export const passwordSchema = z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
    });

export const signUpSchema = z
    .object({
        name: z.string().min(1, { message: "Name is required" }),
        email: z.email({ message: "Please enter a valid email" }),
        password: passwordSchema,
        passwordConfirmation: z
            .string()
            .min(1, { message: "Please confirm password" }),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    });

export const signInSchema = z.object({
    email: z.email({ message: "Please enter a valid email" }),
    password: z.string().min(1, { message: "Password is required" }),
    rememberMe: z.boolean().optional(),
});

export const forgotPasswordSchema = z.object({
    email: z.email({ message: "Please enter a valid email" }),
});

export const ResetPasswordSchema = z
    .object({
        newPassword: passwordSchema,
        newPasswordConfirmation: z
            .string()
            .min(1, { message: "Please confirm password" }),
    })
    .refine((data) => data.newPassword === data.newPasswordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    });

//Insert products

export const insertProductSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    slug: z.string().min(3, { message: "slug must be at least 3 characters" }),
    category: z
        .string()
        .min(3, { message: "Category must be at least 3 characters" }),
    images: z
        .array(z.string())
        .min(1, { message: " Product must have at least one image" }),
    description: z
        .string()
        .min(3, { message: "Description must be at least 3 characters" }),
    stock: z.coerce.number(),
    price: currency,
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
});
