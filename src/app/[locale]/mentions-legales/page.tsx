import type { Locale } from "@/i18n/config";

const content = {
  fr: {
    title: "Mentions Légales",
    editor: {
      title: "1. Éditeur du site",
      intro: "Le site www.deepwavebraids.shop est édité par :",
      fields: [
        { label: "Nom :", value: "Randy Iyeti" },
        { label: "Statut :", value: "Entrepreneur individuel" },
        { label: "Siège :", value: "Genève, Suisse" },
      ],
    },
    hosting: {
      title: "2. Hébergement",
      fields: [
        { label: "Hébergeur :", value: "Vercel Inc." },
        { label: "Adresse :", value: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis" },
      ],
    },
    sections: [
      { title: "3. Propriété intellectuelle", text: "L'ensemble du contenu du site (textes, images, logos, vidéos, graphismes) est protégé par le droit d'auteur. Toute reproduction, représentation ou diffusion, en tout ou partie, du contenu de ce site sans autorisation expresse est interdite." },
      { title: "4. Données personnelles", text: "Les informations collectées via ce site sont traitées conformément à notre Politique de Confidentialité. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles." },
      { title: "5. Cookies", text: "Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Pour plus d'informations, consultez notre Politique de Confidentialité." },
      { title: "6. Limitation de responsabilité", text: "DeepWaveBraids s'efforce de fournir des informations exactes et à jour. Toutefois, nous ne pouvons garantir l'exactitude, l'exhaustivité ou l'actualité des informations diffusées sur ce site. DeepWaveBraids décline toute responsabilité pour tout dommage résultant de l'utilisation du site." },
      { title: "7. Droit applicable", text: "Les présentes mentions légales sont régies par le droit suisse. Tout litige sera soumis à la compétence exclusive des tribunaux de Genève, Suisse." },
    ],
  },
  en: {
    title: "Legal Notice",
    editor: {
      title: "1. Site publisher",
      intro: "The website www.deepwavebraids.shop is published by:",
      fields: [
        { label: "Name:", value: "Randy Iyeti" },
        { label: "Status:", value: "Sole proprietor" },
        { label: "Location:", value: "Geneva, Switzerland" },
      ],
    },
    hosting: {
      title: "2. Hosting",
      fields: [
        { label: "Host:", value: "Vercel Inc." },
        { label: "Address:", value: "340 S Lemon Ave #4133, Walnut, CA 91789, USA" },
      ],
    },
    sections: [
      { title: "3. Intellectual property", text: "All content on this site (text, images, logos, videos, graphics) is protected by copyright. Any reproduction, representation or distribution, in whole or in part, of the content of this site without express authorization is prohibited." },
      { title: "4. Personal data", text: "Information collected through this site is processed in accordance with our Privacy Policy. In accordance with GDPR, you have the right to access, rectify and delete your personal data." },
      { title: "5. Cookies", text: "This site uses technical cookies necessary for its proper functioning. For more information, see our Privacy Policy." },
      { title: "6. Limitation of liability", text: "DeepWaveBraids strives to provide accurate and up-to-date information. However, we cannot guarantee the accuracy, completeness or timeliness of information on this site. DeepWaveBraids disclaims all liability for any damage resulting from the use of the site." },
      { title: "7. Applicable law", text: "These legal notices are governed by Swiss law. Any dispute shall be subject to the exclusive jurisdiction of the courts of Geneva, Switzerland." },
    ],
  },
} as const;

export default async function MentionsLegales({
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
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.editor.title}</h2>
            <p>{c.editor.intro}</p>
            <ul className="mt-2 space-y-1">
              {c.editor.fields.map((f) => (
                <li key={f.label}><strong>{f.label}</strong> {f.value}</li>
              ))}
              <li>
                <strong>{locale === "en" ? "Phone:" : "Téléphone :"}</strong>{" "}
                <a href="tel:+33756885510" className="text-accent hover:underline">
                  +33 7 56 88 55 10
                </a>
              </li>
              <li>
                <strong>Email :</strong>{" "}
                <a href="mailto:contact@deepwavebraids.shop" className="text-accent hover:underline">
                  contact@deepwavebraids.shop
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">{c.hosting.title}</h2>
            <ul className="space-y-1">
              {c.hosting.fields.map((f) => (
                <li key={f.label}><strong>{f.label}</strong> {f.value}</li>
              ))}
              <li>
                <strong>Site:</strong>{" "}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  vercel.com
                </a>
              </li>
            </ul>
          </section>

          {c.sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-semibold text-foreground mb-3">{s.title}</h2>
              <p>{s.text}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
