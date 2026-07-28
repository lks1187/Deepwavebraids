import type { Locale } from "@/i18n/config";

const content = {
  fr: {
    title: "Conditions Générales de Vente",
    sections: [
      { title: "1. Objet", text: "Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des ventes réalisées sur le site www.deepwavebraids.shop, édité par Randy Iyeti, entrepreneur individuel basé à Genève, Suisse." },
      { title: "2. Produits", text: "DeepWaveBraids propose à la vente des mèches, extensions et accessoires capillaires. Les produits sont décrits avec la plus grande exactitude possible. Les photographies n'ont pas de valeur contractuelle. En cas d'erreur manifeste sur le prix d'un produit, la vente pourra être annulée." },
      { title: "3. Prix", text: "Les prix sont indiqués en euros (€), toutes taxes comprises (TTC). DeepWaveBraids se réserve le droit de modifier ses prix à tout moment. Les produits sont facturés sur la base des tarifs en vigueur au moment de la validation de la commande." },
      { title: "4. Commandes", text: "La validation de la commande implique l'acceptation des présentes CGV. Le paiement est sécurisé et traité par Shopify Payments. Une confirmation de commande est envoyée par email." },
    ],
    delivery: {
      title: "5. Livraison",
      items: [
        { label: "Zones de livraison :", text: "France métropolitaine, Belgique et Suisse." },
        { label: "Délais :", text: "Les commandes sont expédiées sous 2 à 5 jours ouvrés. Les délais de livraison varient de 3 à 10 jours ouvrés selon la destination." },
        { label: "Frais de livraison :", text: "Les frais de livraison sont indiqués lors du processus de commande avant le paiement." },
      ],
    },
    withdrawal: {
      title: "6. Droit de rétractation",
      p1: "Conformément à la législation européenne, vous disposez d'un délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.",
      p2: "Conditions : Les produits doivent être retournés dans leur emballage d'origine, non ouverts et en parfait état. Les produits descellés ou utilisés ne pourront pas être remboursés pour des raisons d'hygiène.",
      p3: "Pour exercer ce droit, contactez-nous à",
    },
    sections2: [
      { title: "7. Remboursement", text: "En cas de retour accepté, le remboursement sera effectué dans un délai de 14 jours suivant la réception du produit retourné, via le même moyen de paiement utilisé lors de la commande. Les frais de retour sont à la charge du client." },
      { title: "8. Réclamations et SAV", text: "Pour toute réclamation, contactez-nous par email à contact@deepwavebraids.shop. Nous nous engageons à répondre sous 48 heures ouvrées." },
      { title: "9. Garantie", text: "Tous nos produits bénéficient de la garantie légale de conformité (articles L.217-4 et suivants du Code de la consommation français) et de la garantie contre les vices cachés (articles 1641 et suivants du Code civil français)." },
      { title: "10. Médiation", text: "En cas de litige non résolu, le client peut recourir gratuitement au service de médiation de la consommation. Conformément aux articles L.611-1 et R.612-1 du Code de la consommation, tout consommateur a le droit de recourir à un médiateur." },
      { title: "11. Droit applicable", text: "Les présentes CGV sont régies par le droit suisse. Pour les clients résidant dans l'Union européenne, les dispositions impératives du droit de la consommation de leur pays de résidence s'appliquent." },
    ],
    lastUpdate: "Dernière mise à jour : Mai 2026",
  },
  en: {
    title: "Terms & Conditions",
    sections: [
      { title: "1. Purpose", text: "These Terms & Conditions govern all sales made on www.deepwavebraids.shop, operated by Randy Iyeti, sole proprietor based in Geneva, Switzerland." },
      { title: "2. Products", text: "DeepWaveBraids sells hair extensions, weaves and hair accessories. Products are described as accurately as possible. Photographs are not contractually binding. In case of a clear pricing error, the sale may be cancelled." },
      { title: "3. Prices", text: "Prices are shown in euros (€), all taxes included. DeepWaveBraids reserves the right to modify prices at any time. Products are billed at the rate in effect at the time of order validation." },
      { title: "4. Orders", text: "Validating an order implies acceptance of these Terms & Conditions. Payment is secure and processed by Shopify Payments. An order confirmation is sent by email." },
    ],
    delivery: {
      title: "5. Shipping",
      items: [
        { label: "Shipping zones:", text: "Worldwide shipping available." },
        { label: "Timeframes:", text: "Orders are shipped within 2-5 business days. Delivery times vary from 3-10 business days depending on destination." },
        { label: "Shipping costs:", text: "Shipping costs are displayed during checkout before payment." },
      ],
    },
    withdrawal: {
      title: "6. Right of withdrawal",
      p1: "In accordance with EU consumer law, you have 14 days from receipt of your order to exercise your right of withdrawal, without providing any reason or paying penalties.",
      p2: "Conditions: Products must be returned in their original packaging, unopened and in perfect condition. Opened or used products cannot be refunded for hygiene reasons.",
      p3: "To exercise this right, contact us at",
    },
    sections2: [
      { title: "7. Refunds", text: "For accepted returns, refunds are processed within 14 days of receiving the returned product, via the same payment method used for the order. Return shipping costs are borne by the customer." },
      { title: "8. Customer service", text: "For any complaint, contact us by email at contact@deepwavebraids.shop. We commit to responding within 48 business hours." },
      { title: "9. Warranty", text: "All our products benefit from the legal warranty of conformity and the warranty against hidden defects under applicable French and EU consumer law." },
      { title: "10. Mediation", text: "In case of an unresolved dispute, the customer may use the consumer mediation service free of charge, in accordance with applicable EU consumer protection regulations." },
      { title: "11. Applicable law", text: "These Terms & Conditions are governed by Swiss law. For customers residing in the European Union, mandatory consumer protection provisions of their country of residence apply." },
    ],
    lastUpdate: "Last updated: May 2026",
  },
} as const;

export default async function CGV({
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
          {c.sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-semibold text-foreground mb-3">{s.title}</h2>
              <p>{s.text}</p>
            </section>
          ))}

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.delivery.title}</h2>
            <ul className="space-y-2">
              {c.delivery.items.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong> {item.text}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.withdrawal.title}</h2>
            <p>{c.withdrawal.p1}</p>
            <p className="mt-2">{c.withdrawal.p2}</p>
            <p className="mt-2">
              {c.withdrawal.p3}{" "}
              <a href="mailto:contact@deepwavebraids.shop" className="text-accent hover:underline">
                contact@deepwavebraids.shop
              </a>
            </p>
          </section>

          {c.sections2.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-semibold text-foreground mb-3">{s.title}</h2>
              <p>{s.text}</p>
            </section>
          ))}

          <p className="text-xs text-muted/60 pt-4 border-t border-border">
            {c.lastUpdate}
          </p>
        </div>
      </div>
    </div>
  );
}
