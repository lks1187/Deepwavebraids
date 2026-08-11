import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Suspense } from "react";
import TikTokPixel from "@/components/TikTokPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeepWaveBraids | Premium Hair Extensions",
  description: "Premium deep wave hair for boho braids, knotless braids and protective styles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background">
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <TikTokPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
