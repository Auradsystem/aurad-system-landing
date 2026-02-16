import React from 'react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-aurad-600/20 blur-[120px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Prêt à accélérer votre <br />
          <span className="text-aurad-400 neon-text">transformation ?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Discutons de vos besoins en développement, automatisation ou ingénierie technique BTP.
          Un premier échange pour valider la faisabilité de votre projet.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:dali.bensalem@auradsystem.com" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-aurad-500 text-white font-bold rounded-lg hover:bg-aurad-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all">
            <Mail className="w-5 h-5" />
            Me contacter par email
          </a>
          <a href="https://wa.me/33685189260" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all">
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/dalibensalem" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 border border-slate-700 transition-all">
            Voir mon profil LinkedIn <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
