"use client";

import React from "react";
import { useReveal } from "@/lib/hooks/use-reveal";

const aboutItems = [
  {
    num: "01",
    title: "Diagnostic métier",
    desc: "Avant de parler technologie, je comprends votre activité. Vos contraintes, vos process, vos points de friction. La solution vient du problème, pas l'inverse.",
  },
  {
    num: "02",
    title: "Conception sur-mesure",
    desc: "Agents IA, applications métier ou ingénierie technique — chaque solution est conçue pour votre réalité opérationnelle, pas adaptée à la va-vite.",
  },
  {
    num: "03",
    title: "Livraison complète",
    desc: "Du prototype au déploiement, un seul interlocuteur. Formation de vos équipes incluse. Un livrable opérationnel, pas un dossier d'études.",
  },
];

export const About: React.FC = () => {
  const quoteRef = useReveal<HTMLDivElement>();
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>(0.06);

  return (
    <section
      id="approach"
      className="py-32 bg-aurad-950 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[45%] h-full"
        style={{
          background:
            "linear-gradient(to left, rgba(34,211,238,0.02) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-7 relative">
        {/* Big quote */}
        <div
          ref={quoteRef}
          className="reveal text-center pb-20 mb-20 border-b border-white/[0.05]"
        >
          <p
            className="font-bold tracking-[-0.03em] leading-[1.15]"
            style={{
              fontSize: "clamp(26px, 4vw, 52px)",
              color: "rgba(255,255,255,0.1)",
            }}
          >
            &ldquo;On code ce qu&apos;on{" "}
            <span style={{ color: "rgba(34,211,238,0.4)" }}>connaît.</span>
            &rdquo;
          </p>
        </div>

        <div className="grid gap-16 items-start [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          <div ref={leftRef} className="reveal">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-aurad-400 mb-3.5">
              Une approche pragmatique
            </p>
            <h2
              className="font-bold text-white leading-[1.15] tracking-[-0.025em] mb-6"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
            >
              Ingénieur terrain,
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #67e8f9, #22d3ee)",
                }}
              >
                développeur expert.
              </span>
            </h2>
            <p className="text-[15px] text-slate-500 leading-[1.85] mb-4">
              Fondateur d&apos;Aurad System, ingénieur avec une double expertise
              : comprendre les métiers techniques et coder les solutions qui
              leur manquent.
            </p>
            <p className="text-[15px] text-slate-500 leading-[1.85]">
              J&apos;ai construit des agents IA, des GMAO, des outils de scoring
              réglementaire, des plateformes de gestion — toujours en partant du
              terrain. BTP, énergie, industrie, services.
            </p>
          </div>

          <div ref={rightRef} className="reveal flex flex-col gap-3">
            {aboutItems.map((item) => (
              <div
                key={item.num}
                className="card flex gap-4 items-start py-[18px] px-[22px]"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-[7px] bg-aurad-400/[0.07] border border-aurad-400/[0.15] text-aurad-400 text-[11px] font-bold flex items-center justify-center">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
