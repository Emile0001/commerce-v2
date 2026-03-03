import { signInSchema, signUpSchema } from "@/lib/validation";
import z from "zod";

export type SignUpValues = z.infer<typeof signUpSchema>;

export type SignInValues = z.infer<typeof signInSchema>;
