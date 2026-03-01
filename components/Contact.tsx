import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { QualificationForm } from './QualificationForm';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-aurad-600/20 blur-[120px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à accélérer votre <br />
            <span className="text-aurad-400 neon-text">transformation ?</span>
          </h2>
          <p className="text-xl text-gray-400">
            Qualifiez votre besoin en 60 secondes. Nous revenons vers vous sous 24h.
          </p>
        </div>

        <QualificationForm />

        {/* Fallback direct contact */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
          <span>Ou contactez-nous directement :</span>
          <div className="flex gap-3">
            <a
              href="mailto:dali.bensalem@auradsystem.com"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-aurad-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="https://wa.me/33685189260"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-green-400 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
