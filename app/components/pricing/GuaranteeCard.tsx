interface GuaranteeCardProps {
    icon: React.ElementType;
    title: string;
    desc: string;
  }
  
  export default function GuaranteeCard({ icon: Icon, title, desc }: GuaranteeCardProps) {
    return (
      <div className="flex items-start gap-3 p-4 rounded border border-stone-100 bg-stone-50 transition-all duration-200 hover:border-stone-200 hover:bg-white hover:shadow-sm">
        <div className="w-7 h-7 rounded bg-amber-50 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-amber-100">
          <Icon className="w-3.5 h-3.5 text-amber-700" strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-xs font-medium text-stone-900 mb-0.5">{title}</p>
          <p className="text-xs text-stone-500 leading-relaxed">{desc}</p>
        </div>
      </div>
    );
  }