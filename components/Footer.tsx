import React from "react";
import { Logo } from "./Logo";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { pushEvent } from "@/lib/gtm";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold tracking-wider text-white">
              AURAD <span className="text-aurad-400">SYSTEM</span>
            </span>
          </div>

          <div className="flex gap-6">
            <a
              href="mailto:dali.bensalem@auradsystem.com"
              aria-label="Envoyer un email"
              onClick={() =>
                pushEvent({
                  event: "contact_click",
                  contact_method: "email",
                  contact_location: "footer",
                })
              }
              className="text-gray-400 hover:text-aurad-400 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://wa.me/33685189260"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter sur WhatsApp"
              onClick={() =>
                pushEvent({
                  event: "contact_click",
                  contact_method: "whatsapp",
                  contact_location: "footer",
                })
              }
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dalibensalem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn"
              onClick={() =>
                pushEvent({
                  event: "contact_click",
                  contact_method: "linkedin",
                  contact_location: "footer",
                })
              }
              className="text-gray-400 hover:text-aurad-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} Aurad System. Tous droits réservés.
          </p>
          <p>Fondé en Juillet 2024 - Indépendant</p>
        </div>
      </div>
    </footer>
  );
};
