import HeroSection from "@/app/components/HeroSection";
import ServicesSection from "@/app/components/ServicesSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import PricingSection from "@/app/components/PricingSection";
import FloatingContactButton from "@/app/components/FloatingContactButton";
import { projectsData } from "@/app/lib/data/portfolio";
import type { Metadata } from "next";
import siteData from "@/app/data/site.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = siteData.seo[locale as keyof typeof siteData.seo] ?? siteData.seo.fr;
  return {
    alternates: { canonical: `https://${siteData.domain}/${locale}` },
    title: seo.title,
    description: seo.description,
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection projects={projectsData} />
      <PricingSection />
      <FloatingContactButton />
    </>
  );
}