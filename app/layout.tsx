import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingCallButton } from "@/components/floating-call-button";
import { siteData } from "@/lib/site-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: `${siteData.business.name} | ${siteData.business.trade} à ${siteData.business.city}`,
    template: `%s | ${siteData.business.name}`
  },
  description: siteData.business.description,
  keywords: ["rénovation", "bâtiment", "artisan", "Nancy", "Meurthe-et-Moselle", "peinture", "menuiserie", "isolation"],
  authors: [{ name: siteData.business.name }],
  creator: siteData.business.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ruben-renovation-nancy.fr",
    title: siteData.business.name,
    description: siteData.business.description,
    siteName: siteData.business.name,
  },
  alternates: {
    canonical: "https://ruben-renovation-nancy.fr"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 flex flex-col pt-[72px]">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}