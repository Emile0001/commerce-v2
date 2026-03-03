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
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

import { signInSchema } from "@/lib/validation";
import { SignInValues } from "@/types";

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
        //TODO: Handle sign in
    }

    async function handleSocialSignIn(provider: "google") {
        //TODO: Handle social sign in
    }

    return (
        <Card className="w-full m-w-md">
            <CardHeader>
                <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
                <CardDescription className="text-xs md:text-sm">
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="your@email.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center pt-4">
                                    <FormLabel>Password</FormLabel>
                                    <Link
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot you password?
                                    </Link>
                                </div>
                                <FormControl>
                                    <PasswordInput
                                        autoComplete="current-password"
                                        placeholder="Password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                            <FormItem className="flex items-center gap-2 py-4">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel>Remember me</FormLabel>
                            </FormItem>
                        )}
                    />

                    {error && (
                        <div role="alert" className="text-sm text-red-600">
                            {error}
                        </div>
                    )}

                    <LoadingButton
                        type="submit"
                        loading={loading}
                        className="w-full"
                    >
                        Login
                    </LoadingButton>
                    <div className="flex w-full flex-col items-center justify-between gap-2 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            disabled={loading}
                            onClick={() => handleSocialSignIn("google")}
                            className="w-full gap-2"
                        >
                            <GoogleIcon width="0.98m" height="1em" />
                            Sign in with Google
                        </Button>
                    </div>
                </Form>
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
