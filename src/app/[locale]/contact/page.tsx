"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, Clock, Send, Check } from "lucide-react";
import { useI18n } from "@/i18n/context";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { locale, t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:contact@deepwavebraids.shop?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`${t.contact.mailtoGreeting},\n\n${formData.message}\n\n${t.contact.mailtoClosing},\n${formData.name}\n${formData.email}`)}`;
    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} />
          {t.contact.back}
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          {t.contact.title}
        </h1>
        <p className="text-muted mb-10">{t.contact.subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-surface rounded-2xl border border-border p-5">
              <Mail size={22} className="text-accent mb-3" />
              <h3 className="text-foreground font-semibold text-sm">{t.contact.email}</h3>
              <p className="text-accent text-sm mt-1">contact@deepwavebraids.shop</p>
            </div>
            <div className="bg-surface rounded-2xl border border-border p-5">
              <MessageCircle size={22} className="text-accent mb-3" />
              <h3 className="text-foreground font-semibold text-sm">{t.contact.whatsapp}</h3>
              <p className="text-muted text-sm mt-1">{t.contact.whatsappDesc}</p>
            </div>
            <div className="bg-surface rounded-2xl border border-border p-5">
              <Clock size={22} className="text-accent mb-3" />
              <h3 className="text-foreground font-semibold text-sm">{t.contact.responseTime}</h3>
              <p className="text-muted text-sm mt-1">{t.contact.responseTimeDesc}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-surface rounded-3xl border border-border p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.firstName}
                    </label>
                    <input
                      id="name" type="text" required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.firstNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="contact-email" type="email" required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.subject}
                  </label>
                  <select
                    id="subject" required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  >
                    <option value="">{t.contact.subjectPlaceholder}</option>
                    <option value={t.contact.subjectProduct}>{t.contact.subjectProduct}</option>
                    <option value={t.contact.subjectOrder}>{t.contact.subjectOrder}</option>
                    <option value={t.contact.subjectReturn}>{t.contact.subjectReturn}</option>
                    <option value={t.contact.subjectCollab}>{t.contact.subjectCollab}</option>
                    <option value={t.contact.subjectOther}>{t.contact.subjectOther}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message" required rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3.5 px-6 rounded-xl transition-all text-sm shadow-lg shadow-accent/25 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  {t.contact.send}
                </button>
              </form>
            ) : (
              <div className="bg-surface rounded-3xl border border-border p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t.contact.sent}</h3>
                <p className="text-muted text-sm mt-3">{t.contact.sentDesc}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
