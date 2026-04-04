import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { pushEvent } from "@/lib/gtm";

const Footer = React.lazy(() =>
  import("./Footer").then((m) => ({ default: m.Footer })),
);

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Track SPA page views in GTM/GA4
  useEffect(() => {
    pushEvent({
      event: "page_view",
      page_path: location.pathname,
      page_title: document.title,
    });
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
