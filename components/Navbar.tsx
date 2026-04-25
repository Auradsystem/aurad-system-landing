"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
import { pushEvent } from "@/lib/gtm";

const navItems = [
  { label: "Agents IA", href: "/agents-ia" },
  { label: "Développement", href: "/developpement" },
  { label: "Ingénierie", href: "/ingenierie-technique" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Blog", href: "/blog" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 24);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        aria-label="Navigation principale"
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-aurad-950/[0.88] backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-7">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Logo className="w-[34px] h-[34px]" />
              <span className="text-[17px] font-bold tracking-[0.09em] text-white">
                AURAD <span className="text-aurad-400">SYSTEM</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-[12px] font-medium tracking-[0.07em] uppercase text-slate-500 hover:text-slate-200 transition-colors rounded-md"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() =>
                  pushEvent({
                    event: "cta_click",
                    cta_text: "Contact",
                    cta_location: "nav",
                  })
                }
                className="ml-3 inline-flex items-center px-5 py-[9px] rounded-full text-[13px] font-semibold tracking-[0.02em] text-aurad-400 bg-aurad-400/[0.08] border border-aurad-400/30 hover:bg-aurad-400 hover:text-aurad-950 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={
                isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
              }
              className="md:hidden p-2 text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? (
                <X className="w-[22px] h-[22px]" />
              ) : (
                <Menu className="w-[22px] h-[22px]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[99] flex flex-col items-center justify-center gap-7 bg-aurad-950/[0.97] transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)] md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Fermer le menu"
          className="absolute top-5 right-5 p-2 text-slate-500 hover:text-white"
        >
          <X className="w-[22px] h-[22px]" />
        </button>
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[22px] font-semibold tracking-[0.06em] text-white"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => {
            setIsMobileMenuOpen(false);
            pushEvent({
              event: "cta_click",
              cta_text: "Me Contacter",
              cta_location: "nav",
            });
          }}
          className="mt-2 px-8 py-3 bg-aurad-400 text-aurad-950 rounded-[10px] text-[15px] font-bold"
        >
          Me contacter
        </Link>
      </div>
    </>
  );
};
