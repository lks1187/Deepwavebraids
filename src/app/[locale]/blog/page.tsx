import Link from "next/link";
import Image from "next/image";
import { Sparkles, Clock, ArrowRight } from "lucide-react";
import { MODEL_IMAGES } from "@/lib/images";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

const IMAGE_MAP = [0, 1, 2];

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return (
    <div className="min-h-screen bg-background py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-accent-soft border border-accent/10 rounded-full px-4 py-1.5 mb-4">
            <Sparkles size={14} className="text-accent" />
            <span className="text-accent text-xs font-medium tracking-wide">
              {t.blog.badge}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
            {t.blog.title} <span className="text-accent">{t.blog.titleAccent}</span>
          </h1>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {t.blog.articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/${locale}/blog/${article.slug}`}
              className="group block bg-surface rounded-3xl border border-border overflow-hidden hover:border-accent/30 transition-all hover:shadow-lg"
            >
              <div className={`flex flex-col ${i === 0 ? "" : "sm:flex-row"}`}>
                <div className={`relative ${i === 0 ? "aspect-[16/9]" : "aspect-[16/9] sm:aspect-auto sm:w-72"} overflow-hidden`}>
                  <Image
                    src={MODEL_IMAGES[IMAGE_MAP[i]]?.url || MODEL_IMAGES[0].url}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={i === 0 ? "100vw" : "(max-width: 640px) 100vw, 300px"}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                      {article.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-muted text-xs mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className={`font-bold text-foreground group-hover:text-accent transition-colors ${i === 0 ? "text-xl sm:text-2xl" : "text-lg"}`}>
                    {article.title}
                  </h2>
                  <p className="text-muted text-sm mt-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    {t.blog.readArticle} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
