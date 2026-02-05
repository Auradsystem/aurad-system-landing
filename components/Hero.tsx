import React from 'react';
import { ArrowRight, Cpu, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-[1]"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aurad-900/50 border border-aurad-500/30 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurad-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-aurad-500"></span>
                </span>
                <span className="text-aurad-200 text-xs font-medium tracking-wide uppercase">Disponible pour nouveaux projets</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Automatisez <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurad-300 to-blue-600 neon-text">
                Vos Processus
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Je conçois et développe des solutions digitales pour les PME/TPE qui veulent innover sans exploser leur budget. De l'audit à la mise en production.
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

          {/* Visual abstract graphic */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto animate-float">
                {/* Abstract dashboard glass cards */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[180px] bg-aurad-900/60 backdrop-blur-xl border border-aurad-500/30 rounded-2xl shadow-2xl flex flex-col p-4 z-20">
                    <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-2">
                        <div className="w-8 h-8 rounded bg-aurad-500/20 flex items-center justify-center text-aurad-400"><Code2 size={16} /></div>
                        <div className="h-2 w-24 bg-white/20 rounded"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-white/10 rounded"></div>
                        <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                        <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                    </div>
                </div>

                <div className="absolute top-10 right-0 w-[220px] h-[140px] bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl flex flex-col p-4 z-10 translate-x-10">
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><Cpu size={16} /></div>
                        <div className="text-xs text-green-400 font-mono">ACTIVE</div>
                    </div>
                    <div className="mt-auto">
                         <div className="text-2xl font-bold text-white">98%</div>
                         <div className="text-xs text-gray-500">Efficiency</div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-0 w-[240px] h-[120px] bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-4 z-30 -translate-x-10">
                     <div className="flex gap-2 mb-2">
                         <div className="w-2 h-2 rounded-full bg-red-500"></div>
                         <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                         <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     </div>
                     <div className="font-mono text-xs text-aurad-300">
                        &gt; deploying webhooks...<br/>
                        &gt; syncing databases...<br/>
                        <span className="text-green-400">&gt; done.</span>
                     </div>
                </div>
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-50">
                    <line x1="100" y1="200" x2="250" y2="250" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="400" y1="100" x2="250" y2="250" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
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
