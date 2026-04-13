import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";

const publishedSlugs = new Set([
  "agents-ia-entreprise",
  "automatiser-reponse-appels-offres-ia",
  "rag-metier-documentation-technique",
  "ia-btp-2026",
  "ia-generique-secteurs-reglementes",
  "roi-ia-pme-eti",
  "donnees-metier-ia-qualite",
]);

const articles = [
  {
    slug: "donnees-metier-ia-qualite",
    title: "Données métier et IA : pourquoi la qualité fait tout",
    excerpt:
      "60 % des projets IA seront abandonnés d'ici fin 2026 faute de données exploitables. Le modèle n'y est pour rien — c'est la donnée en amont qui compromet tout.",
    date: "2026-04-13",
    category: "IA appliquee",
  },
  {
    slug: "roi-ia-pme-eti",
    title: "ROI de l'IA en PME/ETI : ce que les chiffres disent vraiment",
    excerpt:
      "95 % des projets IA generatifs ne livrent pas de ROI mesurable dans les 6 mois. Pourquoi, et comment les rares qui y arrivent s'y prennent.",
    date: "2026-04-06",
    category: "IA appliquee",
  },
  {
    slug: "ia-generique-secteurs-reglementes",
    title: "Pourquoi l'IA generique echoue dans les secteurs reglementes",
    excerpt:
      "Un wrapper ChatGPT ne connait pas vos normes, vos process, vos contraintes. Les secteurs reglementes ont besoin d'agents sur-mesure.",
    date: "2026-04-04",
    category: "IA appliquee",
  },
  {
    slug: "ia-btp-2026",
    title: "IA dans le BTP : ce qui marche vraiment en 2026",
    excerpt:
      "Au-dela du buzz, quels cas d'usage IA generent un ROI mesurable dans la construction et les travaux publics.",
    date: "2026-03-24",
    category: "BTP",
  },
  {
    slug: "rag-metier-documentation-technique",
    title: "RAG metier : rendre votre documentation technique interrogeable",
    excerpt:
      "10 000 pages de docs inaccessibles ? Un RAG multimodal retrouve l'info en secondes avec les sources.",
    date: "2026-03-10",
    category: "IA appliquee",
  },
  {
    slug: "automatiser-reponse-appels-offres-ia",
    title: "Automatiser la reponse aux appels d'offres avec l'IA",
    excerpt:
      "60% du score final en marche public vient de la valeur technique. Comment l'IA peut structurer et renforcer vos memoires techniques.",
    date: "2026-02-24",
    category: "BTP",
  },
  {
    slug: "agents-ia-entreprise",
    title: "Agents IA en entreprise : au-dela du chatbot",
    excerpt:
      "Un agent IA n'est pas un chatbot. C'est un process metier automatise qui comprend vos donnees, vos regles, et agit en autonomie.",
    date: "2026-02-10",
    category: "IA appliquee",
  },
];

export const metadata: Metadata = {
  title: "Blog — IA appliquee et developpement sur-mesure",
  description:
    "Articles techniques sur l'IA en entreprise, les agents IA metier, le RAG, l'automatisation et le BTP. Retours d'experience et analyses concretes.",
  alternates: { canonical: "https://auradsystem.com/blog" },
  openGraph: {
    title: "Blog — IA appliquee et developpement sur-mesure",
    description:
      "Articles techniques sur l'IA en entreprise, les agents IA metier, le RAG, l'automatisation et le BTP. Retours d'experience et analyses concretes.",
    url: "https://auradsystem.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Blog
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Retours d'experience, analyses techniques et reflexions sur l'IA
            appliquee au metier.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {articles.map((a) => (
            <article
              key={a.slug}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aurad-500/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-aurad-400 text-xs font-medium uppercase tracking-wide">
                  {a.category}
                </span>
                <span className="text-gray-600 text-xs">{a.date}</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{a.title}</h2>
              <p className="text-gray-400 leading-relaxed">{a.excerpt}</p>
              {publishedSlugs.has(a.slug) ? (
                <Link
                  href={`/blog/${a.slug}`}
                  className="inline-flex items-center gap-1 mt-4 text-aurad-400 hover:text-aurad-300 text-sm font-medium transition-colors"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 mt-4 text-gray-500 text-sm font-medium">
                  <FileText className="w-4 h-4" />
                  Article a venir
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Un sujet vous interesse ?"
        subtitle="Discutons de votre cas d'usage. Chaque projet est different."
      />
    </>
  );
}
