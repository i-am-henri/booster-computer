import { lucia } from "@/auth/lucia";
import { createId } from "@paralleldrive/cuid2";
import bcrypt from "bcrypt";
import { db } from "database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TLoginSchema } from "../login/form";
import type { TSignUpType } from "./form";
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

    // all checks done, now the authentication logic
    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set("Set-Cookie", sessionCookie.serialize());

    redirect("/verify");
}