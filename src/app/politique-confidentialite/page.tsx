import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | DeepWaveBraids",
  description: "Politique de confidentialité du site DeepWaveBraids.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Politique de Confidentialité
        </h1>

        <div className="space-y-8 text-muted text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données personnelles collectées
              sur <strong>www.deepwavebraids.shop</strong> est Randy Iyeti,
              entrepreneur individuel basé à Genève, Suisse.
            </p>
            <p className="mt-2">
              Contact :{" "}
              <a href="mailto:contact@deepwavebraids.shop" className="text-accent hover:underline">
                contact@deepwavebraids.shop
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              2. Données collectées
            </h2>
            <p>Nous collectons les données suivantes :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Lors d&apos;une commande :</strong> nom, prénom, adresse
                email, adresse de livraison, numéro de téléphone.
              </li>
              <li>
                <strong>Lors de la navigation :</strong> données de connexion
                (adresse IP, type de navigateur) via des cookies techniques.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              3. Finalités du traitement
            </h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Traiter et expédier vos commandes</li>
              <li>Vous contacter concernant votre commande</li>
              <li>Améliorer notre site et nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              4. Base légale
            </h2>
            <p>
              Le traitement de vos données repose sur l&apos;exécution du
              contrat de vente (votre commande) et sur notre intérêt légitime
              à améliorer nos services. Nous ne collectons aucune donnée sans
              base légale valide.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              5. Partage des données
            </h2>
            <p>
              Vos données peuvent être partagées avec les prestataires suivants,
              strictement nécessaires à l&apos;exécution de nos services :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Shopify</strong> — Plateforme e-commerce et paiement</li>
              <li><strong>Transporteurs</strong> — Pour la livraison de vos commandes</li>
              <li><strong>Vercel</strong> — Hébergement du site web</li>
            </ul>
            <p className="mt-2">
              Nous ne vendons, ne louons et ne partageons jamais vos données
              personnelles à des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              6. Durée de conservation
            </h2>
            <p>
              Vos données personnelles sont conservées pendant la durée
              nécessaire à la gestion de votre commande et pendant une durée
              maximale de <strong>3 ans</strong> après votre dernier achat,
              conformément aux obligations légales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              7. Vos droits
            </h2>
            <p>
              Conformément au RGPD et à la loi suisse sur la protection des
              données (LPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger vos données</li>
              <li><strong>Droit de suppression :</strong> demander l&apos;effacement de vos données</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@deepwavebraids.shop" className="text-accent hover:underline">
                contact@deepwavebraids.shop
              </a>
              . Nous répondrons dans un délai de 30 jours.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              8. Cookies
            </h2>
            <p>
              Notre site utilise uniquement des <strong>cookies techniques</strong>{" "}
              nécessaires au bon fonctionnement du site (panier, session). Ces
              cookies ne collectent aucune donnée personnelle à des fins
              publicitaires.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              9. Sécurité
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données personnelles contre tout
              accès non autorisé, perte ou altération. Les paiements sont
              sécurisés via Shopify Payments (certifié PCI DSS).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              10. Modifications
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Toute modification sera publiée
              sur cette page avec la date de mise à jour.
            </p>
          </section>

          <p className="text-xs text-muted/60 pt-4 border-t border-border">
            Dernière mise à jour : Mai 2026
          </p>
        </div>
      </div>
    </div>
  );
}
