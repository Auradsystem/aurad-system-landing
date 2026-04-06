import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Layout } from "./components/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AgentsIAPage = lazy(() => import("./pages/AgentsIAPage"));
const DeveloppementPage = lazy(() => import("./pages/DeveloppementPage"));
const IngenieriePage = lazy(() => import("./pages/IngenieriePage"));
const RealisationsPage = lazy(() => import("./pages/RealisationsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ArticleAgentsIA = lazy(() => import("./pages/blog/agents-ia-entreprise"));
const ArticleAppelsOffres = lazy(
  () => import("./pages/blog/automatiser-reponse-appels-offres-ia"),
);
const ArticleRAGMetier = lazy(
  () => import("./pages/blog/rag-metier-documentation-technique"),
);
const ArticleIABTP = lazy(() => import("./pages/blog/ia-btp-2026"));
const ArticleIAGeneriqueSecteurs = lazy(
  () => import("./pages/blog/ia-generique-secteurs-reglementes"),
);
const ArticleROIIAPMEETI = lazy(
  () => import("./pages/blog/roi-ia-pme-eti"),
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/agents-ia" element={<AgentsIAPage />} />
            <Route path="/developpement" element={<DeveloppementPage />} />
            <Route path="/ingenierie-technique" element={<IngenieriePage />} />
            <Route path="/realisations" element={<RealisationsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route
              path="/blog/agents-ia-entreprise"
              element={<ArticleAgentsIA />}
            />
            <Route
              path="/blog/automatiser-reponse-appels-offres-ia"
              element={<ArticleAppelsOffres />}
            />
            <Route
              path="/blog/rag-metier-documentation-technique"
              element={<ArticleRAGMetier />}
            />
            <Route path="/blog/ia-btp-2026" element={<ArticleIABTP />} />
            <Route
              path="/blog/ia-generique-secteurs-reglementes"
              element={<ArticleIAGeneriqueSecteurs />}
            />
            <Route
              path="/blog/roi-ia-pme-eti"
              element={<ArticleROIIAPMEETI />}
            />
          </Routes>
        </Suspense>
      </Layout>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
