"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("dwb_cookie_consent");
    if (!consent) {
      // Show after 1 second
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
              🍪 Ce site utilise des cookies
            </p>
            <p className="text-muted text-xs leading-relaxed">
              Nous utilisons des cookies pour améliorer ton expérience et analyser le trafic.{" "}
              <Link href="/politique-confidentialite" className="text-accent underline">
                En savoir plus
              </Link>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-border text-muted hover:text-foreground hover:border-foreground/30 transition-colors text-sm font-medium"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-white transition-colors text-sm font-medium"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
