interface Props {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/** Cinematic banner used at the top of inner pages */
export default function PageHero({ image, eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden bg-navy-950 sm:min-h-[48vh]">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/25" />
      <div className="container-lux relative pb-12 pt-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}
