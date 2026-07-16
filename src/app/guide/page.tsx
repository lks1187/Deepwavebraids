import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Package, Ruler, Info } from "lucide-react";
import { MODEL_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Guide : Combien de paquets ? | DeepWaveBraids",
  description:
    "Découvre combien de paquets de mèches deep wave tu as besoin selon ta coiffure, ta densité et ta longueur souhaitée.",
};

const HAIRSTYLES = [
  {
    name: "Boho Braids",
    description: "Tresses avec boucles libres aux pointes",
    packs: "2-3 paquets",
    detail: "2 paquets pour un look naturel, 3 pour plus de volume",
    lengths: "18-22 pouces recommandé",
    icon: "✨",
  },
  {
    name: "Knotless Braids",
    description: "Tresses sans nœud avec extensions deep wave",
    packs: "3-4 paquets",
    detail: "3 paquets cheveux mi-longs, 4 pour tresses longues et pleines",
    lengths: "20-24 pouces recommandé",
    icon: "💫",
  },
  {
    name: "Goddess Braids",
    description: "Grosses tresses avec boucles deep wave",
    packs: "2-3 paquets",
    detail: "2 paquets suffisent car les tresses sont plus grosses",
    lengths: "18-22 pouces recommandé",
    icon: "👑",
  },
  {
    name: "Half Up Half Down",
    description: "Moitié tressée, moitié bouclée libre",
    packs: "3-4 paquets",
    detail: "3 paquets minimum, 4 pour une partie libre très fournie",
    lengths: "20-24 pouces recommandé",
    icon: "🌊",
  },
  {
    name: "Crochet Braids",
    description: "Extensions deep wave au crochet",
    packs: "2-3 paquets",
    detail: "2 paquets pour couvrir toute la tête, 3 pour extra volume",
    lengths: "14-20 pouces recommandé",
    icon: "🪡",
  },
  {
    name: "Full Head Install",
    description: "Installation complète (sew-in / closure)",
    packs: "3-4 paquets",
    detail: "3 paquets + closure pour un résultat naturel et plein",
    lengths: "18-24 pouces recommandé",
    icon: "💎",
  },
];

