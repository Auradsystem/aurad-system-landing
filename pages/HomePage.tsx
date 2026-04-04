import React, { lazy, Suspense } from "react";
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
      <Hero />
      <Services />
      <Suspense fallback={null}>
        <Methodology />
        <About />
        <Contact />
        <FAQ />
      </Suspense>
    </>
  );
}
