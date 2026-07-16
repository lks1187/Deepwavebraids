"use client";

import { useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import AddToCartButton from "./AddToCartButton";
import { Star, Droplets, Wind, Shield, Clock, ChevronDown, ChevronUp } from "lucide-react";
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
            <span className="text-muted text-sm">Mèches deep wave de qualité premium</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xs">&#10003;</span>
            <span className="text-muted text-sm">Livraison en 6-10 jours en France, Suisse et Belgique</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xs">&#10003;</span>
            <span className="text-muted text-sm">Paiement sécurisé par carte, Apple Pay ou Shop Pay</span>
          </div>
        </div>

        {/* Payment badges */}
        <div className="pt-2">
          <p className="text-muted text-xs mb-3">Paiement 100% sécurisé</p>
          <div className="flex flex-wrap items-center gap-2">
            {/* Visa */}
            <div className="bg-white rounded-lg border border-border flex items-center justify-center h-9 w-14 p-1">
              <svg viewBox="0 0 780 500" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
                <path d="M293.2 348.7l33.4-195.8h53.4l-33.4 195.8h-53.4zM540.7 159.5c-10.6-4-27.2-8.3-47.9-8.3-52.8 0-90 26.6-90.2 64.7-.3 28.2 26.5 43.9 46.8 53.3 20.8 9.6 27.8 15.8 27.7 24.4-.1 13.2-16.6 19.2-32 19.2-21.4 0-32.7-3-50.3-10.2l-6.9-3.1-7.5 43.8c12.5 5.5 35.6 10.2 59.6 10.5 56.2 0 92.7-26.3 93.1-67 .2-22.3-14-39.3-44.8-53.3-18.6-9.1-30.1-15.1-30-24.3 0-8.1 9.7-16.8 30.6-16.8 17.5-.3 30.1 3.5 40 7.5l4.8 2.3 7.2-42.7h.2z" fill="#1A1F71"/>
                <path d="M651.1 152.9h-41.3c-12.8 0-22.4 3.5-28 16.3l-79.3 179.5h56.1s9.2-24.1 11.2-29.4c6.1 0 60.6.1 68.4.1 1.6 6.9 6.5 29.3 6.5 29.3h49.6l-43.2-195.8zm-65.7 126.4c4.4-11.3 21.3-54.7 21.3-54.7-.3.5 4.4-11.3 7.1-18.7l3.6 16.9s10.2 46.8 12.4 56.5h-44.4z" fill="#1A1F71"/>
                <path d="M247.2 152.9L194.8 281l-5.6-27.2c-9.8-31.3-40.3-65.3-74.4-82.3l47.8 176.1 56.6-.1 84.2-195.6h-56.2z" fill="#1A1F71"/>
                <path d="M146.9 152.9H60.1l-.7 3.5c67.1 16.2 111.5 55.4 129.9 102.5L171.1 170c-3.2-12.4-12.7-16.7-24.2-17.1z" fill="#F9A533"/>
              </svg>
            </div>
            {/* Mastercard */}
            <div className="bg-white rounded-lg border border-border flex items-center justify-center h-9 w-14 p-1">
              <svg viewBox="0 0 780 500" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
                <rect width="780" height="500" rx="40" fill="none"/>
                <circle cx="312" cy="250" r="150" fill="#EB001B"/>
                <circle cx="468" cy="250" r="150" fill="#F79E1B"/>
                <path d="M390 128.3c38.5 31.3 63.1 78.6 63.1 131.7s-24.6 100.4-63.1 131.7c-38.5-31.3-63.1-78.6-63.1-131.7s24.6-100.4 63.1-131.7z" fill="#FF5F00"/>
              </svg>
            </div>
            {/* Apple Pay */}
            <div className="bg-white rounded-lg border border-border flex items-center justify-center h-9 w-14 p-1">
              <svg viewBox="0 0 165.5 105.5" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.3 25.6c-1.8 2.1-4.7 3.8-7.6 3.5-.4-2.9.9-6 2.5-7.9 1.8-2.2 4.9-3.7 7.4-3.8.3 3-.8 6-2.3 8.2zm2.3 4.1c-4.2-.2-7.8 2.4-9.8 2.4s-5.1-2.3-8.4-2.2c-4.3.1-8.3 2.5-10.5 6.4-4.5 7.8-1.2 19.4 3.2 25.7 2.1 3.1 4.7 6.6 8 6.5 3.2-.1 4.4-2.1 8.3-2.1s5 2.1 8.4 2c3.5-.1 5.7-3.1 7.8-6.2 2.4-3.6 3.4-7 3.5-7.2-.1 0-6.7-2.6-6.7-10.2 0-6.4 5.2-9.4 5.4-9.6-2.9-4.4-7.5-4.9-9.2-5.5z" fill="#000"/>
                <path d="M63.2 19.2c7.5 0 12.7 5.2 12.7 12.7 0 7.6-5.3 12.8-12.9 12.8H54v13.3h-6V19.2h15.2zm-9.2 20.2h7.6c5.2 0 8.2-2.8 8.2-7.5S67 21.5 61.7 21.5H54v17.9z" fill="#000"/>
                <path d="M78.2 47.8c0-5 3.8-8 10.6-8.4l7.8-.4v-2.2c0-3.2-2.1-5-5.7-5-3.4 0-5.5 1.6-6 4.1h-5.5c.3-5.1 4.6-8.9 11.7-8.9 6.9 0 11.3 3.7 11.3 9.4V58h-5.6v-4.8h-.1c-1.6 3.2-5.2 5.3-8.9 5.3-5.5 0-9.6-3.4-9.6-8.7zm18.4-2.6V43l-7 .4c-3.5.3-5.5 1.8-5.5 4.3 0 2.5 2.1 4.1 5.2 4.1 4.1 0 7.3-2.7 7.3-6.6z" fill="#000"/>
                <path d="M106.5 68.3v-4.7c.4.1 1.4.1 1.8.1 2.5 0 3.9-1.1 4.7-3.8l.5-1.6-10.7-30.1h6.3l7.6 24.6h.1l7.6-24.6h6.1L119.7 60c-2.5 7-5.3 9.3-11.3 9.3-.4 0-1.5-.1-1.9-.1v.1z" fill="#000"/>
              </svg>
            </div>
            {/* PayPal — official logo from Wikimedia Commons */}
            <div className="bg-white rounded-lg border border-border flex items-center justify-center h-9 w-14 p-1">
              <svg viewBox="0 0 124 33" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
                <path fill="#253B80" d="M46.211 6.749h-6.839a1.01 1.01 0 0 0-.939.802l-2.766 17.537a.574.574 0 0 0 .564.658h3.265c.468 0 .866-.34.939-.803l.746-4.73a1.01 1.01 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415C50.224 7.353 48.5 6.749 46.211 6.749zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.36.42.469 1.044.332 1.906z"/>
                <path fill="#253B80" d="M66.654 13.075h-3.275a.57.57 0 0 0-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.574.574 0 0 0 .562.66h2.95c.469 0 .865-.34.939-.803l1.77-11.209a.571.571 0 0 0-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317z"/>
                <path fill="#253B80" d="M84.096 13.075h-3.291a.954.954 0 0 0-.787.417l-4.539 6.686-1.924-6.425a.96.96 0 0 0-.912-.678h-3.234a.573.573 0 0 0-.541.754l3.625 10.638-3.408 4.811a.575.575 0 0 0 .465.9h3.287c.312 0 .604-.152.781-.408l9.599-13.838a.574.574 0 0 0-.468-.895z"/>
                <path fill="#179BD7" d="M94.992 6.749h-6.84a1.01 1.01 0 0 0-.938.802l-2.766 17.537a.574.574 0 0 0 .562.658h3.51a.71.71 0 0 0 .656-.562l.785-4.971a1.01 1.01 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415C99.004 7.353 97.281 6.749 94.992 6.749zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.358.42.467 1.044.331 1.906z"/>
                <path fill="#179BD7" d="M115.434 13.075h-3.273a.57.57 0 0 0-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.574.574 0 0 0 .564.66h2.949c.467 0 .865-.34.938-.803l1.771-11.209a.573.573 0 0 0-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.498.589.696 1.411.554 2.317z"/>
                <path fill="#179BD7" d="M119.295 7.23l-2.807 17.858a.574.574 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.574.574 0 0 0-.562-.659h-3.16a.571.571 0 0 0-.562.482z"/>
                <path fill="#253B80" d="M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.339.339 0 0 1 .108-.192.33.33 0 0 1 .206-.076h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298c.443.235.795.504 1.065.812.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1-1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0-.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1-.096.035H7.266z"/>
                <path fill="#179BD7" d="M23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.326c-.661 0-1.218.48-1.321 1.132L6.596 26.83l-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.64 4.64 0 0 0-1.336-1.03z"/>
                <path fill="#222D65" d="M21.754 7.151a13.394 13.394 0 0 0-.584-.15 17.66 17.66 0 0 0-.619-.117 25.282 25.282 0 0 0-2.426-.177h-7.352a.571.571 0 0 0-.507.115.59.59 0 0 0-.152.399L8.05 17.605l-.045.289c.103-.652.66-1.132 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.506 6.506 0 0 0-1.017-.429 7.21 7.21 0 0 0-.277-.087z"/>
                <path fill="#253B80" d="M9.614 7.699a.592.592 0 0 1 .652-.876.57.57 0 0 1 .507-.115h7.352c.871 0 1.684.057 2.426.177.212.034.418.073.619.117.2.045.395.095.584.15.094.028.187.057.278.086.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392C20.378.682 17.853 0 14.622 0h-9.38c-.66 0-1.223.48-1.325 1.133L.01 25.898a.763.763 0 0 0 .795.932h5.791l1.454-9.225L9.614 7.699z"/>
              </svg>
            </div>
            {/* Shop Pay — official logo from Wikimedia Commons */}
            <div className="bg-white rounded-lg border border-border flex items-center justify-center h-9 w-14 p-1">
              <svg viewBox="0 0 683 164" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M454.942 0C441.175 0 430.015 11.16 430.015 24.927V138.295c0 13.767 11.16 24.927 24.927 24.927H658.072c13.767 0 24.927-11.16 24.927-24.927V24.927C682.999 11.16 671.839 0 658.072 0H454.942zm35.081 113.902V85.166h18.077c16.516 0 25.299-9.26 25.299-23.294 0-14.034-8.783-22.435-25.299-22.435H478.376v74.465h11.647zm0-63.391h15.404c10.692 0 15.943 4.392 15.943 11.743s-5.06 11.743-15.466 11.743h-15.881V50.511zm63.91 64.918c8.878 0 14.702-3.914 17.375-10.597.763 7.447 5.25 11.266 14.988 8.688l.095-7.924c-3.914.382-4.677-1.05-4.677-5.155V80.966c0-11.456-7.542-18.234-21.481-18.234-13.747 0-21.671 6.874-21.671 18.52h10.693c0-5.537 3.914-8.878 10.787-8.878 7.256 0 10.597 3.15 10.502 8.592v2.482l-12.315 1.337c-13.843 1.527-21.481 6.778-21.481 15.942 0 7.542 5.347 14.702 17.185 14.702zm2.386-8.592c-6.014 0-8.401-3.246-8.401-6.492 0-4.391 4.964-6.396 14.702-7.542l7.637-.859c-.477 8.401-6.109 14.893-13.938 14.893zm65.435 10.788c-4.869 11.838-12.697 15.37-24.917 15.37h-5.251v-9.737h5.633c6.683 0 9.929-2.101 13.461-8.115l-21.671-50.884h12.029l15.466 37.137 13.747-37.137h11.742l-20.239 53.366z" fill="#5433EB"/>
                <path d="M57.395 71.745C41.447 68.285 34.343 66.931 34.343 60.786c0-5.78 4.808-8.66 14.423-8.66 8.457 0 14.638 3.696 19.189 10.937.343.559 1.051.752 1.631.451l17.943-9.067a1.02 1.02 0 0 0 .515-1.118C80.597 39.772 66.838 32.703 48.723 32.703 24.92 32.703 10.132 44.435 10.132 63.085c0 19.811 18.008 24.818 33.977 28.277 15.969 3.46 23.095 4.813 23.095 10.959 0 6.145-5.194 9.045-15.56 9.045-9.573 0-16.678-4.383-20.97-12.892a1.023 1.023 0 0 0-1.396-.389l-17.9 8.874a1.02 1.02 0 0 0-.558 1.134c7.104 14.288 21.678 22.324 41.145 22.324 24.79 0 39.772-11.538 39.772-30.769 0-19.231-18.094-24.817-34.041-28.277v-.526z" fill="#5433EB"/>
                <path d="M153.551 32.703c-10.174 0-19.167 3.61-25.627 10.034a.572.572 0 0 1-.974-.451V1.268a1.268 1.268 0 0 0-1.266-1.268h-22.451a1.268 1.268 0 0 0-1.266 1.268v127.31c0 .709.557 1.267 1.266 1.267h22.451c.708 0 1.266-.558 1.266-1.267V72.733c0-10.786 8.264-19.059 19.403-19.059 11.14 0 19.21 8.101 19.21 19.059v55.845c0 .709.558 1.267 1.266 1.267h22.451c.709 0 1.267-.558 1.267-1.267V72.733c0-23.464-15.368-40.009-36.896-40.009v-.021z" fill="#5433EB"/>
                <path d="M235.991 29.05c-12.191 0-23.61 3.74-31.809 9.132a.718.718 0 0 0-.408 1.098l9.895 16.91a.72.72 0 0 0 1.738-.549c6.225-3.76 13.351-5.716 20.627-5.673 19.596 0 33.998 13.838 33.998 32.123 0 15.578-11.526 27.116-26.143 27.116-11.912 0-20.175-6.94-20.175-16.738 0-5.608 2.382-10.206 8.585-13.452a.728.728 0 0 0 .494-.762l-9.337-15.814a.728.728 0 0 0-1.524.463c-12.513 4.641-21.291 15.814-21.291 30.812 0 22.69 18.05 39.622 43.227 39.622 29.405 0 50.546-20.391 50.546-49.635 0-31.349-24.597-54.254-58.423-54.254z" fill="#5433EB"/>
                <path d="M360.069 32.531c-11.355 0-21.485 4.19-28.89 11.581a.572.572 0 0 1-.974-.452V34.766c0-.709-.558-1.268-1.267-1.268h-21.871a1.268 1.268 0 0 0-1.266 1.268v127.116c0 .709.558 1.268 1.266 1.268h22.451c.709 0 1.266-.559 1.266-1.268V120.198a.572.572 0 0 1 .974-.473c7.384 6.876 17.15 10.894 28.332 10.894 26.336 0 46.876-21.337 46.876-49.055 0-27.718-20.562-49.055-46.876-49.055l-.021.022zm-4.229 76.558c-14.981 0-26.335-11.925-26.335-27.697 0-15.771 11.332-27.696 26.335-27.696s26.315 11.732 26.315 27.696c0 15.965-11.161 27.697-26.315 27.697z" fill="#5433EB"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ===== POURQUOI NOS MÈCHES ===== */}
      <div className="col-span-1 lg:col-span-2 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
          Pourquoi choisir DeepWaveBraids ?
        </h2>
        <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
          Des mèches conçues pour les femmes exigeantes qui veulent un résultat salon — sans le prix salon.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface rounded-2xl p-6 border border-border text-center">
            <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplets className="text-accent" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Texture deep wave</h3>
            <p className="text-muted text-sm">Des boucles ondulées parfaitement définies pour un rendu naturel et élégant.</p>
          </div>

          <div className="bg-surface rounded-2xl p-6 border border-border text-center">
            <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
              <Wind className="text-accent" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Anti-emmêlement</h3>
            <p className="text-muted text-sm">Fini les mèches qui s&apos;emmêlent après 2 jours. Les cuticules alignées garantissent des boucles définies sans nœuds, même sans bonnet satin.</p>
          </div>

          <div className="bg-surface rounded-2xl p-6 border border-border text-center">
            <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-accent" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Tient 1 à 2 mois</h3>
            <p className="text-muted text-sm">Là où la plupart des mèches lâchent après 2 semaines, les nôtres gardent leur texture et tiennent 1 à 2 mois avec un entretien simple (mousse + chignon le soir).</p>
          </div>

          <div className="bg-surface rounded-2xl p-6 border border-border text-center">
            <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-accent" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Qualité salon, prix malin</h3>
            <p className="text-muted text-sm">Des mèches de qualité professionnelle sans payer le prix salon. Le même résultat que des mèches à 80€, pour deux fois moins cher.</p>
          </div>
        </div>
      </div>

      {/* ===== AVIS CLIENTS ===== */}
      <div className="col-span-1 lg:col-span-2 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ce que nos clientes disent
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-muted">4.9/5 basé sur 47 avis vérifiés</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Monique R.",
              location: "Paris",
              rating: 5,
              date: "Il y a 2 semaines",
              text: "J'avais l'habitude de prendre des Urban Curls qui s'emmêlaient au bout de 2 semaines. Celles-ci ? Ça fait 1 mois et mes boho braids sont toujours impeccables. Je rachète direct.",
            },
            {
              name: "Aïcha K.",
              location: "Lyon",
              rating: 5,
              date: "Il y a 1 mois",
              text: "Ma coiffeuse m'a demandé où j'avais trouvé ces mèches ! La texture est ultra douce et naturelle. J'ai juste mis de la mousse le soir + chignon et ça bouge pas du tout.",
            },
            {
              name: "Fatou D.",
              location: "Genève",
              rating: 5,
              date: "Il y a 3 semaines",
              text: "Enfin des mèches deep wave qui s'emmêlent pas. Avant je galérais avec des mèches à 80€ qui faisaient des nœuds après 3 jours. Celles-ci c'est un autre level et à moitié prix.",
            },
            {
              name: "Sarah M.",
              location: "Bruxelles",
              rating: 4,
              date: "Il y a 2 mois",
              text: "Les ondulations tiennent super bien, même après lavage. J'ai pris Honey Blond en 22 pouces, le rendu est magnifique. Seul bémol : j'aurais aimé encore plus de coloris.",
            },
            {
              name: "Amina B.",
              location: "Marseille",
              rating: 5,
              date: "Il y a 1 semaine",
              text: "Deuxième commande ! La première a duré presque 2 mois en boho braids. Mes copines me demandent toutes le lien. Le Brown Sugar est parfait pour les peaux mates.",
            },
            {
              name: "Diana L.",
              location: "Lausanne",
              rating: 5,
              date: "Il y a 1 mois",
              text: "Pour l'entretien c'est simple : mousse coiffante + bonnet satin la nuit. Résultat : 6 semaines sans emmêlement. Jamais eu ça avec d'autres marques. Le rapport qualité-prix est imbattable.",
            },
          ].map((review, i) => (
            <div key={i} className="bg-surface rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - review.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-border" />
                ))}
              </div>
              <p className="text-foreground text-sm mb-4 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground text-sm font-semibold">{review.name}</p>
                  <p className="text-muted text-xs">{review.location}</p>
                </div>
                <span className="text-muted text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Guide combien de paquets ===== */}
      <div className="col-span-1 lg:col-span-2 mt-16">
        <a href="/guide" className="block bg-gradient-to-r from-accent-soft to-surface rounded-3xl border border-accent/20 p-6 sm:p-8 hover:border-accent/40 transition-all group">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <span className="text-3xl">📦</span>
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-lg font-bold text-foreground">
                Combien de paquets ai-je besoin ?
              </h3>
              <p className="text-muted text-sm mt-1">
                Boho braids, knotless, goddess braids... Découvre la quantité idéale selon ta coiffure et la longueur souhaitée.
              </p>
            </div>
            <span className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-xl group-hover:bg-accent-light transition-colors whitespace-nowrap">
              Voir le guide →
            </span>
          </div>
        </a>
      </div>

      {/* ===== Comparaison ===== */}
      <div className="col-span-1 lg:col-span-2 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
          Pourquoi choisir <span className="text-accent">DeepWaveBraids</span> ?
        </h2>
        <p className="text-muted text-center mb-10 max-w-lg mx-auto text-sm">
          Comparaison honnête avec les mèches classiques du marché
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-muted py-4 px-4 border-b border-border w-1/3">Critère</th>
                <th className="text-center text-sm font-bold text-white py-4 px-4 bg-accent rounded-t-xl w-1/3">DeepWaveBraids</th>
                <th className="text-center text-sm font-medium text-muted py-4 px-4 border-b border-border w-1/3">Mèches classiques</th>
              </tr>
            </thead>
            <tbody>
              {[
                { criteria: "Type de fibre", us: "Fibre premium deep wave", them: "Fibre basique", highlight: true },
                { criteria: "Texture", us: "Boucles définies et durables", them: "Boucles qui se défont vite", highlight: false },
                { criteria: "Emmêlement", us: "Minimal grâce à la qualité", them: "Fréquent dès la 1ère semaine", highlight: true },
                { criteria: "Durée de vie", us: "1-2 mois en braids", them: "2-3 semaines max", highlight: false },
                { criteria: "Odeur chimique", us: "Aucune", them: "Forte odeur fréquente", highlight: true },
                { criteria: "Brillance", us: "Naturelle et durable", them: "Artificielle, disparaît vite", highlight: false },
                { criteria: "Entretien", us: "Mousse + chignon le soir", them: "Produits spéciaux requis", highlight: true },
                { criteria: "Rapport qualité/prix", us: "Premium accessible", them: "Pas cher mais remplacé 3x plus", highlight: false },
              ].map((row) => (
                <tr key={row.criteria} className={row.highlight ? "bg-surface/50" : ""}>
                  <td className="text-sm text-foreground font-medium py-3.5 px-4 border-b border-border">{row.criteria}</td>
                  <td className="text-sm text-center py-3.5 px-4 bg-accent/5 border-b border-accent/10 font-medium text-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="text-green-500">✓</span> {row.us}
                    </span>
                  </td>
                  <td className="text-sm text-center py-3.5 px-4 border-b border-border text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="text-red-400">✗</span> {row.them}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <div className="col-span-1 lg:col-span-2 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
          Questions fréquentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <FAQItem
            question="Combien de paquets faut-il pour des boho braids complètes ?"
            answer="Pour un look complet, nous recommandons 3 à 4 paquets selon la densité souhaitée et la longueur de tes cheveux. Pour un look plus naturel et léger, 2 à 3 paquets suffisent."
          />
          <FAQItem
            question="Comment entretenir mes mèches pour qu'elles durent ?"
            answer="C'est simple : applique de la mousse coiffante chaque soir et fais un chignon bien serré pour dormir. Un bonnet en satin aide aussi. Avec cette routine, tes braids restent définies pendant 1 à 2 mois sans emmêlement."
          />
          <FAQItem
            question="Pourquoi vos mèches s'emmêlent pas comme les autres ?"
            answer="Nos mèches deep wave sont fabriquées avec une fibre premium traitée pour garder les boucles définies longtemps. La qualité de la fibre et le procédé de fabrication réduisent considérablement l'emmêlement par rapport aux mèches classiques bas de gamme."
          />
          <FAQItem
            question="Combien de temps durent les mèches ?"
            answer="En boho braids avec un bon entretien (mousse + chignon le soir), nos mèches tiennent 1 à 2 mois. C'est 2 à 4 fois plus longtemps que la plupart des mèches du marché qui lâchent après 2 semaines."
          />
          <FAQItem
            question="Quelle longueur choisir ?"
            answer="14 pouces pour un look court et chic, 18-20 pouces pour un look classique, et 22-24 pouces pour un effet wow. En cas de doute, le 20 pouces est le choix le plus populaire."
          />
        </div>
      </div>
    </div>
  );
}

// FAQ Accordion Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface transition-colors"
      >
        <span className="text-foreground font-medium pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp size={20} className="text-accent flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-muted flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-muted leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
