import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}