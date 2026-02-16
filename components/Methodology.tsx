import React, { useState } from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { DynamicIcon } from './ui/Icons';

interface Step {
  title: string;
  desc: string;
  iconName: string;
}

interface Scenario {
  id: string;
  tabIcon: string;
  tabTitle: string;
  tabSub: string;
  title: string;
  description: string;
  steps: Step[];
  kpiValue: string;
  kpiLabel: string;
  result: string;
  cta: string;
}

const scenarios: Scenario[] = [
  {
    id: 'amo',
    tabIcon: 'HardHat',
    tabTitle: 'Vous lancez un projet',
    tabSub: 'AMO / MOE',
    title: "Vous lancez un projet de construction ou rénovation",
    description: "Vous avez un projet avec des lots techniques (sécurité, incendie, contrôle d'accès, caméras thermiques, GTC). Vous n'avez pas l'expertise interne pour cadrer les besoins, choisir les entreprises, piloter le chantier.",
    steps: [
      { title: "Audit de besoins", desc: "Contraintes réglementaires, calendrier, budget, identification des opérations éligibles aux CEE.", iconName: "ClipboardList" },
      { title: "Rédaction de CCTP", desc: "Cahiers des charges pour chaque lot. Les entreprises savent ce qu'on attend d'elles.", iconName: "FileText" },
      { title: "Analyse des offres", desc: "Comparaison sur la technique, le planning, la conformité. Pas seulement le prix.", iconName: "BarChart2" },
      { title: "Pilotage chantier", desc: "Coordination des entreprises, vérification de conformité, interfaces entre lots.", iconName: "HardHat" },
      { title: "Réception", desc: "Validation du fonctionnement, respect des normes, DOE complets.", iconName: "CheckCircle" },
    ],
    kpiValue: "15-25%",
    kpiLabel: "de surcoûts évités en moyenne",
    result: "Vous évitez 15-25% de surcoûts en moyenne et gagnez 2-6 semaines sur le planning.",
    cta: "Échanger sur votre projet",
  },
  {
    id: 'ao',
    tabIcon: 'FileText',
    tabTitle: "Vous répondez à un AO",
    tabSub: 'Aide réponse AO',
    title: "Vous répondez à un appel d'offres",
    description: "L'analyse du DCE, la rédaction du mémoire technique et le chiffrage vous prennent 8-15 heures. Vous ne savez pas si votre offre sera compétitive.",
    steps: [
      { title: "Analyse du DCE", desc: "Points ambigus, risques, opportunités de différenciation.", iconName: "Search" },
      { title: "Stratégie de réponse", desc: "Positionnement prix, différenciation technique, planning.", iconName: "Crosshair" },
      { title: "Mémoire technique", desc: "Structuré pour valoriser vos compétences. Plus de copier-coller.", iconName: "PenTool" },
      { title: "Optimisation chiffrage", desc: "Cohérence technique/prix. Éviter les marchés à perte.", iconName: "TrendingUp" },
    ],
    kpiValue: "+20%",
    kpiLabel: "de taux de transformation sur vos réponses",
    result: "+10-20% de taux de transformation sur vos réponses. Vous traitez les AO stratégiques sans y passer 3 jours.",
    cta: "Demander un accompagnement AO",
  },
  {
    id: 'moe',
    tabIcon: 'Users',
    tabTitle: "Vous êtes MOE",
    tabSub: 'Renfort lots spéciaux',
    title: "Vous êtes architecte ou MOE",
    description: "Vous pilotez un projet de construction ou rénovation. La coordination générale, c'est votre métier. Les lots techniques (sécurité incendie, caméras thermiques, GTC, contrôle d'accès), pas forcément. Je travaille avec un réseau de partenaires architectes pour couvrir l'ensemble de vos besoins.",
    steps: [
      { title: "CCTP techniques", desc: "Rédaction des cahiers des charges lots spéciaux (sécurité, incendie, caméras thermiques, GTC, CFO/CFA).", iconName: "FileJson" },
      { title: "Analyse des offres", desc: "Comparaison des offres des entreprises spécialisées.", iconName: "Users" },
      { title: "Coordination chantier", desc: "Pilotage lots techniques, interfaces électricité / GTC / sécurité.", iconName: "Activity" },
      { title: "Réceptions techniques", desc: "Validation des installations et des DOE. Projet complet.", iconName: "Award" },
    ],
    kpiValue: "100%",
    kpiLabel: "projet livré complet, sans sous-traitance généraliste",
    result: "Vous gardez la relation client et livrez un projet complet, sans sous-traiter à un bureau d'études généraliste.",
    cta: "Discuter d'une collaboration",
  },
];

