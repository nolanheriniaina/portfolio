"use client";

import { useState, useEffect } from "react";
import {
  Mail, Phone, Github, Linkedin,
  Send, MessageSquare, User, CheckCircle, Zap, Tag, Globe, ArrowRight,
} from "lucide-react";
import { useCurrentLocale, useI18n } from "@/app/locales/client";
import { useContactForm } from "@/app/hooks/useContactForm";
import contactData from "@/app/data/contact.json";
import navData from "@/app/data/nav.json";

const NAV_ICONS: Record<string, React.ElementType> = { User, Globe, CheckCircle, Tag };

export default function Sidebar() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const [activeSection, setActiveSection] = useState("home");
  const { form, status, setField, submit } = useContactForm();

  useEffect(() => {
    const onScroll = () => {
      for (const item of navData) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 160 && bottom >= 160) { setActiveSection(item.id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <aside className="max-[720px]:hidden min-[720px]:fixed right-0 top-0 w-80 lg:w-88 h-screen overflow-y-auto bg-white border-l border-stone-200 z-50 flex flex-col">

      <nav className="flex border-b border-stone-100" aria-label="Navigation sections">
        {navData.map((item) => {
          const Icon = NAV_ICONS[item.icon] ?? User;
          const label = item.label[locale as keyof typeof item.label] ?? item.label.en;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex-1 py-3 flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
                activeSection === item.id
                  ? "text-amber-700 border-b-2 border-amber-600"
                  : "text-stone-400 hover:text-stone-700"
              }`}
            >
              <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
              {label}
            </button>
          );
        })}
      </nav>

      <div className="p-5 border-b border-stone-100 space-y-3">
        {contactData.availability && (
          <p className="flex items-center gap-1.5 text-[11px] text-amber-800 font-medium">
            <Zap className="w-3 h-3" strokeWidth={1.5} />
            {locale === "fr" ? "Disponible pour missions" : "Available for projects"}
          </p>
        )}
        <a href={`mailto:${contactData.email}`} className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded bg-stone-50 border border-stone-100 flex items-center justify-center flex-shrink-0">
            <Mail className="w-3 h-3 text-stone-400 group-hover:text-amber-700 transition-colors" strokeWidth={1.5} />
          </div>
          <span className="text-xs text-stone-600 group-hover:text-stone-900 transition-colors truncate">{contactData.email}</span>
        </a>
        <a href={`tel:${contactData.phone}`} className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded bg-stone-50 border border-stone-100 flex items-center justify-center flex-shrink-0">
            <Phone className="w-3 h-3 text-stone-400 group-hover:text-amber-700 transition-colors" strokeWidth={1.5} />
          </div>
          <span className="text-xs text-stone-600 group-hover:text-stone-900 transition-colors">{contactData.phoneDisplay}</span>
        </a>
        <div className="flex gap-2 pt-1">
          {contactData.social.github && (
            <a href={contactData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="w-7 h-7 rounded border border-stone-200 flex items-center justify-center hover:border-stone-400 transition-colors">
              <Github className="w-3 h-3 text-stone-500" strokeWidth={1.5} />
            </a>
          )}
          {contactData.social.linkedin && (
            <a href={contactData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-7 h-7 rounded border border-stone-200 flex items-center justify-center hover:border-stone-400 transition-colors">
              <Linkedin className="w-3 h-3 text-stone-500" strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5 flex-1">
        <p className="text-xs font-medium text-stone-800 mb-4">
          {(t as any)("contact.title")}
        </p>
        <div className="space-y-2.5">
          <div className="relative">
            <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-300" strokeWidth={1.5} />
            <input type="text" value={form.name} onChange={setField("name")}
              placeholder={(t as any)("contact.name")}
              className="w-full pl-8 pr-3 py-2 text-xs border border-stone-200 rounded text-stone-800 placeholder-stone-300 focus:border-amber-400 focus:outline-none transition-colors" />
          </div>
          <div className="relative">
            <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-300" strokeWidth={1.5} />
            <input type="email" value={form.email} onChange={setField("email")}
              placeholder={(t as any)("contact.email")}
              className="w-full pl-8 pr-3 py-2 text-xs border border-stone-200 rounded text-stone-800 placeholder-stone-300 focus:border-amber-400 focus:outline-none transition-colors" />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-2.5 top-2.5 w-3 h-3 text-stone-300" strokeWidth={1.5} />
            <textarea value={form.message} onChange={setField("message")} rows={4}
              placeholder={(t as any)("contact.message")}
              className="w-full pl-8 pr-3 py-2 text-xs border border-stone-200 rounded text-stone-800 placeholder-stone-300 focus:border-amber-400 focus:outline-none resize-none transition-colors" />
          </div>
          <button onClick={submit} disabled={status === "sending" || status === "success"}
            className="w-full py-2.5 bg-stone-900 hover:bg-stone-700 disabled:opacity-50 text-stone-50 text-xs font-medium rounded transition-colors flex items-center justify-center gap-2">
            {status === "success" ? (
              <><CheckCircle className="w-3.5 h-3.5" />{(t as any)("contact.success")}</>
            ) : status === "sending" ? (
              <><div className="w-3.5 h-3.5 border border-stone-400 border-t-stone-100 rounded-full animate-spin" />{(t as any)("contact.sending")}</>
            ) : (
              <><Send className="w-3.5 h-3.5" />{(t as any)("contact.send")}</>
            )}
          </button>
          <p className="text-center text-[11px] text-stone-400">
            {(t as any)("contact.responseTime")}
          </p>
        </div>
      </div>
    </aside>
  );
}