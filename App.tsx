import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="min-h-screen bg-aurad-950 text-white selection:bg-aurad-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
