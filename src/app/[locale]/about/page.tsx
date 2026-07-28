import { Heart, Award, Globe, Sparkles } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-accent-soft border border-accent/10 rounded-full px-4 py-1.5 mb-4">
          <Sparkles size={14} className="text-accent" />
          <span className="text-accent text-xs font-medium tracking-wide">
            {t.about.badge}
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          {t.about.title} <span className="text-accent">DeepWaveBraids</span>
        </h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-8 mb-20">
        <p className="text-muted text-lg leading-relaxed">{t.about.story1}</p>
        <p className="text-muted text-lg leading-relaxed">{t.about.story2}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-card-bg rounded-2xl p-8 border border-border text-center hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all">
          <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Award size={28} className="text-accent" />
          </div>
          <h3 className="text-foreground font-semibold text-lg mb-2">{t.about.qualityTitle}</h3>
          <p className="text-muted text-sm leading-relaxed">{t.about.qualityDesc}</p>
        </div>

        <div className="bg-card-bg rounded-2xl p-8 border border-border text-center hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all">
          <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Heart size={28} className="text-accent" />
          </div>
          <h3 className="text-foreground font-semibold text-lg mb-2">{t.about.passionTitle}</h3>
          <p className="text-muted text-sm leading-relaxed">{t.about.passionDesc}</p>
        </div>

        <div className="bg-card-bg rounded-2xl p-8 border border-border text-center hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all">
          <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Globe size={28} className="text-accent" />
          </div>
          <h3 className="text-foreground font-semibold text-lg mb-2">{t.about.shippingTitle}</h3>
          <p className="text-muted text-sm leading-relaxed">{t.about.shippingDesc}</p>
        </div>
      </div>
    </div>
  );
}
