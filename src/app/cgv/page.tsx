import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | DeepWaveBraids",
  description: "Conditions générales de vente du site DeepWaveBraids.",
};

export default function CGV() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Conditions Générales de Vente
        </h1>

        <div className="space-y-8 text-muted text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              1. Objet
            </h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent
              l&apos;ensemble des ventes réalisées sur le site{" "}
              <strong>www.deepwavebraids.shop</strong>, édité par Randy Iyeti,
              entrepreneur individuel basé à Genève, Suisse.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              2. Produits
            </h2>
            <p>
              DeepWaveBraids propose à la vente des mèches, extensions et
              accessoires capillaires. Les produits sont décrits avec la plus
              grande exactitude possible. Les photographies n&apos;ont pas de
              valeur contractuelle. En cas d&apos;erreur manifeste sur le prix
              d&apos;un produit, la vente pourra être annulée.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              3. Prix
            </h2>
            <p>
              Les prix sont indiqués en euros (€), toutes taxes comprises (TTC).
              DeepWaveBraids se réserve le droit de modifier ses prix à tout
              moment. Les produits sont facturés sur la base des tarifs en
              vigueur au moment de la validation de la commande.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              4. Commandes
            </h2>
            <p>
              La validation de la commande implique l&apos;acceptation des
              présentes CGV. Le paiement est sécurisé et traité par Shopify
              Payments. Une confirmation de commande est envoyée par email.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              5. Livraison
            </h2>
            <ul className="space-y-2">
              <li>
                <strong>Zones de livraison :</strong> France métropolitaine,
                Belgique et Suisse.
              </li>
              <li>
                <strong>Délais :</strong> Les commandes sont expédiées sous 2 à
                5 jours ouvrés. Les délais de livraison varient de 3 à 10 jours
                ouvrés selon la destination.
              </li>
              <li>
                <strong>Frais de livraison :</strong> Les frais de livraison sont
                indiqués lors du processus de commande avant le paiement.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              6. Droit de rétractation
            </h2>
            <p>
              Conformément à la législation européenne, vous disposez d&apos;un
              délai de <strong>14 jours</strong> à compter de la réception de
              votre commande pour exercer votre droit de rétractation, sans
              avoir à justifier de motifs ni à payer de pénalités.
            </p>
            <p className="mt-2">
              <strong>Conditions :</strong> Les produits doivent être retournés
              dans leur emballage d&apos;origine, non ouverts et en parfait
              état. Les produits descellés ou utilisés ne pourront pas être
              remboursés pour des raisons d&apos;hygiène.
            </p>
            <p className="mt-2">
              Pour exercer ce droit, contactez-nous à{" "}
              <a href="mailto:contact@deepwavebraids.shop" className="text-accent hover:underline">
                contact@deepwavebraids.shop
              </a>{" "}
              en indiquant votre numéro de commande.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              7. Remboursement
            </h2>
            <p>
              En cas de retour accepté, le remboursement sera effectué dans un
              délai de <strong>14 jours</strong> suivant la réception du
              produit retourné, via le même moyen de paiement utilisé lors de
              la commande. Les frais de retour sont à la charge du client.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              8. Réclamations et SAV
            </h2>
            <p>
              Pour toute réclamation, contactez-nous par email à{" "}
              <a href="mailto:contact@deepwavebraids.shop" className="text-accent hover:underline">
                contact@deepwavebraids.shop
              </a>
              . Nous nous engageons à répondre sous 48 heures ouvrées.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              9. Garantie
            </h2>
            <p>
              Tous nos produits bénéficient de la garantie légale de conformité
              (articles L.217-4 et suivants du Code de la consommation français)
              et de la garantie contre les vices cachés (articles 1641 et
              suivants du Code civil français).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              10. Médiation
            </h2>
            <p>
              En cas de litige non résolu, le client peut recourir gratuitement
              au service de médiation de la consommation. Conformément aux
              articles L.611-1 et R.612-1 du Code de la consommation, tout
              consommateur a le droit de recourir à un médiateur.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              11. Droit applicable
            </h2>
            <p>
              Les présentes CGV sont régies par le droit suisse. Pour les
              clients résidant dans l&apos;Union européenne, les dispositions
              impératives du droit de la consommation de leur pays de résidence
              s&apos;appliquent.
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
