import React from "react";
import "../globals.css";
import { Providers } from "./providers";
import Sidebar from "@/app/components/Sidebar";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import siteData from "@/app/data/site.json";
import contactData from "@/app/data/contact.json";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = siteData.seo[locale as keyof typeof siteData.seo] ?? siteData.seo.fr;
  return {
    title: { default: seo.title, template: `%s | ${siteData.name}` },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteData.name }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: { icon: siteData.logo },
  };
}

export default async function FrontLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteData.name,
    jobTitle: siteData.jsonLd.jobTitle,
    description: siteData.jsonLd.description,
    url: `https://${siteData.domain}/${locale}`,
    sameAs: Object.values(contactData.social).filter(Boolean),
    knowsAbout: siteData.jsonLd.knowsAbout,
    address: {
      "@type": "PostalAddress",
      addressLocality: contactData.location.city,
      addressCountry: contactData.location.countryCode,
    },
    email: contactData.email,
    telephone: contactData.phone,
  };

  return (
    <html lang={locale} className={`${dmSerif.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-stone-50 overflow-x-hidden">
        <Providers locale={locale}>
          <div className="relative min-h-screen">
            <div className="fixed top-4 right-4 min-[720px]:right-[calc(20rem+1rem)] lg:right-[calc(22rem+1rem)] z-50">
              <LanguageSwitcher />
            </div>
            <main className="min-[720px]:pr-80 lg:pr-88">
              {children}
            </main>
            <Sidebar />
          </div>
        </Providers>
      </body>
    </html>
  );
}