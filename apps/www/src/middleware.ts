import { type NextRequest, NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const sessionId = request.cookies.get("Set-Cookie")?.value

    const res = await fetch(`${request.nextUrl.origin}/api/validate`, {
        headers: {
            "sessionId": sessionId ?? "",
        }
    })

    const data = await res.json() as {
        valid: boolean,
        error: string | null
    } | null

    if (!data?.valid) {
        // invalid session
        return NextResponse.redirect(new URL(`/login?error=${data?.error}`, request.nextUrl))
    }


    // everything seems ok
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard/:path*',
}