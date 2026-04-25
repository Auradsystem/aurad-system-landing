import React from "react";

const TICKER = [
  "Agents IA Métier",
  "RAG Documentaire",
  "Applications Sur-Mesure",
  "AMO / MOE BTP",
  "Automatisation",
  "Développement Web",
  "PME · ETI",
  "Sécurité Incendie",
  "Scoring Réglementaire",
  "GMAO",
];

export const MarqueeTicker: React.FC = () => {
  const doubled = [...TICKER, ...TICKER];
  return (
    <div
      aria-hidden="true"
      className="border-y border-white/[0.05] bg-white/[0.012] py-3 overflow-hidden"
    >
      <div className="marquee-track flex w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-5 whitespace-nowrap"
          >
            <span className="text-slate-700 text-[11px] font-medium tracking-[0.12em] uppercase">
              {item}
            </span>
            <span className="text-aurad-400 text-[6px] opacity-60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};
