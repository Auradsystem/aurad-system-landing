import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realisations — projets IA et developpement",
  description:
    "Agents IA metier, applications web sur-mesure, ingenierie technique BTP. Exemples concrets de projets livres pour PME/ETI.",
  alternates: { canonical: "https://auradsystem.com/realisations" },
  openGraph: {
    title: "Realisations — projets IA et developpement",
    description:
      "Agents IA metier, applications web sur-mesure, ingenierie technique BTP. Exemples concrets de projets livres pour PME/ETI.",
    url: "https://auradsystem.com/realisations",
  },
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
