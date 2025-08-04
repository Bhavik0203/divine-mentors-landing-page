import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if user is trying to access dashboard routes
  if (pathname.startsWith('/dashboard')) {
    // Skip authentication check for login and register pages
    if (pathname === '/dashboard/login' || pathname === '/dashboard/register') {
      return NextResponse.next();
    }

    // For other dashboard routes, let the client-side handle authentication
    // The ProtectedRoute component will handle redirects
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 