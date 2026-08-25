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
      <div className="absolute inset-0">
        <Image
          src="/images/hero-emergency-crane.png"
          alt="Tree Rescue 24 emergency crane and crew removing a storm-damaged tree in Tampa Bay"
          fill
          sizes="100vw"
          priority={imagePriority}
          fetchPriority={imagePriority ? "high" : "auto"}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-forest-950/72" aria-hidden="true" />
      </div>
      <div className="relative mx-auto grid min-h-[560px] w-full max-w-6xl items-center gap-8 px-4 py-12 md:min-h-[640px] md:grid-cols-[1.2fr_0.8fr] md:py-16">
        <div>
          <p className="inline-flex min-h-12 items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-3 py-2 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Tampa · Wesley Chapel · 24/7
          </p>
          <h1 className="speakable-headline mt-5 max-w-3xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="speakable-lede mt-5 max-w-xl text-lg leading-8 text-cream/90">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full bg-orange-500 px-6 font-display text-lg font-bold text-white shadow-lg shadow-orange-950/30 hover:bg-orange-400"
              aria-label="Call Now - 24/7 Emergency"
            >
              Call Now - 24/7 Emergency
            </a>
            <Link
              href="/service-areas"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream/20 px-6 font-semibold text-cream hover:bg-white/10"
            >
              View service areas
            </Link>
          </div>
          <p className="mt-5 text-sm text-cream/80">
            {business.phoneDisplay} · {business.hoursLabel}
          </p>
        </div>
        <div className="relative mx-auto hidden aspect-[4/3] w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/15 shadow-2xl md:block">
          <Image
            src="/images/hero-arborists.png"
            alt="Licensed arborists trimming a live oak over a Tampa Bay home"
            fill
            sizes="420px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
