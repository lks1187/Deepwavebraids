"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useI18n } from "@/i18n/context";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { locale, t } = useI18n();
  const promoCode = locale === "en" ? "WELCOME10" : "BIENVENUE10";

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-white text-center py-2.5 px-4 relative">
      <p className="text-xs sm:text-sm font-medium">
        🔥 <strong>{t.promo.text}</strong> {t.promo.code}{" "}
        <span className="bg-white/20 px-2 py-0.5 rounded font-bold tracking-wider">{promoCode}</span>
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <X size={14} />
      </button>
    </div>
  );
}
