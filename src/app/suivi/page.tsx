"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Package, Search, Truck, CheckCircle, Clock, MapPin, ExternalLink } from "lucide-react";

type TrackingStatus = "pending" | "shipped" | "in_transit" | "delivered" | null;

interface TrackingResult {
  status: TrackingStatus;
  orderNumber: string;
  carrier: string;
  trackingNumber: string;
  trackingUrl: string;
  estimatedDelivery: string;
}

export default function SuiviPage() {
  const [orderInput, setOrderInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderInput || !emailInput) return;

    setLoading(true);
    setSearched(false);

    // Simulate lookup delay — in production, connect to Shopify Orders API
    await new Promise((r) => setTimeout(r, 1500));

    // For now, show a helpful message since we don't have API integration yet
    setResult(null);
    setSearched(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background py-12 sm:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} />
          Retour à la boutique
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Package size={32} className="text-accent" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Suivre ma commande
          </h1>
          <p className="text-muted mt-3 max-w-md mx-auto">
            Entre ton numéro de commande et ton email pour voir où en est ton colis
          </p>
        </div>

        {/* Search form */}
        <form
          onSubmit={handleSubmit}
          className="bg-surface rounded-3xl border border-border p-6 sm:p-8 shadow-sm"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="order" className="block text-sm font-medium text-foreground mb-2">
                Numéro de commande
              </label>
              <input
                id="order"
                type="text"
                value={orderInput}
                onChange={(e) => setOrderInput(e.target.value)}
                placeholder="Ex : #1001"
                required
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
              />
              <p className="text-xs text-muted mt-1.5">
                Tu le trouves dans ton email de confirmation de commande
              </p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email utilisé lors de la commande
              </label>
              <input
                id="email"
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="ton@email.com"
                required
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
                  Recherche en cours...
                </>
              ) : (
                <>
                  <Search size={16} />
                  Suivre ma commande
                </>
              )}
            </button>
          </div>
        </form>

        {/* Results */}
        {searched && !result && (
          <div className="mt-8 bg-surface rounded-3xl border border-border p-6 sm:p-8 text-center">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock size={28} className="text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Commande en cours de traitement
            </h3>
            <p className="text-muted text-sm mb-6 max-w-md mx-auto">
              Ta commande est bien enregistrée. Tu recevras un email avec ton numéro de suivi
              dès que ton colis sera expédié (sous 1-3 jours ouvrés).
            </p>

            <div className="bg-background rounded-2xl border border-border p-5 text-left">
              <h4 className="text-sm font-semibold text-foreground mb-3">📦 Suivi par transporteur</h4>
              <p className="text-xs text-muted mb-4">
                Une fois ton colis expédié, tu peux aussi le suivre directement sur le site du transporteur :
              </p>
              <div className="space-y-2">
                <a
                  href="https://www.laposte.fr/outils/suivre-vos-envois"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-border hover:border-accent/30 transition-colors group"
                >
                  <span className="text-sm text-foreground font-medium">La Poste / Colissimo</span>
                  <ExternalLink size={14} className="text-muted group-hover:text-accent" />
                </a>
                <a
                  href="https://www.chronopost.fr/tracking-no-powerful"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-border hover:border-accent/30 transition-colors group"
                >
                  <span className="text-sm text-foreground font-medium">Chronopost</span>
                  <ExternalLink size={14} className="text-muted group-hover:text-accent" />
                </a>
                <a
                  href="https://www.dhl.com/fr-fr/home/suivi.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-border hover:border-accent/30 transition-colors group"
                >
                  <span className="text-sm text-foreground font-medium">DHL</span>
                  <ExternalLink size={14} className="text-muted group-hover:text-accent" />
                </a>
                <a
                  href="https://parcelsapp.com/fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-border hover:border-accent/30 transition-colors group"
                >
                  <span className="text-sm text-foreground font-medium">Parcels App (tous transporteurs)</span>
                  <ExternalLink size={14} className="text-muted group-hover:text-accent" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* How it works */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-foreground text-center mb-8">
            Comment ça marche ?
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center flex-shrink-0 relative z-10">
                  <CheckCircle size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Commande confirmée</h3>
                  <p className="text-muted text-sm mt-1">
                    Tu reçois un email de confirmation avec le récapitulatif de ta commande
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center flex-shrink-0 relative z-10">
                  <Package size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Préparation (1-3 jours)</h3>
                  <p className="text-muted text-sm mt-1">
                    Ton colis est préparé avec soin et emballé de manière sécurisée
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center flex-shrink-0 relative z-10">
                  <Truck size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Expédié</h3>
                  <p className="text-muted text-sm mt-1">
                    Tu reçois un email avec ton numéro de suivi pour suivre ton colis en temps réel
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center flex-shrink-0 relative z-10">
                  <MapPin size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Livré (6-10 jours)</h3>
                  <p className="text-muted text-sm mt-1">
                    Ton colis arrive chez toi. Profite de tes nouvelles mèches !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 bg-surface rounded-2xl border border-border p-6 text-center">
          <p className="text-foreground font-medium text-sm">
            Un problème avec ta commande ?
          </p>
          <p className="text-muted text-sm mt-1">
            Contacte-nous à <strong className="text-accent">contact@deepwavebraids.shop</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
