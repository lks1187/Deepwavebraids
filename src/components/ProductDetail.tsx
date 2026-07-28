"use client";

import { useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import AddToCartButton from "./AddToCartButton";
import { Star, Droplets, Wind, Shield, Clock, ChevronDown, Check } from "lucide-react";
import type { ShopifyProduct } from "@/lib/shopify";
import { useI18n } from "@/i18n/context";

const PACKS = [
  { id: 1, qty: 1, price: 59.9, original: 0 },
  { id: 3, qty: 3, price: 159.9, original: 179.7 },
  { id: 4, qty: 4, price: 199.9, original: 239.6 },
] as const;

const content = {
  fr: {
    noImage: "Pas d'image",
    description: "Description",
    trust1: "Fibre synthétique premium deep wave — ultra-légère",
    trust2: "Livraison en 6-10 jours en France, Suisse et Belgique",
    trust3: "Paiement sécurisé par carte, Apple Pay ou Shop Pay",
    paymentSecure: "Paiement 100% sécurisé",
    packTitle: "Choisissez votre pack",
    packs: [
      { label: "1 Paquet", sublabel: "Retouche / Braids fines", badge: "" },
      { label: "Pack Full Head", sublabel: "3 Paquets", badge: "Meilleur choix" },
      { label: "Pack Luxury Volume", sublabel: "4 Paquets", badge: "Volume max" },
    ],
    packSave: "Économisez",
    packPerBundle: "/paquet",
    whyTitle: "Pourquoi choisir DeepWaveBraids ?",
    whySubtitle: "De la fibre synthétique nouvelle génération conçue pour les femmes exigeantes — légère, douce et sans emmêlement.",
    feat1Title: "Texture deep wave",
    feat1Text: "Des boucles ondulées parfaitement définies grâce à une fibre traitée à chaud qui imite le cheveu naturel.",
    feat2Title: "Anti-emmêlement",
    feat2Text: "Fini les mèches qui s'emmêlent après 2 jours. Notre fibre premium à mémoire de forme garde ses boucles sans nœuds, même sans bonnet satin.",
    feat3Title: "Ultra-légère",
    feat3Text: "2x plus légère que les mèches synthétiques classiques. Zéro tension sur le cuir chevelu, même avec 4 paquets. Tes braids restent confortables toute la journée.",
    feat4Title: "Qualité salon, prix malin",
    feat4Text: "Le rendu d'une fibre haut de gamme sans payer le prix salon. Le même résultat que des mèches à 80€, pour deux fois moins cher.",
    reviewsTitle: "Ce que nos clientes disent",
    reviewsRating: "4.9/5 basé sur 47 avis vérifiés",
    reviews: [
      { name: "Monique R.", location: "Paris", rating: 5, date: "Il y a 2 semaines", text: "J'avais l'habitude de prendre des mèches qui s'emmêlaient au bout de 2 semaines. Celles-ci ? Ça fait 1 mois et mes boho braids sont toujours impeccables. Et c'est tellement léger sur la tête !" },
      { name: "Aïcha K.", location: "Lyon", rating: 5, date: "Il y a 1 mois", text: "Ma coiffeuse m'a demandé où j'avais trouvé ces mèches ! La texture est ultra douce, on dirait du vrai cheveu. Et le poids… j'oublie que je les porte." },
      { name: "Fatou D.", location: "Genève", rating: 5, date: "Il y a 3 semaines", text: "Enfin des mèches deep wave synthétiques qui s'emmêlent pas. Avant je galérais avec des mèches à 80€ qui faisaient des nœuds après 3 jours. Celles-ci c'est un autre level et à moitié prix." },
      { name: "Sarah M.", location: "Bruxelles", rating: 4, date: "Il y a 2 mois", text: "Les ondulations tiennent super bien même après plusieurs semaines. J'ai pris Honey Blond en 22 pouces, le rendu est magnifique. Seul bémol : j'aurais aimé encore plus de coloris." },
      { name: "Amina B.", location: "Marseille", rating: 5, date: "Il y a 1 semaine", text: "Deuxième commande ! La première a duré presque 2 mois en boho braids. Mes copines me demandent toutes le lien. Le Brown Sugar est parfait pour les peaux mates." },
      { name: "Diana L.", location: "Lausanne", rating: 5, date: "Il y a 1 mois", text: "Pour du synthétique c'est bluffant. La texture est douce, pas de brillance plastique, et 6 semaines sans un seul nœud. Jamais eu ça avec d'autres marques." },
    ],
    bundleTitle: "Combien de paquets ai-je besoin ?",
    bundleSubtitle: "Le guide ultime pour choisir la quantité parfaite selon ta coiffure",
    bundleCols: ["Pack", "Quantité", "Coiffure idéale", "Avantage"],
    bundleRows: [
      { name: "1 Paquet", qty: "1 paquet", style: "Retouches, braids fines, effet boho léger", advantage: "Parfait pour rafraîchir un style existant avec quelques mèches deep wave" },
      { name: "Pack Full Head", qty: "3 paquets", style: "Boho braids complètes, knotless, goddess braids", advantage: "Le sweet spot — couverture complète avec un volume naturel. Notre choix #1" },
      { name: "Pack Luxury Volume", qty: "4 paquets", style: "Volume maximum, braids extra-longues, full crochet", advantage: "Ne manque jamais de mèches en pleine pose. Volume glamour garanti" },
    ],
    compareTitle: "Pourquoi choisir",
    compareTitleAccent: "DeepWaveBraids",
    compareSubtitle: "Comparaison honnête avec les mèches synthétiques classiques du marché",
    compareHeader: "Critère",
    compareUs: "DeepWaveBraids",
    compareThem: "Synthétique classique",
    compareRows: [
      { criteria: "Type de fibre", us: "Fibre premium à mémoire de forme", them: "Fibre basique rigide" },
      { criteria: "Texture", us: "Boucles définies et durables", them: "Boucles qui se défont vite" },
      { criteria: "Poids", us: "Ultra-légère, zéro tension", them: "Lourd, tire sur le cuir chevelu" },
      { criteria: "Emmêlement", us: "Minimal grâce au traitement", them: "Fréquent dès la 1ère semaine" },
      { criteria: "Durée de vie", us: "1-2 mois en braids", them: "2-3 semaines max" },
      { criteria: "Odeur chimique", us: "Aucune", them: "Forte odeur fréquente" },
      { criteria: "Brillance", us: "Naturelle, effet vrai cheveu", them: "Plastique et artificielle" },
      { criteria: "Rapport qualité/prix", us: "Premium accessible", them: "Pas cher mais remplacé 3x plus" },
    ],
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "Combien de paquets pour des boho braids complètes ?", a: "Pour des boho braids complètes avec un volume naturel, nous recommandons le Pack Full Head (3 paquets). C'est le choix de 78% de nos clientes. Si tu veux un résultat ultra-volumineux façon TikTok ou des braids très longues (22\"+), passe au Pack Luxury Volume (4 paquets). Un seul paquet convient uniquement pour des retouches ou ajouter quelques mèches à un style existant." },
      { q: "Qu'est-ce qui rend cette fibre synthétique unique ?", a: "Notre fibre premium est traitée à chaud pour obtenir une texture deep wave à mémoire de forme — les boucles gardent leur définition sans se déformer. Elle est 2x plus légère que le synthétique classique, ce qui élimine la tension sur le cuir chevelu. Résultat : une douceur au toucher bluffante, zéro brillance plastique, et un rendu si naturel que même les coiffeuses s'y trompent." },
      { q: "Comment entretenir et laver mes boucles deep wave ?", a: "L'entretien est ultra simple. Au quotidien : applique une noisette de mousse coiffante le soir et fais un chignon ananas pour dormir. Le matin, défais et secoue doucement — les boucles reprennent leur forme. Pour le lavage : trempe les mèches dans de l'eau tiède avec un peu de shampoing doux, rince sans frotter, et laisse sécher à l'air libre sur un cintre. Évite le sèche-cheveux qui peut abîmer la fibre." },
    ],
  },
  en: {
    noImage: "No image",
    description: "Description",
    trust1: "Premium synthetic deep wave fiber — ultra-lightweight",
    trust2: "Worldwide shipping in 6-10 business days",
    trust3: "Secure checkout — card, Apple Pay or Shop Pay",
    paymentSecure: "100% secure payment",
    packTitle: "Choose your bundle",
    packs: [
      { label: "1 Bundle", sublabel: "Touch-up / Fine Braids", badge: "" },
      { label: "Pack Full Head", sublabel: "3 Bundles", badge: "Best Value" },
      { label: "Pack Luxury Volume", sublabel: "4 Bundles", badge: "Max Volume" },
    ],
    packSave: "Save",
    packPerBundle: "/bundle",
    whyTitle: "Why DeepWaveBraids?",
    whySubtitle: "Next-gen synthetic fiber engineered for women who want salon results — lightweight, soft, and tangle-free.",
    feat1Title: "Deep wave texture",
    feat1Text: "Perfectly defined waves from heat-treated fiber that mimics the look and feel of natural hair.",
    feat2Title: "Tangle-free",
    feat2Text: "No more matting after two days. Our premium memory-shape fiber keeps curls defined and knot-free — even without a satin bonnet.",
    feat3Title: "Ultra-lightweight",
    feat3Text: "2x lighter than standard synthetic hair. Zero scalp tension, even with 4 packs. Your braids stay comfortable all day long.",
    feat4Title: "Salon quality, smart price",
    feat4Text: "High-end fiber results without the high-end price. The same look as $80 packs — for half the cost.",
    reviewsTitle: "What our customers say",
    reviewsRating: "4.9/5 based on 47 verified reviews",
    reviews: [
      { name: "Monique R.", location: "New York", rating: 5, date: "2 weeks ago", text: "I used to buy hair that tangled after 2 weeks. These? It's been a month and my boho braids still look fresh. And they're so lightweight I forget I'm wearing them!" },
      { name: "Aisha K.", location: "Atlanta", rating: 5, date: "1 month ago", text: "My braider asked where I got this hair! The texture is so soft, it looks like real human hair. And the weight — I literally forget they're in." },
      { name: "Fatou D.", location: "London", rating: 5, date: "3 weeks ago", text: "Finally synthetic deep wave hair that doesn't tangle. I used to struggle with $80 packs that knotted up after 3 days. These are a whole other level — and half the price." },
      { name: "Sarah M.", location: "Toronto", rating: 4, date: "2 months ago", text: "The waves hold up beautifully for weeks. I got Honey Blonde in 22\" and the result is gorgeous. Only wish: even more color options." },
      { name: "Amina B.", location: "Houston", rating: 5, date: "1 week ago", text: "Second order! The first lasted nearly 2 months in boho braids. All my friends keep asking for the link. Brown Sugar is perfect for darker skin tones." },
      { name: "Diana L.", location: "Chicago", rating: 5, date: "1 month ago", text: "For synthetic hair, this is mind-blowing. The texture is soft, no plastic shine, and 6 weeks with zero tangling. Never had that with any other brand." },
    ],
    bundleTitle: "How Many Bundles Do I Need?",
    bundleSubtitle: "The ultimate guide to choosing the perfect amount for your dream hairstyle",
    bundleCols: ["Package", "Quantity", "Ideal Style", "Customer Advantage"],
    bundleRows: [
      { name: "1 Bundle", qty: "1 pack", style: "Touch-ups, fine braids, subtle boho accents", advantage: "Perfect for adding a few deep wave curls to refresh an existing style" },
      { name: "Pack Full Head", qty: "3 packs", style: "Full boho braids, knotless braids, goddess braids", advantage: "The sweet spot — full coverage with natural volume. Our #1 seller" },
      { name: "Pack Luxury Volume", qty: "4 packs", style: "Maximum volume, extra-long braids, full crochet styles", advantage: "Never run short mid-install. Glamorous, head-turning volume guaranteed" },
    ],
    compareTitle: "Why choose",
    compareTitleAccent: "DeepWaveBraids",
    compareSubtitle: "An honest side-by-side with standard synthetic hair on the market",
    compareHeader: "Feature",
    compareUs: "DeepWaveBraids",
    compareThem: "Standard synthetic",
    compareRows: [
      { criteria: "Fiber type", us: "Premium memory-shape fiber", them: "Basic rigid fiber" },
      { criteria: "Texture", us: "Defined, long-lasting curls", them: "Curls that fall flat fast" },
      { criteria: "Weight", us: "Ultra-light, zero tension", them: "Heavy, pulls on scalp" },
      { criteria: "Tangling", us: "Minimal thanks to treatment", them: "Constant from week one" },
      { criteria: "Lifespan", us: "1-2 months in braids", them: "2-3 weeks max" },
      { criteria: "Chemical smell", us: "None", them: "Strong odor, common" },
      { criteria: "Shine", us: "Natural, real-hair finish", them: "Plastic and artificial" },
      { criteria: "Value for money", us: "Premium at a fair price", them: "Cheap but replaced 3x more" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "How many bundles do I need for a full head of Boho Braids?", a: "For full boho braids with natural volume, we recommend the Pack Full Head (3 bundles). It's the choice of 78% of our customers. If you want ultra-voluminous TikTok-worthy volume or extra-long braids (22\"+), go with the Pack Luxury Volume (4 bundles). A single bundle is only meant for touch-ups or adding a few curls to an existing style." },
      { q: "What makes this premium synthetic fiber unique?", a: "Our fiber is heat-treated to lock in a deep wave curl pattern with built-in memory — the curls hold their shape without frizzing or flattening. It's 2x lighter than standard synthetic hair, which eliminates scalp tension even with 4 packs installed. The result: a softness that feels shockingly close to human hair, zero plastic shine, and a finish so natural that even braiders can't tell the difference." },
      { q: "How do I maintain and wash these synthetic deep wave curls?", a: "Daily care is dead simple: every evening, apply a small amount of styling mousse and put your curls in a pineapple bun for bed. In the morning, undo and gently shake — the curls spring right back. To wash: soak in lukewarm water with a gentle shampoo, rinse without rubbing, and air dry on a hanger. Avoid blow-drying, which can damage the fiber. A light refresher spray between washes is all you need." },
    ],
  },
} as const;

