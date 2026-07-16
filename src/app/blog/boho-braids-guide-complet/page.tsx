import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { MODEL_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Boho Braids : Le Guide Complet 2026 | DeepWaveBraids",
  description:
    "Tout savoir sur les boho braids : technique d'installation, mèches recommandées, entretien, durée de vie. Guide complet pour des braids parfaites.",
  openGraph: {
    title: "Boho Braids : Le Guide Complet 2026",
    description: "Technique, mèches, entretien — le guide ultime des boho braids.",
    type: "article",
  },
};

export default function BohoBraidsArticle() {
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
            Tutoriel
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 leading-tight">
            Boho Braids : Le Guide Complet 2026
          </h1>
          <div className="flex items-center gap-3 text-muted text-sm mt-4">
            <span>12 juillet 2026</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              6 min de lecture
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image
            src={MODEL_IMAGES[0].url}
            alt="Boho braids avec mèches deep wave"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose-custom space-y-8 text-foreground/90 leading-relaxed">
          <p className="text-lg">
            Les <strong>boho braids</strong> (ou bohemian braids) sont LA coiffure tendance de 2026.
            Mi-tressées, mi-bouclées, elles offrent un look naturel et romantique qui fait craquer tout le monde.
            Voici tout ce que tu dois savoir avant de te lancer.
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Qu&apos;est-ce que les boho braids ?
          </h2>
          <p>
            Les boho braids sont des <strong>tresses knotless</strong> (sans nœud à la racine) auxquelles on ajoute
            des mèches bouclées deep wave qui dépassent des tresses. Le résultat : un mélange de tresses
            nettes et de boucles libres qui donne un effet &ldquo;bohème chic&rdquo; incroyable.
          </p>
          <p>
            Contrairement aux box braids classiques où tout est tressé, les boho braids laissent des
            mèches bouclées aux pointes et parfois le long des tresses, pour un look plus doux et naturel.
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Quelles mèches utiliser ?
          </h2>
          <p>
            C&apos;est LE facteur qui fait ou défait tes boho braids. Voici ce qu&apos;il faut chercher :
          </p>
          <ul className="space-y-3 pl-1">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">1.</span>
              <span><strong>Fibre de qualité premium</strong> — Une mèche bien fabriquée avec des fibres alignées empêche
              l&apos;emmêlement. C&apos;est la différence #1 avec les mèches bas de gamme qui s&apos;emmêlent au bout de 3 jours.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">2.</span>
              <span><strong>Texture deep wave</strong> — Les boucles sont définies mais pas trop serrées,
              ce qui donne le mouvement naturel parfait pour le style boho.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">3.</span>
              <span><strong>Longueur 18-22 pouces</strong> — C&apos;est le sweet spot. Assez long pour
              un bel effet, pas trop pour rester confortable.</span>
            </li>
          </ul>

          <div className="bg-accent-soft border border-accent/20 rounded-2xl p-6 my-8">
            <p className="text-accent font-semibold mb-2">💡 Le conseil DeepWaveBraids</p>
            <p className="text-sm text-foreground/80">
              Choisis des mèches deep wave de qualité pour tes boho braids. La partie bouclée libre
              a besoin d&apos;une fibre résistante pour garder sa forme. Les mèches bas de gamme perdent
              leurs boucles en quelques jours.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Combien de paquets faut-il ?
          </h2>
          <p>
            Pour des boho braids complètes :
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-3">
              <span className="text-accent">•</span>
              <span><strong>Look naturel et léger :</strong> 2 paquets</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent">•</span>
              <span><strong>Look standard (le plus populaire) :</strong> 3 paquets</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent">•</span>
              <span><strong>Look très fourni et volumineux :</strong> 4 paquets</span>
            </li>
          </ul>
          <p className="text-sm text-muted">
            Astuce : prends toujours 1 paquet de plus que le minimum. Rien de pire que de manquer en pleine pose !
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Combien de temps ça dure ?
          </h2>
          <p>
            Avec des <strong>mèches deep wave de qualité</strong> et un bon entretien :
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-3">
              <span className="text-accent">•</span>
              <span><strong>Mèches premium :</strong> 1 à 2 mois</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent">•</span>
              <span><strong>Mèches bas de gamme :</strong> 2 à 3 semaines (emmêlement rapide)</span>
            </li>
          </ul>
          <p>
            La différence est énorme. Avec des mèches de qualité, tes boucles restent définies bien plus
            longtemps et ne forment pas de dreads au bout d&apos;une semaine.
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            L&apos;entretien au quotidien
          </h2>
          <p>
            La routine est simple mais essentielle :
          </p>
          <ol className="space-y-3 pl-1">
            <li className="flex items-start gap-3">
              <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <span><strong>Le soir :</strong> applique de la mousse coiffante sur les boucles et fais un chignon bien serré</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <span><strong>Pour dormir :</strong> mets un bonnet en satin pour protéger les boucles</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <span><strong>Le matin :</strong> défais le chignon, secoue légèrement et c&apos;est parti</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
              <span><strong>1x par semaine :</strong> vaporise un mélange eau + huile légère sur les boucles</span>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Combien ça coûte ?
          </h2>
          <p>
            Le prix total d&apos;une pose de boho braids inclut les mèches + la main d&apos;œuvre de ta braideuse.
            Compte environ :
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-3">
              <span className="text-accent">•</span>
              <span><strong>Mèches :</strong> 50-120€ selon la qualité et la quantité</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent">•</span>
              <span><strong>Pose :</strong> 100-250€ selon ta braideuse et la complexité</span>
            </li>
          </ul>
          <p>
            L&apos;investissement dans des mèches de qualité se rentabilise : elles durent 3 à 4 fois plus
            longtemps que du synthétique. Tu paies plus une fois, mais tu remplaces moins souvent.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 bg-accent-soft border border-accent/20 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-foreground">
            Prête pour tes boho braids ?
          </h3>
          <p className="text-muted text-sm mt-2">
            Découvre nos mèches deep wave premium — parfaites pour les boho braids
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold py-3.5 px-7 rounded-xl transition-all mt-5 text-sm shadow-lg hover:-translate-y-0.5"
          >
            Voir la collection <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
