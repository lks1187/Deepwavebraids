import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { MODEL_IMAGES } from "@/lib/images";
import type { Locale } from "@/i18n/config";

const c = {
  fr: {
    back: "Retour au blog",
    tag: "Tutoriel",
    title: "Boho Braids : Le Guide Complet 2026",
    date: "12 juillet 2026",
    readTime: "6 min de lecture",
    imgAlt: "Boho braids avec mèches deep wave",
    intro: "Les boho braids (ou bohemian braids) sont LA coiffure tendance de 2026. Mi-tressées, mi-bouclées, elles offrent un look naturel et romantique qui fait craquer tout le monde. Voici tout ce que tu dois savoir avant de te lancer.",
    h2_1: "Qu'est-ce que les boho braids ?",
    p1: "Les boho braids sont des tresses knotless (sans nœud à la racine) auxquelles on ajoute des mèches bouclées deep wave qui dépassent des tresses. Le résultat : un mélange de tresses nettes et de boucles libres qui donne un effet « bohème chic » incroyable.",
    p2: "Contrairement aux box braids classiques où tout est tressé, les boho braids laissent des mèches bouclées aux pointes et parfois le long des tresses, pour un look plus doux et naturel.",
    h2_2: "Quelles mèches utiliser ?",
    p3: "C'est LE facteur qui fait ou défait tes boho braids. Voici ce qu'il faut chercher :",
    tips: [
      { bold: "Fibre de qualité premium", text: " — Une mèche bien fabriquée avec des fibres alignées empêche l'emmêlement. C'est la différence #1 avec les mèches bas de gamme qui s'emmêlent au bout de 3 jours." },
      { bold: "Texture deep wave", text: " — Les boucles sont définies mais pas trop serrées, ce qui donne le mouvement naturel parfait pour le style boho." },
      { bold: "Longueur 18-22 pouces", text: " — C'est le sweet spot. Assez long pour un bel effet, pas trop pour rester confortable." },
    ],
    tipTitle: "Le conseil DeepWaveBraids",
    tipText: "Choisis des mèches deep wave de qualité pour tes boho braids. La partie bouclée libre a besoin d'une fibre résistante pour garder sa forme. Les mèches bas de gamme perdent leurs boucles en quelques jours.",
    h2_3: "Combien de paquets faut-il ?",
    p4: "Pour des boho braids complètes :",
    packs: [
      { bold: "Look naturel et léger :", text: " 2 paquets" },
      { bold: "Look standard (le plus populaire) :", text: " 3 paquets" },
      { bold: "Look très fourni et volumineux :", text: " 4 paquets" },
    ],
    packTip: "Astuce : prends toujours 1 paquet de plus que le minimum. Rien de pire que de manquer en pleine pose !",
    h2_4: "Combien de temps ça dure ?",
    p5: "Avec des mèches deep wave de qualité et un bon entretien :",
    duration: [
      { bold: "Mèches premium :", text: " 1 à 2 mois" },
      { bold: "Mèches bas de gamme :", text: " 2 à 3 semaines (emmêlement rapide)" },
    ],
    p6: "La différence est énorme. Avec des mèches de qualité, tes boucles restent définies bien plus longtemps et ne forment pas de dreads au bout d'une semaine.",
    h2_5: "L'entretien au quotidien",
    p7: "La routine est simple mais essentielle :",
    care: [
      { bold: "Le soir :", text: " applique de la mousse coiffante sur les boucles et fais un chignon bien serré" },
      { bold: "Pour dormir :", text: " mets un bonnet en satin pour protéger les boucles" },
      { bold: "Le matin :", text: " défais le chignon, secoue légèrement et c'est parti" },
      { bold: "1x par semaine :", text: " vaporise un mélange eau + huile légère sur les boucles" },
    ],
    h2_6: "Combien ça coûte ?",
    p8: "Le prix total d'une pose de boho braids inclut les mèches + la main d'œuvre de ta braideuse. Compte environ :",
    costs: [
      { bold: "Mèches :", text: " 50-120€ selon la qualité et la quantité" },
      { bold: "Pose :", text: " 100-250€ selon ta braideuse et la complexité" },
    ],
    p9: "L'investissement dans des mèches de qualité se rentabilise : elles durent 3 à 4 fois plus longtemps que du synthétique. Tu paies plus une fois, mais tu remplaces moins souvent.",
    ctaTitle: "Prête pour tes boho braids ?",
    ctaText: "Découvre nos mèches deep wave premium — parfaites pour les boho braids",
    ctaButton: "Voir la collection",
  },
  en: {
    back: "Back to blog",
    tag: "Tutorial",
    title: "Boho Braids: The Complete 2026 Guide",
    date: "July 12, 2026",
    readTime: "6 min read",
    imgAlt: "Boho braids with deep wave hair",
    intro: "Boho braids (or bohemian braids) are THE trending hairstyle of 2026. Half braided, half curly, they offer a natural and romantic look everyone loves. Here's everything you need to know before getting started.",
    h2_1: "What are boho braids?",
    p1: "Boho braids are knotless braids (no knot at the root) with curly deep wave hair left out at the ends. The result: a mix of neat braids and free curls that creates an incredible \"bohemian chic\" effect.",
    p2: "Unlike classic box braids where everything is braided, boho braids leave curly hair at the tips and sometimes along the braids, for a softer and more natural look.",
    h2_2: "What hair should you use?",
    p3: "This is THE factor that makes or breaks your boho braids. Here's what to look for:",
    tips: [
      { bold: "Premium quality fiber", text: " — Well-made hair with aligned fibers prevents tangling. This is the #1 difference from cheap hair that tangles after 3 days." },
      { bold: "Deep wave texture", text: " — The curls are defined but not too tight, giving the perfect natural movement for the boho style." },
      { bold: "Length 18-22 inches", text: " — This is the sweet spot. Long enough for a beautiful effect, not too long to stay comfortable." },
    ],
    tipTitle: "DeepWaveBraids Pro Tip",
    tipText: "Always go for quality deep wave hair for your boho braids. The free curly section needs resilient fiber to hold its shape. Cheap hair loses its curl pattern in just a few days.",
    h2_3: "How many packs do I need?",
    p4: "For full boho braids:",
    packs: [
      { bold: "Natural, light look:", text: " 2 packs" },
      { bold: "Standard look (most popular):", text: " 3 packs" },
      { bold: "Full, voluminous look:", text: " 4 packs" },
    ],
    packTip: "Tip: always get 1 extra pack over the minimum. Nothing worse than running out mid-install!",
    h2_4: "How long does it last?",
    p5: "With quality deep wave hair and proper care:",
    duration: [
      { bold: "Premium hair:", text: " 1 to 2 months" },
      { bold: "Budget hair:", text: " 2 to 3 weeks (tangles fast)" },
    ],
    p6: "The difference is night and day. With quality hair, your curls stay defined way longer and won't mat up after a week.",
    h2_5: "Daily care routine",
    p7: "The routine is simple but essential:",
    care: [
      { bold: "At night:", text: " apply styling mousse on the curls and put hair in a tight bun" },
      { bold: "For sleeping:", text: " wear a satin bonnet to protect the curls" },
      { bold: "In the morning:", text: " undo the bun, shake gently and you're good to go" },
      { bold: "1x per week:", text: " spray a mix of water + light oil on the curls" },
    ],
    h2_6: "How much does it cost?",
    p8: "The total cost of boho braids includes the hair + your braider's labor. Expect roughly:",
    costs: [
      { bold: "Hair:", text: " $50-120 depending on quality and quantity" },
      { bold: "Installation:", text: " $100-300 depending on your braider and complexity" },
    ],
    p9: "Investing in quality hair pays for itself: it lasts 3-4x longer than synthetic. You spend more upfront, but save big in the long run.",
    ctaTitle: "Ready for your boho braids?",
    ctaText: "Discover our premium deep wave hair — perfect for boho braids",
    ctaButton: "View the collection",
  },
} as const;

