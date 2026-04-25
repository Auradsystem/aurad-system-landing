"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { pushEvent } from "@/lib/gtm";

const valuePills = [
  { icon: "⚡", label: "Prototype en 2 semaines" },
  { icon: "◎", label: "1 interlocuteur unique" },
  { icon: "◈", label: "BTP · Énergie · Industrie" },
];

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Présentation Aurad System"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]"
    >
      {/* Animated background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[300px] -right-[200px] w-[800px] h-[800px] rounded-full blob-float"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[150px] -left-[100px] w-[600px] h-[600px] rounded-full blob-float-reverse"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div className="grid-overlay" />

      <div className="relative z-[2] max-w-[1240px] w-full mx-auto px-6 sm:px-7 text-center pt-20 pb-[120px]">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-9 rounded-full bg-aurad-400/[0.06] border border-aurad-400/[0.18]">
          <span className="relative flex w-2 h-2">
            <span className="ping-cyan absolute inset-0 rounded-full bg-aurad-400 opacity-50" />
            <span className="relative w-2 h-2 rounded-full bg-aurad-400 block" />
          </span>
          <span className="text-aurad-300 text-[11px] font-semibold tracking-[0.1em] uppercase">
            Disponible pour nouveaux projets
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-bold text-white mb-7 leading-[1.04] tracking-[-0.03em]"
          style={{ fontSize: "clamp(42px, 7.5vw, 96px)" }}
        >
          Je comprends votre métier.
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #67e8f9 0%, #22d3ee 45%, #38bdf8 100%)",
              filter: "drop-shadow(0 0 30px rgba(34,211,238,0.35))",
            }}
          >
            Je code la solution.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-slate-500 max-w-[580px] mx-auto mb-11 leading-[1.75]"
          style={{ fontSize: "clamp(16px, 2.2vw, 20px)" }}
        >
          Consulting IA et développement sur-mesure pour les entreprises qui
          veulent automatiser sans perdre le contrôle. Un interlocuteur unique,
          du diagnostic au déploiement.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3.5 justify-center mb-[60px]">
          <a
            href="#contact"
            onClick={() =>
              pushEvent({
                event: "cta_click",
                cta_text: "Evaluer mon projet",
                cta_location: "hero",
              })
            }
            className="btn-primary"
          >
            Évaluer mon projet
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
          <Link
            href="/realisations"
            onClick={() =>
              pushEvent({
                event: "cta_click",
                cta_text: "Voir les realisations",
                cta_location: "hero",
              })
            }
            className="btn-secondary"
          >
            Voir les réalisations
          </Link>
        </div>

        {/* Value pills */}
        <div className="flex flex-wrap gap-2.5 justify-center">
          {valuePills.map((p) => (
            <div
              key={p.label}
              className="inline-flex items-center gap-2 px-[18px] py-2 rounded-full bg-white/[0.03] border border-white/[0.07] text-[13px] text-slate-400"
            >
              <span className="text-aurad-400 text-[11px]">{p.icon}</span>
              {p.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-9 left-1/2 -translate-x-1/2 bounce-soft"
      >
        <div className="w-6 h-10 border-[1.5px] border-white/[0.15] rounded-xl flex justify-center pt-[5px] pb-[5px]">
          <div className="w-[3px] h-2 bg-aurad-400 rounded-sm scroll-dot" />
        </div>
      </div>
    </section>
  );
};
