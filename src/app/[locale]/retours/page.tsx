import Link from "next/link";
import { ArrowLeft, Package, Clock, Mail, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export default async function RetoursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} />
          {t.retours.back}
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-4">
          {t.retours.title}
        </h1>
        <p className="text-muted mb-10">{t.retours.lastUpdate}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-surface rounded-2xl border border-border p-5 text-center">
            <Clock size={28} className="text-accent mx-auto mb-2" />
            <p className="text-foreground font-semibold text-lg">{t.retours.days}</p>
            <p className="text-muted text-xs mt-1">{t.retours.daysLabel}</p>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-5 text-center">
            <Package size={28} className="text-accent mx-auto mb-2" />
            <p className="text-foreground font-semibold text-lg">{t.retours.unopened}</p>
            <p className="text-muted text-xs mt-1">{t.retours.unopenedLabel}</p>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-5 text-center">
            <Mail size={28} className="text-accent mx-auto mb-2" />
            <p className="text-foreground font-semibold text-lg">{t.retours.emailLabel}</p>
            <p className="text-muted text-xs mt-1">contact@deepwavebraids.shop</p>
          </div>
        </div>

        <div className="space-y-8 text-muted text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{t.retours.s1Title}</h2>
            <p>{t.retours.s1Text}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{t.retours.s2Title}</h2>
            <p className="mb-4">{t.retours.s2Intro}</p>
            <div className="space-y-3">
              {[t.retours.s2c1, t.retours.s2c2, t.retours.s2c3].map((c, i) => (
                <div key={i} className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-border">
                  <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <p>{c}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{t.retours.s3Title}</h2>
            <div className="space-y-3">
              {[t.retours.s3c1, t.retours.s3c2, t.retours.s3c3].map((c, i) => (
                <div key={i} className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-border">
                  <XCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <p>{c}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{t.retours.s4Title}</h2>
            <div className="bg-surface rounded-2xl border border-border p-6">
              <ol className="space-y-4">
                {[
                  { title: t.retours.s4s1Title, text: t.retours.s4s1Text },
                  { title: t.retours.s4s2Title, text: t.retours.s4s2Text },
                  { title: t.retours.s4s3Title, text: t.retours.s4s3Text },
                  { title: t.retours.s4s4Title, text: t.retours.s4s4Text },
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                    <div>
                      <p className="text-foreground font-medium">{step.title}</p>
                      <p className="text-muted text-xs mt-1">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{t.retours.s5Title}</h2>
            <div className="flex items-start gap-3 bg-accent-soft rounded-xl p-4 border border-accent/20">
              <AlertTriangle size={18} className="text-accent mt-0.5 flex-shrink-0" />
              <p>{t.retours.s5Text}</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{t.retours.s6Title}</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t.retours.s6l1}</li>
              <li>{t.retours.s6l2}</li>
              <li>{t.retours.s6l3}</li>
              <li>{t.retours.s6l4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{t.retours.s7Title}</h2>
            <div className="bg-surface rounded-2xl border border-border p-6">
              <p className="mb-2">{t.retours.s7Text}</p>
              <ul className="space-y-1 mt-3">
                <li>contact@deepwavebraids.shop</li>
                <li>www.deepwavebraids.shop</li>
              </ul>
              <p className="mt-4 text-xs text-muted/60">{t.retours.s7Footer}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
