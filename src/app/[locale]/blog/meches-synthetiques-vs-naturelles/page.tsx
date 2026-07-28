import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { MODEL_IMAGES } from "@/lib/images";
import type { Locale } from "@/i18n/config";

const c = {
  fr: {
    back: "Retour au blog",
    tag: "Guide",
    title: "Mèches Synthétiques vs Naturelles : Le Vrai Comparatif",
    date: "8 juillet 2026",
    readTime: "7 min de lecture",
    imgAlt: "Comparatif mèches synthétiques vs naturelles",
    intro: "« Pourquoi payer plus cher pour des mèches naturelles alors que les synthétiques coûtent 3 fois moins ? » C'est LA question. Et la réponse va te surprendre : sur le long terme, le naturel revient souvent moins cher. Voici pourquoi.",
    h2_compare: "Le comparatif point par point",
    tableHeaders: ["Critère", "Premium", "Synthétique"],
    tableRows: [
      ["Toucher", "Doux, naturel", "Plastique, rigide"],
      ["Odeur", "Aucune", "Chimique forte"],
      ["Emmêlement", "Minimal", "Dès la 1ère semaine"],
      ["Durée braids", "1-2 mois", "2-3 semaines"],
      ["Brillance", "Naturelle, durable", "Artificielle, part vite"],
      ["Réutilisable", "Oui (2-3 poses)", "Non (usage unique)"],
      ["Prix unitaire", "25-40€/paquet", "8-15€/paquet"],
    ],
    h2_tangle: "L'emmêlement : le problème #1",
    tangle1: "Si tu as déjà acheté des mèches pas chères sur Amazon ou AliExpress, tu connais le scénario : ça a l'air bien les 3 premiers jours, puis les boucles commencent à s'emmêler, à former des nœuds, et au bout de 2 semaines ça ressemble à des dreads.",
    tangle2: "Pourquoi ? Les mèches synthétiques (et beaucoup de mèches « naturelles » bas de gamme) ont des cuticules abîmées ou retirées chimiquement. Sans cuticules alignées, les fibres frottent les unes contre les autres et créent des nœuds.",
    tangle3: "Les mèches deep wave premium conservent leurs fibres intactes et alignées dans le même sens. C'est comme un tissu lisse vs du velcro — l'un glisse, l'autre accroche.",
    h2_smell: "L'odeur chimique : un vrai problème",
    smell1: "On en parle pas assez, mais beaucoup de mèches synthétiques ont une odeur chimique forte qui persiste même après lavage. C'est dû aux traitements chimiques utilisés pour donner la texture. Sur TikTok, c'est l'un des reproches les plus fréquents.",
    smell2: "Les mèches deep wave premium n'ont aucune odeur car elles ne subissent aucun traitement chimique agressif.",
    h2_cost: "Le vrai calcul : prix sur 6 mois",
    premiumLabel: "Premium",
    premiumLines: ["3 paquets × 35€ = 105€", "Durée : 1-2 mois", "Réutilisable 1 fois"],
    premiumTotal: "Sur 6 mois : ~210-315€",
    premiumNote: "3-4 poses, 2 achats de mèches",
    syntheticLabel: "Synthétique",
    syntheticLines: ["3 paquets × 12€ = 36€", "Durée : 2-3 semaines", "Usage unique"],
    syntheticTotal: "Sur 6 mois : ~290-430€",
    syntheticNote: "8-12 poses, 8-12 achats",
    costNote: "Sans compter le temps passé chez ta braideuse à chaque repose et la frustration de l'emmêlement après 2 semaines...",
    h2_fake: "Attention aux faux « cheveux naturels »",
    fake1: "Beaucoup de marques vendent des mèches étiquetées « 100% qualité premium » qui sont en réalité des cheveux traités chimiquement (acid bath). Les cuticules sont retirées puis recouvertes de silicone pour donner un aspect lisse.",
    fake2: "Résultat : ça brille les premiers jours (grâce au silicone), puis le coating part et c'est la catastrophe. Les vraies mèches premium n'ont pas de coating silicone — la brillance est naturelle et dure.",
    verifyTitle: "Comment vérifier ?",
    verifyText: "Fais le test du « bleach » : les vraies mèches premium peuvent être décolorées uniformément. Les cheveux traités deviennent orange ou se cassent. Tu peux aussi vérifier au toucher : le premium est doux dans les deux sens, les cheveux traités accrochent quand tu remontes de la pointe vers la racine.",
    h2_verdict: "Notre verdict",
    verdict: "Si tu fais des braids occasionnellement (1-2 fois par an) et que le budget est serré, le synthétique peut dépanner. Mais si tu portes des braids régulièrement, investir dans du premium est le choix le plus intelligent — économiquement et pour la santé de tes cheveux.",
    ctaTitle: "Passe au premium",
    ctaText: "Des mèches deep wave premium, sans traitement chimique, sans odeur",
    ctaButton: "Voir nos mèches",
  },
  en: {
    back: "Back to blog",
    tag: "Guide",
    title: "Synthetic vs Natural Hair: The Real Comparison",
    date: "July 8, 2026",
    readTime: "7 min read",
    imgAlt: "Synthetic vs natural hair comparison",
    intro: "\"Why pay more for premium hair when synthetic costs 3x less?\" It's the question everyone asks. And the answer might surprise you — in the long run, premium actually saves you money. Here's the real breakdown.",
    h2_compare: "The point-by-point comparison",
    tableHeaders: ["Criteria", "Premium", "Synthetic"],
    tableRows: [
      ["Feel", "Soft, natural", "Plastic, stiff"],
      ["Smell", "None", "Strong chemical"],
      ["Tangling", "Minimal", "From week 1"],
      ["Braids lifespan", "1-2 months", "2-3 weeks"],
      ["Shine", "Natural, lasting", "Artificial, fades fast"],
      ["Reusable", "Yes (2-3 installs)", "No (single use)"],
      ["Unit price", "$25-40/pack", "$8-15/pack"],
    ],
    h2_tangle: "Tangling: the #1 problem",
    tangle1: "If you've ever grabbed cheap bundles off Amazon or AliExpress, you already know how it goes: looks amazing for the first 3 days, then the curls start tangling, knots form, and two weeks in it looks like locs you never asked for.",
    tangle2: "Why does this happen? Synthetic hair (and a lot of so-called \"natural\" budget hair) has damaged or chemically stripped cuticles. Without aligned cuticles, the fibers catch on each other and create knots.",
    tangle3: "Premium deep wave hair keeps its fibers intact and aligned in the same direction. Think smooth silk vs velcro — one glides, the other grips.",
    h2_smell: "The chemical smell: a real issue",
    smell1: "Nobody talks about this enough, but tons of synthetic bundles have a harsh chemical smell that won't go away even after washing. It comes from the chemical treatments used to create the texture. Scroll through TikTok reviews — it's one of the top complaints.",
    smell2: "Premium deep wave hair? Zero smell. Because it doesn't go through any harsh chemical processing.",
    h2_cost: "The real math: 6-month cost",
    premiumLabel: "Premium",
    premiumLines: ["3 packs × $35 = $105", "Lifespan: 1-2 months", "Reusable once"],
    premiumTotal: "Over 6 months: ~$210-315",
    premiumNote: "3-4 installs, 2 hair purchases",
    syntheticLabel: "Synthetic",
    syntheticLines: ["3 packs × $12 = $36", "Lifespan: 2-3 weeks", "Single use"],
    syntheticTotal: "Over 6 months: ~$290-430",
    syntheticNote: "8-12 installs, 8-12 purchases",
    costNote: "And that's not even counting the time in your braider's chair for every redo, plus the frustration of dealing with tangled hair after just 2 weeks...",
    h2_fake: "Watch out for fake \"natural hair\"",
    fake1: "Tons of brands sell bundles labeled \"100% virgin hair\" that are actually chemically processed (acid bath). The cuticles get stripped off then coated in silicone to fake a smooth, shiny look.",
    fake2: "What happens: it looks amazing the first few washes (thanks to the silicone), then the coating rinses out and it's a tangled mess. Real premium hair has no silicone coating — the shine is natural and lasts.",
    verifyTitle: "How to spot the difference",
    verifyText: "Try the bleach test: real premium hair lightens evenly. Treated hair turns orange or snaps. You can also tell by touch: premium feels silky smooth in both directions, while treated hair catches when you slide from tip to root.",
    h2_verdict: "Our verdict",
    verdict: "If you only braid once or twice a year and money's tight, synthetic will get the job done. But if you rock braids regularly, going premium is the smartest move — for your wallet and your hair.",
    ctaTitle: "Ready to go premium?",
    ctaText: "Deep wave hair with zero chemicals, zero smell — just pure quality",
    ctaButton: "Shop our bundles",
  },
} as const;

