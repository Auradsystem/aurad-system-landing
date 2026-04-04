import React, { Suspense } from "react";
import { Navbar } from "./Navbar";

const Footer = React.lazy(() =>
  import("./Footer").then((m) => ({ default: m.Footer })),
);

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-aurad-950 text-white selection:bg-aurad-500 selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-aurad-500 focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Aller au contenu principal
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
