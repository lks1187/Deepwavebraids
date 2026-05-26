"use client";

import { ShoppingBag, Loader2 } from "lucide-react";
import { useCart } from "./CartProvider";
import { useState } from "react";

type Props = {
  variantId: string;
  availableForSale: boolean;
};

export default function AddToCartButton({ variantId, availableForSale }: Props) {
  const { addItem } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    setLoading(true);
    await addItem(variantId);
    setLoading(false);
  };

  if (!availableForSale) {
    return (
      <button
        disabled
        className="w-full bg-surface text-muted font-semibold py-4 px-6 rounded-2xl cursor-not-allowed border border-border"
      >
        Rupture de stock
      </button>
    );
  }

  return (
    <button
      onClick={handleAdd}
      disabled={loading}
      className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-4 px-6 rounded-2xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-accent/20 hover:shadow-accent/30"
    >
      {loading ? (
        <Loader2 size={20} className="animate-spin" />
      ) : (
        <>
          <ShoppingBag size={20} />
          Ajouter au panier
        </>
      )}
    </button>
  );
}
