"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, Clock, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with pre-filled data
    const mailtoUrl = `mailto:contact@deepwavebraids.shop?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Bonjour,\n\n${formData.message}\n\nCordialement,\n${formData.name}\n${formData.email}`)}`;
    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} />
          Retour à la boutique
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Nous contacter
        </h1>
        <p className="text-muted mb-10">
          Une question sur nos produits, ta commande ou une collaboration ? On te répond sous 24h.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info cards */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-surface rounded-2xl border border-border p-5">
              <Mail size={22} className="text-accent mb-3" />
              <h3 className="text-foreground font-semibold text-sm">Email</h3>
              <p className="text-accent text-sm mt-1">contact@deepwavebraids.shop</p>
            </div>
            <div className="bg-surface rounded-2xl border border-border p-5">
              <MessageCircle size={22} className="text-accent mb-3" />
              <h3 className="text-foreground font-semibold text-sm">WhatsApp</h3>
              <p className="text-muted text-sm mt-1">Chat en direct via le bouton en bas à droite</p>
            </div>
            <div className="bg-surface rounded-2xl border border-border p-5">
              <Clock size={22} className="text-accent mb-3" />
              <h3 className="text-foreground font-semibold text-sm">Délai de réponse</h3>
              <p className="text-muted text-sm mt-1">Sous 24h en semaine</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-surface rounded-3xl border border-border p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Prénom
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ton prénom"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ton@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  >
                    <option value="">Choisis un sujet</option>
                    <option value="Question sur un produit">Question sur un produit</option>
                    <option value="Suivi de commande">Suivi de commande</option>
                    <option value="Retour / Remboursement">Retour / Remboursement</option>
                    <option value="Collaboration / Partenariat">Collaboration / Partenariat</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Écris ton message ici..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3.5 px-6 rounded-xl transition-all text-sm shadow-lg shadow-accent/25 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  Envoyer le message
                </button>
              </form>
            ) : (
              <div className="bg-surface rounded-3xl border border-border p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Message envoyé !</h3>
                <p className="text-muted text-sm mt-3">
                  On te répond sous 24h. Vérifie tes spams si tu ne reçois pas de réponse.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
