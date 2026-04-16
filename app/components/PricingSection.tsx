"use client";

import { Zap, Shield, Crown, Wrench, Code2, RefreshCw } from "lucide-react";
import { useI18n, useCurrentLocale } from "@/app/locales/client";
import pricingRaw from "@/app/data/pricing.json";
import PlanCard from "@/app/components/pricing/PlanCard";
import GuaranteeCard from "@/app/components/pricing/GuaranteeCard";
import FaqAccordion from "@/app/components/pricing/FaqAccordion";
import SectionHeader from "@/app/components/ui/SectionHeader";
import WhatsAppButton from "@/app/components/ui/WhatsAppButton";
import FadeIn from "@/app/components/ui/FadeIn";

const PLAN_ICONS: Record<string, React.ElementType> = { Wrench, Code2, RefreshCw };
const GUARANTEE_ICONS = [Zap, Shield, Crown] as const;

const LOCALE_TO_CURRENCY: Record<string, "mg" | "eu" | "usd"> = {
  fr: "eu",
  en: "usd",
};

export default function PricingSection() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const currency = LOCALE_TO_CURRENCY[locale] ?? "eu";

  const guarantees = ((t as any)("pricing.guarantees") as { title: string; desc: string }[]) ?? [];
  const faq        = ((t as any)("pricing.faq")        as { q: string; a: string }[])         ?? [];

  return (
    <section id="pricing" className="px-4 sm:px-8 py-14 border-b border-stone-200">

      <FadeIn>
        <SectionHeader
          eyebrow={(t as any)("pricing.eyebrow")}
          title={(t as any)("pricing.title")}
          subtitle={(t as any)("pricing.subtitle")}
        />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {pricingRaw.map((plan, i) => {
          const badge = plan.badge ? (t as any)(plan.badge) as string : "";
          return (
            <FadeIn key={plan.id} delay={i * 100} direction="up">
              <PlanCard
                icon={PLAN_ICONS[plan.icon]}
                name={(t as any)(plan.nameKey) as string}
                tagline={(t as any)(plan.taglineKey) as string}
                price={plan.price[currency] ?? plan.price.eu}
                period={(t as any)(plan.periodKey) as string}
                badge={badge}
                cta={(t as any)(plan.ctaKey) as string}
                note={(t as any)(plan.noteKey) as string}
                features={Array.isArray((t as any)(plan.featuresKey)) ? (t as any)(plan.featuresKey) as string[] : []}
                whatsappMessage={(t as any)(plan.whatsappMessageKey) as string}
                featured={Boolean(badge)}
              />
            </FadeIn>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
        {(Array.isArray(guarantees) ? guarantees : []).map((g, i) => (
          <FadeIn key={i} delay={i * 80}>
            <GuaranteeCard
              icon={GUARANTEE_ICONS[i]}
              title={g.title}
              desc={g.desc}
            />
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="max-w-xl mb-12">
          <p className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-4">FAQ</p>
          <FaqAccordion items={Array.isArray(faq) ? faq : []} />
        </div>
      </FadeIn>

      <FadeIn delay={50}>
        <div className="p-6 sm:p-8 rounded border border-stone-200 bg-stone-50 transition-colors duration-300 hover:bg-stone-100/60">
          <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 mb-2">
            {(t as any)("pricing.cta.title")}
          </h3>
          <p className="text-stone-500 text-sm mb-6">
            {(t as any)("pricing.cta.subtitle")}
          </p>
          <WhatsAppButton
            message={(t as any)("pricing.cta.wp")}
            label={(t as any)("pricing.cta.btn")}
            variant="inline"
          />
        </div>
      </FadeIn>

    </section>
  );
}