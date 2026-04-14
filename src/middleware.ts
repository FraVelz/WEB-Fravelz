import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { isValidLanguage, localePathFromAcceptHeader } from "@/lib/i18n-routing";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/" && pathname !== "") {
    return NextResponse.next();
  }

  const cookieLang = request.cookies.get("lang")?.value;
  if (cookieLang && isValidLanguage(cookieLang)) {
    return NextResponse.redirect(new URL(`/${cookieLang}/`, request.url));
  }

  const accept = request.headers.get("accept-language");
  const nextPath = localePathFromAcceptHeader(accept);
  return NextResponse.redirect(new URL(nextPath, request.url));
}

export const config = {
  matcher: ["/"],
};
