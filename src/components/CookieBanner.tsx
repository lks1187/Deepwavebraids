"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { locale, t } = useI18n();

  useEffect(() => {
    const consent = localStorage.getItem("dwb_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("dwb_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("dwb_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-6">
      <div className="max-w-2xl mx-auto bg-surface border border-border rounded-2xl shadow-xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-foreground text-sm font-medium mb-1">
              🍪 {t.cookie.title}
            </p>
            <p className="text-muted text-xs leading-relaxed">
              {t.cookie.description}{" "}
              <Link href={`/${locale}/politique-confidentialite`} className="text-accent underline">
                {t.cookie.learnMore}
              </Link>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-border text-muted hover:text-foreground hover:border-foreground/30 transition-colors text-sm font-medium"
            >
              {t.cookie.decline}
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-white transition-colors text-sm font-medium"
            >
              {t.cookie.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
