"use client";

import { LoadingButton } from "@/components/loading-button";
import { PasswordInput } from "@/components/password-input";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel, FieldSet } from "@/components/ui/field";
import { ResetPasswordSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { ResetPasswordValues } from "@/types";

interface ResetPasswordFormProps {
    token: string;
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const router = useRouter();

    const form = useForm<ResetPasswordValues>({
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            newPassword: "",
            newPasswordConfirmation: "",
        },
    });

    async function onSubmit({ newPassword }: ResetPasswordValues) {
        //TODO: Handle password reset request
    }

    const loading = form.formState.isSubmitting;
    return (
        <Card>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldSet>
                        <Field
                            data-invalid={!!form.formState.errors.newPassword}
                        >
                            <FieldLabel htmlFor="password_id">
                                New Password
                            </FieldLabel>
                            <PasswordInput
                                {...form.register("newPassword")}
                                id="password_id"
                                placeholder="Password"
                                aria-invalid={
                                    !!form.formState.errors.newPassword
                                }
                                autoComplete="new-password"
                            />
                            {form.formState.errors.newPassword && (
                                <FieldError
                                    errors={[form.formState.errors.newPassword]}
                                />
                            )}
                        </Field>
                        <Field
                            data-invalid={
                                !!form.formState.errors.newPasswordConfirmation
                            }
                        >
                            <FieldLabel htmlFor="newPasswordConfirmation_id">
                                Confirm new password
                            </FieldLabel>
                            <PasswordInput
                                id="newPasswordConfirmation_id"
                                {...form.register("newPasswordConfirmation")}
                                autoComplete="new-password"
                                placeholder="Confirm password"
                                aria-invalid={
                                    !!form.formState.errors
                                        .newPasswordConfirmation
                                }
                            />
                            {form.formState.errors.newPasswordConfirmation && (
                                <FieldError
                                    errors={[
                                        form.formState.errors
                                            .newPasswordConfirmation,
                                    ]}
                                />
                            )}
                        </Field>
                        {success && (
                            <div
                                role="status"
                                className=" text-xs text-green-600"
                            >
                                {success}
                            </div>
                        )}
                        {error && (
                            <div role="alert" className="text-xs text-red-600">
                                {error}
                            </div>
                        )}
                    </FieldSet>
                    <LoadingButton type="submit" loading={loading}>
                        Reset password
                    </LoadingButton>
                </form>
            </CardContent>
        </Card>
    );
}
