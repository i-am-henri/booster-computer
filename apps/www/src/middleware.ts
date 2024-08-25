import { type NextRequest, NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const origin = request.nextUrl.origin
    console.log(origin)

    // this is just an workaround to handle the auth verification
    // inside the middleware - Since the middleware is "edge only"
    // we have to call an internal api endpoint to run the lucia magic ;)
    const verifyRequest = await fetch(`${origin}/api/validate`)

    const verifySession = (await verifyRequest.json()) as {
        valid: boolean,
        error: string | null
    }

    if (!verifySession.valid) {
        // invalid session
        return NextResponse.redirect(new URL(`/login?error=${verifySession.error}`, request.nextUrl))
    }

    // everything seems ok
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard/:path*',
}