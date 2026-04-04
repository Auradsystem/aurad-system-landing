import React from "react";
import { SEO } from "../components/SEO";
import { Building2, Shield, Flame, Layers, Zap, Award } from "lucide-react";
import { CTASection } from "../components/shared/CTASection";

const lots = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Surete & Securite",
    desc: "Videosurveillance, cameras thermiques, controle d'acces, interphonie.",
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "Securite incendie",
    desc: "Detection incendie, sprinklage, desenfumage. De l'audit reglementaire a la mise en service.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Systemes techniques",
    desc: "GTC/GTB, electricite CFO/CFA. Coordination des interfaces entre lots.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Valorisation CEE",
    desc: "Montage des dossiers CEE (GTB, eclairage, CVC). Acces a un reseau de partenaires delegataires.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certifications APSAD",
    desc: "Accompagnement I7 (installation) et F7 (maintenance). Un atout pour vos appels d'offres publics.",
  },
];

const process = [
  {
    num: "01",
    title: "Audit de besoins",
    desc: "Contraintes reglementaires, calendrier, budget, operations eligibles aux CEE.",
  },
  {
    num: "02",
    title: "Redaction de CCTP",
    desc: "Cahiers des charges precis pour chaque lot. Les entreprises savent ce qu'on attend d'elles.",
  },
  {
    num: "03",
    title: "Analyse des offres",
    desc: "Comparaison technique, planning, conformite. Pas seulement le prix.",
  },
  {
    num: "04",
    title: "Pilotage chantier",
    desc: "Coordination des entreprises, verification de conformite, interfaces entre lots.",
  },
  {
    num: "05",
    title: "Reception",
    desc: "Validation du fonctionnement, respect des normes, DOE complets.",
  },
];

export default function IngenieriePage() {
  return (
    <>
      <SEO
        title="Ingenierie technique BTP — AMO/MOE lots speciaux"
        description="AMO et MOE pour lots techniques : surete, securite incendie, GTC/GTB, controle d'acces. De l'audit a la reception, un interlocuteur unique."
        path="/ingenierie-technique"
      />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aurad-900/50 border border-aurad-500/30 mb-6">
            <Building2 className="w-4 h-4 text-aurad-400" />
            <span className="text-aurad-200 text-xs font-medium tracking-wide uppercase">
              Ingenierie technique
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            AMO/MOE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurad-300 to-blue-600">
              lots techniques
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Assistance a maitrise d'ouvrage et maitrise d'oeuvre pour vos
            projets techniques. De l'audit a la reception, un interlocuteur
            unique.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">
            Lots techniques couverts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lots.map((l) => (
              <div
                key={l.title}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <div className="text-aurad-400 mb-4">{l.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{l.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {l.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">
            Processus d'intervention
          </h2>
          <div className="space-y-8">
            {process.map((s) => (
              <div key={s.num} className="flex gap-6 items-start">
                <span className="text-aurad-400 font-mono text-2xl font-bold flex-shrink-0 w-12">
                  {s.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Un projet technique a lancer ?"
        buttonHref="/?domain=piloter#contact"
        subtitle="Echangeons sur votre projet. Audit de besoins offert pour les projets en Ile-de-France."
      />
    </>
  );
}
