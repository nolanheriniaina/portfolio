"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="divide-y divide-stone-100">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between gap-4 py-3.5 text-left group"
            aria-expanded={openIndex === i}
          >
            <span className="text-sm font-medium text-stone-800 group-hover:text-stone-900 transition-colors duration-150">
              {item.q}
            </span>
            <ChevronDown
              className="w-4 h-4 text-stone-400 flex-shrink-0 transition-transform duration-300 ease-out"
              style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
              strokeWidth={1.5}
            />
          </button>

          <div
            style={{
              display: "grid",
              gridTemplateRows: openIndex === i ? "1fr" : "0fr",
              transition: "grid-template-rows 0.3s ease",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <p className="pb-4 text-sm text-stone-500 leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}