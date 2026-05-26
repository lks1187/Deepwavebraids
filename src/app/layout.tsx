import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeepWaveBraids | Mèches & Extensions Premium",
  description:
    "Mèches deep wave, extensions et braiding hair 100% cheveux vierges. Livraison rapide en France, Suisse et Belgique.",
  keywords: [
    "mèches deep wave",
    "braiding hair",
    "extensions cheveux",
    "cheveux vierges",
    "tresses",
    "boho braids",
    "knotless braids",
  ],
  openGraph: {
    title: "DeepWaveBraids | Mèches & Extensions Premium",
    description:
      "Mèches deep wave et braiding hair 100% cheveux vierges. Qualité premium, prix accessible.",
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
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
