import { signUpSchema } from "@/lib/validation";
import z from "zod";

export type SignUpValues = z.infer<typeof signUpSchema>;
