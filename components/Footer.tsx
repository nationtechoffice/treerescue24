import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { business, cities, fullAddress, navLinks, services } from "@/lib/business";

export function Footer() {
  return (
    <footer className="border-t border-forest-800 bg-forest-950 pb-20 text-cream md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <LogoMark className="h-12 w-12" />
            <p className="font-display text-xl font-bold">Tree Rescue 24</p>
          </div>
          <p className="mt-4 text-sm leading-6 text-cream/80">{business.description}</p>
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.2em] text-gold uppercase">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="hover:text-gold" href={service.href}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.2em] text-gold uppercase">
            Service areas
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link className="hover:text-gold" href={city.href}>
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.2em] text-gold uppercase">NAP</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/85">
            <li>
              <strong className="text-cream">{business.name}</strong>
            </li>
            <li>
              <a className="hover:text-gold" href={`tel:${business.phoneTel}`}>
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region} {business.address.postalCode}
            </li>
            <li>{business.hoursLabel}</li>
          </ul>
          <p className="mt-4 text-xs text-cream/60">
            Home-based Google verification address: {fullAddress}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tree Rescue 24. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold">
                {link.label}
              </Link>
            ))}
            <Link href="/brand-assets" className="hover:text-gold">
              Brand assets
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
