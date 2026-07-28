import type { Locale } from "@/i18n/config";

const content = {
  fr: {
    title: "Politique de Confidentialité",
    s1: { title: "1. Responsable du traitement", text: "Le responsable du traitement des données personnelles collectées sur www.deepwavebraids.shop est Randy Iyeti, entrepreneur individuel basé à Genève, Suisse." },
    s2: {
      title: "2. Données collectées",
      intro: "Nous collectons les données suivantes :",
      items: [
        "Lors d'une commande : nom, prénom, adresse email, adresse de livraison, numéro de téléphone.",
        "Lors de la navigation : données de connexion (adresse IP, type de navigateur) via des cookies techniques.",
      ],
    },
    s3: {
      title: "3. Finalités du traitement",
      intro: "Vos données sont utilisées pour :",
      items: ["Traiter et expédier vos commandes", "Vous contacter concernant votre commande", "Améliorer notre site et nos services", "Respecter nos obligations légales"],
    },
    s4: { title: "4. Base légale", text: "Le traitement de vos données repose sur l'exécution du contrat de vente (votre commande) et sur notre intérêt légitime à améliorer nos services. Nous ne collectons aucune donnée sans base légale valide." },
    s5: {
      title: "5. Partage des données",
      intro: "Vos données peuvent être partagées avec les prestataires suivants, strictement nécessaires à l'exécution de nos services :",
      items: ["Shopify — Plateforme e-commerce et paiement", "Transporteurs — Pour la livraison de vos commandes", "Vercel — Hébergement du site web"],
      footer: "Nous ne vendons, ne louons et ne partageons jamais vos données personnelles à des tiers à des fins commerciales.",
    },
    s6: { title: "6. Durée de conservation", text: "Vos données personnelles sont conservées pendant la durée nécessaire à la gestion de votre commande et pendant une durée maximale de 3 ans après votre dernier achat, conformément aux obligations légales." },
    s7: {
      title: "7. Vos droits",
      intro: "Conformément au RGPD et à la loi suisse sur la protection des données (LPD), vous disposez des droits suivants :",
      items: [
        "Droit d'accès : obtenir une copie de vos données",
        "Droit de rectification : corriger vos données",
        "Droit de suppression : demander l'effacement de vos données",
        "Droit d'opposition : vous opposer au traitement",
        "Droit à la portabilité : recevoir vos données dans un format structuré",
      ],
      footer: "Pour exercer ces droits, contactez-nous à contact@deepwavebraids.shop. Nous répondrons dans un délai de 30 jours.",
    },
    s8: { title: "8. Cookies", text: "Notre site utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site (panier, session). Ces cookies ne collectent aucune donnée personnelle à des fins publicitaires." },
    s9: { title: "9. Sécurité", text: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte ou altération. Les paiements sont sécurisés via Shopify Payments (certifié PCI DSS)." },
    s10: { title: "10. Modifications", text: "Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour." },
    lastUpdate: "Dernière mise à jour : Mai 2026",
  },
  en: {
    title: "Privacy Policy",
    s1: { title: "1. Data controller", text: "The data controller for personal data collected on www.deepwavebraids.shop is Randy Iyeti, sole proprietor based in Geneva, Switzerland." },
    s2: {
      title: "2. Data collected",
      intro: "We collect the following data:",
      items: [
        "When placing an order: name, email address, shipping address, phone number.",
        "When browsing: connection data (IP address, browser type) via technical cookies.",
      ],
    },
    s3: {
      title: "3. Purpose of processing",
      intro: "Your data is used to:",
      items: ["Process and ship your orders", "Contact you regarding your order", "Improve our site and services", "Comply with our legal obligations"],
    },
    s4: { title: "4. Legal basis", text: "The processing of your data is based on the execution of the sales contract (your order) and our legitimate interest in improving our services. We do not collect any data without a valid legal basis." },
    s5: {
      title: "5. Data sharing",
      intro: "Your data may be shared with the following service providers, strictly necessary for the execution of our services:",
      items: ["Shopify — E-commerce platform and payment", "Carriers — For delivery of your orders", "Vercel — Website hosting"],
      footer: "We never sell, rent or share your personal data with third parties for commercial purposes.",
    },
    s6: { title: "6. Data retention", text: "Your personal data is retained for the duration necessary to manage your order and for a maximum of 3 years after your last purchase, in accordance with legal obligations." },
    s7: {
      title: "7. Your rights",
      intro: "In accordance with GDPR and Swiss data protection law (FADP), you have the following rights:",
      items: [
        "Right of access: obtain a copy of your data",
        "Right to rectification: correct your data",
        "Right to erasure: request deletion of your data",
        "Right to object: object to processing",
        "Right to data portability: receive your data in a structured format",
      ],
      footer: "To exercise these rights, contact us at contact@deepwavebraids.shop. We will respond within 30 days.",
    },
    s8: { title: "8. Cookies", text: "Our site only uses technical cookies necessary for the proper functioning of the site (cart, session). These cookies do not collect any personal data for advertising purposes." },
    s9: { title: "9. Security", text: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss or alteration. Payments are secured via Shopify Payments (PCI DSS certified)." },
    s10: { title: "10. Changes", text: "We reserve the right to modify this privacy policy at any time. Any changes will be published on this page with the update date." },
    lastUpdate: "Last updated: May 2026",
  },
} as const;

export default async function PolitiqueConfidentialite({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = content[(locale as Locale) || "fr"];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">{c.title}</h1>

        <div className="space-y-8 text-muted text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.s1.title}</h2>
            <p>{c.s1.text}</p>
            <p className="mt-2">
              Contact:{" "}
              <a href="mailto:contact@deepwavebraids.shop" className="text-accent hover:underline">
                contact@deepwavebraids.shop
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.s2.title}</h2>
            <p>{c.s2.intro}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {c.s2.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.s3.title}</h2>
            <p>{c.s3.intro}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {c.s3.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.s4.title}</h2>
            <p>{c.s4.text}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.s5.title}</h2>
            <p>{c.s5.intro}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {c.s5.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-2">{c.s5.footer}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.s6.title}</h2>
            <p>{c.s6.text}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.s7.title}</h2>
            <p>{c.s7.intro}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {c.s7.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-2">{c.s7.footer}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.s8.title}</h2>
            <p>{c.s8.text}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.s9.title}</h2>
            <p>{c.s9.text}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.s10.title}</h2>
            <p>{c.s10.text}</p>
          </section>

          <p className="text-xs text-muted/60 pt-4 border-t border-border">
            {c.lastUpdate}
          </p>
        </div>
      </div>
    </div>
  );
}
