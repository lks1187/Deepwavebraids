import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n/config";

function getLocaleFromHeaders(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") || "";
  for (const locale of locales) {
    if (acceptLanguage.includes(locale)) return locale;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files
  ) {
    return;
  }

  const locale = getLocaleFromHeaders(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
