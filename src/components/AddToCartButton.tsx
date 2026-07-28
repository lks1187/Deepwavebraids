"use client";

import { ShoppingBag, Loader2 } from "lucide-react";
import { useCart } from "./CartProvider";
import { useState } from "react";
import { useI18n } from "@/i18n/context";

type Props = {
  variantId: string;
  availableForSale: boolean;
  quantity?: number;
  displayPrice?: string;
};

export default function AddToCartButton({ variantId, availableForSale, quantity = 1, displayPrice }: Props) {
  const { addItem } = useCart();
  const [loading, setLoading] = useState(false);
  const { locale } = useI18n();

  const handleAdd = async () => {
    setLoading(true);
    await addItem(variantId, quantity);
    setLoading(false);
  };

  if (!availableForSale) {
    return (
      <button
        disabled
        className="w-full bg-surface text-muted font-semibold py-4 px-6 rounded-2xl cursor-not-allowed border border-border"
      >
        {locale === "en" ? "Out of stock" : "Rupture de stock"}
      </button>
    );
  }

  const label = quantity > 1
    ? locale === "en"
      ? `Add ${quantity} bundles`
      : `Ajouter ${quantity} paquets`
    : locale === "en"
      ? "Add to cart"
      : "Ajouter au panier";

  return (
    <button
      onClick={handleAdd}
      disabled={loading}
      className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-4 px-6 rounded-2xl transition-colors flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-accent/20 hover:shadow-accent/30"
    >
      {loading ? (
        <Loader2 size={20} className="animate-spin" />
      ) : (
        <>
          <ShoppingBag size={20} />
          <span>{label}</span>
          {displayPrice && (
            <span className="bg-white/20 px-3 py-0.5 rounded-lg text-sm">{displayPrice}</span>
          )}
        </>
      )}
    </button>
  );
}
