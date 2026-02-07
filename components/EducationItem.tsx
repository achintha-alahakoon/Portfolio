import Image from "next/image";

interface EducationItemProps {
  title: string;
  place: string;
  period: string;
  details: string;
  logo: string;
}

export default function EducationItem({
  title,
  place,
  period,
  details,
  logo,
}: EducationItemProps) {
  return (
    <article className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-slate-800">
        <Image src={logo} alt={place} fill className="object-contain p-1 bg-white" />
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-sm font-semibold text-slate-50">{title}</h2>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            {period}
          </span>
        </div>
        <p className="mt-1 text-xs text-slate-400">{place}</p>
        <p className="mt-3 text-sm text-slate-300">{details}</p>
      </div>
    </article>
  );
}