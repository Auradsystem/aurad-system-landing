import React from "react";
import { Code2, Database, BarChart2, FileText, Shield } from "lucide-react";
import { CTASection } from "../components/shared/CTASection";

const services = [
  {
    icon: <Database className="w-6 h-6" />,
    title: "GMAO & maintenance",
    desc: "Centralisation des equipements, pilotage des maintenances, tracabilite complete. Connecte a vos outils existants.",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Prevision & cash-flow",
    desc: "Visibilite en temps reel sur votre tresorerie. Echeanciers automatises, synchronisation avec votre ERP.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Scoring & conformite",
    desc: "Auto-evaluation reglementaire automatisee. Identifiez vos ecarts de conformite en quelques minutes au lieu de plusieurs jours.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Automatisation documentaire",
    desc: "Memoires techniques, rapports, CCTP — generes automatiquement a partir de vos donnees. Plus de copier-coller.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Plateformes metier",
    desc: "CRM BTP, simulateurs de chiffrage, portails clients. Des outils conçus pour votre metier, pas des logiciels generiques adaptes a la va-vite.",
  },
];

export default function DeveloppementPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aurad-900/50 border border-aurad-500/30 mb-6">
            <Code2 className="w-4 h-4 text-aurad-400" />
            <span className="text-aurad-200 text-xs font-medium tracking-wide uppercase">
              Developpement sur-mesure
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Applications metier{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurad-300 to-blue-600">
              qui fonctionnent
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Pas un logiciel generique que vous adaptez pendant 6 mois. Un outil
            construit pour votre metier, operationnel en semaines.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aurad-500/30 transition-colors"
              >
                <div className="text-aurad-400 mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Un outil metier a construire ?"
        buttonHref="/?domain=construire#contact"
        subtitle="On definit ensemble le perimetre. Prototype en 2 semaines, deploiement en 4-8."
      />
    </>
  );
}
