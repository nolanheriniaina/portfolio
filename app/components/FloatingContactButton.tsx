"use client";

import { X, Mail, User, Send, CheckCircle, MessageSquare, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/app/locales/client";
import { useContactForm } from "@/app/hooks/useContactForm";
import contactData from "@/app/data/contact.json";

export default function FloatingContactButton() {
  const t = useI18n();
  const [open, setOpen] = useState(false);
  const { form, status, setField, submit } = useContactForm();

  const handleSubmit = async () => {
    await submit();
    if (status === "success") setTimeout(() => setOpen(false), 500);
  };

  return (
    <>
      <button
        data-contact-fab
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le formulaire de contact"
        className="min-[720px]:hidden fixed bottom-5 right-5 w-12 h-12 bg-stone-900 text-stone-50 rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-stone-700 transition-colors"
      >
        <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
        {contactData.availability && (
          <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-stone-50" />
        )}
      </button>

      {open && (
        <div className="min-[720px]:hidden fixed inset-0 z-50 flex items-end">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />

          <div className="relative w-full bg-white rounded-t-xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-stone-700" strokeWidth={1.5} />
                <span className="text-sm font-medium text-stone-900">
                  {(t as any)("contact.title")}
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="w-6 h-6 rounded flex items-center justify-center text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            <div className="p-5 space-y-3">
              <div className="relative">
                <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-300" strokeWidth={1.5} />
                <input
                  type="text"
                  value={form.name}
                  onChange={setField("name")}
                  placeholder={(t as any)("contact.name")}
                  className="w-full pl-8 pr-3 py-2.5 text-sm border border-stone-200 rounded text-stone-800 placeholder-stone-300 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-300" strokeWidth={1.5} />
                <input
                  type="email"
                  value={form.email}
                  onChange={setField("email")}
                  placeholder={(t as any)("contact.email")}
                  className="w-full pl-8 pr-3 py-2.5 text-sm border border-stone-200 rounded text-stone-800 placeholder-stone-300 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-2.5 top-3 w-3 h-3 text-stone-300" strokeWidth={1.5} />
                <textarea
                  value={form.message}
                  onChange={setField("message")}
                  rows={3}
                  placeholder={(t as any)("contact.message")}
                  className="w-full pl-8 pr-3 py-2.5 text-sm border border-stone-200 rounded text-stone-800 placeholder-stone-300 focus:border-amber-400 focus:outline-none resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === "sending" || status === "success"}
                className="w-full py-3 bg-stone-900 hover:bg-stone-700 disabled:opacity-50 text-stone-50 text-sm font-medium rounded transition-colors flex items-center justify-center gap-2"
              >
                {status === "success" ? (
                  <><CheckCircle className="w-4 h-4" />{(t as any)("contact.success")}</>
                ) : status === "sending" ? (
                  <><div className="w-4 h-4 border border-stone-500 border-t-stone-100 rounded-full animate-spin" />{(t as any)("contact.sending")}</>
                ) : (
                  <><Send className="w-4 h-4" strokeWidth={1.5} />{(t as any)("contact.send")}</>
                )}
              </button>

              <div className="pt-2 border-t border-stone-100 space-y-1.5">
                <a href={`mailto:${contactData.email}`} className="flex items-center gap-2 text-xs text-stone-500 hover:text-stone-800 transition-colors">
                  <Mail className="w-3 h-3" strokeWidth={1.5} />{contactData.email}
                </a>
                <a href={`tel:${contactData.phone}`} className="flex items-center gap-2 text-xs text-stone-500 hover:text-stone-800 transition-colors">
                  <Phone className="w-3 h-3" strokeWidth={1.5} />{contactData.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}