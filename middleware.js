import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Country detection (Vercel Edge)
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("x-vercel-country") ||
    "IN";

    console.log(country, 'country');
    

  const map = {
    IN: "/in",
    US: "/us",
    BD: "/bd",
  };

  const target = map[country] || "/in";

  // ✅ ONLY redirect from ROOT
  if (pathname === "/") {
    return NextResponse.redirect(new URL(target, request.url));
  }

  // ❌ Do NOT force redirect on /in /us /bd
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
