"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button, InputStyles } from "ui";
import { z } from "zod";

export const signUpSchema = z
    .object({
        email: z.string().email("Email not valid"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters"),
        confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    })

export type TSignUpType = z.infer<typeof signUpSchema>;
export default function RegisterForm({
    action
}: {
    action: (data: TSignUpType) => Promise<string | undefined>
}) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<TSignUpType>({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = async (data: TSignUpType) => {
        const msg = await action(data)
        if (msg) {
            setError("root", {
                type: "server",
                message: msg,
            });
            toast.error(msg);
            return
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 lg:w-[400px]">

            <h2 className="text-xl font-medium">Register</h2>

            <input
                {...register("username")}
                type="text"
                placeholder="Username"
                className={InputStyles}
                required
            />
            {errors.username && (
                <p className="text-red-500">{`${errors.username.message}`}</p>
            )}

            <input
                {...register("email")}
                type="email"
                placeholder="Email"
                required
                className={InputStyles}
            />
            {errors.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
            )}

            <input
                {...register("password")}
                type="password"
                placeholder="Password"
                required
                className={InputStyles}
            />
            {errors.password && (
                <p className="text-red-500">{`${errors.password.message}`}</p>
            )}

            <input
                {...register("confirmPassword")}
                required
                type="password"
                placeholder="Repeat Password"
                className={InputStyles}
            />
            {errors.confirmPassword && (
                <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
            )}
            {
                errors.root?.type === "server" && (
                    <p className="text-red-500">{`${errors.root.message}`}</p>
                )
            }

            <div>
                <Button
                    disabled={isSubmitting}
                    type="submit"
                >
                    Submit
                </Button>
            </div>
        </form >
    );
}