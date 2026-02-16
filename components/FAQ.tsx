import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Qu'est-ce qu'un AMO en BTP et pourquoi en avoir besoin ?",
    answer: "L'Assistant à Maîtrise d'Ouvrage (AMO) accompagne le maître d'ouvrage dans la définition, le pilotage et la réception de son projet de construction ou rénovation. Il rédige les CCTP, analyse les offres des entreprises, coordonne les lots techniques et vérifie la conformité. Sans AMO sur les lots spéciaux (sécurité, incendie, GTC), les surcoûts moyens sont de 15-25% avec 2-6 semaines de retard."
  },
  {
    question: "Quels lots techniques couvrez-vous ?",
    answer: "Vidéosurveillance, contrôle d'accès, interphonie, sécurité incendie (détection, sprinklage, désenfumage), GTC/GTB (gestion technique centralisée), et électricité CFO/CFA. L'intervention couvre toutes les phases : audit de besoins, rédaction de CCTP, analyse des offres, pilotage chantier et réception."
  },
  {
    question: "Comment aidez-vous les entreprises BTP à répondre aux appels d'offres ?",
    answer: "En 4 étapes : analyse du DCE (identification des risques et opportunités), stratégie de réponse (positionnement prix et différenciation technique), rédaction du mémoire technique structuré, et optimisation du chiffrage. Résultat : +10-20% de taux de transformation sur les réponses."
  },
  {
    question: "Intervenez-vous uniquement en Île-de-France ?",
    answer: "Principalement en Île-de-France pour les missions nécessitant une présence terrain (pilotage chantier, réceptions). Les missions de conseil pur (aide à la réponse aux appels d'offres, rédaction de CCTP, développement digital) peuvent se faire à distance sur tout le territoire."
  },
  {
    question: "Quelle différence avec un bureau d'études généraliste ?",
    answer: "Intervention directe sans sous-traitance, avec une expertise pointue sur les lots spéciaux. Interlocuteur unique du premier rendez-vous à la réception. Double compétence BTP + digital permettant de créer des outils métier sur-mesure si nécessaire."
  },
  {
    question: "Qu'est-ce que la valorisation CEE et comment en bénéficier ?",
    answer: "Les CEE (Certificats d'Économies d'Énergie) sont des subventions pour financer les travaux d'efficacité énergétique. Nous identifions les opérations éligibles sur vos projets (GTB, éclairage LED, CVC) et montons les dossiers CEE avec notre réseau de partenaires obligés pour maximiser le financement."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurad-300 to-blue-600">fréquentes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Les réponses aux questions les plus courantes sur nos services.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="glass-card rounded-xl group">
              <summary className="p-6 cursor-pointer flex items-center justify-between text-white hover:text-aurad-400 transition-colors list-none">
                <h3 className="inline text-base md:text-lg font-semibold pr-4">{faq.question}</h3>
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