export default async function BohoBraidsArticle({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = c[(locale as Locale) || "fr"];

  return (
    <article className="min-h-screen bg-background py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm mb-8">
          <ArrowLeft size={16} /> {t.back}
        </Link>

        <div className="mb-8">
          <span className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">{t.tag}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 leading-tight">{t.title}</h1>
          <div className="flex items-center gap-3 text-muted text-sm mt-4">
            <span>{t.date}</span><span>•</span>
            <span className="flex items-center gap-1"><Clock size={14} />{t.readTime}</span>
          </div>
        </div>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image src={MODEL_IMAGES[0].url} alt={t.imgAlt} fill className="object-cover" sizes="100vw" priority />
        </div>

        <div className="prose-custom space-y-8 text-foreground/90 leading-relaxed">
          <p className="text-lg">{t.intro}</p>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_1}</h2>
          <p>{t.p1}</p>
          <p>{t.p2}</p>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_2}</h2>
          <p>{t.p3}</p>
          <ul className="space-y-3 pl-1">
            {t.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent font-bold">{i + 1}.</span>
                <span><strong>{tip.bold}</strong>{tip.text}</span>
              </li>
            ))}
          </ul>

          <div className="bg-accent-soft border border-accent/20 rounded-2xl p-6 my-8">
            <p className="text-accent font-semibold mb-2">{t.tipTitle}</p>
            <p className="text-sm text-foreground/80">{t.tipText}</p>
          </div>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_3}</h2>
          <p>{t.p4}</p>
          <ul className="space-y-2 pl-1">
            {t.packs.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span><strong>{p.bold}</strong>{p.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted">{t.packTip}</p>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_4}</h2>
          <p>{t.p5}</p>
          <ul className="space-y-2 pl-1">
            {t.duration.map((d, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span><strong>{d.bold}</strong>{d.text}</span>
              </li>
            ))}
          </ul>
          <p>{t.p6}</p>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_5}</h2>
          <p>{t.p7}</p>
          <ol className="space-y-3 pl-1">
            {t.care.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                <span><strong>{step.bold}</strong>{step.text}</span>
              </li>
            ))}
          </ol>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_6}</h2>
          <p>{t.p8}</p>
          <ul className="space-y-2 pl-1">
            {t.costs.map((cost, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span><strong>{cost.bold}</strong>{cost.text}</span>
              </li>
            ))}
          </ul>
          <p>{t.p9}</p>
        </div>

        <div className="mt-14 bg-accent-soft border border-accent/20 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-foreground">{t.ctaTitle}</h3>
          <p className="text-muted text-sm mt-2">{t.ctaText}</p>
          <Link href={`/${locale}/products`} className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold py-3.5 px-7 rounded-xl transition-all mt-5 text-sm shadow-lg hover:-translate-y-0.5">
            {t.ctaButton} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
