import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  // Dummy middleware just to try and be as close to the original application as possible
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - login (The login page)
     * - health (Health check route)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!login|api|health|_next/static|_next/image|favicon.ico|logo.svg).*)',
  ],
};
