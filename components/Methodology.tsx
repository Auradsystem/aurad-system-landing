import React from "react";
import { MessageSquare, Zap, Plug, BarChart2 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Comprendre",
    desc: "On parle de votre métier, pas de technologie. Quels sont vos goulots d'étranglement ? Où perdez-vous du temps ? Quels process pourraient être automatisés ?",
  },
  {
    num: "02",
    icon: <Zap className="w-6 h-6" />,
    title: "Prototyper",
    desc: "Un premier résultat fonctionnel en 2 semaines. Vous testez avec vos propres données, sur vos propres cas d'usage. Pas de PowerPoint — du code qui tourne.",
  },
  {
    num: "03",
    icon: <Plug className="w-6 h-6" />,
    title: "Déployer",
    desc: "Intégration dans vos outils existants. Formation de vos équipes. Pas de disruption — l'outil s'adapte à votre façon de travailler, pas l'inverse.",
  },
  {
    num: "04",
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Mesurer",
    desc: "ROI concret, pas des promesses. Combien de temps gagné ? Combien d'erreurs évitées ? On mesure, on ajuste, on itère.",
  },
];

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 relative bg-aurad-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Comment je <span className="text-aurad-400">vous accompagne</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Un process simple. Des résultats rapides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-aurad-500/20 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-aurad-400/30 font-mono text-4xl font-bold">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-aurad-500/10 flex items-center justify-center text-aurad-400 border border-aurad-500/20">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
