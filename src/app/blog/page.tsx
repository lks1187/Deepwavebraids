import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Clock, ArrowRight } from "lucide-react";
import { MODEL_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Blog | DeepWaveBraids — Conseils Braids & Extensions",
  description:
    "Conseils, tutoriels et inspirations pour tes boho braids, knotless braids et coiffures protectrices avec des mèches deep wave.",
};

const ARTICLES = [
  {
    slug: "boho-braids-guide-complet",
    title: "Boho Braids : Le Guide Complet 2026",
    excerpt:
      "Tout ce que tu dois savoir sur les boho braids : technique, entretien, durée de vie et les meilleures mèches à utiliser.",
    date: "12 juillet 2026",
    readTime: "6 min",
    image: 0,
    tag: "Tutoriel",
  },
  {
    slug: "entretien-meches-deep-wave",
    title: "Comment Entretenir Tes Mèches Deep Wave (Pour Qu'elles Durent 2x Plus)",
    excerpt:
      "La routine d'entretien en 5 étapes pour garder tes braids impeccables pendant 1 à 2 mois. Mousse, chignon, bonnet satin et plus.",
    date: "10 juillet 2026",
    readTime: "5 min",
    image: 1,
    tag: "Entretien",
  },
  {
    slug: "meches-synthetiques-vs-naturelles",
    title: "Mèches Synthétiques vs Naturelles : Le Vrai Comparatif",
    excerpt:
      "Emmêlement, odeur, durée de vie, prix au long terme... On compare tout pour t'aider à faire le bon choix.",
    date: "8 juillet 2026",
    readTime: "7 min",
    image: 2,
    tag: "Guide",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-accent-soft border border-accent/10 rounded-full px-4 py-1.5 mb-4">
            <Sparkles size={14} className="text-accent" />
            <span className="text-accent text-xs font-medium tracking-wide">
              Blog
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
            Conseils & <span className="text-accent">Inspirations</span>
          </h1>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            Tutoriels, guides d&apos;entretien et tout ce qu&apos;il faut savoir pour des braids parfaites
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-8">
          {ARTICLES.map((article, i) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block bg-surface rounded-3xl border border-border overflow-hidden hover:border-accent/30 transition-all hover:shadow-lg"
            >
              <div className={`flex flex-col ${i === 0 ? "" : "sm:flex-row"}`}>
                {/* Image */}
                <div className={`relative ${i === 0 ? "aspect-[16/9]" : "aspect-[16/9] sm:aspect-auto sm:w-72"} overflow-hidden`}>
                  <Image
                    src={MODEL_IMAGES[article.image]?.url || MODEL_IMAGES[0].url}
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

                {/* Content */}
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
                    Lire l&apos;article <ArrowRight size={14} />
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
