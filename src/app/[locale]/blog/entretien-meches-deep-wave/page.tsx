import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { MODEL_IMAGES } from "@/lib/images";
import type { Locale } from "@/i18n/config";

const c = {
  fr: {
    back: "Retour au blog",
    tag: "Entretien",
    title: "Comment Entretenir Tes Mèches Deep Wave (Pour Qu'elles Durent 2x Plus)",
    date: "10 juillet 2026",
    readTime: "5 min de lecture",
    imgAlt: "Entretien mèches deep wave",
    intro: "Tu viens d'installer tes braids avec des mèches deep wave et tu veux qu'elles restent parfaites le plus longtemps possible ? Voici la routine d'entretien en 5 étapes que nos clientes utilisent pour garder leurs braids impeccables pendant 1 à 2 mois.",
    h2_why: "Pourquoi l'entretien est crucial",
    why1: "Les mèches deep wave sont bouclées. Et les boucles, ça s'emmêle si on ne s'en occupe pas. Même avec des mèches deep wave de qualité premium, un mauvais entretien peut réduire la durée de vie de moitié.",
    why2: "La bonne nouvelle ? La routine est simple et rapide — 5 minutes le soir, c'est tout.",
    h2_routine: "La routine en 5 étapes",
    steps: [
      { title: "Mousse coiffante le soir", text: "Chaque soir, applique une mousse coiffante légère sur les parties bouclées (pas sur les tresses). Cela redéfinit les boucles et empêche les frisottis. Pas besoin d'en mettre beaucoup — une noix de mousse suffit.", hint: "Mousse fixation moyenne • Pas de gel (trop lourd)" },
      { title: "Chignon protecteur", text: "Après la mousse, rassemble tes braids en un chignon haut et bien serré. Ça empêche les boucles de frotter contre l'oreiller et de s'emmêler pendant la nuit.", hint: "C'est l'étape la plus importante. 80% de l'emmêlement arrive la nuit." },
      { title: "Bonnet en satin", text: "Par-dessus le chignon, mets un bonnet en satin (ou utilise une taie d'oreiller en satin). Le satin réduit la friction et garde l'hydratation des mèches, contrairement au coton qui absorbe l'humidité et assèche les cheveux.", hint: "" },
      { title: "Le matin : défais et secoue", text: "Le matin, défais le chignon, secoue tes braids légèrement et sépare les boucles avec les doigts (jamais de peigne ni de brosse sur les boucles !). Les boucles reprennent leur forme naturellement.", hint: "" },
      { title: "Spray hydratant 1x/semaine", text: "Une fois par semaine, vaporise un mélange eau + quelques gouttes d'huile légère (argan ou coco) sur les boucles. Ça ravive la brillance et garde les mèches souples. Ne trempe pas — un léger voile suffit.", hint: "" },
    ],
    h2_mistakes: "Les erreurs à éviter",
    mistakes: [
      { bold: "Dormir sans protection", text: " — C'est la cause #1 d'emmêlement prématuré" },
      { bold: "Brosser les boucles", text: " — Utilise uniquement tes doigts pour séparer les mèches" },
      { bold: "Trop de produit", text: " — Le surplus de gel ou d'huile alourdit les boucles et crée des résidus" },
      { bold: "Mouiller complètement", text: " — L'eau en excès peut détendre les boucles. Un spray léger suffit" },
    ],
    h2_lifespan: "Durée de vie selon l'entretien",
    with: "Avec entretien quotidien",
    withSub: "Mousse + chignon + satin",
    withTime: "1-2 mois",
    without: "Sans entretien",
    withoutSub: "Emmêlement, frisottis, dreads",
    withoutTime: "2-3 semaines",
    ctaTitle: "Des mèches qui facilitent l'entretien",
    ctaText: "Nos mèches deep wave premium s'emmêlent 3x moins que les mèches classiques",
    ctaButton: "Découvrir nos mèches",
  },
  en: {
    back: "Back to blog",
    tag: "Care",
    title: "How to Care for Your Deep Wave Hair (So It Lasts 2x Longer)",
    date: "July 10, 2026",
    readTime: "5 min read",
    imgAlt: "Deep wave hair care",
    intro: "Just got your braids done with deep wave hair and want them to stay perfect as long as possible? Here's the 5-step care routine our customers swear by to keep their braids looking fresh for 1 to 2 months.",
    h2_why: "Why maintenance matters so much",
    why1: "Deep wave hair is curly — and curls will tangle if you don't take care of them. Even with premium deep wave hair, skipping maintenance can cut the lifespan in half.",
    why2: "Good news? The routine is dead simple — 5 minutes every night, that's all it takes.",
    h2_routine: "The 5-step routine",
    steps: [
      { title: "Styling mousse at night", text: "Every evening, apply a light styling mousse on the curly parts (not on the braids themselves). This redefines your curls and keeps frizz at bay. You don't need much — a walnut-sized amount does the trick.", hint: "Medium hold mousse • Skip the gel (too heavy, leaves residue)" },
      { title: "Pineapple bun", text: "After the mousse, gather your braids into a high, snug bun. This stops the curls from rubbing against your pillow and matting up overnight.", hint: "This is the single most important step. 80% of tangling happens while you sleep." },
      { title: "Satin bonnet", text: "Pop a satin bonnet over the bun (or switch to a satin pillowcase). Satin cuts friction and locks in moisture, unlike cotton which soaks it all up and dries your hair out.", hint: "" },
      { title: "Morning: release and shake", text: "In the morning, take down the bun, give your braids a gentle shake and finger-separate the curls (never use a comb or brush on curls!). They'll bounce right back into shape.", hint: "" },
      { title: "Weekly refresh spray", text: "Once a week, mist a blend of water + a few drops of light oil (argan or coconut) over the curls. It brings back the shine and keeps everything soft. Don't drench — a light spritz is all you need.", hint: "" },
    ],
    h2_mistakes: "Mistakes to avoid",
    mistakes: [
      { bold: "Sleeping unprotected", text: " — This is the #1 reason braids don't last" },
      { bold: "Brushing the curls", text: " — Fingers only! A brush will destroy the curl pattern" },
      { bold: "Product overload", text: " — Too much gel or oil weighs curls down and causes buildup" },
      { bold: "Drenching the hair", text: " — Too much water loosens the wave pattern. A light mist is plenty" },
    ],
    h2_lifespan: "Lifespan depending on care",
    with: "With daily care",
    withSub: "Mousse + bun + satin",
    withTime: "1-2 months",
    without: "Without care",
    withoutSub: "Tangling, frizz, dreads",
    withoutTime: "2-3 weeks",
    ctaTitle: "Hair that practically takes care of itself",
    ctaText: "Our premium deep wave hair tangles 3x less than standard bundles",
    ctaButton: "Shop our hair",
  },
} as const;

