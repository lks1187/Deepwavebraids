import { Sparkles } from "lucide-react";
import { getAllProducts, type ShopifyProduct } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export const revalidate = 60;

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  let products: ShopifyProduct[] = [];
  try {
    products = await getAllProducts();
  } catch {
    // API not configured yet
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-accent-soft border border-accent/10 rounded-full px-4 py-1.5 mb-4">
          <Sparkles size={14} className="text-accent" />
          <span className="text-accent text-xs font-medium tracking-wide">
            {t.shop.badge}
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          {t.shop.title} <span className="text-accent">{t.shop.titleAccent}</span>
        </h1>
        <p className="text-muted mt-4 max-w-lg mx-auto">
          {t.shop.subtitle}
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-surface rounded-2xl border border-border">
          <Sparkles size={48} className="text-accent/20 mx-auto mb-4" />
          <p className="text-muted text-lg">{t.shop.connectApi}</p>
          <p className="text-muted/50 text-sm mt-2">{t.shop.configEnv}</p>
        </div>
      )}
    </div>
  );
}