type Props = {
  product: ShopifyProduct;
};

export default function ProductDetail({ product }: Props) {
  const variants = product.variants.edges.map((e) => e.node);
  const images = product.images.edges.map((e) => e.node);
  const { locale } = useI18n();
  const c = content[locale as keyof typeof content] || content.fr;

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
  const [selectedPackIndex, setSelectedPackIndex] = useState(1);

  const selectedVariant = variants.find((v) =>
    v.selectedOptions.every((opt) => selectedOptions[opt.name] === opt.value)
  );

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionName]: value }));
  };

  const pack = PACKS[selectedPackIndex];
  const packPrice = pack.price.toFixed(2).replace(".", ",") + " €";
  const perBundle = (pack.price / pack.qty).toFixed(2).replace(".", ",") + " €";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      {/* ========== IMAGES ========== */}
      <div className="space-y-4">
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
              {c.noImage}
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImageIndex(i)}
                className={cn(
                  "relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-colors",
                  i === selectedImageIndex ? "border-accent" : "border-border hover:border-accent/40"
                )}
              >
                <Image src={img.url} alt={img.altText || `Image ${i + 1}`} fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ========== PRODUCT INFO ========== */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold text-foreground">{product.title}</h1>
          <div className="flex items-baseline gap-3 mt-3">
            {selectedVariant?.compareAtPrice ? (
              <>
                <span className="text-accent font-bold text-2xl sm:text-3xl">
                  {formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode)}
                </span>
                <span className="text-muted line-through text-lg">
                  {formatPrice(selectedVariant.compareAtPrice.amount, selectedVariant.compareAtPrice.currencyCode)}
                </span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                  {c.packSave} {Math.round((1 - parseFloat(selectedVariant.price.amount) / parseFloat(selectedVariant.compareAtPrice.amount)) * 100)}%
                </span>
              </>
            ) : (
              <>
                <span className="text-accent font-bold text-2xl sm:text-3xl">{packPrice}</span>
                {pack.original > 0 && (
                  <span className="text-muted line-through text-lg">{pack.original.toFixed(2).replace(".", ",")} €</span>
                )}
                {pack.original > 0 && (
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    {c.packSave} {Math.round((1 - pack.price / pack.original) * 100)}%
                  </span>
                )}
              </>
            )}
          </div>
          {pack.qty > 1 && (
            <p className="text-muted text-sm mt-1">{perBundle}{c.packPerBundle}</p>
          )}
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

        {/* ========== 1. PACK SELECTOR ========== */}
        <div>
          <p className="text-foreground text-sm font-medium mb-3">{c.packTitle}</p>
          <div className="space-y-3">
            {PACKS.map((p, i) => {
              const isSelected = selectedPackIndex === i;
              const packContent = c.packs[i];
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPackIndex(i)}
                  className={cn(
                    "w-full text-left rounded-2xl border-2 p-4 transition-all relative overflow-hidden",
                    isSelected
                      ? "border-accent bg-accent/5 shadow-md shadow-accent/10"
                      : "border-border hover:border-accent/30 bg-surface/50"
                  )}
                >
                  {packContent.badge && (
                    <span className={cn(
                      "absolute top-0 right-0 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl",
                      i === 1 ? "bg-accent" : "bg-foreground"
                    )}>
                      {packContent.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors",
                      isSelected ? "border-accent bg-accent" : "border-muted/40"
                    )}>
                      {isSelected && <Check size={12} className="text-white" strokeWidth={3} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={cn("font-semibold", isSelected ? "text-foreground" : "text-foreground/80")}>
                          {packContent.label}
                        </span>
                        <span className="text-muted text-xs">{packContent.sublabel}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      {p.original > 0 && (
                        <span className="text-muted line-through text-xs block">{p.original.toFixed(2).replace(".", ",")} €</span>
                      )}
                      <span className={cn("font-bold", isSelected ? "text-accent" : "text-foreground")}>
                        {p.price.toFixed(2).replace(".", ",")} €
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Add to cart */}
        <div className="pt-2">
          <AddToCartButton
            variantId={selectedVariant?.id || variants[0]?.id}
            availableForSale={selectedVariant?.availableForSale ?? true}
            quantity={pack.qty}
            displayPrice={packPrice}
          />
        </div>

        {/* Description */}
        <div className="border-t border-border pt-6">
          <h3 className="text-foreground font-semibold mb-3">{c.description}</h3>
          <p className="text-muted leading-relaxed whitespace-pre-line">{product.description}</p>
        </div>

        {/* Trust */}
        <div className="bg-surface rounded-2xl p-5 space-y-3 border border-border">
          {[c.trust1, c.trust2, c.trust3].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xs">&#10003;</span>
              <span className="text-muted text-sm">{text}</span>
            </div>
          ))}
        </div>

        {/* Payment badges */}
        <div className="pt-2">
          <p className="text-muted text-xs mb-3">{c.paymentSecure}</p>
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-white rounded-lg border border-border flex items-center justify-center h-9 w-14 p-1">
              <svg viewBox="0 0 120 80" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M86.6666 44.9375L90.3239 35.0625L92.3809 44.9375H86.6666ZM100.952 52.8375L95.8086 27.1625H88.7383C86.3525 27.1625 85.7723 29.0759 85.7723 29.0759L76.1904 52.8375H82.8868L84.2269 49.0244H92.3947L93.1479 52.8375H100.952Z" fill="#1434CB"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M77.1866 33.5711L78.0952 28.244C78.0952 28.244 75.2896 27.1625 72.3648 27.1625C69.2031 27.1625 61.6955 28.5638 61.6955 35.3738C61.6955 41.7825 70.5071 41.8621 70.5071 45.2266C70.5071 48.5912 62.6034 47.9901 59.9955 45.8676L59.0476 51.4362C59.0476 51.4362 61.8919 52.8375 66.2397 52.8375C70.5869 52.8375 77.1467 50.5544 77.1467 44.3455C77.1467 37.8964 68.2552 37.296 68.2552 34.4921C68.2552 31.6882 74.4602 32.0484 77.1866 33.5711Z" fill="#1434CB"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M54.6517 52.8375H47.6191L52.0144 27.1625H59.0477L54.6517 52.8375Z" fill="#1434CB"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M42.3113 27.1625L35.9217 44.8213L35.1663 41.0185L35.167 41.0199L32.9114 29.4749C32.9114 29.4749 32.6394 27.1625 29.7324 27.1625H19.1709L19.0476 27.5966C19.0476 27.5966 22.2782 28.2669 26.057 30.5326L31.8793 52.8375H38.8617L49.5238 27.1625H42.3113Z" fill="#1434CB"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg border border-border flex items-center justify-center h-9 w-14 p-1">
              <svg viewBox="0 0 120 80" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M49.6521 58.595H70.3479V21.4044H49.6521V58.595Z" fill="#FF5F00"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M50.966 40.0003C50.966 32.4552 54.4988 25.7354 59.9999 21.4044C55.977 18.2376 50.9003 16.348 45.3828 16.348C32.3208 16.348 21.7324 26.937 21.7324 40.0003C21.7324 53.063 32.3208 63.652 45.3828 63.652C50.9003 63.652 55.977 61.7624 59.9999 58.5956C54.4988 54.2646 50.966 47.5448 50.966 40.0003Z" fill="#EB001B"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M98.2675 40.0003C98.2675 53.063 87.6791 63.652 74.6171 63.652C69.0996 63.652 64.0229 61.7624 60 58.5956C65.5011 54.2646 69.0339 47.5448 69.0339 40.0003C69.0339 32.4552 65.5011 25.7354 60 21.4044C64.0229 18.2376 69.0996 16.348 74.6171 16.348C87.6791 16.348 98.2675 26.937 98.2675 40.0003Z" fill="#F79E1B"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg border border-border flex items-center justify-center h-9 w-14 p-1">
              <svg viewBox="0 0 120 80" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.5533 22.9046C61.103 22.9046 64.9675 26.7301 64.9675 32.2997C64.9675 37.8892 61.0235 41.7345 55.4142 41.7345H49.2696V51.5062H44.8301V22.9046L55.5533 22.9046ZM49.2695 38.0081H54.3635C58.2288 38.0081 60.4286 35.9271 60.4286 32.3196C60.4286 28.7124 58.2288 26.6509 54.3834 26.6509H49.2695V38.0081Z" fill="black"/>
                <path d="M66.1274 45.5799C66.1274 41.9326 68.9222 39.6929 73.8778 39.4154L79.5858 39.0786V37.4732C79.5858 35.1541 78.0198 33.7666 75.404 33.7666C72.9258 33.7666 71.3797 34.9556 71.0035 36.8191H66.9601C67.1979 33.0528 70.4086 30.278 75.5623 30.278C80.6165 30.278 83.8471 32.9538 83.8471 37.136V51.5062H79.7441V48.0772H79.6454C78.4365 50.3963 75.8001 51.8629 73.065 51.8629C68.9818 51.8629 66.1274 49.3258 66.1274 45.5799ZM79.5858 43.697V42.0518L74.452 42.3688C71.8951 42.5473 70.4484 43.6771 70.4484 45.461C70.4484 47.2842 71.9547 48.4736 74.254 48.4736C77.2468 48.4736 79.5858 46.4122 79.5858 43.697Z" fill="black"/>
                <path d="M87.7206 59.177V55.7082C88.0372 55.7874 88.7506 55.7874 89.1077 55.7874C91.0896 55.7874 92.1601 54.9551 92.8139 52.8145C92.8139 52.7747 93.1908 51.5459 93.1908 51.5261L85.6592 30.6546H90.2967L95.5696 47.6214H95.6484L100.921 30.6546H105.44L97.6303 52.5962C95.8472 57.6508 93.7857 59.276 89.4648 59.276C89.1077 59.276 88.0372 59.2363 87.7206 59.177Z" fill="black"/>
                <path d="M31.7358 25.6955C32.8058 24.3572 33.5319 22.5603 33.3404 20.724C31.7741 20.8019 29.8627 21.7573 28.7562 23.0967C27.7626 24.2436 26.8832 26.1158 27.1124 27.8751C28.8707 28.0276 30.6273 26.9962 31.7358 25.6955Z" fill="black"/>
                <path d="M33.3204 28.2186C30.7671 28.0665 28.5961 29.6678 27.3767 29.6678C26.1567 29.6678 24.2894 28.2952 22.2698 28.3322C19.6412 28.3708 17.2022 29.8571 15.8682 32.2209C13.1246 36.9497 15.1442 43.9642 17.8122 47.8155C19.1079 49.7209 20.6694 51.8189 22.7269 51.7435C24.6709 51.6672 25.4328 50.4847 27.7958 50.4847C30.1571 50.4847 30.8435 51.7435 32.9013 51.7054C35.0353 51.6672 36.3695 49.799 37.6651 47.8918C39.1515 45.7198 39.7599 43.6225 39.7982 43.5073C39.7599 43.4692 35.6832 41.9053 35.6454 37.2158C35.6069 33.2892 38.8461 31.4215 38.9985 31.3057C37.1694 28.6003 34.3113 28.2952 33.3204 28.2186Z" fill="black"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg border border-border flex items-center justify-center h-9 w-14 p-1">
              <svg viewBox="0 0 120 80" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M76.2315 34.67C75.8559 37.1343 73.9727 37.1343 72.1505 37.1343H71.1141L71.8414 32.5332C71.8848 32.2553 72.1248 32.0508 72.4065 32.0508H72.8822C74.1224 32.0508 75.2934 32.0508 75.8975 32.7563C76.2589 33.1785 76.3679 33.8052 76.2315 34.67ZM75.4387 28.2401H68.5683C68.0979 28.2401 67.6984 28.5818 67.6249 29.0456L64.847 46.6499C64.7921 46.9969 65.0613 47.3112 65.4121 47.3112H68.9377C69.2663 47.3112 69.5462 47.0722 69.5976 46.7482L70.386 41.7567C70.4586 41.2929 70.859 40.9512 71.3285 40.9512H73.5023C78.0279 40.9512 80.6402 38.7631 81.3223 34.4248C81.6297 32.5288 81.3347 31.0382 80.4462 29.9945C79.4692 28.8474 77.7374 28.2401 75.4387 28.2401Z" fill="#009CDE"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M27.2281 34.67C26.8525 37.1343 24.9693 37.1343 23.1471 37.1343H22.1107L22.838 32.5332C22.8814 32.2553 23.1214 32.0508 23.4031 32.0508H23.8788C25.119 32.0508 26.29 32.0508 26.8941 32.7563C27.2556 33.1785 27.3645 33.8052 27.2281 34.67ZM26.4353 28.2401H19.5649C19.0945 28.2401 18.695 28.5818 18.6215 29.0456L15.8436 46.6499C15.7887 46.9969 16.0571 47.3112 16.4087 47.3112H19.6898C20.1593 47.3112 20.5588 46.9695 20.6323 46.5065L21.3826 41.7567C21.4552 41.2929 21.8556 40.9512 22.3251 40.9512H24.4989C29.0245 40.9512 31.6368 38.7631 32.3189 34.4248C32.6263 32.5288 32.3313 31.0382 31.4428 29.9945C30.4658 28.8474 28.734 28.2401 26.4353 28.2401Z" fill="#003087"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M42.3858 40.9899C42.0678 42.8683 40.5761 44.1296 38.6724 44.1296C37.7184 44.1296 36.954 43.8225 36.4632 43.2418C35.9769 42.6665 35.7935 41.8459 35.9477 40.9333C36.2435 39.0709 37.7601 37.7697 39.6344 37.7697C40.569 37.7697 41.3272 38.0795 41.8277 38.6655C42.3317 39.2559 42.5302 40.0809 42.3858 40.9899ZM46.9708 34.591H43.6808C43.3992 34.591 43.1591 34.7955 43.1148 35.0743L42.9704 35.9931L42.741 35.6603C42.0279 34.6273 40.4396 34.2812 38.854 34.2812C35.2195 34.2812 32.1147 37.0341 31.5106 40.8943C31.1961 42.8205 31.6426 44.6607 32.7357 45.9451C33.7393 47.1251 35.1717 47.6163 36.8787 47.6163C39.8089 47.6163 41.4335 45.7362 41.4335 45.7362L41.2865 46.6497C41.2316 46.9967 41.5 47.311 41.8525 47.311H44.8147C45.2851 47.311 45.6846 46.9702 45.7581 46.5063L47.5368 35.2523C47.5917 34.9053 47.3224 34.591 46.9708 34.591Z" fill="#003087"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M91.3887 40.9899C91.0707 42.8683 89.579 44.1296 87.6754 44.1296C86.7213 44.1296 85.9569 43.8225 85.4661 43.2418C84.9789 42.6665 84.7965 41.8459 84.9506 40.9333C85.2465 39.0709 86.763 37.7697 88.6374 37.7697C89.5719 37.7697 90.3302 38.0795 90.8306 38.6655C91.3347 39.2559 91.5331 40.0809 91.3887 40.9899ZM95.9737 34.591H92.6838C92.4021 34.591 92.162 34.7955 92.1177 35.0743L91.9734 35.9931L91.743 35.6603C91.0308 34.6273 89.4426 34.2812 87.857 34.2812C84.2225 34.2812 81.1177 37.0341 80.5135 40.8943C80.1991 42.8205 80.6455 44.6607 81.7386 45.9451C82.7423 47.1251 84.1746 47.6163 85.8816 47.6163C88.8119 47.6163 90.4365 45.7362 90.4365 45.7362L90.2894 46.6497C90.2345 46.9967 90.5029 47.311 90.8555 47.311H93.8176C94.288 47.311 94.6875 46.9702 94.761 46.5063L96.5397 35.2523C96.5947 34.9053 96.3254 34.591 95.9737 34.591Z" fill="#009CDE"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M64.4927 34.5911H61.186C60.8697 34.5911 60.5739 34.7478 60.3967 35.0098L55.8347 41.7229L53.9019 35.2718C53.7805 34.8682 53.4085 34.5911 52.9868 34.5911H49.7368C49.3444 34.5911 49.068 34.977 49.1947 35.3479L52.8354 46.0284L49.4108 50.857C49.1424 51.2359 49.4135 51.7599 49.8785 51.7599H53.1817C53.4944 51.7599 53.7876 51.6068 53.9665 51.3501L64.9631 35.4896C65.2262 35.1098 64.9551 34.5911 64.4927 34.5911Z" fill="#003087"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M99.8516 28.7239L97.0321 46.6504C96.9771 46.9973 97.2455 47.3116 97.5972 47.3116H100.434C100.903 47.3116 101.303 46.9699 101.376 46.5061L104.157 28.9018C104.212 28.5548 103.943 28.2406 103.591 28.2406H100.418C100.135 28.2406 99.895 28.445 99.8516 28.7239Z" fill="#009CDE"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg border border-border flex items-center justify-center h-9 w-14 p-1">
              <svg viewBox="0 0 683 164" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M454.942 0C441.175 0 430.015 11.1602 430.015 24.927V138.295C430.015 152.062 441.175 163.222 454.942 163.222H658.072C671.839 163.222 682.999 152.062 682.999 138.295V24.927C682.999 11.1602 671.839 0 658.072 0H454.942ZM490.023 113.902V85.1661H508.1C524.616 85.1661 533.399 75.9057 533.399 61.872C533.399 47.8383 524.616 39.4371 508.1 39.4371H478.376V113.902H490.023ZM490.023 50.5114H505.427C516.119 50.5114 521.37 54.9029 521.37 62.2539C521.37 69.6049 516.31 73.9964 505.904 73.9964H490.023V50.5114ZM553.933 115.429C562.811 115.429 568.635 111.515 571.308 104.832C572.071 112.279 576.558 116.098 586.296 113.52L586.391 105.596C582.477 105.978 581.714 104.546 581.714 100.441V80.9655C581.714 69.5094 574.172 62.7312 560.233 62.7312C546.486 62.7312 538.562 69.6049 538.562 81.2519H549.255C549.255 75.7148 553.169 72.3734 560.042 72.3734C567.298 72.3734 570.639 75.5239 570.544 80.9655V83.4477L558.229 84.7842C544.386 86.3117 536.748 91.5624 536.748 100.727C536.748 108.269 542.095 115.429 553.933 115.429ZM556.319 106.837C550.305 106.837 547.918 103.591 547.918 100.345C547.918 95.9539 552.882 93.9491 562.62 92.8035L570.257 91.9443C569.78 100.345 564.148 106.837 556.319 106.837ZM621.754 117.625C616.885 129.463 609.057 132.995 596.837 132.995H591.586V123.258H597.219C603.902 123.258 607.148 121.157 610.68 115.143L589.009 64.2587H601.038L616.504 101.396L630.251 64.2587H641.993L621.754 117.625Z" fill="#5433EB"/>
                <path d="M57.3945 71.7445C41.4471 68.2852 34.3427 66.9315 34.3427 60.7862C34.3427 55.0063 39.1506 52.127 48.7662 52.127C57.2228 52.127 63.4043 55.8228 67.9545 63.0638C68.2979 63.6225 69.0062 63.8159 69.5857 63.5151L87.5292 54.4476C88.1731 54.1253 88.4092 53.3088 88.0443 52.6857C80.5965 39.7721 66.8384 32.7029 48.7233 32.7029C24.9203 32.7029 10.132 44.4347 10.132 63.0853C10.132 82.8962 28.1398 87.9027 44.1086 91.3621C60.0774 94.8215 67.2033 96.1751 67.2033 102.32C67.2033 108.466 62.0091 111.366 51.6423 111.366C42.0696 111.366 34.9652 106.983 30.6725 98.4742C30.3505 97.8511 29.5993 97.5933 28.9769 97.9156L11.0764 106.79C10.4539 107.112 10.1964 107.864 10.5183 108.509C17.6227 122.797 32.1964 130.833 51.6637 130.833C76.454 130.833 91.4355 119.295 91.4355 100.064C91.4355 80.8335 73.3418 75.2469 57.3945 71.7875V71.7445Z" fill="#5433EB"/>
                <path d="M153.551 32.7032C143.377 32.7032 134.384 36.3129 127.924 42.7375C127.516 43.1243 126.85 42.845 126.85 42.2863V1.26785C126.85 0.558781 126.292 0.00012207 125.584 0.00012207H103.133C102.425 0.00012207 101.867 0.558781 101.867 1.26785V128.578C101.867 129.287 102.425 129.845 103.133 129.845H125.584C126.292 129.845 126.85 129.287 126.85 128.578V72.7332C126.85 61.9468 135.114 53.6743 146.253 53.6743C157.393 53.6743 165.463 61.7749 165.463 72.7332V128.578C165.463 129.287 166.021 129.845 166.729 129.845H189.18C189.889 129.845 190.447 129.287 190.447 128.578V72.7332C190.447 49.2695 175.079 32.7246 153.551 32.7246V32.7032Z" fill="#5433EB"/>
                <path d="M235.991 29.0505C223.8 29.0505 212.381 32.7893 204.182 38.1825C203.624 38.5477 203.431 39.2998 203.774 39.8799L213.669 56.7901C214.034 57.3917 214.806 57.6066 215.407 57.2413C221.632 53.4811 228.758 51.5258 236.034 51.5688C255.63 51.5688 270.032 65.4063 270.032 83.6917C270.032 99.2697 258.506 110.808 243.889 110.808C231.977 110.808 223.714 103.868 223.714 94.0698C223.714 88.4618 226.096 83.8636 232.299 80.619C232.943 80.2753 233.179 79.4802 232.793 78.8571L223.456 63.0428C223.156 62.5271 222.512 62.2907 221.932 62.5056C209.419 67.1468 200.641 78.3199 200.641 93.3178C200.641 116.008 218.691 132.94 243.868 132.94C273.273 132.94 294.414 112.549 294.414 83.3049C294.414 51.9556 269.817 29.0505 235.991 29.0505Z" fill="#5433EB"/>
                <path d="M360.069 32.5311C348.714 32.5311 338.584 36.7211 331.179 44.1126C330.771 44.5208 330.106 44.22 330.106 43.6613V34.7658C330.106 34.0567 329.548 33.498 328.839 33.498H306.968C306.26 33.498 305.702 34.0567 305.702 34.7658V161.882C305.702 162.591 306.26 163.15 306.968 163.15H329.419C330.127 163.15 330.685 162.591 330.685 161.882V120.198C330.685 119.639 331.351 119.36 331.758 119.725C339.142 126.601 348.908 130.619 360.09 130.619C386.426 130.619 406.966 109.282 406.966 81.5642C406.966 53.8461 386.404 32.5096 360.09 32.5096L360.069 32.5311ZM355.84 109.089C340.859 109.089 329.505 97.1637 329.505 81.3923C329.505 65.6209 340.837 53.6957 355.84 53.6957C370.843 53.6957 382.155 65.4275 382.155 81.3923C382.155 97.357 370.994 109.089 355.819 109.089H355.84Z" fill="#5433EB"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ========== WHY DEEPWAVEBRAIDS ========== */}
      <div className="col-span-1 lg:col-span-2 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">{c.whyTitle}</h2>
        <p className="text-muted text-center mb-12 max-w-2xl mx-auto">{c.whySubtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Droplets, title: c.feat1Title, text: c.feat1Text },
            { icon: Wind, title: c.feat2Title, text: c.feat2Text },
            { icon: Shield, title: c.feat3Title, text: c.feat3Text },
            { icon: Clock, title: c.feat4Title, text: c.feat4Text },
          ].map((feat) => (
            <div key={feat.title} className="bg-surface rounded-2xl p-6 border border-border text-center">
              <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <feat.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feat.title}</h3>
              <p className="text-muted text-sm">{feat.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== REVIEWS ========== */}
      <div className="col-span-1 lg:col-span-2 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{c.reviewsTitle}</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-muted">{c.reviewsRating}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.reviews.map((review, i) => (
            <div key={i} className="bg-surface rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - review.rating)].map((_, j) => (
                  <Star key={`e${j}`} size={14} className="text-border" />
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

      {/* ========== 2. BUNDLE COMPARISON TABLE ========== */}
      <div className="col-span-1 lg:col-span-2 mt-16">
        <div className="text-center mb-10">
          <span className="inline-block bg-accent-soft text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            {locale === "en" ? "Buying Guide" : "Guide d'achat"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{c.bundleTitle}</h2>
          <p className="text-muted max-w-2xl mx-auto text-sm">{c.bundleSubtitle}</p>
        </div>

        {/* Mobile: cards */}
        <div className="md:hidden space-y-4">
          {c.bundleRows.map((row, i) => (
            <div
              key={i}
              className={cn(
                "rounded-2xl border p-5",
                i === 1 ? "border-accent bg-accent/5 shadow-md shadow-accent/10" : "border-border bg-surface"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-foreground">{row.name}</span>
                <span className="text-muted text-sm">{row.qty}</span>
              </div>
              <p className="text-foreground text-sm mb-2">{row.style}</p>
              <p className="text-accent text-sm font-medium">{row.advantage}</p>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {c.bundleCols.map((col, i) => (
                  <th key={i} className="text-left text-sm font-medium text-muted py-4 px-5 border-b border-border">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.bundleRows.map((row, i) => (
                <tr key={i} className={cn(i === 1 ? "bg-accent/5" : i % 2 === 0 ? "bg-surface/50" : "")}>
                  <td className="py-4 px-5 border-b border-border">
                    <span className="font-semibold text-foreground">{row.name}</span>
                    {i === 1 && (
                      <span className="ml-2 bg-accent text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                        #1
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-5 border-b border-border text-sm text-muted">{row.qty}</td>
                  <td className="py-4 px-5 border-b border-border text-sm text-foreground">{row.style}</td>
                  <td className="py-4 px-5 border-b border-border text-sm text-accent font-medium">{row.advantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== DWB vs STANDARD COMPARISON ========== */}
      <div className="col-span-1 lg:col-span-2 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
          {c.compareTitle} <span className="text-accent">{c.compareTitleAccent}</span> ?
        </h2>
        <p className="text-muted text-center mb-10 max-w-lg mx-auto text-sm">{c.compareSubtitle}</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-muted py-4 px-4 border-b border-border w-1/3">{c.compareHeader}</th>
                <th className="text-center text-sm font-bold text-white py-4 px-4 bg-accent rounded-t-xl w-1/3">{c.compareUs}</th>
                <th className="text-center text-sm font-medium text-muted py-4 px-4 border-b border-border w-1/3">{c.compareThem}</th>
              </tr>
            </thead>
            <tbody>
              {c.compareRows.map((row, i) => (
                <tr key={row.criteria} className={i % 2 === 0 ? "bg-surface/50" : ""}>
                  <td className="text-sm text-foreground font-medium py-3.5 px-4 border-b border-border">{row.criteria}</td>
                  <td className="text-sm text-center py-3.5 px-4 bg-accent/5 border-b border-accent/10 font-medium text-foreground">
                    <span className="inline-flex items-center gap-1.5"><span className="text-green-500">&#10003;</span> {row.us}</span>
                  </td>
                  <td className="text-sm text-center py-3.5 px-4 border-b border-border text-muted">
                    <span className="inline-flex items-center gap-1.5"><span className="text-red-400">&#10007;</span> {row.them}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== 3. FAQ ACCORDION ========== */}
      <div className="col-span-1 lg:col-span-2 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">{c.faqTitle}</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {c.faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface transition-colors"
      >
        <span className="text-foreground font-medium pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={cn(
            "flex-shrink-0 transition-transform duration-300",
            isOpen ? "rotate-180 text-accent" : "text-muted"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-muted leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