export default async function EntretienArticle({
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
          <Image src={MODEL_IMAGES[1]?.url || MODEL_IMAGES[0].url} alt={t.imgAlt} fill className="object-cover" sizes="100vw" priority />
        </div>

        <div className="prose-custom space-y-8 text-foreground/90 leading-relaxed">
          <p className="text-lg">{t.intro}</p>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_why}</h2>
          <p>{t.why1}</p>
          <p>{t.why2}</p>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_routine}</h2>

          {t.steps.map((step, i) => (
            <div key={i} className="bg-surface rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
              </div>
              <p className="text-sm">{step.text}</p>
              {step.hint && <p className="text-xs text-muted mt-2">{step.hint}</p>}
            </div>
          ))}

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_mistakes}</h2>
          <div className="space-y-3">
            {t.mistakes.map((m, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <p><strong>{m.bold}</strong>{m.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_lifespan}</h2>
          <div className="bg-surface rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="p-6 text-center">
                <p className="text-2xl font-bold text-accent">{t.withTime}</p>
                <p className="text-sm text-muted mt-1">{t.with}</p>
                <p className="text-xs text-muted mt-2">{t.withSub}</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-2xl font-bold text-red-400">{t.withoutTime}</p>
                <p className="text-sm text-muted mt-1">{t.without}</p>
                <p className="text-xs text-muted mt-2">{t.withoutSub}</p>
              </div>
            </div>
          </div>
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
