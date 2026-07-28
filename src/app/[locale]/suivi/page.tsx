"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Package, Search, Truck, CheckCircle, Clock, MapPin, ExternalLink } from "lucide-react";
import { useI18n } from "@/i18n/context";

type TrackingResult = {
  status: string;
  orderNumber: string;
  carrier: string;
  trackingNumber: string;
  trackingUrl: string;
  estimatedDelivery: string;
} | null;

export default function SuiviPage() {
  const [orderInput, setOrderInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<TrackingResult>(null);
  const { locale, t } = useI18n();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderInput || !emailInput) return;

    setLoading(true);
    setSearched(false);
    await new Promise((r) => setTimeout(r, 1500));
    setResult(null);
    setSearched(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background py-12 sm:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} />
          {t.suivi.back}
        </Link>

        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Package size={32} className="text-accent" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.suivi.title}
          </h1>
          <p className="text-muted mt-3 max-w-md mx-auto">{t.suivi.subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-surface rounded-3xl border border-border p-6 sm:p-8 shadow-sm"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="order" className="block text-sm font-medium text-foreground mb-2">
                {t.suivi.orderLabel}
              </label>
              <input
                id="order" type="text" required
                value={orderInput}
                onChange={(e) => setOrderInput(e.target.value)}
                placeholder={t.suivi.orderPlaceholder}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
              />
              <p className="text-xs text-muted mt-1.5">{t.suivi.orderHint}</p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                {t.suivi.emailLabel}
              </label>
              <input
                id="email" type="email" required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder={t.suivi.emailPlaceholder}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent hover:bg-accent-light disabled:opacity-60 text-white font-semibold py-3.5 px-6 rounded-xl transition-all text-sm shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t.suivi.searching}
                </>
              ) : (
                <>
                  <Search size={16} />
                  {t.suivi.searchButton}
                </>
              )}
            </button>
          </div>
        </form>

        {searched && !result && (
          <div className="mt-8 bg-surface rounded-3xl border border-border p-6 sm:p-8 text-center">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock size={28} className="text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{t.suivi.processingTitle}</h3>
            <p className="text-muted text-sm mb-6 max-w-md mx-auto">{t.suivi.processingText}</p>

            <div className="bg-background rounded-2xl border border-border p-5 text-left">
              <h4 className="text-sm font-semibold text-foreground mb-3">{t.suivi.carrierTitle}</h4>
              <p className="text-xs text-muted mb-4">{t.suivi.carrierText}</p>
              <div className="space-y-2">
                {[
                  { name: "La Poste / Colissimo", url: "https://www.laposte.fr/outils/suivre-vos-envois" },
                  { name: "Chronopost", url: "https://www.chronopost.fr/tracking-no-powerful" },
                  { name: "DHL", url: "https://www.dhl.com/fr-fr/home/suivi.html" },
                  { name: t.suivi.allCarriers, url: "https://parcelsapp.com/fr" },
                ].map((carrier) => (
                  <a
                    key={carrier.name}
                    href={carrier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-border hover:border-accent/30 transition-colors group"
                  >
                    <span className="text-sm text-foreground font-medium">{carrier.name}</span>
                    <ExternalLink size={14} className="text-muted group-hover:text-accent" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-xl font-bold text-foreground text-center mb-8">{t.suivi.howTitle}</h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            <div className="space-y-6">
              {[
                { icon: CheckCircle, title: t.suivi.step1Title, text: t.suivi.step1Text },
                { icon: Package, title: t.suivi.step2Title, text: t.suivi.step2Text },
                { icon: Truck, title: t.suivi.step3Title, text: t.suivi.step3Text },
                { icon: MapPin, title: t.suivi.step4Title, text: t.suivi.step4Text },
              ].map((step) => (
                <div key={step.title} className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center flex-shrink-0 relative z-10">
                    <step.icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold">{step.title}</h3>
                    <p className="text-muted text-sm mt-1">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-surface rounded-2xl border border-border p-6 text-center">
          <p className="text-foreground font-medium text-sm">{t.suivi.contactTitle}</p>
          <p className="text-muted text-sm mt-1">
            {t.suivi.contactText} <strong className="text-accent">contact@deepwavebraids.shop</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
