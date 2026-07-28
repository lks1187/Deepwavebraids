import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Package, Ruler, Info } from "lucide-react";
import { MODEL_IMAGES } from "@/lib/images";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

const ICONS = ["✨", "💫", "👑", "🌊", "🪡", "💎"];

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-soft to-background py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={14} className="text-accent" />
            <span className="text-accent text-xs font-medium tracking-wide">
              {t.guide.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
            {t.guide.title}
            <span className="block text-accent mt-2">{t.guide.titleAccent}</span>
          </h1>

          <p className="text-muted mt-6 max-w-lg mx-auto text-lg">
            {t.guide.subtitle}
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
              <h2 className="text-lg font-bold text-foreground">{t.guide.ruleTitle}</h2>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                {t.guide.ruleText
                  .replace("{3}", "")
                  .replace("{4}", "")
                  .replace("{2}", "")
                  .split(/3 paquets|4 paquets|2 paquets/)
                  .reduce((acc: string, _part: string, _i: number) => acc, "") ? (
                  <>
                    {t.guide.ruleText.split(/\{[234]\}/)[0]}
                    <strong className="text-foreground">3 {locale === "fr" ? "paquets" : "packs"}</strong>
                    {t.guide.ruleText.split(/\{[234]\}/)[1]}
                    <strong className="text-foreground">4 {locale === "fr" ? "paquets" : "packs"}</strong>
                    {t.guide.ruleText.split(/\{[234]\}/)[2]}
                    <strong className="text-foreground">2 {locale === "fr" ? "paquets" : "packs"}</strong>
                    {t.guide.ruleText.split(/\{[234]\}/)[3]}
                  </>
                ) : null}
              </p>
              <p className="text-accent text-sm font-medium mt-3">
                💡 {t.guide.ruleTip}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pack guide */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {t.guide.packTitle} <span className="text-accent">{t.guide.packTitleAccent}</span>
          </h2>
          <p className="text-muted mt-3 max-w-lg mx-auto">
            {t.guide.packSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Pack Duo */}
          <div className="bg-surface rounded-2xl border border-border p-6 hover:border-accent/30 transition-colors">
            <div className="text-center mb-4">
              <span className="text-3xl">2</span>
              <p className="text-foreground font-bold text-lg mt-1">{t.guide.packDuo}</p>
              <p className="text-accent font-bold text-xl mt-1">99,90 &euro;</p>
            </div>
            <p className="text-foreground text-sm font-medium mb-2 italic">{t.guide.packDuoDesc}</p>
            <p className="text-muted text-sm leading-relaxed">{t.guide.packDuoText}</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-accent text-xs font-medium">{t.guide.packDuoIdeal}</p>
            </div>
            <Link
              href={`/${locale}/products/packs-deep-wave-braids-meches-virgin`}
              className="block mt-4 text-center bg-accent/10 hover:bg-accent/20 text-accent font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
            >
              {t.guide.chooseDuo}
            </Link>
          </div>

          {/* Pack Trio */}
          <div className="bg-surface rounded-2xl border border-border p-6 hover:border-accent/30 transition-colors">
            <div className="text-center mb-4">
              <span className="text-3xl">3</span>
              <p className="text-foreground font-bold text-lg mt-1">{t.guide.packTrio}</p>
              <p className="text-accent font-bold text-xl mt-1">139,90 &euro;</p>
            </div>
            <p className="text-foreground text-sm font-medium mb-2 italic">{t.guide.packTrioDesc}</p>
            <p className="text-muted text-sm leading-relaxed">{t.guide.packTrioText}</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-accent text-xs font-medium">{t.guide.packTrioIdeal}</p>
            </div>
            <Link
              href={`/${locale}/products/packs-deep-wave-braids-meches-virgin`}
              className="block mt-4 text-center bg-accent/10 hover:bg-accent/20 text-accent font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
            >
              {t.guide.chooseTrio}
            </Link>
          </div>

          {/* Pack Full Head */}
          <div className="bg-surface rounded-2xl border-2 border-accent p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">{t.guide.packFullBadge}</span>
            </div>
            <div className="text-center mb-4 mt-2">
              <span className="text-3xl">4</span>
              <p className="text-foreground font-bold text-lg mt-1">{t.guide.packFull}</p>
              <p className="text-accent font-bold text-xl mt-1">169,90 &euro;</p>
            </div>
            <p className="text-foreground text-sm font-medium mb-2 italic">{t.guide.packFullDesc}</p>
            <p className="text-muted text-sm leading-relaxed">{t.guide.packFullText}</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-accent text-xs font-medium">{t.guide.packFullIdeal}</p>
            </div>
            <Link
              href={`/${locale}/products/packs-deep-wave-braids-meches-virgin`}
              className="block mt-4 text-center bg-accent hover:bg-accent-light text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
            >
              {t.guide.chooseFull}
            </Link>
          </div>
        </div>

        {/* Summary table */}
        <div className="mt-10 bg-surface rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent-soft">
                  <th className="text-left text-foreground font-bold p-4">{t.guide.tableHairstyle}</th>
                  <th className="text-left text-foreground font-bold p-4">{t.guide.tableRecommended}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 text-muted">{t.guide.tableRow1}</td>
                  <td className="p-4 text-foreground font-medium">Duo (2 {locale === "fr" ? "paquets" : "packs"})</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted">{t.guide.tableRow2}</td>
                  <td className="p-4 text-foreground font-medium">Trio (3 {locale === "fr" ? "paquets" : "packs"})</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted">{t.guide.tableRow3}</td>
                  <td className="p-4 text-foreground font-medium">Full Head (4 {locale === "fr" ? "paquets" : "packs"}) ⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-accent-soft/50 border-t border-border">
            <p className="text-accent text-sm font-medium text-center">
              {t.guide.tableAdvice}
            </p>
          </div>
        </div>
      </section>

      {/* By hairstyle */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {t.guide.byStyleTitle} <span className="text-accent">{t.guide.byStyleAccent}</span>
          </h2>
          <p className="text-muted mt-3">
            {t.guide.byStyleSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {t.guide.hairstyles.map((style, i) => (
            <div
              key={style.name}
              className="bg-surface rounded-2xl border border-border p-6 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-2xl mr-2">{ICONS[i]}</span>
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
              {t.guide.lengthTitle} <span className="text-accent">{t.guide.lengthAccent}</span>
            </h2>
            <p className="text-muted mt-3">
              {t.guide.lengthSubtitle}
            </p>
          </div>

          <div className="bg-background rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-border">
              {t.guide.lengths.map((length, i) => (
                <div
                  key={length.inches}
                  className={`flex items-center gap-4 sm:gap-6 p-5 ${
                    length.inches === '20"' ? "bg-accent-soft border-l-4 border-l-accent" : ""
                  }`}
                >
                  <div className="w-16 flex-shrink-0 text-center">
                    <span className="text-xl font-bold text-foreground">{length.inches}</span>
                    <p className="text-muted text-xs">{length.cm}</p>
                  </div>

                  <div className="flex-1 hidden sm:block">
                    <div className="w-full bg-border/50 rounded-full h-3">
                      <div
                        className="bg-accent rounded-full h-3 transition-all"
                        style={{ width: `${30 + i * 17}%` }}
                      />
                    </div>
                  </div>

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
            {t.guide.tipsTitle} <span className="text-accent">{t.guide.tipsAccent}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-surface rounded-2xl border border-border p-6 text-center">
            <span className="text-3xl mb-3 block">🎯</span>
            <h3 className="text-foreground font-bold mb-2">{t.guide.tip1Title}</h3>
            <p className="text-muted text-sm">{t.guide.tip1Text}</p>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-6 text-center">
            <span className="text-3xl mb-3 block">💰</span>
            <h3 className="text-foreground font-bold mb-2">{t.guide.tip2Title}</h3>
            <p className="text-muted text-sm">{t.guide.tip2Text}</p>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-6 text-center">
            <span className="text-3xl mb-3 block">💇‍♀️</span>
            <h3 className="text-foreground font-bold mb-2">{t.guide.tip3Title}</h3>
            <p className="text-muted text-sm">{t.guide.tip3Text}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={MODEL_IMAGES[2]?.url || MODEL_IMAGES[0].url}
                alt="Deep wave hair DeepWaveBraids"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t.guide.ctaTitle}
              </h2>
              <p className="text-muted mt-4">{t.guide.ctaText}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Link
                  href={`/${locale}/products`}
                  className="bg-accent hover:bg-accent-light text-white font-semibold py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {t.guide.ctaButton}
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
