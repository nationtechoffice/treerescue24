import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";

type HeroProps = {
  title: string;
  subtitle: string;
  imagePriority?: boolean;
};

export function Hero({ title, subtitle, imagePriority = false }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 text-cream">
      <div
        className="absolute inset-0 hero-grid opacity-40"
        aria-hidden="true"
      />
      <div className="mx-auto grid min-h-[min(88svh,760px)] w-full max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.15fr_0.85fr] md:py-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Tampa · Wesley Chapel · 24/7
          </p>
          <h1 className="speakable-headline mt-5 max-w-3xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="speakable-lede mt-5 max-w-xl text-lg leading-8 text-cream/85">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex h-14 items-center justify-center rounded-full bg-orange-500 px-6 font-display text-lg font-bold text-white shadow-lg shadow-orange-950/30 hover:bg-orange-400"
              aria-label={`Call Now - 24/7 Emergency at ${business.phoneDisplay}`}
            >
              Call Now - 24/7 Emergency
            </a>
            <Link
              href="/service-areas"
              className="inline-flex h-14 items-center justify-center rounded-full border border-cream/20 px-6 font-semibold text-cream hover:bg-white/10"
            >
              View service areas
            </Link>
          </div>
          <p className="mt-5 text-sm text-cream/70">
            {business.phoneDisplay} · {business.hoursLabel}
          </p>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[320px] md:max-w-[380px]">
          <Image
            src="/brand/treerescue24-logo.png"
            alt="Tree Rescue 24 logo — 24/7 emergency tree service serving Tampa and Wesley Chapel"
            fill
            sizes="(max-width: 768px) 280px, 380px"
            priority={imagePriority}
            fetchPriority={imagePriority ? "high" : "auto"}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
