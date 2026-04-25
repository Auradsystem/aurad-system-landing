"use client";

import React from "react";
import { Logo } from "./Logo";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { pushEvent } from "@/lib/gtm";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/[0.05] pt-13 pb-8">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-7">
        <div className="flex flex-wrap justify-between items-center gap-6 mb-10">
          <a href="/" className="flex items-center gap-3">
            <Logo className="w-[30px] h-[30px]" />
            <span className="text-[15px] font-bold tracking-[0.09em] text-white">
              AURAD <span className="text-aurad-400">SYSTEM</span>
            </span>
          </a>

          <div className="flex gap-4">
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
              className="text-slate-700 hover:text-aurad-400 transition-colors"
            >
              <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
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
              className="text-slate-700 hover:text-aurad-400 transition-colors"
            >
              <MessageCircle className="w-[18px] h-[18px]" strokeWidth={1.5} />
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
              className="text-slate-700 hover:text-aurad-400 transition-colors"
            >
              <Linkedin className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6 flex flex-wrap justify-between gap-2 text-[12px] text-slate-800">
          <p>
            © {new Date().getFullYear()} Aurad System. Tous droits réservés.
          </p>
          <p>Fondé en Juillet 2024 · Indépendant</p>
        </div>
      </div>
    </footer>
  );
};
