import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WelcomePopup from "@/components/WelcomePopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import PromoBanner from "@/components/PromoBanner";
import CookieBanner from "@/components/CookieBanner";
import { CartProvider } from "@/components/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeepWaveBraids | Mèches & Extensions Premium",
  description:
    "Mèches deep wave premium pour boho braids, knotless braids et coiffures protectrices. Livraison en France, Suisse et Belgique.",
  keywords: [
    "mèches deep wave",
    "boho braids",
    "knotless braids",
    "mèches pour tresses",
    "extensions deep wave",
    "tresses protectrices",
    "mèches ondulées",
  ],
  openGraph: {
    title: "DeepWaveBraids | Mèches Deep Wave Premium",
    description:
      "Mèches deep wave premium pour boho braids et knotless braids. Qualité premium, prix accessible.",
    type: "website",
    locale: "fr_FR",
    siteName: "DeepWaveBraids",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background">
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
      </body>
    </html>
  );
}
