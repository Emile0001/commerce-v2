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
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { passwordSchema, signUpSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { SignUpValues } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/password-input";
import { LoadingButton } from "@/components/loading-button";
import Link from "next/link";

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
        //TODO: Handle sign up
    }

    const loading = form.formState.isSubmitting;

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle className="text-lg md:text-xl">Sign Up</CardTitle>
                <CardDescription className="text-sx md:text-sm">
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Mielie Pitt"
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
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput
                                            autoComplete="new-password"
                                            placeholder="password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="passwordConfirmation"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput
                                            autoComplete="new-password"
                                            placeholder="Confirm password"
                                            {...field}
                                        />
                                    </FormControl>
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
                            className="w-full"
                            loading={loading}
                        >
                            Create an account
                        </LoadingButton>
                    </form>
                </Form>
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
