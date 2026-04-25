"use client";

import React from "react";
import { Mail, MessageCircle } from "lucide-react";
import { QualificationForm } from "./QualificationForm";
import { pushEvent } from "@/lib/gtm";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-30 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(2,6,23,0.6) 60%, transparent)",
        }}
      />

      <div className="relative z-[2] max-w-[720px] mx-auto px-5 sm:px-7">
        <div className="text-center mb-12">
          <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-aurad-400 mb-4">
            Parlons-en
          </p>
          <h2
            className="font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          >
            Prêt à accélérer votre
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #67e8f9, #22d3ee)",
              }}
            >
              transformation ?
            </span>
          </h2>
          <p className="text-[17px] text-slate-500 leading-[1.6]">
            Qualifiez votre besoin en 60 secondes. Je reviens vers vous sous
            24h.
          </p>
        </div>

        <QualificationForm />

        {/* Fallback direct contact */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[13px] text-slate-700">
          <span>Ou contactez directement :</span>
          <a
            href="mailto:dali.bensalem@auradsystem.com"
            onClick={() =>
              pushEvent({
                event: "contact_click",
                contact_method: "email",
                contact_location: "contact",
              })
            }
            className="inline-flex items-center gap-1.5 text-slate-600 hover:text-aurad-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" strokeWidth={2} />
            Email
          </a>
          <span className="text-slate-800">·</span>
          <a
            href="https://wa.me/33685189260"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              pushEvent({
                event: "contact_click",
                contact_method: "whatsapp",
                contact_location: "contact",
              })
            }
            className="inline-flex items-center gap-1.5 text-slate-600 hover:text-green-400 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" strokeWidth={2} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
