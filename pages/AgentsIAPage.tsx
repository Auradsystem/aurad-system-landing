import React from "react";
import { SEO } from "../components/SEO";
import {
  Bot,
  Search,
  FileText,
  MessageSquare,
  Zap,
  ArrowRight,
} from "lucide-react";
import { CTASection } from "../components/shared/CTASection";

const useCases = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Agent conversationnel metier",
    desc: "Un agent qui comprend votre secteur et qualifie les demandes entrantes automatiquement. Pas un chatbot generique — un agent entraine sur vos regles metier.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "RAG sur documentation technique",
    desc: "Vos equipes cherchent dans 10 000+ pages de docs ? Un agent RAG multimodal qui retrouve l'info en langage naturel, avec les sources.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Generation de documents",
    desc: "Rapports, memoires techniques, dossiers reglementaires — generes automatiquement a partir de vos donnees projet.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Automatisation de process",
    desc: "Un agent qui prend en charge un workflow complet : qualification, traitement, suivi. Vos equipes se concentrent sur les decisions, pas la saisie.",
  },
];

const steps = [
  {
    num: "01",
    title: "Audit metier",
    desc: "On identifie les taches repetitives et les goulots d'etranglement. Pas de jargon IA — on parle votre metier.",
  },
  {
    num: "02",
    title: "Prototype 2 semaines",
    desc: "Un agent fonctionnel sur un cas d'usage reel. Vous testez avec vos propres donnees.",
  },
  {
    num: "03",
    title: "Deploiement",
    desc: "Integration dans vos outils existants. Formation de vos equipes. Pas de disruption.",
  },
  {
    num: "04",
    title: "Suivi & iteration",
    desc: "L'agent s'ameliore avec vos retours. On mesure le ROI concret.",
  },
];

export default function AgentsIAPage() {
  return (
    <>
      <SEO
        title="Agents IA metier pour PME/ETI"
        description="Des agents IA entraines sur vos donnees et vos regles metier. Pas un chatbot generique — un outil qui comprend votre secteur et agit en autonomie."
        path="/agents-ia"
      />
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aurad-900/50 border border-aurad-500/30 mb-6">
            <Bot className="w-4 h-4 text-aurad-400" />
            <span className="text-aurad-200 text-xs font-medium tracking-wide uppercase">
              Agents IA sur-mesure
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Des agents IA qui comprennent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurad-300 to-blue-600">
              votre metier
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Pas un wrapper ChatGPT. Pas du no-code. Des agents codes sur-mesure,
            entraines sur vos donnees, integres dans vos outils.
          </p>
        </div>
      </section>

      {/* Differenciateurs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Je code",
              desc: "Du vrai code, pas du n8n ou du Make. RAG custom, agents autonomes, integrations API. Ce qui ne rentre pas dans une boite no-code.",
            },
            {
              title: "Je comprends le metier",
              desc: "Avant de coder, je comprends votre probleme. 8 ans d'experience terrain dans des secteurs techniques et reglementes.",
            },
            {
              title: "Interlocuteur unique",
              desc: "Pas d'agence, pas de commercial, pas de chef de projet. Un fondateur technique, du premier echange au deploiement.",
            },
          ].map((d) => (
            <div
              key={d.title}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/5"
            >
              <h3 className="text-lg font-bold text-white mb-2">{d.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">
            Ce que font mes agents
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aurad-500/30 transition-colors"
              >
                <div className="text-aurad-400 mb-4">{uc.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {uc.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">
            Comment ca se passe
          </h2>
          <div className="space-y-8">
            {steps.map((s) => (
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
        title="Un process a automatiser ?"
        buttonHref="/?domain=automatiser#contact"
        subtitle="On identifie ensemble en 30 minutes ce qu'un agent IA peut prendre en charge."
      />
    </>
  );
}
