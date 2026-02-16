import React from 'react';
import { Building2, FileText, Users } from 'lucide-react';

const blocks = [
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Vous lancez un projet de construction ou rénovation",
    subtitle: "Accompagnement AMO / MOE",
    description: "Vous avez un projet avec des lots techniques (sécurité, incendie, contrôle d'accès, GTC). Vous n'avez pas l'expertise interne pour cadrer les besoins, choisir les entreprises, piloter le chantier.",
    steps: [
      { num: "01", title: "Audit de besoins", desc: "Contraintes réglementaires, calendrier, budget, identification des opérations éligibles aux CEE. Je définis le périmètre technique précis." },
      { num: "02", title: "Rédaction de CCTP", desc: "Cahiers des charges pour chaque lot. Les entreprises savent ce qu'on attend d'elles." },
      { num: "03", title: "Analyse des offres", desc: "Comparaison sur la technique, le planning, la conformité. Pas seulement sur le prix." },
      { num: "04", title: "Pilotage chantier", desc: "Coordination des entreprises, vérification de conformité, gestion des interfaces entre lots." },
      { num: "05", title: "Réception et mise en service", desc: "Validation du fonctionnement, respect des normes, DOE complets." }
    ],
    result: "Vous évitez 15-25% de surcoûts en moyenne et gagnez 2-6 semaines sur le planning.",
    cta: "Échanger sur votre projet",
    ctaHref: "#contact"
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Vous répondez à un appel d'offres",
    subtitle: "Aide à la réponse AO",
    description: "L'analyse du DCE, la rédaction du mémoire technique et le chiffrage vous prennent 8-15 heures. Vous ne savez pas si votre offre sera compétitive.",
    steps: [
      { num: "01", title: "Analyse du DCE", desc: "Points ambigus, risques, opportunités de différenciation." },
      { num: "02", title: "Stratégie de réponse", desc: "Positionnement prix, différenciation technique, planning, sous-traitants." },
      { num: "03", title: "Mémoire technique", desc: "Structuré pour valoriser vos compétences sur ce projet spécifique. Plus de copier-coller." },
      { num: "04", title: "Optimisation du chiffrage", desc: "Cohérence technique/prix. Vous évitez les sous-estimations qui mènent à des marchés à perte." }
    ],
    result: "+10-20% de taux de transformation sur vos réponses. Vous traitez les AO stratégiques sans y passer 3 jours.",
    cta: "Demander un accompagnement AO",
    ctaHref: "#contact"
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Vous êtes architecte MOE",
    subtitle: "Renfort technique lots spéciaux",
    description: "Vous pilotez un projet de construction ou rénovation. L'architecture et la coordination générale, c'est votre métier. Les lots techniques (sécurité incendie, GTC, contrôle d'accès), pas forcément.",
    steps: [
      { num: "01", title: "CCTP techniques", desc: "Rédaction des cahiers des charges pour les lots spéciaux (sécurité, incendie, GTC, électricité CFO/CFA)." },
      { num: "02", title: "Analyse des offres", desc: "Assistance dans la comparaison des offres des entreprises spécialisées." },
      { num: "03", title: "Coordination chantier", desc: "Pilotage des lots techniques, gestion des interfaces électricité / GTC / sécurité." },
      { num: "04", title: "Réceptions techniques", desc: "Validation des installations et des DOE. Vous livrez un projet complet." }
    ],
    result: "Vous gardez la relation client et livrez un projet complet, sans sous-traiter à un bureau d'études généraliste.",
    cta: "Discuter d'une collaboration",
    ctaHref: "#contact"
  }
];

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 relative bg-slate-900">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-aurad-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Comment je vous <span className="text-aurad-400">accompagne</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Trois approches selon votre rôle dans le projet.
          </p>
        </div>

        <div className="space-y-12">
          {blocks.map((block, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-aurad-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="bg-slate-950/80 backdrop-blur-xl rounded-xl p-8 relative z-10">

                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-aurad-500/10 flex items-center justify-center text-aurad-400 border border-aurad-500/20">
                    {block.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{block.title}</h3>
                    <span className="text-sm text-aurad-400 font-medium">{block.subtitle}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-8 max-w-3xl">{block.description}</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
                  {block.steps.map((step) => (
                    <div key={step.num} className="p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-aurad-500/20 transition-colors">
                      <div className="text-aurad-500 font-mono text-xs mb-2">{step.num}</div>
                      <h4 className="text-sm font-semibold text-gray-200 mb-1">{step.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/5">
                  <p className="text-sm text-aurad-300 font-medium">{block.result}</p>
                  <a href={block.ctaHref} className="inline-flex items-center gap-2 px-6 py-3 bg-aurad-500/10 border border-aurad-500/30 text-aurad-300 font-semibold rounded-lg hover:bg-aurad-500/20 transition-colors text-sm whitespace-nowrap">
                    {block.cta}
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
