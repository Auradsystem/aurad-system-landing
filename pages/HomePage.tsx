import React, { lazy, Suspense } from "react";
import { SEO } from "../components/SEO";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";

const Methodology = lazy(() =>
  import("../components/Methodology").then((m) => ({ default: m.Methodology })),
);
const About = lazy(() =>
  import("../components/About").then((m) => ({ default: m.About })),
);
const Contact = lazy(() =>
  import("../components/Contact").then((m) => ({ default: m.Contact })),
);
const FAQ = lazy(() =>
  import("../components/FAQ").then((m) => ({ default: m.FAQ })),
);

export default function HomePage() {
  return (
    <>
      <SEO
        title="Aurad System | Consulting IA & Developpement Sur-Mesure pour PME/ETI"
        description="Consulting IA et developpement sur-mesure pour PME/ETI. Agents IA metier, automatisation de processus, applications web. Un ingenieur qui comprend votre metier et code la solution."
        path="/"
      />
      <Hero />
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <Services />
      <Suspense fallback={null}>
        <Methodology />
        <About />
        <FAQ />
      </Suspense>
    </>
  );
}
