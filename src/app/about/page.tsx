import { Heart, Award, Globe, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | DeepWaveBraids",
  description: "Découvrez l'histoire de DeepWaveBraids, votre spécialiste en mèches deep wave et extensions premium.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-accent-soft border border-accent/10 rounded-full px-4 py-1.5 mb-4">
          <Sparkles size={14} className="text-accent" />
          <span className="text-accent text-xs font-medium tracking-wide">
            Notre histoire
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          À propos de <span className="text-accent">DeepWaveBraids</span>
        </h1>
      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto space-y-8 mb-20">
        <p className="text-muted text-lg leading-relaxed">
          DeepWaveBraids est née d&apos;une passion : offrir des mèches et extensions
          de qualité exceptionnelle à un prix accessible. Basée à Genève, notre
          mission est simple — vous permettre de réaliser les plus belles coiffures
          avec des cheveux 100% vierges.
        </p>
        <p className="text-muted text-lg leading-relaxed">
          Que ce soit pour des boho braids, des knotless braids ou toute autre
          coiffure protectrice, nous sélectionnons chaque produit avec soin pour
          garantir une qualité digne d&apos;un salon professionnel.
        </p>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-card-bg rounded-2xl p-8 border border-border text-center hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all">
          <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Award size={28} className="text-accent" />
          </div>
          <h3 className="text-foreground font-semibold text-lg mb-2">Qualité Premium</h3>
          <p className="text-muted text-sm leading-relaxed">
            100% cheveux vierges sélectionnés avec soin. Aucun compromis sur la qualité.
          </p>
        </div>

        <div className="bg-card-bg rounded-2xl p-8 border border-border text-center hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all">
          <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Heart size={28} className="text-accent" />
          </div>
          <h3 className="text-foreground font-semibold text-lg mb-2">Passion & Soin</h3>
          <p className="text-muted text-sm leading-relaxed">
            Chaque commande est préparée avec amour et attention pour garantir ta satisfaction.
          </p>
        </div>

        <div className="bg-card-bg rounded-2xl p-8 border border-border text-center hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all">
          <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Globe size={28} className="text-accent" />
          </div>
          <h3 className="text-foreground font-semibold text-lg mb-2">Livraison Europe</h3>
          <p className="text-muted text-sm leading-relaxed">
            Livraison rapide en France, Suisse et Belgique. Ton colis arrive vite et en sécurité.
          </p>
        </div>
      </div>
    </div>
  );
}
