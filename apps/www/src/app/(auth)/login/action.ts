import { lucia } from "@/auth/lucia";
import bcrypt from "bcrypt";
import { db } from "database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { TLoginType } from "./form";

export async function login(data: TLoginType) {
    "use server";
    const user = await db.user.findUnique({
        where: {
            username: data.username,
            email: data.email,
        },
    });
    if (!user) return "User not found. Please check your email and your username.";
    if (!user.verified) return "User not verified. Please check your email provider.";

    const compare = await bcrypt.compare(data.password, user.password); // eslint-disable-line

    if (!compare) return "Password is wrong!";

    // all checks done, now the authentication logic
    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    // create the session
    console.log(sessionCookie.serialize())
    cookies().set("Set-Cookie", sessionCookie.serialize());

    redirect("/dashboard");
}