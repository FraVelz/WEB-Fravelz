import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { isValidLanguage, languages, localePathFromAcceptHeader, type Language } from "@/lib/i18n-routing";

function langFromPathname(pathname: string): Language | null {
  const segment = pathname.split("/").filter(Boolean).find((s) => languages.includes(s as Language));
  return segment && isValidLanguage(segment) ? segment : null;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/" || pathname === "") {
    const cookieLang = request.cookies.get("lang")?.value;
    if (cookieLang && isValidLanguage(cookieLang)) {
      return NextResponse.redirect(new URL(`/${cookieLang}/`, request.url));
    }
    const accept = request.headers.get("accept-language");
    return NextResponse.redirect(new URL(localePathFromAcceptHeader(accept), request.url));
  }

  const lang = langFromPathname(pathname);
  const requestHeaders = new Headers(request.headers);
  if (lang) {
    requestHeaders.set("x-lang", lang);
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
