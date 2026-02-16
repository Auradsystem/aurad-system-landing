import React from 'react';
import { Target, Rocket, Lightbulb, Check } from 'lucide-react';

const steps = [
  {
    title: "Vision MOA",
    desc: "Projet BTP ? J'analyse vos contraintes réglementaires, votre calendrier, votre budget. Besoin d'un outil digital ? J'identifie ce qui doit être automatisé. Pas de solution technique cherchant un problème.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Conception sur-mesure",
    desc: "CCTP précis pour vos lots techniques. Architecture applicative scalable pour vos outils métier. Adapté à votre taille actuelle et future, sans sur-ingénierie.",
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: "Livraison complète",
    desc: "Projet BTP : pilotage chantier, coordination des entreprises, réception, DOE validés. Projet digital : développement, tests, déploiement, formation. Un livrable opérationnel, pas un dossier d'études.",
    icon: <Rocket className="w-6 h-6" />
  }
];

export const About: React.FC = () => {
  return (
    <section id="approach" className="py-24 relative overflow-hidden bg-slate-900">
      
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-aurad-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Une approche <br />
              <span className="text-aurad-400">pragmatique</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              En tant qu'indépendant et fondateur d'Aurad System depuis juillet 2024, j'accompagne les PME/ETI du BTP et au-delà avec une double expertise : le développement de solutions digitales sur-mesure et l'ingénierie technique (AMO/MOE) sur les lots spéciaux.
            </p>

            <div className="glass-card p-6 rounded-xl border-l-4 border-l-aurad-500">
              <p className="italic text-gray-400">
                "Une approche terrain, de l'audit au déploiement, pour des solutions qui répondent vraiment à vos enjeux métier."
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-slate-800/50 hover:bg-slate-800 transition-colors p-6 rounded-xl flex items-start gap-5 border border-white/5">
                  <div className="flex-shrink-0 w-12 h-12 bg-aurad-500/20 rounded-lg flex items-center justify-center text-aurad-400">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
