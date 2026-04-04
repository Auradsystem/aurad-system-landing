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
          </Routes>
        </Suspense>
      </Layout>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
