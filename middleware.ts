import { NextResponse } from 'next/server';

import { auth } from '@/auth';

export default auth((req) => {
  if (!req.auth) {
    const signInUrl = new URL('/api/auth/signin', req.nextUrl.origin);
    signInUrl.searchParams.set('callbackUrl', '/');
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - login (The login page)
     * - health (Health check route)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     */
    '/((?!login|api|health|_next/static|_next/image).*)',
  ],
};
