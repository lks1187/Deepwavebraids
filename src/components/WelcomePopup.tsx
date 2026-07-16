"use client";

import { useState, useEffect } from "react";
import { X, Gift, Copy, Check } from "lucide-react";

const KLAVIYO_COMPANY_ID = "WpRRiD";

async function sendToKlaviyo(email: string) {
  await fetch(
    `https://a.klaviyo.com/client/events/?company_id=${KLAVIYO_COMPANY_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        revision: "2024-10-15",
      },
      body: JSON.stringify({
        data: {
          type: "event",
          attributes: {
            metric: {
              data: {
                type: "metric",
                attributes: { name: "Popup Email Collected" },
              },
            },
            profile: {
              data: {
                type: "profile",
                attributes: { email },
              },
            },
            properties: {
              source: "Welcome Popup",
              discount_code: "BIENVENUE10",
            },
          },
        },
      }),
    }
  );
}

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("dwb_popup_dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("dwb_popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("dwb_popup_dismissed", "true");
    localStorage.setItem("dwb_subscriber_email", email);
    setSubmitted(true);
    sendToKlaviyo(email).catch(() => {});
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("BIENVENUE10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
          aria-label="Fermer"
        >
          <X size={16} className="text-foreground" />
        </button>

        {/* Top accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-accent to-accent-light" />

        <div className="p-8 text-center">
          {!submitted ? (
            <>
              {/* Icon */}
              <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Gift size={32} className="text-accent" />
              </div>

              <h3 className="text-2xl font-bold text-foreground">
                -10% sur ta 1ère commande
              </h3>
              <p className="text-muted text-sm mt-3 max-w-xs mx-auto">
                Inscris-toi et reçois ton code promo exclusif pour tes mèches deep wave
              </p>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ton adresse email"
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3.5 px-6 rounded-xl transition-all text-sm shadow-lg shadow-accent/25 hover:-translate-y-0.5"
                >
                  Recevoir mon code -10%
                </button>
              </form>

              <p className="text-muted/50 text-xs mt-4">
                Pas de spam. Désinscription en un clic.
              </p>
            </>
          ) : (
            <>
              {/* Success state */}
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Check size={32} className="text-green-600" />
              </div>

              <h3 className="text-2xl font-bold text-foreground">
                Merci ! 🎉
              </h3>
              <p className="text-muted text-sm mt-3">
                Voici ton code promo exclusif :
              </p>

              {/* Code display */}
              <div className="mt-5 bg-surface border-2 border-dashed border-accent/30 rounded-xl p-4 flex items-center justify-center gap-3">
                <span className="text-xl font-bold text-accent tracking-widest">
                  BIENVENUE10
                </span>
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-accent-soft rounded-lg transition-colors"
                  title="Copier le code"
                >
                  {copied ? (
                    <Check size={18} className="text-green-600" />
                  ) : (
                    <Copy size={18} className="text-muted" />
                  )}
                </button>
              </div>

              <p className="text-muted text-xs mt-4">
                Utilise-le au moment du paiement
              </p>

              <button
                onClick={handleClose}
                className="mt-5 w-full bg-accent hover:bg-accent-light text-white font-semibold py-3.5 px-6 rounded-xl transition-all text-sm"
              >
                Commencer mon shopping
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
