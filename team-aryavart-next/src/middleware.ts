import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { updateSession } from '@/lib/auth';

export async function middleware(request: NextRequest) {
    const session = request.cookies.get('session');

    // Refresh session if exists
    await updateSession(request);

    // Protect /dashboard routes
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!session) {
            return NextResponse.redirect(new URL('/join', request.url));
        }
    }



    const response = NextResponse.next();

    // Prevent caching for protected routes to handle back button behavior
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        response.headers.set('Pragma', 'no-cache');
        response.headers.set('Expires', '0');
    }

    return response;
}

export const config = {
    matcher: ['/dashboard/:path*', '/join', '/'],
};
