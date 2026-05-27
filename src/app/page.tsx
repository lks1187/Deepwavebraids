import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Shield, Star, Sparkles } from "lucide-react";
import { getAllProducts, type ShopifyProduct } from "@/lib/shopify";
import { MODEL_IMAGES } from "@/lib/images";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  let products: ShopifyProduct[] = [];
  try {
    products = await getAllProducts();
  } catch {
    // API not configured yet
  }

  return (
    <div>
      {/* Hero Section — Full photo background */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <Image
          src={MODEL_IMAGES[0].url}
          alt={MODEL_IMAGES[0].alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles size={14} className="text-white" />
              <span className="text-white/90 text-xs font-medium tracking-wide">
                100% Cheveux Vierges
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Des tresses qui font
              <span className="block text-accent-light mt-2">tourner les têtes</span>
            </h1>

            <p className="text-white/80 text-lg mt-6 max-w-lg leading-relaxed">
              Mèches deep wave premium pour des boho braids, knotless braids et
              coiffures protectrices d&apos;exception. Qualité salon, prix accessible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/products"
                className="bg-accent hover:bg-accent-light text-white font-semibold py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Voir la collection
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="border border-white/30 hover:border-white/60 text-white font-medium py-4 px-8 rounded-2xl transition-all flex items-center justify-center text-sm backdrop-blur-sm hover:-translate-y-0.5"
              >
                Notre histoire
              </Link>
            </div>

            <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-white/60 text-xs mt-1">Virgin Hair</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5</p>
                <p className="text-white/60 text-xs mt-1">Coloris</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">14-24&quot;</p>
                <p className="text-white/60 text-xs mt-1">Longueurs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-border bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-accent-soft rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-foreground text-sm font-medium">Livraison rapide</p>
                <p className="text-muted text-xs">FR, CH, BE</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-accent-soft rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-foreground text-sm font-medium">Paiement sécurisé</p>
                <p className="text-muted text-xs">SSL crypté</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-accent-soft rounded-xl flex items-center justify-center flex-shrink-0">
                <Star size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-foreground text-sm font-medium">Qualité premium</p>
                <p className="text-muted text-xs">100% virgin hair</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-accent-soft rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-foreground text-sm font-medium">Satisfaction</p>
                <p className="text-muted text-xs">Garantie qualité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook — Model gallery */}
      <section className="py-16 sm:py-24 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Le <span className="text-accent">Lookbook</span>
            </h2>
            <p className="text-muted mt-4 max-w-md mx-auto">
              Nos clientes portent DeepWaveBraids au quotidien
            </p>
          </div>

          {/* Masonry-style grid with model photos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {MODEL_IMAGES.slice(0, 8).map((img, i) => (
              <Link
                href="/products"
                key={i}
                className={`group relative rounded-2xl overflow-hidden ${
                  i === 0 || i === 5 ? "row-span-2" : ""
                }`}
              >
                <div className={`relative w-full ${
                  i === 0 || i === 5 ? "aspect-[3/5]" : "aspect-[3/4]"
                }`}>
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300 flex items-end">
                    <div className="p-4 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white text-sm font-medium bg-accent/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        Voir le produit
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Nos <span className="text-accent">Best-Sellers</span>
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto">
            Des mèches deep wave sélectionnées pour leur qualité exceptionnelle
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-surface rounded-2xl border border-border">
            <Sparkles size={48} className="text-accent/20 mx-auto mb-4" />
            <p className="text-muted text-lg">
              Connecte l&apos;API Shopify pour afficher tes produits ici
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-medium"
          >
            Voir tous les produits
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Color options — swatches */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              5 coloris <span className="text-accent">tendance</span>
            </h2>
            <p className="text-muted mt-4 max-w-md mx-auto">
              Du noir intense au cuivré, trouve la nuance parfaite pour ton style
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {[
              { name: "Jet Black", color: "#1a1a1a", border: "#333" },
              { name: "Honey Blond", color: "#c8a45c", border: "#b8944c" },
              { name: "Brown Sugar", color: "#8B6142", border: "#7a5438" },
              { name: "Silver Ice", color: "#b8b8c8", border: "#a0a0b0" },
              { name: "Copper Spice", color: "#b87333", border: "#a06328" },
            ].map((colorOption) => (
              <Link
                href="/products"
                key={colorOption.name}
                className="group flex flex-col items-center gap-3"
              >
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 border-4 border-white outline outline-2"
                  style={{
                    backgroundColor: colorOption.color,
                    outlineColor: colorOption.border,
                  }}
                />
                <p className="text-foreground text-sm font-medium group-hover:text-accent transition-colors">
                  {colorOption.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial-style section with model photo */}
      <section className="bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Model photo */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={MODEL_IMAGES[1].url}
                alt="Cliente DeepWaveBraids"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-accent-soft border border-accent/20 rounded-full px-4 py-1.5 mb-6">
                <Star size={14} className="text-accent fill-accent" />
                <span className="text-accent text-xs font-medium">Avis clientes</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Elles ont adopté <span className="text-accent">DeepWaveBraids</span>
              </h2>

              {/* Reviews */}
              <div className="space-y-6 mt-8">
                <div className="bg-surface rounded-2xl p-6 border border-border">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">
                    &ldquo;La qualité est incroyable, ça se fond parfaitement avec mes cheveux naturels. Aucune odeur, aucune perte excessive. Je recommande à 100% !&rdquo;
                  </p>
                  <p className="text-muted text-xs mt-3 font-medium">— Monique R. • Brown Sugar Mix 22&quot;</p>
                </div>

                <div className="bg-surface rounded-2xl p-6 border border-border">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">
                    &ldquo;Mes boho braids n&apos;ont jamais été aussi belles. Les mèches sont douces, légères et brillantes. Je rachète direct !&rdquo;
                  </p>
                  <p className="text-muted text-xs mt-3 font-medium">— Aïcha K. • Jet Black 20&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-soft to-surface" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Prête pour ta nouvelle <span className="text-accent">coiffure</span> ?
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto">
            Commande maintenant et reçois tes mèches en quelques jours
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold py-4 px-8 rounded-2xl transition-all mt-8 text-sm shadow-lg shadow-accent/25 hover:-translate-y-0.5"
          >
            Commander maintenant
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
