"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { cart, isOpen, isLoading, closeCart, updateItem, removeItem } = useCart();

  if (!isOpen) return null;

  const lines = cart?.lines.edges.map((e) => e.node) || [];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-foreground/20 z-50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 flex flex-col border-l border-border shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-foreground font-semibold text-lg flex items-center gap-2">
            <ShoppingBag size={20} className="text-accent" />
            Mon Panier
          </h2>
          <button
            onClick={closeCart}
            className="text-muted hover:text-foreground transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted">
              <ShoppingBag size={48} className="mb-4 text-border" />
              <p className="text-lg font-medium">Ton panier est vide</p>
              <p className="text-sm mt-2">Ajoute des produits pour commencer</p>
            </div>
          ) : (
            <div className="space-y-4">
              {lines.map((line) => {
                const imageUrl =
                  line.merchandise.product.images.edges[0]?.node.url;
                return (
                  <div
                    key={line.id}
                    className="flex gap-4 bg-surface rounded-2xl p-3 border border-border"
                  >
                    {imageUrl && (
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={imageUrl}
                          alt={line.merchandise.product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-foreground text-sm font-medium truncate">
                        {line.merchandise.product.title}
                      </h3>
                      <p className="text-muted text-xs mt-0.5">
                        {line.merchandise.title}
                      </p>
                      <p className="text-accent font-semibold text-sm mt-1">
                        {formatPrice(line.merchandise.price.amount, line.merchandise.price.currencyCode)}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            line.quantity === 1
                              ? removeItem(line.id)
                              : updateItem(line.id, line.quantity - 1)
                          }
                          disabled={isLoading}
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-accent-soft text-accent hover:bg-accent hover:text-white transition-colors disabled:opacity-50"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-foreground text-sm w-6 text-center font-medium">
                          {line.quantity}
                        </span>
                        <button
                          onClick={() => updateItem(line.id, line.quantity + 1)}
                          disabled={isLoading}
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-accent-soft text-accent hover:bg-accent hover:text-white transition-colors disabled:opacity-50"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(line.id)}
                          disabled={isLoading}
                          className="ml-auto text-muted/40 hover:text-red-500 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-border p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted">Total</span>
              <span className="text-foreground font-bold text-xl">
                {formatPrice(
                  cart?.cost.totalAmount.amount || "0",
                  cart?.cost.totalAmount.currencyCode
                )}
              </span>
            </div>
            <a
              href={cart?.checkoutUrl}
              className="block w-full bg-accent hover:bg-accent-light text-white font-semibold py-4 px-6 rounded-2xl text-center transition-colors"
            >
              Commander
            </a>
            <p className="text-muted text-xs text-center">
              Livraison calculée à l&apos;étape suivante
            </p>
          </div>
        )}
      </div>
    </>
  );
}
