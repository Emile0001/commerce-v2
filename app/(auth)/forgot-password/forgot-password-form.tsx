"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { LoadingButton } from "@/components/loading-button";

import { ForgotPasswordValues } from "@/types";
import { forgotPasswordSchema } from "@/lib/validation";

export function ForgotPasswordForm() {
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<ForgotPasswordValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: { email: "" },
    });

    async function onSubmit({ email }: ForgotPasswordValues) {
        //TODO Handle password reset
    }

    const loading = form.formState.isSubmitting;

    return (
        <Card className="mx-auto w-full max-w-md ">
            <CardContent>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FieldGroup>
                        <Field data-invalid={!!form.formState.errors.email}>
                            <FieldLabel htmlFor="email_id">Email</FieldLabel>
                            <Input
                                {...form.register("email")}
                                id="email_id"
                                placeholder="your@email.com"
                                aria-invalid={!!form.formState.errors.email}
                                type="email"
                            />
                            {form.formState.errors.email && (
                                <FieldError
                                    errors={[form.formState.errors.email]}
                                />
                            )}
                        </Field>
                    </FieldGroup>

                    {success && (
                        <div role="status" className="text-sm text-green-600">
                            {success}
                        </div>
                    )}
                    {error && (
                        <div role="alert" className="text-xs text-red-600">
                            {error}
                        </div>
                    )}
                    <Field>
                        <LoadingButton loading={loading} type="submit">
                            Send reset link
                        </LoadingButton>
                    </Field>
                </form>
            </CardContent>
        </Card>
    );
}
