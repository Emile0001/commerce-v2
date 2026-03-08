"use client";

import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { LoadingButton } from "@/components/loading-button";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { signInSchema } from "@/lib/validation";
import { SignInValues } from "@/types";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export function SignInForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    const searchParams = useSearchParams();

    const form = useForm<SignInValues>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    async function onSubmit({ email, password, rememberMe }: SignInValues) {
        setError(null);
        setLoading(true);

        const { error } = await authClient.signIn.email({
            email,
            password,
            rememberMe,
        });
        setLoading(false);

        if (error) {
            setError(error.message || "Something went wrong");
        } else {
            toast.success("Signed in successfully", { position: "top-center" });
            router.push("/dashboard");
        }
    }

    async function handleSocialSignIn(provider: "google") {
        //TODO: Handle social sign in
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
                <CardDescription className="text-xs md:text-sm">
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <FieldSet>
                        <Field data-invalid={!!form.formState.errors.email}>
                            <FieldLabel htmlFor="email_id">Email</FieldLabel>

                            <Input
                                id="email_id"
                                type="email"
                                placeholder="your@email.com"
                                aria-invalid={!!form.formState.errors.email}
                                {...form.register("email")}
                            />

                            {form.formState.errors.email && (
                                <FieldError
                                    errors={[form.formState.errors.email]}
                                />
                            )}
                        </Field>

                        <Field data-invalid={!!form.formState.errors.password}>
                            <div className="flex items-center">
                                <FieldLabel htmlFor="password_id">
                                    Password
                                </FieldLabel>
                                <Link
                                    href="/forgot-password"
                                    className="ml-auto inline-block text-xs underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>

                            <PasswordInput
                                id="password_id"
                                autoComplete="current-password"
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

                        <Controller
                            control={form.control}
                            name="rememberMe"
                            render={({ field }) => (
                                <Field
                                    orientation="horizontal"
                                    className="flex items-center gap-2 "
                                >
                                    <Checkbox
                                        id="rememberMe_id"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />

                                    <FieldLabel htmlFor="rememberMe_id">
                                        Remember me
                                    </FieldLabel>
                                </Field>
                            )}
                        />

                        {error && (
                            <div role="alert" className="text-sm text-red-600">
                                {error}
                            </div>
                        )}
                    </FieldSet>
                    <FieldSet>
                        <LoadingButton type="submit" loading={loading}>
                            Login
                        </LoadingButton>

                        <Button
                            type="button"
                            variant="outline"
                            disabled={loading}
                            onClick={() => handleSocialSignIn("google")}
                        >
                            <GoogleIcon width="0.98em" height="1em" />
                            Sign in with Google
                        </Button>
                    </FieldSet>
                </form>
            </CardContent>
            <CardFooter>
                <div className="flex w-full justify-center border-t pt-4">
                    <p className="text-muted-foreground text-center text-xs pr-2">
                        Don&apos;t have an account?
                    </p>
                    <Link href="/sign-up" className="underline text-xs">
                        Sign up
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
