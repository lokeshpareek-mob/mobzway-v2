import { NextResponse } from "next/server";

export function middleware(request) {
    const country = request.geo?.country || "IN"; 

    if (request.nextUrl.pathname === "/") {
        if (country === "IN") {
            return NextResponse.redirect(new URL("/in", request.url));
        }

        if (country === "BD") {
            return NextResponse.redirect(new URL("/bd", request.url));
        }

        if (country === "US") {
            return NextResponse.redirect(new URL("/us", request.url));
        }
    }

    return NextResponse.next();
}
