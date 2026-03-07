"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { SignUpValues } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/password-input";
import { LoadingButton } from "@/components/loading-button";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export function SignUpForm() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const form = useForm<SignUpValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: "",
        },
    });
    async function onSubmit({ email, password, name }: SignUpValues) {
        setError(null);

        const { error } = await authClient.signUp.email({
            email,
            password,
            name,
            callbackURL: "/email-verified",
        });

        if (error) {
            setError(error.message || "Something went wrong");
        } else {
            toast.success("Signed up successfully", { position: "top-center" });
            router.push("/dashboard");
        }
    }

    const loading = form.formState.isSubmitting;

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle className="text-lg md:text-xl">Sign Up</CardTitle>
                <CardDescription className="text-xs md:text-sm">
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FieldSet>
                        <Field data-invalid={!!form.formState.errors.name}>
                            <FieldLabel htmlFor="name_id">Name</FieldLabel>

                            <Input
                                id="name_id"
                                placeholder="Name"
                                aria-invalid={!!form.formState.errors.name}
                                {...form.register("name")}
                            />

                            {form.formState.errors.name && (
                                <FieldError
                                    errors={[form.formState.errors.name]}
                                />
                            )}
                        </Field>
                        <Field data-invalid={!!form.formState.errors.email}>
                            <FieldLabel htmlFor="email_id">Email</FieldLabel>

                            <Input
                                id="email_id"
                                type="email"
                                placeholder="your@email.com"
                                aria-invalid={!!form.formState.errors.name}
                                {...form.register("email")}
                            />

                            {form.formState.errors.email && (
                                <FieldError
                                    errors={[form.formState.errors.email]}
                                />
                            )}
                        </Field>

                        <Field data-invalid={!!form.formState.errors.password}>
                            <FieldLabel htmlFor="password_id">
                                Password
                            </FieldLabel>
                            <PasswordInput
                                id="password_id"
                                autoComplete="new-password"
                                placeholder="Password"
                                aria-invalid={!!form.formState.errors.password}
                                {...form.register("password")}
                            />
                            {form.formState.errors.password && (
                                <FieldError
                                    errors={[form.formState.errors.password]}
                                />
                            )}
                        </Field>

                        <Field
                            data-invalid={
                                !!form.formState.errors.passwordConfirmation
                            }
                        >
                            <FieldLabel htmlFor="confirm-password_id">
                                Confirm Password
                            </FieldLabel>
                            <PasswordInput
                                id="confirm-password_id"
                                autoComplete="new-password"
                                placeholder="Confirm password"
                                aria-invalid={
                                    !!form.formState.errors.passwordConfirmation
                                }
                                {...form.register("passwordConfirmation")}
                            />
                            {form.formState.errors.passwordConfirmation && (
                                <FieldError
                                    errors={[
                                        form.formState.errors
                                            .passwordConfirmation,
                                    ]}
                                />
                            )}
                        </Field>

                        {error && (
                            <div role="alert" className="text-sm text-red-600">
                                {error}
                            </div>
                        )}
                    </FieldSet>
                    <LoadingButton
                        type="submit"
                        className="w-full"
                        loading={loading}
                    >
                        Create an account
                    </LoadingButton>
                </form>
            </CardContent>
            <CardFooter>
                <div className="flex w-full justify-center border-t pt-4">
                    <p className="text-muted-foreground text-center text-xs">
                        Already have an account?{" "}
                        <Link href={"sign-in"} className="underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </CardFooter>
        </Card>
    );
}
