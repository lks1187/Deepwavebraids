import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import type { ShopifyProduct } from "@/lib/shopify";

type Props = {
  product: ShopifyProduct;
};

export default function ProductCard({ product }: Props) {
  const image = product.images.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group block bg-card-bg rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-surface">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText || product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted/30">
            Pas d&apos;image
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-foreground font-medium text-sm sm:text-base line-clamp-2 group-hover:text-accent transition-colors">
          {product.title}
        </h3>
        <p className="text-accent font-bold text-lg mt-2">
          {formatPrice(price.amount, price.currencyCode)}
        </p>
        <p className="text-muted text-xs mt-1">
          {product.variants.edges.length} options disponibles
        </p>
      </div>
    </Link>
  );
}
