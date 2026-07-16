import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { MODEL_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Comment Entretenir Tes Mèches Deep Wave | DeepWaveBraids",
  description:
    "La routine d'entretien en 5 étapes pour garder tes mèches deep wave impeccables pendant 1 à 2 mois. Mousse, chignon, bonnet satin et plus.",
  openGraph: {
    title: "Comment Entretenir Tes Mèches Deep Wave",
    description: "5 étapes simples pour des braids qui durent 2x plus longtemps.",
    type: "article",
  },
};

export default function EntretienArticle() {
  return (
    <article className="min-h-screen bg-background py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} />
          Retour au blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <span className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
            Entretien
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 leading-tight">
            Comment Entretenir Tes Mèches Deep Wave (Pour Qu&apos;elles Durent 2x Plus)
          </h1>
          <div className="flex items-center gap-3 text-muted text-sm mt-4">
            <span>10 juillet 2026</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              5 min de lecture
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image
            src={MODEL_IMAGES[1]?.url || MODEL_IMAGES[0].url}
            alt="Entretien mèches deep wave"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose-custom space-y-8 text-foreground/90 leading-relaxed">
          <p className="text-lg">
            Tu viens d&apos;installer tes braids avec des mèches deep wave et tu veux qu&apos;elles restent
            parfaites le plus longtemps possible ? Voici la <strong>routine d&apos;entretien en 5 étapes</strong> que
            nos clientes utilisent pour garder leurs braids impeccables pendant 1 à 2 mois.
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Pourquoi l&apos;entretien est crucial
          </h2>
          <p>
            Les mèches deep wave sont bouclées. Et les boucles, ça s&apos;emmêle si on ne s&apos;en occupe pas.
            Même avec des mèches <strong>deep wave de qualité premium</strong>, un mauvais entretien
            peut réduire la durée de vie de moitié.
          </p>
          <p>
            La bonne nouvelle ? La routine est <strong>simple et rapide</strong> — 5 minutes le soir, c&apos;est tout.
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            La routine en 5 étapes
          </h2>

          {/* Step 1 */}
          <div className="bg-surface rounded-2xl border border-border p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <h3 className="text-lg font-bold text-foreground">Mousse coiffante le soir</h3>
            </div>
            <p className="text-sm">
              Chaque soir, applique une <strong>mousse coiffante légère</strong> sur les parties bouclées
              (pas sur les tresses). Cela redéfinit les boucles et empêche les frisottis. Pas besoin
              d&apos;en mettre beaucoup — une noix de mousse suffit.
            </p>
            <p className="text-xs text-muted mt-2">
              ✅ Mousse fixation moyenne • ❌ Gel (trop lourd, laisse des résidus)
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-surface rounded-2xl border border-border p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <h3 className="text-lg font-bold text-foreground">Chignon protecteur</h3>
            </div>
            <p className="text-sm">
              Après la mousse, rassemble tes braids en un <strong>chignon haut et bien serré</strong>.
              Ça empêche les boucles de frotter contre l&apos;oreiller et de s&apos;emmêler pendant la nuit.
            </p>
            <p className="text-xs text-muted mt-2">
              C&apos;est l&apos;étape la plus importante. 80% de l&apos;emmêlement arrive la nuit.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-surface rounded-2xl border border-border p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <h3 className="text-lg font-bold text-foreground">Bonnet en satin</h3>
            </div>
            <p className="text-sm">
              Par-dessus le chignon, mets un <strong>bonnet en satin</strong> (ou utilise une taie d&apos;oreiller en satin).
              Le satin réduit la friction et garde l&apos;hydratation des mèches, contrairement au coton
              qui absorbe l&apos;humidité et assèche les cheveux.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-surface rounded-2xl border border-border p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <h3 className="text-lg font-bold text-foreground">Le matin : défais et secoue</h3>
            </div>
            <p className="text-sm">
              Le matin, défais le chignon, secoue tes braids légèrement et <strong>sépare les boucles
              avec les doigts</strong> (jamais de peigne ni de brosse sur les boucles !). Les boucles
              reprennent leur forme naturellement.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-surface rounded-2xl border border-border p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <h3 className="text-lg font-bold text-foreground">Spray hydratant 1x/semaine</h3>
            </div>
            <p className="text-sm">
              Une fois par semaine, vaporise un mélange <strong>eau + quelques gouttes d&apos;huile légère</strong>
              (argan ou coco) sur les boucles. Ça ravive la brillance et garde les mèches souples.
              Ne trempe pas — un léger voile suffit.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Les erreurs à éviter
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <p><strong>Dormir sans protection</strong> — C&apos;est la cause #1 d&apos;emmêlement prématuré</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <p><strong>Brosser les boucles</strong> — Utilise uniquement tes doigts pour séparer les mèches</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <p><strong>Trop de produit</strong> — Le surplus de gel ou d&apos;huile alourdit les boucles et crée des résidus</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <p><strong>Mouiller complètement</strong> — L&apos;eau en excès peut détendre les boucles. Un spray léger suffit</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Durée de vie selon l&apos;entretien
          </h2>
          <div className="bg-surface rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="p-6 text-center">
                <p className="text-2xl font-bold text-accent">1-2 mois</p>
                <p className="text-sm text-muted mt-1">Avec entretien quotidien</p>
                <p className="text-xs text-muted mt-2">Mousse + chignon + satin</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-2xl font-bold text-red-400">2-3 semaines</p>
                <p className="text-sm text-muted mt-1">Sans entretien</p>
                <p className="text-xs text-muted mt-2">Emmêlement, frisottis, dreads</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 bg-accent-soft border border-accent/20 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-foreground">
            Des mèches qui facilitent l&apos;entretien
          </h3>
          <p className="text-muted text-sm mt-2">
            Nos mèches deep wave premium s&apos;emmêlent 3x moins que les mèches classiques
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold py-3.5 px-7 rounded-xl transition-all mt-5 text-sm shadow-lg hover:-translate-y-0.5"
          >
            Découvrir nos mèches <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
