import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Package, Clock, Mail, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Retour & Remboursement | DeepWaveBraids",
  description:
    "Politique de retour et remboursement DeepWaveBraids. Satisfait ou remboursé sous 14 jours.",
};

export default function RetoursPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} />
          Retour à la boutique
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-4">
          Politique de Retour & Remboursement
        </h1>
        <p className="text-muted mb-10">
          Dernière mise à jour : 13 juillet 2026
        </p>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-surface rounded-2xl border border-border p-5 text-center">
            <Clock size={28} className="text-accent mx-auto mb-2" />
            <p className="text-foreground font-semibold text-lg">14 jours</p>
            <p className="text-muted text-xs mt-1">Délai de rétractation</p>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-5 text-center">
            <Package size={28} className="text-accent mx-auto mb-2" />
            <p className="text-foreground font-semibold text-lg">Non ouvert</p>
            <p className="text-muted text-xs mt-1">Produit dans son emballage</p>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-5 text-center">
            <Mail size={28} className="text-accent mx-auto mb-2" />
            <p className="text-foreground font-semibold text-lg">Email</p>
            <p className="text-muted text-xs mt-1">contact@deepwavebraids.shop</p>
          </div>
        </div>

        <div className="space-y-8 text-muted text-sm leading-relaxed">
          {/* 1. Droit de rétractation */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              1. Droit de rétractation (14 jours)
            </h2>
            <p>
              Conformément à l&apos;article L221-18 du Code de la consommation,
              vous disposez d&apos;un délai de <strong>14 jours calendaires</strong> à
              compter de la réception de votre commande pour exercer votre droit
              de rétractation, sans avoir à justifier de motif.
            </p>
          </section>

          {/* 2. Conditions */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              2. Conditions de retour
            </h2>
            <p className="mb-4">
              Pour être éligible à un retour, votre article doit remplir les
              conditions suivantes :
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-border">
                <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <p>Le produit doit être dans son <strong>emballage d&apos;origine, non ouvert et non utilisé</strong></p>
              </div>
              <div className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-border">
                <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <p>La demande doit être faite dans les <strong>14 jours suivant la réception</strong></p>
              </div>
              <div className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-border">
                <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <p>Le produit doit être retourné avec la <strong>preuve d&apos;achat</strong> (email de confirmation)</p>
              </div>
            </div>
          </section>

          {/* 3. Produits non retournables */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              3. Produits non éligibles au retour
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-border">
                <XCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <p>Mèches déjà <strong>ouvertes, installées ou utilisées</strong> (pour raisons d&apos;hygiène)</p>
              </div>
              <div className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-border">
                <XCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <p>Produits retournés <strong>après le délai de 14 jours</strong></p>
              </div>
              <div className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-border">
                <XCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <p>Articles endommagés par le client (mauvaise manipulation, produits chimiques, etc.)</p>
              </div>
            </div>
          </section>

          {/* 4. Procédure */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              4. Comment effectuer un retour ?
            </h2>
            <div className="bg-surface rounded-2xl border border-border p-6">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <div>
                    <p className="text-foreground font-medium">Contactez-nous par email</p>
                    <p className="text-muted text-xs mt-1">
                      Envoyez un email à <strong>contact@deepwavebraids.shop</strong> avec votre
                      numéro de commande et le motif du retour.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <div>
                    <p className="text-foreground font-medium">Recevez votre autorisation de retour</p>
                    <p className="text-muted text-xs mt-1">
                      Nous vous répondons sous 24-48h avec les instructions de retour et
                      l&apos;adresse d&apos;envoi.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <div>
                    <p className="text-foreground font-medium">Expédiez le produit</p>
                    <p className="text-muted text-xs mt-1">
                      Renvoyez le produit dans son emballage d&apos;origine, en colis suivi.
                      Les frais de retour sont à la charge du client.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <div>
                    <p className="text-foreground font-medium">Remboursement</p>
                    <p className="text-muted text-xs mt-1">
                      Une fois le retour reçu et vérifié, vous êtes remboursé sous
                      <strong> 5-10 jours ouvrés</strong> sur le moyen de paiement utilisé lors de l&apos;achat.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* 5. Produit défectueux */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              5. Produit défectueux ou erreur de commande
            </h2>
            <div className="flex items-start gap-3 bg-accent-soft rounded-xl p-4 border border-accent/20">
              <AlertTriangle size={18} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p>
                  Si vous recevez un produit <strong>défectueux, endommagé ou non conforme</strong> à
                  votre commande, contactez-nous immédiatement avec des photos du
                  produit. Nous procéderons à un <strong>échange ou remboursement intégral</strong>,
                  frais de retour inclus.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Remboursement */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              6. Détails du remboursement
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Le remboursement est effectué sur le <strong>moyen de paiement original</strong> (carte bancaire, PayPal, Apple Pay)</li>
              <li>Le montant remboursé correspond au prix du produit. Les <strong>frais de livraison initiaux ne sont pas remboursés</strong>, sauf en cas d&apos;erreur de notre part</li>
              <li>Les <strong>frais de retour sont à la charge du client</strong>, sauf en cas de produit défectueux</li>
              <li>Délai de traitement : <strong>5 à 10 jours ouvrés</strong> après réception du retour</li>
            </ul>
          </section>

          {/* 7. Contact */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              7. Nous contacter
            </h2>
            <div className="bg-surface rounded-2xl border border-border p-6">
              <p className="mb-2">
                Pour toute question concernant les retours et remboursements :
              </p>
              <ul className="space-y-1 mt-3">
                <li>📧 <strong>contact@deepwavebraids.shop</strong></li>
                <li>🌐 <strong>www.deepwavebraids.shop</strong></li>
              </ul>
              <p className="mt-4 text-xs text-muted/60">
                DeepWaveBraids — Micro-entreprise enregistrée au RCS de Paris
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
