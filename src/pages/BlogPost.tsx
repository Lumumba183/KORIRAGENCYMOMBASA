import { Link, useParams, Navigate } from "react-router";
import { ArrowLeft, ArrowRight, MessageCircle, CalendarDays, Clock3, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { waLink } from "@/data/site";
import { useSeo } from "@/components/Seo";
import Reveal from "@/components/Reveal";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useSeo(
    post ? `${post.title} | Korir Agency Journal` : "Article | Korir Agency",
    post?.excerpt
  );

  if (!post) return <Navigate to="/blog" replace />;

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-navy-950">
        <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
        <div className="container-lux relative pb-12 pt-28">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70 transition hover:text-gold-300">
            <ArrowLeft className="h-4 w-4" /> All Articles
          </Link>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl">{post.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-wider text-white/70">
            <span className="flex items-center gap-1.5"><Tag className="h-3.5 w-3.5 text-gold-400" /> {post.category}</span>
            <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5 text-gold-400" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5 text-gold-400" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 sm:py-20">
        <div className="container-lux">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <article className="article-body">
                {post.content.map((b, i) => {
                  if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
                  if (b.type === "quote") return <blockquote key={i}>{b.text}</blockquote>;
                  if (b.type === "ul") return <ul key={i}>{b.items!.map((li) => <li key={li}>{li}</li>)}</ul>;
                  return <p key={i}>{b.text}</p>;
                })}
              </article>
            </Reveal>

            {/* CTA */}
            <Reveal className="mt-14">
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 p-8 text-center shadow-lux sm:p-12">
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{post.cta.heading}</h3>
                <p className="mx-auto mt-4 max-w-xl text-white/80">{post.cta.text}</p>
                <a href={waLink(`Hello Korir Agency! I just read "${post.title}" — ${post.cta.heading}`)} target="_blank" rel="noreferrer" className="btn-wa mt-8">
                  <MessageCircle className="h-5 w-5" /> {post.cta.button}
                </a>
                <p className="mt-4 text-xs text-white/50">Replies in minutes · +254 722 280 840</p>
              </div>
            </Reveal>
          </div>

          {/* Related */}
          <div className="mt-20">
            <h3 className="text-center font-display text-2xl font-bold text-navy-950 sm:text-3xl">Keep Reading</h3>
            <div className="mt-8 grid gap-7 md:grid-cols-3">
              {related.map((b, i) => (
                <Reveal key={b.slug} delay={(i % 3) as 0 | 1 | 2} className="h-full">
                  <Link to={`/blog/${b.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60 transition-all hover:-translate-y-1.5 hover:shadow-lux">
                    <div className="zoom-img h-44"><img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover" /></div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gold-600">{b.category}</p>
                      <h4 className="mt-2 font-display text-base font-semibold leading-snug text-navy-950 group-hover:text-gold-700">{b.title}</h4>
                      <span className="mt-auto flex items-center gap-2 pt-4 text-xs font-bold uppercase tracking-wider text-navy-900">
                        Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
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
