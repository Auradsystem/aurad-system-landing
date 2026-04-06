import React from "react";
import { Bot, Code2, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Automatiser",
    icon: <Bot className="w-8 h-8" />,
    question:
      "Vos équipes passent du temps sur des tâches que l'IA fait mieux qu'elles ?",
    items: [
      "Agents conversationnels qui comprennent vos règles métier",
      "RAG sur votre documentation technique — l'info en secondes",
      "Génération automatique de documents réglementaires",
      "Qualification et traitement des demandes entrantes",
    ],
    link: "/agents-ia",
    linkText: "Découvrir les agents IA",
  },
  {
    title: "Construire",
    icon: <Code2 className="w-8 h-8" />,
    question:
      "Vous avez besoin d'un outil métier qui n'existe pas sur le marché ?",
    items: [
      "GMAO, plateformes de suivi, dashboards opérationnels",
      "Prévision cash-flow et scoring de conformité",
      "Automatisation documentaire — plus de copier-coller",
      "Applications web sur-mesure pour votre secteur",
    ],
    link: "/developpement",
    linkText: "Voir les applications",
  },
  {
    title: "Piloter",
    icon: <Building2 className="w-8 h-8" />,
    question: "Vous lancez un projet technique avec des lots spéciaux ?",
    items: [
      "AMO/MOE : sécurité, incendie, GTC, contrôle d'accès",
      "Rédaction de CCTP et analyse des offres",
      "Pilotage chantier et réception conforme",
      "Aide à la réponse aux appels d'offres",
    ],
    link: "/ingenierie-technique",
    linkText: "En savoir plus",
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-aurad-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ce que je fais <span className="text-aurad-400">concrètement</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Trois façons d'avancer, selon votre besoin.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-1 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-aurad-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="bg-slate-950/95 md:bg-slate-950/80 md:backdrop-blur-xl rounded-xl p-8 h-full relative z-10 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-aurad-500/10 flex items-center justify-center text-aurad-400 border border-aurad-500/20 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm font-medium mb-6">
                  {service.question}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-gray-400 leading-relaxed"
                    >
                      <span className="text-aurad-500 mt-1 flex-shrink-0">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-aurad-400 text-sm font-semibold hover:text-aurad-300 transition-colors group/link"
                >
                  {service.linkText}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
