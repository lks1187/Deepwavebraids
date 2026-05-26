import { Sparkles } from "lucide-react";
import { getAllProducts, type ShopifyProduct } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Boutique | DeepWaveBraids",
  description: "Découvrez notre collection de mèches deep wave et braiding hair 100% cheveux vierges.",
};

export default async function ProductsPage() {
  let products: ShopifyProduct[] = [];
  try {
    products = await getAllProducts();
  } catch {
    // API not configured yet
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-accent-soft border border-accent/10 rounded-full px-4 py-1.5 mb-4">
          <Sparkles size={14} className="text-accent" />
          <span className="text-accent text-xs font-medium tracking-wide">
            Collection complète
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Notre <span className="text-accent">Boutique</span>
        </h1>
        <p className="text-muted mt-4 max-w-lg mx-auto">
          Des mèches deep wave de qualité premium pour toutes tes coiffures protectrices
        </p>
      </div>

      {/* Products grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-surface rounded-2xl border border-border">
          <Sparkles size={48} className="text-accent/20 mx-auto mb-4" />
          <p className="text-muted text-lg">
            Connecte l&apos;API Shopify pour afficher tes produits
          </p>
          <p className="text-muted/50 text-sm mt-2">
            Configure le fichier .env.local
          </p>
        </div>
      )}
    </div>
  );
}
