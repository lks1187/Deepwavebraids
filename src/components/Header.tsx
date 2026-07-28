"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { useI18n } from "@/i18n/context";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openCart, cart } = useCart();
  const { locale, t } = useI18n();
  const itemCount = cart?.totalQuantity || 0;

  const otherLocale = locale === "fr" ? "en" : "fr";
  const otherLabel = locale === "fr" ? "EN" : "FR";

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/products`, label: t.nav.shop },
    { href: `/${locale}/guide`, label: t.nav.guide },
    { href: `/${locale}/blog`, label: t.nav.blog },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-header-bg backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/logo.png"
              alt="DeepWaveBraids"
              width={220}
              height={60}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-accent transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={`/${otherLocale}`}
              className="flex items-center gap-1 text-muted hover:text-accent transition-colors p-2 text-sm font-medium"
            >
              <Globe size={16} />
              {otherLabel}
            </Link>

            <button
              onClick={openCart}
              className="relative text-foreground p-2 hover:text-accent transition-colors"
              aria-label={t.cart.title}
            >
              <ShoppingBag size={22} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="sm:hidden pb-4 border-t border-border pt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-accent transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
