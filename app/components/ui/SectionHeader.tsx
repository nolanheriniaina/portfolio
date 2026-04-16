interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    subtitle?: string;
  }
  
  export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
    return (
      <div className="mb-10">
        <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-2">{title}</h2>
        {subtitle && <p className="text-stone-500 text-sm">{subtitle}</p>}
      </div>
    );
  }