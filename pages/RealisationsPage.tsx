import React, { useState } from "react";
import { Bot, Code2, Building2 } from "lucide-react";
import { CTASection } from "../components/shared/CTASection";

type ProjectType = "all" | "agent-ia" | "application" | "ingenierie";

const projects = [
  {
    type: "agent-ia" as const,
    sector: "Energie / reglementation",
    problem:
      "Particuliers perdus dans les aides CEE, incapables de naviguer un systeme complexe.",
    solution:
      "Agent IA conversationnel qui qualifie les demandes et oriente vers les delegataires adaptes.",
    result: "Qualification automatique en moins de 3 minutes au lieu de 30.",
  },
  {
    type: "agent-ia" as const,
    sector: "Travaux publics",
    problem:
      "10 000+ pages de documentation technique inaccessibles. Les equipes passent des heures a chercher la bonne info.",
    solution:
      "RAG multimodal qui retrouve l'information en langage naturel, avec les sources et le contexte.",
    result:
      "Temps de recherche divise par 10. L'information est trouvee en secondes.",
  },
  {
    type: "agent-ia" as const,
    sector: "BTP / devis",
    problem:
      "Chiffrage manuel long et imprecis. Chaque devis prend des heures de compilation.",
    solution:
      "Generateur de devis assiste par IA qui structure et chiffre a partir des donnees projet.",
    result: "Temps de chiffrage reduit de 70%. Precision amelioree.",
  },
  {
    type: "agent-ia" as const,
    sector: "Industrie / certification",
    problem:
      "Constituer un dossier feu 100% conforme avec sourcing fournisseurs depuis zero.",
    solution:
      "Agents IA pour piloter la demarche, le sourcing fournisseurs et la constitution du dossier de certification.",
    result:
      "Dossier structure et complet, pret pour soumission au laboratoire.",
  },
  {
    type: "application" as const,
    sector: "Maintenance technique",
    problem:
      "Suivi papier des equipements, pas de tracabilite ni d'historique des interventions.",
    solution:
      "GMAO SaaS avec centralisation des donnees, pilotage des maintenances et tracabilite complete.",
    result: "100% des interventions tracees. Historique accessible en un clic.",
  },
  {
    type: "application" as const,
    sector: "Gestion / ERP",
    problem:
      "Zero visibilite sur le cash flow. Facturation manuelle, echeanciers sur Excel.",
    solution:
      "SaaS connecte a l'ERP avec echeancier automatise et prevision de tresorerie.",
    result: "Visibilite a 3 mois sur la tresorerie. Zero saisie manuelle.",
  },
  {
    type: "application" as const,
    sector: "Securite incendie",
    problem:
      "Auto-evaluation APSAD longue et manuelle. Chaque audit prend des jours de preparation.",
    solution: "Scoring automatise de conformite I7/F7 avec rapport detaille.",
    result:
      "Evaluation en minutes au lieu de jours. Ecarts identifies immediatement.",
  },
  {
    type: "ingenierie" as const,
    sector: "Data center / nucleaire",
    problem:
      "Coordination de 7+ lots techniques sur des sites complexes a forte exigence reglementaire.",
    solution:
      "AMO/MOE complete avec DPGF, note technique SSI, pilotage chantier et reception.",
    result: "Projet livre conforme, dans les delais et le budget.",
  },
];

const filters: { key: ProjectType; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "Tous", icon: null },
  { key: "agent-ia", label: "Agents IA", icon: <Bot className="w-4 h-4" /> },
  {
    key: "application",
    label: "Applications",
    icon: <Code2 className="w-4 h-4" />,
  },
  {
    key: "ingenierie",
    label: "Ingenierie",
    icon: <Building2 className="w-4 h-4" />,
  },
];

const typeColors = {
  "agent-ia": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  application: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  ingenierie: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

const typeLabels = {
  "agent-ia": "Agent IA",
  application: "Application metier",
  ingenierie: "Ingenierie",
};

export default function RealisationsPage() {
  const [filter, setFilter] = useState<ProjectType>("all");
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Realisations
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Des problemes reels, des solutions concretes. Chaque projet commence
            par comprendre le metier avant de coder.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-aurad-500 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <article
              key={i}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aurad-500/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${typeColors[p.type]}`}
                >
                  {typeLabels[p.type]}
                </span>
                <span className="text-gray-500 text-xs">{p.sector}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{p.problem}</h3>
              <p className="text-gray-400 text-sm mb-3">{p.solution}</p>
              <p className="text-aurad-400 text-sm font-medium">{p.result}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Un probleme similaire ?"
        subtitle="Chaque solution commence par 30 minutes d'ecoute. Pas de commercial, pas de pitch — juste une conversation sur votre metier."
      />
    </>
  );
}
