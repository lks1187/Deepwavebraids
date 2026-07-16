import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-accent-soft rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Search size={36} className="text-accent" />
        </div>

        <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
        <h2 className="text-xl font-semibold text-foreground mb-3">
          Page introuvable
        </h2>
        <p className="text-muted text-sm mb-8">
          Cette page n&apos;existe pas ou a été déplacée. Pas de panique, nos mèches deep wave t&apos;attendent !
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/products"
            className="bg-accent hover:bg-accent-light text-white font-semibold py-3.5 px-7 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-lg hover:-translate-y-0.5"
          >
            Voir la boutique
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/"
            className="border border-border hover:border-accent/30 text-foreground font-medium py-3.5 px-7 rounded-xl transition-all flex items-center justify-center text-sm"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
