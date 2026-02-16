import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-[1]"
        src="/videos/aurad-logo.webm"
      />

      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-aurad-500/20 rounded-full blur-[120px] z-[2] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] z-[2] pointer-events-none"></div>
      
      {/* Circuit Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-[2] pointer-events-none"></div>
      <div className="absolute inset-0 z-[2] pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aurad-900/50 border border-aurad-500/30 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurad-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-aurad-500"></span>
                </span>
                <span className="text-aurad-200 text-xs font-medium tracking-wide uppercase">Disponible pour nouveaux projets</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Solutions digitales <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurad-300 to-blue-600 neon-text">
                & ingénierie technique
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Ingénierie technique BTP (AMO/MOE) et développement digital sur-mesure pour les PME/ETI d'Île-de-France. Un interlocuteur unique qui parle votre métier.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="group relative px-8 py-4 bg-aurad-500 text-white font-bold rounded-lg overflow-hidden transition-all hover:bg-aurad-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                <span className="relative z-10 flex items-center gap-2">
                  Démarrer un projet <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#services" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Découvrir mes services
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-aurad-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
