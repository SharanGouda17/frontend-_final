import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const isLoginPage = request.nextUrl.pathname === "/login";

  if (!token && !isLoginPage) {
    // No token → redirect to login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isLoginPage) {
    // Already logged in → redirect to dashboard
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/inventory/:path*",
    "/users/:path*",
    "/assignments/:path*",
    "/reports/:path*",
    "/my-gear/:path*",
    "/delete-assets/:path*",
    "/login",
  ],
};