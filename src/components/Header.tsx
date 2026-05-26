"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartProvider";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openCart, cart } = useCart();
  const itemCount = cart?.totalQuantity || 0;

  return (
    <header className="sticky top-0 z-50 bg-header-bg backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Deep<span className="text-accent">Wave</span>Braids
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden sm:flex items-center gap-8">
            <Link
              href="/"
              className="text-muted hover:text-accent transition-colors text-sm font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/products"
              className="text-muted hover:text-accent transition-colors text-sm font-medium"
            >
              Boutique
            </Link>
            <Link
              href="/about"
              className="text-muted hover:text-accent transition-colors text-sm font-medium"
            >
              À propos
            </Link>
          </nav>

          {/* Cart button */}
          <button
            onClick={openCart}
            className="relative text-foreground p-2 hover:text-accent transition-colors"
            aria-label="Panier"
          >
            <ShoppingBag size={22} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="sm:hidden pb-4 border-t border-border pt-4 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-muted hover:text-accent transition-colors text-sm font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="text-muted hover:text-accent transition-colors text-sm font-medium"
            >
              Boutique
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-muted hover:text-accent transition-colors text-sm font-medium"
            >
              À propos
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
