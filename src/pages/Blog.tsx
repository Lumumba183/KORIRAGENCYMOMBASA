import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { useSeo } from "@/components/Seo";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

export default function Blog() {
  useSeo("Blog & Travel Journal | Korir Agency — Coastal Kenya Guides & Insights",
    "Expert guides to Diani Beach, Coastal Kenya property investment, Tsavo safaris, SGR transfers and hidden gems of the South Coast.");

  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main>
      <PageHero image="/images/dhow-wasini.jpg" eyebrow="The Journal" title="Stories From the South Coast"
        subtitle="Travel guides, investment insights and the insider knowledge our clients ask for most." />

      <section className="py-16 sm:py-20">
        <div className="container-lux">
          {/* Featured */}
          <Reveal>
            <Link to={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl bg-white shadow-lux ring-1 ring-navy-100/60 transition-all hover:-translate-y-1 lg:grid-cols-2">
              <div className="zoom-img h-72 lg:h-auto"><img src={featured.image} alt={featured.title} className="h-full w-full object-cover" /></div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="eyebrow">Featured · {featured.category}</p>
                <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-navy-950 group-hover:text-gold-700 sm:text-3xl">{featured.title}</h2>
                <p className="mt-4 leading-7 text-navy-700/85">{featured.excerpt}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-navy-500">{featured.date} · {featured.readTime}</p>
                <span className="mt-6 flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold-600">
                  Read the guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-16">
            <SectionHead align="left" eyebrow="Latest Articles" title="More From the Journal" />
            <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {rest.map((b, i) => (
                <Reveal key={b.slug} delay={(i % 4) as 0 | 1 | 2 | 3} className="h-full">
                  <Link to={`/blog/${b.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60 transition-all hover:-translate-y-1.5 hover:shadow-lux">
                    <div className="zoom-img h-44"><img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover" /></div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gold-600">{b.category}</p>
                      <h3 className="mt-2 font-display text-base font-semibold leading-snug text-navy-950 group-hover:text-gold-700">{b.title}</h3>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-navy-700/80">{b.excerpt}</p>
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-navy-400">{b.date} · {b.readTime}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
