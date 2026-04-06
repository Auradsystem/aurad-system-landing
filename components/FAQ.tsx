"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { pushEvent } from "@/lib/gtm";

const faqs = [
  {
    question: "C'est quoi un agent IA concrètement ?",
    answer:
      "Un agent IA, c'est un programme qui comprend vos données, vos règles métier, et qui agit en autonomie sur des tâches répétitives. Ce n'est pas un chatbot générique. C'est un outil entraîné sur votre contexte : il qualifie des demandes, génère des documents, retrouve de l'information dans vos bases. Il fait en secondes ce qui prend des heures à vos équipes.",
  },
  {
    question: "En combien de temps un agent IA est opérationnel ?",
    answer:
      "Comptez 2 semaines pour un premier prototype fonctionnel testé avec vos propres données. Le déploiement complet (intégration dans vos outils, formation des équipes) prend 4 à 8 semaines selon la complexité. Vous voyez des résultats concrets dès le prototype, pas après 6 mois de spécifications.",
  },
  {
    question: "Quelle différence avec un chatbot ou ChatGPT ?",
    answer:
      "ChatGPT est généraliste. Il ne connaît pas vos règles métier, vos normes, vos process internes. Un agent sur-mesure est codé pour votre contexte : il accède à vos données, respecte vos contraintes réglementaires, et produit des résultats exploitables directement. C'est la différence entre un stagiaire de passage et un expert de votre secteur.",
  },
  {
    question: "Vous travaillez avec quels secteurs ?",
    answer:
      "BTP, énergie, industrie, services. Le secteur change, la méthode reste : comprendre le métier avant de coder. Mon expertise terrain vient du BTP (sécurité incendie, lots techniques, appels d'offres), mais les agents IA et les applications métier que je construis s'adaptent à tout secteur avec des process répétitifs ou de la documentation technique.",
  },
  {
    question: "Pourquoi pas une agence IA classique ?",
    answer:
      "La plupart des agences IA connectent des outils no-code (n8n, Make) ou configurent des wrappers autour de ChatGPT. Ici, c'est du vrai code : RAG custom, agents autonomes, intégrations API sur-mesure. Et surtout, un interlocuteur unique qui comprend votre métier, pas un commercial qui passe le relais à un développeur junior.",
  },
  {
    question: "C'est quoi un AMO et pourquoi en avoir besoin ?",
    answer:
      "L'Assistant à Maîtrise d'Ouvrage accompagne le maître d'ouvrage dans le pilotage de son projet technique : rédaction des cahiers des charges, analyse des offres, coordination des lots, réception. Sans AMO sur les lots spéciaux (sécurité, incendie, GTC), les surcoûts moyens sont de 15-25%.",
  },
  {
    question: "Intervenez-vous uniquement en Île-de-France ?",
    answer:
      "En Île-de-France pour les missions terrain (pilotage chantier, réceptions). Les missions de consulting IA, développement d'applications et conseil technique se font à distance sur tout le territoire.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "Chaque projet est différent. Un agent IA simple (qualification de demandes) démarre autour de 5 000 €. Une application métier complète entre 15 000 et 50 000 €. Une mission AMO/MOE dépend du périmètre et de la durée. Le plus simple : on en parle 30 minutes et je vous donne une fourchette réaliste.",
  },
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Questions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurad-300 to-blue-600">
              fréquentes
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Les réponses aux questions les plus courantes.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="glass-card rounded-xl group"
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open)
                  pushEvent({
                    event: "faq_interaction",
                    faq_question: faq.question.slice(0, 80),
                  });
              }}
            >
              <summary className="p-6 cursor-pointer flex items-center justify-between text-white hover:text-aurad-400 transition-colors list-none">
                <h3 className="inline text-base md:text-lg font-semibold pr-4">
                  {faq.question}
                </h3>
                <ChevronDown className="w-5 h-5 shrink-0 text-aurad-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
