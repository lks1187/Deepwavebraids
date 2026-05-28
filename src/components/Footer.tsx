import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="DeepWaveBraids"
              width={180}
              height={50}
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted text-sm leading-relaxed">
              Mèches et extensions premium pour des coiffures qui font tourner les têtes.
              Qualité 100% cheveux vierges.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted hover:text-accent transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted hover:text-accent transition-colors text-sm">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-accent transition-colors text-sm">
                  À propos
                </Link>
              </li>
            </ul>

            <h4 className="text-foreground font-semibold mb-4 mt-6 text-sm">
              Informations légales
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="text-muted hover:text-accent transition-colors text-sm">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-muted hover:text-accent transition-colors text-sm">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-muted hover:text-accent transition-colors text-sm">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm">
              Contact
            </h4>
            <ul className="space-y-2 text-muted text-sm">
              <li>Genève, Suisse</li>
              <li>
                <a href="mailto:contact@deepwavebraids.shop" className="hover:text-accent transition-colors">
                  contact@deepwavebraids.shop
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://tiktok.com/@deepwavebraids"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors text-sm"
              >
                TikTok
              </a>
              <a
                href="https://instagram.com/deepwavebraids"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted/50 text-xs">
            &copy; {new Date().getFullYear()} DeepWaveBraids. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
