import React from 'react';
import { Bot, Layers, Smartphone, Database, Workflow, Cloud, CheckCircle2 } from 'lucide-react';

const services = [
  {
    category: "Développement d'Applications",
    icon: <Smartphone className="w-8 h-8" />,
    description: "Des solutions robustes et évolutives adaptées à votre métier.",
    items: [
      {
        title: "Applications Web SaaS",
        desc: "Solutions complètes avec authentification, gestion d'équipes, facturation et tableaux de bord.",
        icon: <Cloud className="w-5 h-5" />
      },
      {
        title: "Outils Métier Sur-Mesure",
        desc: "Gestion commerciale, simulateurs, générateurs de documents automatisés.",
        icon: <Database className="w-5 h-5" />
      },
      {
        title: "Architecture Multi-tenant",
        desc: "Infrastructure pensée pour la scalabilité et la sécurité des données.",
        icon: <Layers className="w-5 h-5" />
      }
    ]
  },
  {
    category: "IA & Automatisation",
    icon: <Bot className="w-8 h-8" />,
    description: "L'intelligence artificielle au service de votre productivité.",
    items: [
      {
        title: "Intégration IA Générative",
        desc: "Chatbots intelligents, assistants virtuels et analyse automatique de documents.",
        icon: <Bot className="w-5 h-5" />
      },
      {
        title: "Orchestration de Flux",
        desc: "Automatisation via webhooks et connexion entre vos outils existants (Zapier, n8n).",
        icon: <Workflow className="w-5 h-5" />
      },
      {
        title: "Connexions Systèmes",
        desc: "Synchronisation parfaite entre votre ERP, CRM et APIs tierces.",
        icon: <Layers className="w-5 h-5" />
      }
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-aurad-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Expertise <span className="text-aurad-400">Technique</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Deux piliers d'expertise pour transformer votre activité.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-aurad-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="bg-slate-950/80 backdrop-blur-xl rounded-xl p-8 h-full relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-xl bg-aurad-500/10 flex items-center justify-center text-aurad-400 border border-aurad-500/20 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.category}</h3>
                    <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {service.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                      <div className="mt-1 text-aurad-500">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-200">{item.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
