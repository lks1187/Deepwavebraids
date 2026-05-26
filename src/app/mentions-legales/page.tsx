import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | DeepWaveBraids",
  description: "Mentions légales du site DeepWaveBraids.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Mentions Légales
        </h1>

        <div className="space-y-8 text-muted text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              1. Éditeur du site
            </h2>
            <p>
              Le site <strong>www.deepwavebraids.shop</strong> est édité par :
            </p>
            <ul className="mt-2 space-y-1">
              <li><strong>Nom :</strong> Randy Iyeti</li>
              <li><strong>Statut :</strong> Entrepreneur individuel</li>
              <li><strong>Siège :</strong> Genève, Suisse</li>
              <li>
                <strong>Email :</strong>{" "}
                <a href="mailto:contact@deepwavebraids.shop" className="text-accent hover:underline">
                  contact@deepwavebraids.shop
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              2. Hébergement
            </h2>
            <ul className="space-y-1">
              <li><strong>Hébergeur :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
              <li><strong>Site :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">vercel.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu du site (textes, images, logos, vidéos,
              graphismes) est protégé par le droit d&apos;auteur. Toute
              reproduction, représentation ou diffusion, en tout ou partie, du
              contenu de ce site sans autorisation expresse est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              4. Données personnelles
            </h2>
            <p>
              Les informations collectées via ce site sont traitées conformément
              à notre{" "}
              <a href="/politique-confidentialite" className="text-accent hover:underline">
                Politique de Confidentialité
              </a>
              . Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
              de rectification et de suppression de vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              5. Cookies
            </h2>
            <p>
              Ce site utilise des cookies techniques nécessaires à son bon
              fonctionnement. Pour plus d&apos;informations, consultez notre{" "}
              <a href="/politique-confidentialite" className="text-accent hover:underline">
                Politique de Confidentialité
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              6. Limitation de responsabilité
            </h2>
            <p>
              DeepWaveBraids s&apos;efforce de fournir des informations exactes et
              à jour. Toutefois, nous ne pouvons garantir l&apos;exactitude,
              l&apos;exhaustivité ou l&apos;actualité des informations diffusées
              sur ce site. DeepWaveBraids décline toute responsabilité pour tout
              dommage résultant de l&apos;utilisation du site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              7. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit suisse.
              Tout litige sera soumis à la compétence exclusive des tribunaux
              de Genève, Suisse.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
