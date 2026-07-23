import Reveal from "@/components/Reveal";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}

export default function SectionHead({ eyebrow, title, subtitle, light, align = "center" }: Props) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`h-display mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      {align === "center" ? (
        <div className="gold-divider">
          <span className="ornament" />
          <span className="h-2 w-2 rotate-45 bg-gold-500" />
          <span className="ornament" />
        </div>
      ) : (
        <div className="mt-5 flex items-center gap-3">
          <span className="ornament" />
          <span className="h-2 w-2 rotate-45 bg-gold-500" />
          <span className="ornament" />
        </div>
      )}
      {subtitle && (
        <p className={`mt-5 max-w-2xl text-base leading-7 ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/75" : "text-navy-700/80"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
