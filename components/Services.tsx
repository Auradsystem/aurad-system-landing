import React from 'react';
import { Shield, Flame, Building2, Layers, Smartphone, Database, Zap, FileText, BarChart2, Award } from 'lucide-react';

const services = [
  {
    category: "Développement d'applications",
    icon: <Smartphone className="w-8 h-8" />,
    description: "Vous perdez du temps sur des tâches répétitives et manquez de visibilité sur vos projets ? Des outils conçus pour le BTP, pas des logiciels génériques.",
    items: [
      {
        title: "Automatisation documentaire",
        desc: "Vous perdez des heures à copier-coller des données entre vos devis, mémoires techniques et rapports ? Vos documents types se remplissent automatiquement avec les données du projet. Mémoires techniques, CCTP, rapports de chantier générés en quelques clics.",
        icon: <FileText className="w-5 h-5" />
      },
      {
        title: "Suivi chantier & exploitation",
        desc: "Suivi d'avancement sur Excel, réserves qui se perdent par email, DOE incomplets à la livraison ? Applications de suivi chantier, levées de réserves, gestion des DOE et pointage. Vos indicateurs budgétaires et planning accessibles en temps réel.",
        icon: <BarChart2 className="w-5 h-5" />
      },
      {
        title: "Plateformes métier sur-mesure",
        desc: "Vos équipes jonglent entre 5 outils différents sans vision globale ? CRM adapté au BTP, simulateurs de chiffrage, portails clients, GMAO légère. Une plateforme unique pour centraliser votre activité, même sur plusieurs sites.",
        icon: <Database className="w-5 h-5" />
      }
    ]
  },
  {
    category: "Ingénierie technique BTP",
    icon: <Building2 className="w-8 h-8" />,
    description: "Assistance à maîtrise d'ouvrage et maîtrise d'œuvre pour vos projets techniques.",
    items: [
      {
        title: "Sûreté & Sécurité",
        desc: "Vidéosurveillance, caméras thermiques, contrôle d'accès, interphonie. Rédaction de CCTP, analyse des offres, pilotage chantier et réception des installations conformes.",
        icon: <Shield className="w-5 h-5" />
      },
      {
        title: "Sécurité incendie",
        desc: "Détection incendie, sprinklage, désenfumage. De l'audit réglementaire (APSAD, ERP) à la mise en service, pour des installations conformes dès la première réception.",
        icon: <Flame className="w-5 h-5" />
      },
      {
        title: "Systèmes techniques",
        desc: "GTC/GTB, électricité CFO/CFA. Coordination des lots techniques, gestion des interfaces entre corps d'état, validation de la cohérence des installations.",
        icon: <Layers className="w-5 h-5" />
      },
      {
        title: "Valorisation CEE",
        desc: "Montage des dossiers CEE sur vos opérations éligibles (GTB, éclairage, CVC). Réseau de partenaires obligés et délégataires pour maximiser le financement de vos travaux.",
        icon: <Zap className="w-5 h-5" />
      },
      {
        title: "Certifications & Risk Management",
        desc: "Accompagnement à la certification APSAD (I7 installation, F7 maintenance) : un atout pour remporter les marchés publics et rassurer vos clients. Démarches ISO 31000 (management des risques) pour structurer votre approche sécurité.",
        icon: <Award className="w-5 h-5" />
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
            Expertise <span className="text-aurad-400">technique</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Deux piliers d'expertise pour transformer votre activité.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-aurad-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="bg-slate-950/95 md:bg-slate-950/80 md:backdrop-blur-xl rounded-xl p-8 h-full relative z-10">
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
