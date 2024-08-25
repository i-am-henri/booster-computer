"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button, InputStyles } from "ui";
import { z } from "zod";

export const TLoginSchema = z
    .object({
        email: z.string().email("Email is invalid."),
        password: z.string().min(8, "Password must be at least 8 characters"),
        username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters"),
    })

export type TLoginType = z.infer<typeof TLoginSchema>;

export default function LoginForm({
    action,
    warning
}: {
    action: (data: TLoginType) => Promise<string | undefined>,
    warning?: string
}) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<TLoginType>({
        resolver: zodResolver(TLoginSchema), // eslint-disable-line
    });

    const onSubmit = async (data: TLoginType) => {
        const msg = await action(data)
        if (msg) {
            setError("root", {
                type: "server",
                message: msg,
            });
            toast.error(msg); // eslint-disable-line
            return
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 lg:w-[400px]">
            <h2 className="text-xl font-medium">Login</h2>
            <p className="text-sm text-red-500">{warning}</p>
            <input
                {...register("username")}
                type="text"
                placeholder="Username"
                className={InputStyles}
            />
            {errors.username && (
                <p className="text-red-500">{`${errors.username.message}`}</p>
            )}

            <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className={InputStyles}
            />
            {errors.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
            )}

            <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className={InputStyles}
            />
            {errors.password && (
                <p className="text-red-500">{`${errors.password.message}`}</p>
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
        </form>
    );
}