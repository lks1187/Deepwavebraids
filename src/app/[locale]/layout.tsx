import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WelcomePopup from "@/components/WelcomePopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import PromoBanner from "@/components/PromoBanner";
import CookieBanner from "@/components/CookieBanner";
import { CartProvider } from "@/components/CartProvider";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: "DeepWaveBraids",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const dictionary = await getDictionary(locale as Locale);

  return (
    <I18nProvider locale={locale as Locale} dictionary={dictionary}>
      <CartProvider>
        <PromoBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
        <WelcomePopup />
        <WhatsAppButton />
        <CookieBanner />
      </CartProvider>
    </I18nProvider>
  );
}
