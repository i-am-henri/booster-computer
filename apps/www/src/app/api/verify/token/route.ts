import { isCuid } from "@paralleldrive/cuid2";
import { db } from "database";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { token: string } }
) {

    const { token } = params;

    if (!isCuid(token)) {
        return NextResponse.redirect(new URL(`/login?error=invalid+token`, request.url));
    }

    const dbToken = await db.token.findFirst({
        where: {
            id: token
        }
    });

    if (!dbToken) {
        return NextResponse.redirect(new URL(`/login?error=invalid+token`, request.url));
    }

    if (new Date(dbToken.expires) < new Date()) {
        return NextResponse.redirect(new URL(`/login?error=expired+token`, request.url));
    }

    const user = await db.user.update({
        where: {
            id: dbToken.userId
        },
        data: {
            verified: new Date().toISOString()
        }
    });

    await db.token.delete({
        where: {
            id: token
        }
    });

    return NextResponse.redirect(new URL(`/login`, request.url));
}