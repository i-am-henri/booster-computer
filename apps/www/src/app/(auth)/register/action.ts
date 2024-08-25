import { TLoginSchema } from "../login/form";
import type { TSignUpSchema } from "./form";

export async function register(data: TSignUpSchema) {
    "use server";

    // validate the data
    if (data.password !== data.confirmPassword) {
        return "Passwords don't match";
    }
    const parse = await TLoginSchema.safeParseAsync(data)
    if (!parse.success) return "Invalid data";
}