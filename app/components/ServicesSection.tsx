"use client";

import { useI18n } from "@/app/locales/client";
import {
  ShoppingBag, Smartphone, Wrench,
  Database, Rocket, BrainCircuit,
} from "lucide-react";
import SectionHeader from "@/app/components/ui/SectionHeader";
import servicesData from "@/app/data/services.json";
import FadeIn from "./ui/FadeIn";

const ICONS: Record<string, React.ElementType> = {
  ShoppingBag, Smartphone, Wrench, Database, Rocket, BrainCircuit,
};

export default function ServicesSection() {
  const t = useI18n();

  return (
    <section id="services" className="px-4 sm:px-8 py-14 border-b border-stone-200">
      <FadeIn>
        <SectionHeader
          eyebrow={(t as any)("services.eyebrow")}
          title={(t as any)("services.title")}
          subtitle={(t as any)("services.subtitle")}
        />
      </FadeIn>

      <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 divide-y divide-stone-100 lg:divide-y-0">
        {servicesData.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <FadeIn key={s.key} delay={i * 70}>
              <li className="flex items-start gap-4 py-5 border-b border-stone-100 group">
                <div className="w-8 h-8 rounded bg-amber-50 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 group-hover:bg-amber-100">
                  <Icon
                    className="w-4 h-4 text-amber-700 transition-transform duration-200 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  {/* @ts-ignore */}
                  <p className="text-sm font-medium text-stone-900 mb-0.5">{t(`services.list.${s.key}.title` as any)}</p>
                  {/* @ts-ignore */}
                  <p className="text-sm text-stone-500 leading-relaxed">{t(`services.list.${s.key}.description` as any)}</p>
                </div>
              </li>
            </FadeIn>
          );
        })}
      </ul>
    </section>
  );
}