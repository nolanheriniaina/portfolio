// app/components/HeroSection.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { useI18n } from "@/app/locales/client";
import { useCountUp } from "@/app/hooks/useCountUp";
import contactData from "@/app/data/contact.json";
import heroData from "@/app/data/hero.json";
import siteData from "@/app/data/site.json";

// Extrait la partie numérique d'une stat pour l'animation
// "5 ans" → 5 | "100 %" → 100 | "< 24h" → 24
function parseStatValue(value: string): { numeric: number; prefix: string; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
  if (!match) return { numeric: 0, prefix: "", suffix: value };
  return { numeric: parseInt(match[2]), prefix: match[1], suffix: match[3] };
}

function AnimatedStat({ value, labelKey }: { value: string; labelKey: string }) {
  const t = useI18n();
  const { numeric, prefix, suffix } = parseStatValue(value);
  const { ref, count } = useCountUp(numeric, 1400);

  return (
    <div ref={ref}>
      <p className="font-serif text-3xl text-stone-900">
        {prefix}{count}{suffix}
      </p>
      {/* @ts-ignore */}
      <p className="text-sm text-stone-400 mt-1">{t(labelKey as any)}</p>
    </div>
  );
}

function AnimatedStatSmall({ value, labelKey }: { value: string; labelKey: string }) {
  const t = useI18n();
  const { numeric, prefix, suffix } = parseStatValue(value);
  const { ref, count } = useCountUp(numeric, 1400);

  return (
    <div ref={ref}>
      <p className="font-serif text-xl sm:text-2xl text-stone-900 whitespace-nowrap">
        {prefix}{count}{suffix}
      </p>
      {/* @ts-ignore */}
      <p className="text-[11px] sm:text-xs text-stone-400 mt-0.5 leading-snug">{t(labelKey as any)}</p>
    </div>
  );
}

export default function HeroSection() {
  const t = useI18n();

  return (
    <section id="home" className="px-4 sm:px-8 pt-16 pb-14 border-b border-stone-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div>
          {contactData.availability && (
            <div
              className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded bg-amber-50 border border-amber-200"
              style={{
                animation: "fadeSlideDown 0.5s ease both",
              }}
            >
              <span className="font-serif">{siteData.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              {/* @ts-ignore */}
              <span className="text-amber-800 text-xs font-medium">{t("hero.available")}</span>
            </div>
          )}

          <h1
            className="font-serif text-4xl sm:text-5xl leading-[1.1] tracking-tight text-stone-900 mb-5"
            style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}
          >
            {/* @ts-ignore */}
            {t("hero.title1")}{" "}
            {/* @ts-ignore */}
            <em className="text-amber-700 not-italic">{t("hero.title2")}</em>
          </h1>

          <p
            className="text-stone-500 text-base leading-relaxed mb-8"
            style={{ animation: "fadeSlideUp 0.6s ease 0.2s both" }}
          >
            {/* @ts-ignore */}
            {t("hero.description")}
          </p>

          <div
            className="min-[720px]:hidden flex flex-wrap gap-3"
            style={{ animation: "fadeSlideUp 0.6s ease 0.3s both" }}
          >
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 text-stone-700 text-sm font-medium rounded hover:border-stone-400 hover:bg-stone-50 transition-all duration-200"
            >
              {/* @ts-ignore */}
              {t("hero.cta.pricing")}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div
            className="flex lg:hidden items-start justify-between pt-8 mt-8 border-t border-stone-200"
            style={{ animation: "fadeSlideUp 0.6s ease 0.35s both" }}
          >
            {heroData.stats.map((stat) => (
              <AnimatedStatSmall key={stat.labelKey} value={stat.value} labelKey={stat.labelKey} />
            ))}
          </div>
        </div>

        <div
          className="hidden lg:flex flex-row flex-wrap items-center gap-x-10 gap-y-6 lg:pl-8 lg:border-l border-stone-200"
          style={{ animation: "fadeSlideUp 0.6s ease 0.25s both" }}
        >
          {heroData.stats.map((stat) => (
            <AnimatedStat key={stat.labelKey} value={stat.value} labelKey={stat.labelKey} />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; animation-delay: 0ms !important; }
        }
      `}</style>
    </section>
  );
}