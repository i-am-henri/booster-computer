import { createId } from "@paralleldrive/cuid2";
import bcrypt from "bcrypt";
import { db } from "database";
import { redirect } from "next/navigation";
import { z } from "zod";
import type { TSignUpType } from "./form";

const TLoginSchema = z
    .object({
        email: z.string().email("Email is invalid."),
        password: z.string().min(8, "Password must be at least 8 characters"),
        username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters"),
    })

export async function register(data: TSignUpType) {
    "use server";

    // validate the data
    if (data.password !== data.confirmPassword) {
        return "Passwords don't match";
    }
    const parse = await TLoginSchema.safeParseAsync(data)
    if (!parse.success) return "Invalid data";

    const checkUser = await db.user.findUnique({
        where: {
            username: data.username,
            email: data.email,
        },
    });

    if (checkUser) return "User already registered. Please login.";

    // create the user
    const user = await db.user.create({
        data: {
            id: createId(),
            username: data.username,
            email: data.email,
            password: await bcrypt.hash(data.password, 10),
        },
    });

    // create the token to verify the email of the user
    const token = await db.token.create({
        data: {
            id: createId(),
            userId: user.id,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(),
        },
    });


    if (!token) return "Internal error. Try again later or contact us.";

    // TODO: send email verification


    redirect("/verify");
}