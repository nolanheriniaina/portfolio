import { Check, Clock } from "lucide-react";
import WhatsAppButton from "@/app/components/ui/WhatsAppButton";

interface PlanCardProps {
  icon: React.ElementType;
  name: string;
  tagline: string;
  price: string;
  period: string;
  badge: string;
  cta: string;
  note: string;
  features: string[];
  whatsappMessage: string;
  featured: boolean;
}

export default function PlanCard({
  icon: Icon,
  name,
  tagline,
  price,
  period,
  badge,
  cta,
  note,
  features,
  whatsappMessage,
  featured,
}: PlanCardProps) {
  return (
    <div
      className={`
        relative flex flex-col border rounded overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-md
        ${featured
          ? "border-amber-300 ring-1 ring-amber-300 hover:shadow-amber-100"
          : "border-stone-200 hover:border-stone-300"
        }
      `}
    >
      {featured && (
        <div className="py-1.5 text-center text-[11px] font-semibold text-amber-900 bg-amber-100 border-b border-amber-200">
          {badge}
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <div className="w-8 h-8 rounded bg-amber-50 flex items-center justify-center mb-4 transition-colors duration-200 group-hover:bg-amber-100">
          <Icon className="w-4 h-4 text-amber-700" strokeWidth={1.5} />
        </div>

        <p className="text-sm font-medium text-stone-900 mb-0.5">{name}</p>
        <p className="text-xs text-stone-400 mb-4">{tagline}</p>

        <div className="mb-5">
          <p className="font-serif text-2xl text-stone-900">{price}</p>
          <p className="text-xs text-stone-400">{period}</p>
        </div>

        <ul className="space-y-2 flex-1 mb-5">
          {(Array.isArray(features) ? features : []).map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-stone-600"
              style={{ animation: `featureIn 0.4s ease ${i * 60}ms both` }}
            >
              <Check
                className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-amber-600"
                strokeWidth={2}
              />
              {f}
            </li>
          ))}
        </ul>

        <WhatsAppButton
          message={whatsappMessage}
          label={cta}
          variant={featured ? "primary" : "secondary"}
        />

        <p className="flex items-center justify-center gap-1 text-center text-[11px] text-stone-400 mt-2">
          <Clock className="w-3 h-3" strokeWidth={1.5} />
          {note}
        </p>
      </div>

      <style>{`
        @keyframes featureIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}