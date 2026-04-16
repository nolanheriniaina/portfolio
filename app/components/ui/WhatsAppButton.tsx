import { MessageCircle } from "lucide-react";
import contactData from "@/app/data/contact.json";

interface WhatsAppButtonProps {
  message: string;
  label: string;
  variant?: "primary" | "secondary" | "inline";
  className?: string;
}

export default function WhatsAppButton({
  message,
  label,
  variant = "secondary",
  className = "",
}: WhatsAppButtonProps) {
  const open = () =>
    window.open(
      `https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  const base = "flex items-center justify-center gap-2 font-medium transition-colors";
  const variants = {
    primary:   "px-5 py-2.5 bg-stone-900 hover:bg-stone-700 text-stone-50 text-sm rounded",
    secondary: "w-full py-2.5 border border-stone-300 hover:border-stone-500 text-stone-700 text-xs rounded",
    inline:    "inline-flex px-5 py-2.5 bg-stone-900 hover:bg-stone-700 text-stone-50 text-sm rounded",
  };

  return (
    <button onClick={open} className={`${base} ${variants[variant]} ${className}`}>
      <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
      {label}
    </button>
  );
}