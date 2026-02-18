import React, { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Analytics } from '@vercel/analytics/react';

const Methodology = lazy(() => import('./components/Methodology').then(m => ({ default: m.Methodology })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

function App() {
  return (
    <div className="min-h-screen bg-aurad-950 text-white selection:bg-aurad-500 selection:text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-aurad-500 focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Aller au contenu principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Suspense fallback={null}>
          <Methodology />
          <About />
          <Contact />
          <FAQ />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Analytics />
    </div>
  );
}

export default App;