export const Methodology: React.FC = () => {
  const [activeId, setActiveId] = useState('amo');
  const active = scenarios.find((s) => s.id === activeId)!;

  return (
    <section id="methodology" className="py-24 relative bg-slate-900">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-aurad-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Comment je vous <span className="text-aurad-400">accompagne</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Trois approches selon votre rôle dans le projet.
          </p>
        </div>

        {/* Tabs - Card style */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 border text-left ${
                activeId === s.id
                  ? 'bg-slate-800 border-aurad-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)] -translate-y-0.5'
                  : 'bg-slate-800/30 border-white/5 hover:border-white/10 hover:bg-slate-800/50'
              }`}
            >
              <div className={`p-2.5 rounded-lg shrink-0 ${
                activeId === s.id ? 'bg-aurad-500 text-white' : 'bg-slate-700 text-gray-400'
              }`}>
                <DynamicIcon name={s.tabIcon} size={18} />
              </div>
              <div>
                <div className={`text-sm font-bold ${activeId === s.id ? 'text-white' : 'text-gray-300'}`}>
                  {s.tabTitle}
                </div>
                <div className="text-xs text-gray-500">{s.tabSub}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active scenario content - 2 column layout */}
        <div className="glass-card rounded-2xl p-1 relative overflow-hidden">
          <div className="bg-slate-950/80 backdrop-blur-xl rounded-xl p-6 md:p-10 relative z-10">

            <div className="flex flex-col lg:flex-row gap-10">

              {/* Left: Context + Process Flow */}
              <div className="flex-1 min-w-0">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{active.title}</h3>
                  <p className="text-gray-400">{active.description}</p>
                </div>

                {/* Process Flow - Desktop horizontal */}
                <div className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-white/5">
                  <h4 className="text-xs font-bold text-aurad-500 uppercase tracking-widest mb-8">Processus</h4>

                  {/* Desktop: horizontal flow */}
                  <div className="hidden md:flex flex-row justify-between items-start relative">
                    {/* Connecting line */}
                    <div className="absolute top-7 left-0 w-full h-0.5 bg-gray-800 rounded"></div>
                    <div className="absolute top-7 left-0 w-full h-0.5 bg-gradient-to-r from-aurad-500/60 to-aurad-500/20 rounded"></div>

                    {active.steps.map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center w-36 relative z-10">
                        {/* Node */}
                        <div className="w-14 h-14 rounded-xl bg-slate-800 border-2 border-aurad-500/40 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                          <DynamicIcon name={step.iconName} className="text-aurad-400" size={24} />
                        </div>
                        {/* Badge */}
                        <div className="mt-3 px-2 py-0.5 text-xs font-bold rounded-full bg-aurad-900/30 text-aurad-300 border border-aurad-500/20">
                          0{idx + 1}
                        </div>
                        {/* Text */}
                        <div className="mt-2 text-center">
                          <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                          <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile: vertical timeline */}
                  <div className="md:hidden flex flex-col gap-6 relative pl-3">
                    {/* Vertical line */}
                    <div className="absolute left-[1.65rem] top-0 bottom-0 w-0.5 bg-aurad-500/20"></div>

                    {active.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-800 border-2 border-aurad-500/40 flex items-center justify-center z-10">
                          <DynamicIcon name={step.iconName} className="text-aurad-400" size={20} />
                        </div>
                        <div className="pt-1">
                          <span className="text-xs font-bold px-2 py-0.5 rounded border bg-aurad-900/20 text-aurad-400 border-aurad-500/20 mb-1 inline-block">
                            0{idx + 1}
                          </span>
                          <h4 className="font-bold text-white text-sm">{step.title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: KPI + Benefit + CTA */}
              <div className="lg:w-72 xl:w-80 shrink-0 flex flex-col gap-5">
                {/* KPI Card */}
                <div className="rounded-2xl bg-gradient-to-br from-aurad-900/30 to-slate-900 border border-aurad-500/15 p-6">
                  <div className="text-xs font-bold text-aurad-500 uppercase tracking-widest mb-4">Résultat</div>
                  <div className="text-5xl font-bold text-aurad-400 mb-2">{active.kpiValue}</div>
                  <div className="text-sm text-gray-300">{active.kpiLabel}</div>
                </div>

                {/* Benefit Card */}
                <div className="rounded-2xl bg-gradient-to-br from-aurad-900/20 to-slate-950 border border-aurad-500/10 p-6">
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Award className="text-aurad-400 w-5 h-5" />
                    Bénéfice clé
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {active.result}
                  </p>
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-aurad-500 hover:bg-aurad-400 text-white font-bold rounded-lg text-sm transition-colors shadow-lg shadow-aurad-500/20"
                  >
                    {active.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
