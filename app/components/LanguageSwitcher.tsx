"use client";

import { useChangeLocale, useCurrentLocale } from "@/app/locales/client";

const LOCALES = [
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "en", flag: "🇬🇧", label: "English" },
] as const;

export default function LanguageSwitcher() {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-white border border-stone-200 shadow-sm">
      {LOCALES.map(({ code, flag, label }) => {
        const active = currentLocale === code;
        return (
          <button
            key={code}
            onClick={() => changeLocale(code)}
            aria-label={label}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
              active
                ? "bg-stone-900 text-stone-50"
                : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
            }`}
          >
            <span className="text-sm leading-none">{flag}</span>
            <span className="uppercase tracking-wide">{code}</span>
          </button>
        );
      })}
    </div>
  );
}