const LENGTH_GUIDE = [
  { inches: '14"', cm: "36 cm", position: "Au-dessus des épaules", ideal: "Look court et naturel" },
  { inches: '18"', cm: "46 cm", position: "Aux épaules", ideal: "Polyvalent, facile à gérer" },
  { inches: '20"', cm: "51 cm", position: "Mi-dos", ideal: "Le plus populaire ⭐" },
  { inches: '22"', cm: "56 cm", position: "Milieu du dos", ideal: "Volume et longueur" },
  { inches: '24"', cm: "61 cm", position: "Bas du dos", ideal: "Maximum de longueur" },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-soft to-background py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={14} className="text-accent" />
            <span className="text-accent text-xs font-medium tracking-wide">
              Guide d&apos;achat
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
            Combien de paquets
            <span className="block text-accent mt-2">ai-je besoin ?</span>
          </h1>

          <p className="text-muted mt-6 max-w-lg mx-auto text-lg">
            Le nombre de paquets dépend de ta coiffure, la longueur souhaitée et
            le volume désiré. Voici notre guide complet.
          </p>
        </div>
      </section>

      {/* Quick answer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-surface rounded-3xl border border-border p-6 sm:p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center flex-shrink-0">
              <Info size={24} className="text-accent" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">La règle simple</h2>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                En général, <strong className="text-foreground">3 paquets</strong> suffisent pour la
                plupart des coiffures. Prends <strong className="text-foreground">4 paquets</strong> si
                tu veux un look très fourni ou des tresses longues (22&quot;+). Pour un look naturel
                et léger, <strong className="text-foreground">2 paquets</strong> peuvent suffire.
              </p>
              <p className="text-accent text-sm font-medium mt-3">
                💡 Notre Pack Trio (-22%) est le choix le plus populaire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By hairstyle */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Par type de <span className="text-accent">coiffure</span>
          </h2>
          <p className="text-muted mt-3">
            Trouve la quantité parfaite selon ton style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {HAIRSTYLES.map((style) => (
            <div
              key={style.name}
              className="bg-surface rounded-2xl border border-border p-6 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-2xl mr-2">{style.icon}</span>
                  <h3 className="text-foreground font-bold text-lg inline">{style.name}</h3>
                </div>
                <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                  {style.packs}
                </span>
              </div>
              <p className="text-muted text-sm">{style.description}</p>
              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <div className="flex items-center gap-2">
                  <Package size={14} className="text-accent flex-shrink-0" />
                  <p className="text-foreground text-sm">{style.detail}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler size={14} className="text-accent flex-shrink-0" />
                  <p className="text-muted text-xs">{style.lengths}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Length guide */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Guide des <span className="text-accent">longueurs</span>
            </h2>
            <p className="text-muted mt-3">
              De 14&quot; à 24&quot; — trouve la longueur qui te correspond
            </p>
          </div>

          {/* Visual length chart */}
          <div className="bg-background rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-border">
              {LENGTH_GUIDE.map((length, i) => (
                <div
                  key={length.inches}
                  className={`flex items-center gap-4 sm:gap-6 p-5 ${
                    length.inches === '20"' ? "bg-accent-soft border-l-4 border-l-accent" : ""
                  }`}
                >
                  {/* Length bar visual */}
                  <div className="w-16 flex-shrink-0 text-center">
                    <span className="text-xl font-bold text-foreground">{length.inches}</span>
                    <p className="text-muted text-xs">{length.cm}</p>
                  </div>

                  {/* Progress bar */}
                  <div className="flex-1 hidden sm:block">
                    <div className="w-full bg-border/50 rounded-full h-3">
                      <div
                        className="bg-accent rounded-full h-3 transition-all"
                        style={{ width: `${30 + i * 17}%` }}
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 sm:flex-none sm:w-48">
                    <p className="text-foreground text-sm font-medium">{length.position}</p>
                    <p className="text-muted text-xs mt-0.5">{length.ideal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Nos <span className="text-accent">conseils pro</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-surface rounded-2xl border border-border p-6 text-center">
            <span className="text-3xl mb-3 block">🎯</span>
            <h3 className="text-foreground font-bold mb-2">Mieux vaut plus</h3>
            <p className="text-muted text-sm">
              Prends toujours 1 paquet de plus que le minimum. Rien de pire que de manquer
              en pleine installation !
            </p>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-6 text-center">
            <span className="text-3xl mb-3 block">💰</span>
            <h3 className="text-foreground font-bold mb-2">Packs = Économies</h3>
            <p className="text-muted text-sm">
              Nos packs Duo (-15%), Trio (-22%) et Full Head (-29%) sont faits pour ça.
              Plus tu prends, moins tu paies.
            </p>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-6 text-center">
            <span className="text-3xl mb-3 block">💇‍♀️</span>
            <h3 className="text-foreground font-bold mb-2">Demande à ta braideuse</h3>
            <p className="text-muted text-sm">
              Ta coiffeuse connaît ta densité de cheveux. Demande-lui combien elle recommande
              pour ton style.
            </p>
          </div>
        </div>
      </section>

      {/* CTA with model image */}
      <section className="bg-card-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={MODEL_IMAGES[2]?.url || MODEL_IMAGES[0].url}
                alt="Mèches deep wave DeepWaveBraids"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Prête à te lancer ?
              </h2>
              <p className="text-muted mt-4">
                Maintenant que tu sais combien de paquets il te faut, découvre nos mèches
                deep wave premium. Qualité salon, prix accessible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="bg-accent hover:bg-accent-light text-white font-semibold py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Voir la boutique
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
