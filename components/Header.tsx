"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "@/components/LogoMark";
import { business, navLinks } from "@/lib/business";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-40 border-b border-forest-800/80 bg-forest-950/95 text-cream backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5"
          aria-label="Tree Rescue 24 home"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="h-11 w-11 shrink-0 md:h-14 md:w-14" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-wide text-cream md:text-xl">
              Tree Rescue 24
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-orange-400 sm:block">
              24/7 Emergency Tree Service
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-white/10 text-gold"
                    : "text-cream/85 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={`tel:${business.phoneTel}`}
          className="hidden shrink-0 rounded-full bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-950/40 hover:bg-orange-400 md:inline-flex"
          aria-label={`Call Tree Rescue 24 at ${business.phoneDisplay}`}
        >
          {business.phoneDisplay}
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-cream lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="absolute inset-x-0 top-16 z-50 border-t border-white/10 bg-forest-950 shadow-xl md:top-20 lg:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-base font-semibold text-cream hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${business.phoneTel}`}
            className="mt-2 rounded-full bg-orange-500 px-4 py-3 text-center text-base font-bold text-white"
            aria-label={`Call Now - 24/7 Emergency, ${business.phoneDisplay}`}
            onClick={() => setOpen(false)}
          >
            Call Now · {business.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
