import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { MODEL_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Mèches Premium vs Bas de Gamme : Le Vrai Comparatif | DeepWaveBraids",
  description:
    "Emmêlement, odeur, durée de vie, prix réel... Comparatif complet entre mèches deep wave premium et mèches bas de gamme pour braids.",
  openGraph: {
    title: "Mèches Premium vs Bas de Gamme : Le Vrai Comparatif",
    description: "On compare tout : emmêlement, odeur, durée, prix réel au long terme.",
    type: "article",
  },
};

export default function ComparatifArticle() {
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
            Guide
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 leading-tight">
            Mèches Synthétiques vs Naturelles : Le Vrai Comparatif
          </h1>
          <div className="flex items-center gap-3 text-muted text-sm mt-4">
            <span>8 juillet 2026</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              7 min de lecture
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image
            src={MODEL_IMAGES[2]?.url || MODEL_IMAGES[0].url}
            alt="Comparatif mèches synthétiques vs naturelles"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose-custom space-y-8 text-foreground/90 leading-relaxed">
          <p className="text-lg">
            &ldquo;Pourquoi payer plus cher pour des mèches naturelles alors que les synthétiques
            coûtent 3 fois moins ?&rdquo; C&apos;est LA question. Et la réponse va te surprendre :
            <strong> sur le long terme, le naturel revient souvent moins cher</strong>. Voici pourquoi.
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Le comparatif point par point
          </h2>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left text-sm font-medium text-muted py-4 px-4 border-b border-border">Critère</th>
                  <th className="text-center text-sm font-bold text-accent py-4 px-4 border-b border-border">Premium</th>
                  <th className="text-center text-sm font-medium text-muted py-4 px-4 border-b border-border">Synthétique</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="py-3 px-4 border-b border-border font-medium">Toucher</td>
                  <td className="py-3 px-4 border-b border-border text-center">Doux, naturel</td>
                  <td className="py-3 px-4 border-b border-border text-center text-muted">Plastique, rigide</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="py-3 px-4 border-b border-border font-medium">Odeur</td>
                  <td className="py-3 px-4 border-b border-border text-center">Aucune</td>
                  <td className="py-3 px-4 border-b border-border text-center text-muted">Chimique forte</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-border font-medium">Emmêlement</td>
                  <td className="py-3 px-4 border-b border-border text-center">Minimal</td>
                  <td className="py-3 px-4 border-b border-border text-center text-muted">Dès la 1ère semaine</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="py-3 px-4 border-b border-border font-medium">Durée braids</td>
                  <td className="py-3 px-4 border-b border-border text-center">1-2 mois</td>
                  <td className="py-3 px-4 border-b border-border text-center text-muted">2-3 semaines</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-border font-medium">Brillance</td>
                  <td className="py-3 px-4 border-b border-border text-center">Naturelle, durable</td>
                  <td className="py-3 px-4 border-b border-border text-center text-muted">Artificielle, part vite</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="py-3 px-4 border-b border-border font-medium">Réutilisable</td>
                  <td className="py-3 px-4 border-b border-border text-center">Oui (2-3 poses)</td>
                  <td className="py-3 px-4 border-b border-border text-center text-muted">Non (usage unique)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-border font-medium">Prix unitaire</td>
                  <td className="py-3 px-4 border-b border-border text-center">25-40€/paquet</td>
                  <td className="py-3 px-4 border-b border-border text-center text-muted">8-15€/paquet</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            L&apos;emmêlement : le problème #1
          </h2>
          <p>
            Si tu as déjà acheté des mèches pas chères sur Amazon ou AliExpress, tu connais le scénario :
            ça a l&apos;air bien les 3 premiers jours, puis les boucles commencent à s&apos;emmêler, à former
            des nœuds, et au bout de 2 semaines ça ressemble à des dreads.
          </p>
          <p>
            Pourquoi ? Les mèches synthétiques (et beaucoup de mèches &ldquo;naturelles&rdquo; bas de gamme) ont des
            <strong> cuticules abîmées ou retirées chimiquement</strong>. Sans cuticules alignées, les fibres
            frottent les unes contre les autres et créent des nœuds.
          </p>
          <p>
            Les mèches deep wave premium conservent leurs <strong>fibres intactes et alignées
            dans le même sens</strong>. C&apos;est comme un tissu lisse vs du velcro — l&apos;un glisse, l&apos;autre accroche.
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            L&apos;odeur chimique : un vrai problème
          </h2>
          <p>
            On en parle pas assez, mais beaucoup de mèches synthétiques ont une <strong>odeur chimique
            forte</strong> qui persiste même après lavage. C&apos;est dû aux traitements chimiques utilisés
            pour donner la texture. Sur TikTok, c&apos;est l&apos;un des reproches les plus fréquents.
          </p>
          <p>
            Les mèches deep wave premium n&apos;ont <strong>aucune odeur</strong> car elles ne subissent
            aucun traitement chimique agressif.
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Le vrai calcul : prix sur 6 mois
          </h2>
          <div className="bg-surface rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="p-6">
                <h3 className="font-bold text-accent text-center mb-4">Premium</h3>
                <ul className="space-y-2 text-sm">
                  <li>3 paquets × 35€ = <strong>105€</strong></li>
                  <li>Durée : 1-2 mois</li>
                  <li>Réutilisable 1 fois</li>
                  <li className="pt-2 border-t border-border font-bold text-foreground">
                    Sur 6 mois : ~210-315€
                  </li>
                  <li className="text-xs text-muted">3-4 poses, 2 achats de mèches</li>
                </ul>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-muted text-center mb-4">Synthétique</h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li>3 paquets × 12€ = <strong>36€</strong></li>
                  <li>Durée : 2-3 semaines</li>
                  <li>Usage unique</li>
                  <li className="pt-2 border-t border-border font-bold text-foreground">
                    Sur 6 mois : ~290-430€
                  </li>
                  <li className="text-xs text-muted">8-12 poses, 8-12 achats</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted">
            Sans compter le temps passé chez ta braideuse à chaque repose et la frustration
            de l&apos;emmêlement après 2 semaines...
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Attention aux faux &ldquo;cheveux naturels&rdquo;
          </h2>
          <p>
            Beaucoup de marques vendent des mèches étiquetées &ldquo;100% qualité premium&rdquo; qui sont en réalité
            des <strong>cheveux traités chimiquement</strong> (acid bath). Les cuticules sont retirées puis
            recouvertes de silicone pour donner un aspect lisse.
          </p>
          <p>
            Résultat : ça brille les premiers jours (grâce au silicone), puis le coating part et
            c&apos;est la catastrophe. Les vraies mèches premium n&apos;ont <strong>pas de coating silicone</strong> —
            la brillance est naturelle et dure.
          </p>

          <div className="bg-accent-soft border border-accent/20 rounded-2xl p-6 my-8">
            <p className="text-accent font-semibold mb-2">🔍 Comment vérifier ?</p>
            <p className="text-sm text-foreground/80">
              Fais le test du &ldquo;bleach&rdquo; : les vraies mèches premium peuvent être décolorés
              uniformément. Les cheveux traités deviennent orange ou se cassent.
              Tu peux aussi vérifier au toucher : le premium est doux dans les deux sens,
              les cheveux traités accrochent quand tu remontes de la pointe vers la racine.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Notre verdict
          </h2>
          <p>
            Si tu fais des braids occasionnellement (1-2 fois par an) et que le budget est serré,
            le synthétique peut dépanner. Mais si tu portes des braids régulièrement,
            <strong> investir dans du premium est le choix le plus intelligent</strong> —
            économiquement et pour la santé de tes cheveux.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 bg-accent-soft border border-accent/20 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-foreground">
            Passe au premium
          </h3>
          <p className="text-muted text-sm mt-2">
            Des mèches deep wave premium, sans traitement chimique, sans odeur
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold py-3.5 px-7 rounded-xl transition-all mt-5 text-sm shadow-lg hover:-translate-y-0.5"
          >
            Voir nos mèches <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