export default async function ComparatifArticle({
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
          <Image src={MODEL_IMAGES[2]?.url || MODEL_IMAGES[0].url} alt={t.imgAlt} fill className="object-cover" sizes="100vw" priority />
        </div>

        <div className="prose-custom space-y-8 text-foreground/90 leading-relaxed">
          <p className="text-lg">{t.intro}</p>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_compare}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left text-sm font-medium text-muted py-4 px-4 border-b border-border">{t.tableHeaders[0]}</th>
                  <th className="text-center text-sm font-bold text-accent py-4 px-4 border-b border-border">{t.tableHeaders[1]}</th>
                  <th className="text-center text-sm font-medium text-muted py-4 px-4 border-b border-border">{t.tableHeaders[2]}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {t.tableRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-surface/50" : ""}>
                    <td className="py-3 px-4 border-b border-border font-medium">{row[0]}</td>
                    <td className="py-3 px-4 border-b border-border text-center">{row[1]}</td>
                    <td className="py-3 px-4 border-b border-border text-center text-muted">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_tangle}</h2>
          <p>{t.tangle1}</p>
          <p>{t.tangle2}</p>
          <p>{t.tangle3}</p>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_smell}</h2>
          <p>{t.smell1}</p>
          <p>{t.smell2}</p>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_cost}</h2>
          <div className="bg-surface rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="p-6">
                <h3 className="font-bold text-accent text-center mb-4">{t.premiumLabel}</h3>
                <ul className="space-y-2 text-sm">
                  {t.premiumLines.map((l) => <li key={l}>{l}</li>)}
                  <li className="pt-2 border-t border-border font-bold text-foreground">{t.premiumTotal}</li>
                  <li className="text-xs text-muted">{t.premiumNote}</li>
                </ul>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-muted text-center mb-4">{t.syntheticLabel}</h3>
                <ul className="space-y-2 text-sm text-muted">
                  {t.syntheticLines.map((l) => <li key={l}>{l}</li>)}
                  <li className="pt-2 border-t border-border font-bold text-foreground">{t.syntheticTotal}</li>
                  <li className="text-xs text-muted">{t.syntheticNote}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted">{t.costNote}</p>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_fake}</h2>
          <p>{t.fake1}</p>
          <p>{t.fake2}</p>

          <div className="bg-accent-soft border border-accent/20 rounded-2xl p-6 my-8">
            <p className="text-accent font-semibold mb-2">{t.verifyTitle}</p>
            <p className="text-sm text-foreground/80">{t.verifyText}</p>
          </div>

          <h2 className="text-2xl font-bold text-foreground pt-4">{t.h2_verdict}</h2>
          <p>{t.verdict}</p>
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
