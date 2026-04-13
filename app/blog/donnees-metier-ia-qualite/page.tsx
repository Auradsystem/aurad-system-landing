import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Données métier et IA : pourquoi la qualité fait tout",
  description:
    "60 % des projets IA seront abandonnés d'ici fin 2026 faute de données exploitables. Voici pourquoi la donnée est le seul problème qui compte vraiment.",
  alternates: {
    canonical: "https://auradsystem.com/blog/donnees-metier-ia-qualite",
  },
  openGraph: {
    title: "Données métier et IA : pourquoi la qualité fait tout",
    description:
      "60 % des projets IA seront abandonnés d'ici fin 2026 faute de données exploitables. Voici pourquoi la donnée est le seul problème qui compte vraiment.",
    url: "https://auradsystem.com/blog/donnees-metier-ia-qualite",
    type: "article",
    publishedTime: "2026-04-13",
  },
};

const blogPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Données métier et IA : pourquoi la qualité fait tout",
  description:
    "60 % des projets IA seront abandonnés d'ici fin 2026 faute de données exploitables. Voici pourquoi la donnée est le seul problème qui compte vraiment.",
  datePublished: "2026-04-13",
  author: {
    "@type": "Person",
    name: "Dali Bensalem",
    url: "https://www.linkedin.com/in/dalibensalem",
  },
  publisher: {
    "@type": "Organization",
    name: "Aurad System",
    url: "https://auradsystem.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://auradsystem.com/blog/donnees-metier-ia-qualite",
  },
};

