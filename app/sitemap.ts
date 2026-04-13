import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://auradsystem.com",
      lastModified: "2026-04-04",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://auradsystem.com/agents-ia",
      lastModified: "2026-04-04",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://auradsystem.com/developpement",
      lastModified: "2026-04-04",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://auradsystem.com/ingenierie-technique",
      lastModified: "2026-04-04",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://auradsystem.com/realisations",
      lastModified: "2026-04-04",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://auradsystem.com/blog",
      lastModified: "2026-04-04",
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://auradsystem.com/blog/agents-ia-entreprise",
      lastModified: "2026-02-10",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://auradsystem.com/blog/automatiser-reponse-appels-offres-ia",
      lastModified: "2026-02-24",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://auradsystem.com/blog/rag-metier-documentation-technique",
      lastModified: "2026-03-10",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://auradsystem.com/blog/ia-btp-2026",
      lastModified: "2026-03-24",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://auradsystem.com/blog/ia-generique-secteurs-reglementes",
      lastModified: "2026-04-04",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://auradsystem.com/blog/roi-ia-pme-eti",
      lastModified: "2026-04-06",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://auradsystem.com/blog/donnees-metier-ia-qualite",
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
