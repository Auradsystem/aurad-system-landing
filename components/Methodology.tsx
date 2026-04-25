"use client";

import React from "react";
import { useReveal, useStaggerReveal } from "@/lib/hooks/use-reveal";

const steps = [
  {
    num: "01",
    title: "Comprendre",
    desc: "On parle de votre métier, pas de technologie. Quels sont vos goulots d'étranglement ? Où perdez-vous du temps ? Quels process pourraient être automatisés ?",
  },
  {
    num: "02",
    title: "Prototyper",
    desc: "Un premier résultat fonctionnel en 2 semaines. Vous testez avec vos propres données, sur vos propres cas d'usage. Pas de PowerPoint — du code qui tourne.",
  },
  {
    num: "03",
    title: "Déployer",
    desc: "Intégration dans vos outils existants. Formation de vos équipes. Pas de disruption — l'outil s'adapte à votre façon de travailler, pas l'inverse.",
  },
  {
    num: "04",
    title: "Mesurer",
    desc: "ROI concret, pas des promesses. Combien de temps gagné ? Combien d'erreurs évitées ? On mesure, on ajuste, on itère.",
  },
];

export const Methodology: React.FC = () => {
  const titleRef = useReveal<HTMLDivElement>();
  const getRef = useStaggerReveal<HTMLDivElement>(steps.length, 0.05);

  return (
    <section
      id="methodology"
      className="py-32 relative"
      style={{ background: "rgba(10,18,36,0.9)" }}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-7">
        <div ref={titleRef} className="reveal mb-16">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-aurad-400 mb-3.5">
            Comment je vous accompagne
          </p>
          <h2
            className="font-bold text-white leading-[1.1] tracking-[-0.025em]"
            style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
          >
            Un process simple.
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #67e8f9, #22d3ee)",
              }}
            >
              Des résultats rapides.
            </span>
          </h2>
        </div>

        <div className="relative max-w-[680px]">
          {/* Vertical connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[23px] top-12 bottom-8 w-0.5 rounded-sm pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(34,211,238,0.5) 0%, rgba(34,211,238,0.1) 70%, transparent 100%)",
            }}
          />

          {steps.map((s, i) => (
            <div
              key={s.num}
              ref={getRef(i)}
              className={`reveal flex gap-6 relative ${i < steps.length - 1 ? "pb-10" : ""}`}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-[12px] font-bold relative z-[1]"
                style={{
                  background:
                    i === 0
                      ? "rgba(34,211,238,0.15)"
                      : "rgba(255,255,255,0.03)",
                  border:
                    i < 2
                      ? "2px solid rgba(34,211,238,0.4)"
                      : "2px solid rgba(255,255,255,0.1)",
                  color: i < 2 ? "#22d3ee" : "#475569",
                }}
              >
                {s.num}
              </div>

              <div className="pt-2.5">
                <h3 className="text-[19px] font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-[14.5px] text-slate-600 leading-[1.75]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