export default function ArticleDonneesMetierIA() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <article className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-aurad-400 transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-aurad-400 text-xs font-medium uppercase tracking-wide">
              IA appliquee
            </span>
            <span className="text-gray-600 text-xs">13 avril 2026</span>
            <span className="text-gray-600 text-xs">8 min de lecture</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
            Données métier et IA : pourquoi la qualité fait tout
          </h1>

          <p className="text-xl text-gray-300 border-l-2 border-aurad-500 pl-6 mb-12 leading-relaxed">
            80 % des projets IA n'ont pas livré leur valeur attendue en 2025.
            Dans la grande majorité des cas, le modèle n'y est pour rien —
            c'est la donnée en amont qui compromet tout (RAND Corporation,
            2025).
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Le blocage que personne ne veut voir
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                Un système d'IA détecte des patterns dans des données. Si ces
                données sont fausses, incomplètes ou incohérentes, le système
                retourne des résultats faux, incomplets ou incohérents. C'est
                mécanique. Pas un bug — une conséquence directe.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Gartner a publié en février 2025 une alerte sans ambiguïté :{" "}
                <strong className="text-white">
                  60 % des projets d'IA seront abandonnés d'ici fin 2026 faute
                  de données AI-ready
                </strong>{" "}
                (
                <a
                  href="https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk"
                  className="text-aurad-400 hover:text-aurad-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gartner, fév. 2025
                </a>
                ). Pas faute de budget. Pas faute de modèle performant. Faute
                de données exploitables.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                La dimension financière confirme l'ampleur du problème. En
                2025, sur 684 milliards de dollars investis dans des
                initiatives IA à l'échelle mondiale, 547 milliards n'ont pas
                livré leur valeur attendue (
                <a
                  href="https://www.pertamapartners.com/insights/ai-project-failure-statistics-2026"
                  className="text-aurad-400 hover:text-aurad-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pertama Partners
                </a>
                ). Même proportion que l'année précédente. Ce n'est pas une
                courbe d'apprentissage — c'est un problème structurel.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                La donnée métier d'une PME ou d'une ETI cumule plusieurs
                caractéristiques qui compliquent l'exercice. Elle est dispersée
                : ERP, tableurs partagés, exports manuels, emails, dossiers
                sur des serveurs locaux. Elle est rarement documentée : les
                colonnes changent de nom d'un projet à l'autre, les formats
                varient selon qui a rempli le fichier. Et elle décroît
                rapidement.{" "}
                <strong className="text-white">
                  Les données B2B se périment à 22,5 % par an
                </strong>{" "}
                (Landbase). Une base client non maintenue depuis 18 mois est
                déjà à 40 % périmée.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Un agent IA qui travaille sur ces données ne crée pas de
                valeur. Il amplifie les problèmes existants, à grande vitesse,
                sans signaler l'anomalie. Une ETI qui déploie un agent de
                traitement de contrats sur un CRM avec 40 % de doublons obtient
                un agent qui traite des doublons — pas un outil opérationnel.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Le coût est moins visible, mais il est réel :{" "}
                <strong className="text-white">
                  la mauvaise qualité des données coûte en moyenne 15 % du
                  chiffre d'affaires annuel
                </strong>{" "}
                aux organisations qui n'en ont pas conscience (
                <a
                  href="https://www.data-8.co.uk/why-ai-projects-fail-the-hidden-role-of-data-quality-in-2026/"
                  className="text-aurad-400 hover:text-aurad-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gartner, via data-8.co.uk
                </a>
                ). Décisions mal informées, process sur des données périmées,
                doublons traités comme des clients distincts. Ce n'est pas une
                estimation abstraite — c'est le coût accumulé d'une donnée
                non gouvernée.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Ce que font les organisations dont les projets tiennent
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                Les projets IA qui passent en production et y restent ne sont
                pas toujours ceux qui ont les meilleurs modèles. Ce sont
                presque toujours ceux qui ont traité la donnée avant de traiter
                l'IA.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">
                  Un propriétaire de donnée par domaine métier.
                </strong>{" "}
                Ce n'est pas une notion IT — c'est une décision
                organisationnelle. Quelqu'un est responsable de la qualité de
                la donnée client. Quelqu'un est responsable de la donnée
                produit, de la donnée fournisseur. Sans cette désignation
                explicite, la qualité dérive. Dans{" "}
                <strong className="text-white">
                  63 % des organisations, personne n'est certain que leurs
                  pratiques de gestion de données sont adaptées à l'IA
                </strong>{" "}
                (
                <a
                  href="https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk"
                  className="text-aurad-400 hover:text-aurad-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gartner Q3 2024, enquête auprès de 248 directeurs de la
                  donnée
                </a>
                ). Ce vide est organisationnel, pas technique.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">
                  Un inventaire des sources avant tout déploiement.
                </strong>{" "}
                Pas un inventaire IT exhaustif — un inventaire métier ciblé.
                Pour le cas d'usage visé : quelles données sont nécessaires ?
                Où sont-elles ? Qui les maintient ? À quelle fréquence sont-elles
                mises à jour ? Cette cartographie prend une semaine. Elle révèle
                immédiatement les angles morts : bases non documentées, fichiers
                sans propriétaire, exports manuels jamais mis à jour. Elle évite
                des mois de debugging post-déploiement.
              </p>

              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">
                  Des pipelines automatisés avec validation intégrée.
                </strong>{" "}
                Les projets fragiles se basent sur des exports manuels
                ponctuels. Les projets durables construisent des flux de données
                automatisés avec validation de schéma, détection d'anomalies et
                alertes en cas de dérive. La donnée arrive structurée et
                vérifiable — sans dépendre d'une action humaine. Quand un
                enregistrement ne respecte pas le schéma attendu, le système le
                signale plutôt que de le traiter silencieusement. C'est ce qui
                maintient la confiance dans le système après 12 mois de
                production.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Comment s'y prendre concrètement
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                L'erreur classique est de vouloir "nettoyer toutes ses données"
                avant de démarrer. C'est une impasse sans fin. Les données
                d'une entreprise ne sont jamais parfaites — et ce chantier
                exhaustif n'a pas de terme.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                L'approche qui fonctionne est différente : travailler par
                domaine, sur un cas d'usage précis, avec un périmètre borné.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">
                  Identifier les données critiques pour un seul process.
                </strong>{" "}
                Si l'objectif est d'automatiser la qualification des demandes
                entrantes, les données critiques sont les emails entrants,
                l'historique des qualifications passées, et les règles de
                routage. Seulement ces données — pas la base entière. Ce
                périmètre restreint permet d'avancer vite et de démontrer la
                valeur sans attendre une transformation data globale.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">
                  Auditer sur 4 axes simples.
                </strong>{" "}
                Complétude — les champs attendus sont-ils remplis ? Cohérence
                — les valeurs respectent-elles un format stable ? Fraîcheur —
                quand la donnée a-t-elle été mise à jour pour la dernière fois ?
                Unicité — y a-t-il des doublons ? Un audit sur 300 à 500
                enregistrements représentatifs donne une image fiable en
                quelques heures. Pas besoin d'un outil de data quality à six
                chiffres.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">
                  Corriger à la source, pas en patch.
                </strong>{" "}
                Il ne s'agit pas de corriger les données existantes une fois,
                mais d'empêcher la dégradation future. Validation à la saisie,
                normalisation des imports, règles de déduplication automatique.
                Ces ajustements sont souvent légers à implémenter. Personne ne
                les a faits parce que personne n'avait rendu le problème
                visible.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">
                  Intégrer la supervision dans l'architecture dès le départ.
                </strong>{" "}
                Un{" "}
                <Link
                  href="/agents-ia"
                  className="text-aurad-400 hover:text-aurad-300 underline"
                >
                  agent IA construit sur-mesure
                </Link>{" "}
                surveille la qualité de ses propres entrées. Il ne détecte pas
                les problèmes après coup — il les signale au moment où ils
                arrivent. Logs structurés, alertes sur les enregistrements hors
                normes, indicateurs de qualité visibles sans accéder au code.
                C'est la différence entre un outil qui tient 18 mois en
                production et un pilote qui s'effondre six mois après le
                go-live.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Construire cette architecture correctement dès le départ — c'est
                ce qu'Aurad System intègre dans chaque projet de{" "}
                <Link
                  href="/developpement"
                  className="text-aurad-400 hover:text-aurad-300 underline"
                >
                  développement sur-mesure
                </Link>
                . L'ingénierie des pipelines de données et la gouvernance des
                entrées ne sont pas des options de phase 2 — elles conditionnent
                la viabilité du projet en production.
              </p>
            </section>

            {/* Takeaways */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Ce qu'il faut retenir
              </h2>

              <ul className="space-y-3">
                <li className="text-gray-300 leading-relaxed flex items-start gap-3">
                  <span className="text-aurad-400 mt-1.5 shrink-0">—</span>
                  La donnée est le facteur limitant de la majorité des projets
                  IA. Pas le modèle, pas le budget, pas le talent technique.
                  Gartner prévoit que 60 % des projets IA seront abandonnés
                  d'ici fin 2026 faute de données AI-ready. C'est le seul
                  problème à résoudre en priorité.
                </li>
                <li className="text-gray-300 leading-relaxed flex items-start gap-3">
                  <span className="text-aurad-400 mt-1.5 shrink-0">—</span>
                  Nettoyer "toutes ses données" avant de commencer n'est pas
                  une stratégie — c'est un projet sans fin. L'approche qui
                  fonctionne : identifier les données critiques pour un cas
                  d'usage précis, les auditer sur 4 axes, corriger à la source,
                  automatiser. Dans cet ordre.
                </li>
                <li className="text-gray-300 leading-relaxed flex items-start gap-3">
                  <span className="text-aurad-400 mt-1.5 shrink-0">—</span>
                  La qualité des données ne se maintient pas seule. Elle
                  demande une gouvernance explicite : un propriétaire par
                  domaine, des pipelines automatisés, une supervision intégrée
                  dès le premier jour. Ce n'est pas un projet IT — c'est une
                  décision business.
                </li>
              </ul>
            </section>

            {/* Sources */}
            <section className="border-t border-white/10 pt-8">
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-4">
                Sources
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk"
                    className="text-aurad-400/70 hover:text-aurad-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lack of AI-Ready Data Puts AI Projects at Risk
                  </a>{" "}
                  — Gartner, février 2025 (enquête Q3 2024, 248 data management
                  leaders)
                </li>
                <li>
                  <a
                    href="https://www.pertamapartners.com/insights/ai-project-failure-statistics-2026"
                    className="text-aurad-400/70 hover:text-aurad-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AI Project Failure Statistics 2026
                  </a>{" "}
                  — Pertama Partners (RAND Corporation 2025 analysis)
                </li>
                <li>
                  <a
                    href="https://www.data-8.co.uk/why-ai-projects-fail-the-hidden-role-of-data-quality-in-2026/"
                    className="text-aurad-400/70 hover:text-aurad-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Why AI Projects Fail: The Hidden Role of Data Quality in
                    2026
                  </a>{" "}
                  — data-8.co.uk (Gartner data quality cost, BARC 2026 trends)
                </li>
                <li>
                  <a
                    href="https://aimultiple.com/data-quality-ai"
                    className="text-aurad-400/70 hover:text-aurad-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AI Data Quality in 2026: Challenges & Best Practices
                  </a>{" "}
                  — AIMultiple Research
                </li>
              </ul>
            </section>
          </div>
        </div>
      </article>

      <CTASection
        title="Vos données sont-elles prêtes pour l'IA ?"
        subtitle="On audite le périmètre, on identifie les blocages, on propose une architecture. Avant de toucher au moindre modèle."
      />
    </>
  );
}
