"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { locale, t } = useI18n();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="DeepWaveBraids"
              width={180}
              height={50}
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-muted hover:text-accent transition-colors text-sm">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="text-muted hover:text-accent transition-colors text-sm">
                  {t.nav.shop}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/guide`} className="text-muted hover:text-accent transition-colors text-sm">
                  {t.footer.guideLink}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-muted hover:text-accent transition-colors text-sm">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/suivi`} className="text-muted hover:text-accent transition-colors text-sm">
                  {t.footer.trackOrder}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-muted hover:text-accent transition-colors text-sm">
                  {t.nav.about}
                </Link>
              </li>
            </ul>

            <h4 className="text-foreground font-semibold mb-4 mt-6 text-sm">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/mentions-legales`} className="text-muted hover:text-accent transition-colors text-sm">
                  {t.footer.legalNotice}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/cgv`} className="text-muted hover:text-accent transition-colors text-sm">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/politique-confidentialite`} className="text-muted hover:text-accent transition-colors text-sm">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/retours`} className="text-muted hover:text-accent transition-colors text-sm">
                  {t.footer.returns}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2 text-muted text-sm">
              <li>{t.footer.location}</li>
              <li>
                <a href="tel:+33756885510" className="hover:text-accent transition-colors">
                  +33 7 56 88 55 10
                </a>
              </li>
              <li>
                <a href="mailto:contact@deepwavebraids.shop" className="hover:text-accent transition-colors">
                  contact@deepwavebraids.shop
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://tiktok.com/@deepwavebraids"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors text-sm"
              >
                TikTok
              </a>
              <a
                href="https://instagram.com/deepwavebraids"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted/50 text-xs">
            &copy; {new Date().getFullYear()} DeepWaveBraids. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
