"use client";

import React from "react";
import { Bot, Code2, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useReveal, useStaggerReveal } from "@/lib/hooks/use-reveal";

const services = [
  {
    num: "01",
    title: "Automatiser",
    icon: <Bot className="w-6 h-6" strokeWidth={1.5} />,
    question:
      "Vos équipes passent du temps sur des tâches que l'IA fait mieux qu'elles ?",
    items: [
      "Agents conversationnels sur vos règles métier",
      "RAG sur votre documentation technique — l'info en secondes",
      "Génération automatique de documents réglementaires",
      "Qualification et traitement des demandes entrantes",
    ],
    link: "/agents-ia",
    cta: "Découvrir les agents IA",
  },
  {
    num: "02",
    title: "Construire",
    icon: <Code2 className="w-6 h-6" strokeWidth={1.5} />,
    question:
      "Vous avez besoin d'un outil métier qui n'existe pas sur le marché ?",
    items: [
      "GMAO, plateformes de suivi, dashboards opérationnels",
      "Prévision cash-flow et scoring de conformité",
      "Automatisation documentaire — plus de copier-coller",
      "Applications web sur-mesure pour votre secteur",
    ],
    link: "/developpement",
    cta: "Voir les applications",
  },
  {
    num: "03",
    title: "Piloter",
    icon: <Building2 className="w-6 h-6" strokeWidth={1.5} />,
    question: "Vous lancez un projet technique avec des lots spéciaux ?",
    items: [
      "AMO/MOE : sécurité, incendie, GTC, contrôle d'accès",
      "Rédaction de CCTP et analyse des offres",
      "Pilotage chantier et réception conforme",
      "Aide à la réponse aux appels d'offres",
    ],
    link: "/ingenierie-technique",
    cta: "En savoir plus",
  },
];

export const Services: React.FC = () => {
  const titleRef = useReveal<HTMLDivElement>();
  const getRef = useStaggerReveal<HTMLDivElement>(services.length);

  return (
    <section
      id="services"
      className="py-32 bg-aurad-950 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(34,211,238,0.025) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-7 relative">
        <div ref={titleRef} className="reveal mb-16">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-aurad-400 mb-3.5">
            Ce que je fais concrètement
          </p>
          <h2
            className="font-bold text-white leading-[1.1] tracking-[-0.025em]"
            style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
          >
            Trois façons d&apos;avancer,
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #67e8f9, #22d3ee)",
              }}
            >
              selon votre besoin.
            </span>
          </h2>
        </div>

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {services.map((s, i) => (
            <div
              key={s.num}
              ref={getRef(i)}
              className="card reveal relative overflow-hidden flex flex-col p-7 sm:p-8"
            >
              {/* Faint big number */}
              <span
                aria-hidden="true"
                className="absolute top-3 right-4 text-[72px] font-extrabold leading-none select-none tracking-[-0.04em]"
                style={{ color: "rgba(34,211,238,0.04)" }}
              >
                {s.num}
              </span>

              {/* Accent line on left */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-[20%] bottom-[20%] w-0.5 rounded-sm"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(34,211,238,0.4), transparent)",
                }}
              />

              <div className="w-12 h-12 mb-5 rounded-[11px] bg-aurad-400/[0.07] border border-aurad-400/[0.14] flex items-center justify-center text-aurad-400">
                {s.icon}
              </div>

              <h3 className="text-[22px] font-bold text-white mb-2">
                {s.title}
              </h3>
              <p className="text-[13px] italic text-slate-600 mb-5 leading-[1.65]">
                {s.question}
              </p>

              <ul className="flex-1 list-none flex flex-col gap-2.5 mb-7">
                {s.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 text-[13.5px] text-slate-500 leading-[1.5]"
                  >
                    <span className="text-aurad-400 text-[8px] mt-[5px] flex-shrink-0">
                      ▶
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={s.link}
                className="inline-flex items-center gap-1.5 text-aurad-400 text-[13px] font-semibold transition-[gap] duration-200 hover:gap-2.5"
              >
                {s.cta}
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
