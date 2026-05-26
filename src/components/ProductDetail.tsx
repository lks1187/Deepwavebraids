"use client";

import { useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import AddToCartButton from "./AddToCartButton";
import type { ShopifyProduct, ShopifyVariant } from "@/lib/shopify";

type Props = {
  product: ShopifyProduct;
};

export default function ProductDetail({ product }: Props) {
  const variants = product.variants.edges.map((e) => e.node);
  const images = product.images.edges.map((e) => e.node);

  // Get unique option names and values
  const optionGroups = variants.reduce<Record<string, string[]>>((acc, variant) => {
    variant.selectedOptions.forEach((opt) => {
      if (!acc[opt.name]) acc[opt.name] = [];
      if (!acc[opt.name].includes(opt.value)) acc[opt.name].push(opt.value);
    });
    return acc;
  }, {});

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    Object.entries(optionGroups).forEach(([name, values]) => {
      defaults[name] = values[0];
    });
    return defaults;
  });

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Find matching variant
  const selectedVariant = variants.find((v) =>
    v.selectedOptions.every((opt) => selectedOptions[opt.name] === opt.value)
  );

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionName]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      {/* Images */}
      <div className="space-y-4">
        {/* Main image */}
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-surface border border-border">
          {images[selectedImageIndex] ? (
            <Image
              src={images[selectedImageIndex].url}
              alt={images[selectedImageIndex].altText || product.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted/30">
              Pas d&apos;image
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImageIndex(i)}
                className={cn(
                  "relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-colors",
                  i === selectedImageIndex
                    ? "border-accent"
                    : "border-border hover:border-accent/40"
                )}
              >
                <Image
                  src={img.url}
                  alt={img.altText || `Image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold text-foreground">{product.title}</h1>
          <p className="text-accent font-bold text-2xl sm:text-3xl mt-3">
            {selectedVariant
              ? formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode)
              : formatPrice(
                  product.priceRange.minVariantPrice.amount,
                  product.priceRange.minVariantPrice.currencyCode
                )}
          </p>
        </div>

        {/* Options */}
        {Object.entries(optionGroups).map(([optionName, values]) => (
          <div key={optionName}>
            <label className="text-muted text-sm font-medium block mb-3">
              {optionName} : <span className="text-foreground">{selectedOptions[optionName]}</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => (
                <button
                  key={value}
                  onClick={() => handleOptionChange(optionName, value)}
                  className={cn(
                    "px-4 py-2.5 rounded-xl border text-sm font-medium transition-all",
                    selectedOptions[optionName] === value
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border text-muted hover:border-accent/40 hover:text-foreground"
                  )}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Add to cart */}
        <div className="pt-2">
          <AddToCartButton
            variantId={selectedVariant?.id || variants[0]?.id}
            availableForSale={selectedVariant?.availableForSale ?? true}
          />
        </div>

        {/* Description */}
        <div className="border-t border-border pt-6">
          <h3 className="text-foreground font-semibold mb-3">Description</h3>
          <p className="text-muted leading-relaxed whitespace-pre-line">
            {product.description}
          </p>
        </div>

        {/* Trust */}
        <div className="bg-surface rounded-2xl p-5 space-y-3 border border-border">
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xs">&#10003;</span>
            <span className="text-muted text-sm">100% cheveux vierges de qualité premium</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xs">&#10003;</span>
            <span className="text-muted text-sm">Livraison rapide en France, Suisse et Belgique</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xs">&#10003;</span>
            <span className="text-muted text-sm">Paiement sécurisé par carte ou PayPal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
