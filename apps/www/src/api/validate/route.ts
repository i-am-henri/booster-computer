import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// here you have to update the import - I'm using a mono repo and the auth stuff is located in a package
import { lucia } from "@/auth/lucia"
import { db } from "database"

const handler = async (req: NextRequest) => {
    const sessionId = req.cookies.get(lucia.sessionCookieName)?.value ?? null

    // no cookie exists
    if (!sessionId) {
        return NextResponse.json({ valid: false, error: "No session cookie found." })
    }

    const { session } = await lucia.validateSession(sessionId)

    if (!session) {
        return NextResponse.json({ valid: false, error: "Session not found." })
    }

    const user = await db.user.findUnique({
        where: {
            id: session.userId,
        },
        select: {
            verified: true
        },
    });

    if (!user) return NextResponse.json({ valid: false, error: "User not verified." })

    return NextResponse.json({ valid: true, error: null })
}

export { handler as GET }

