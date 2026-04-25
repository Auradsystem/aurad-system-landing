"use client";

import React, { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { pushEvent } from "@/lib/gtm";
import { useReveal } from "@/lib/hooks/use-reveal";

const faqs = [
  {
    question: "C'est quoi un agent IA concrètement ?",
    answer:
      "Un agent IA, c'est un programme qui comprend vos données, vos règles métier, et qui agit en autonomie sur des tâches répétitives. Ce n'est pas un chatbot générique. C'est un outil entraîné sur votre contexte : il qualifie des demandes, génère des documents, retrouve de l'information dans vos bases. Il fait en secondes ce qui prend des heures à vos équipes.",
  },
  {
    question: "En combien de temps un agent IA est opérationnel ?",
    answer:
      "Comptez 2 semaines pour un premier prototype fonctionnel testé avec vos propres données. Le déploiement complet (intégration dans vos outils, formation des équipes) prend 4 à 8 semaines selon la complexité. Vous voyez des résultats concrets dès le prototype, pas après 6 mois de spécifications.",
  },
  {
    question: "Quelle différence avec un chatbot ou ChatGPT ?",
    answer:
      "ChatGPT est généraliste. Il ne connaît pas vos règles métier, vos normes, vos process internes. Un agent sur-mesure est codé pour votre contexte : il accède à vos données, respecte vos contraintes réglementaires, et produit des résultats exploitables directement. C'est la différence entre un stagiaire de passage et un expert de votre secteur.",
  },
  {
    question: "Vous travaillez avec quels secteurs ?",
    answer:
      "BTP, énergie, industrie, services. Le secteur change, la méthode reste : comprendre le métier avant de coder. Mon expertise terrain vient du BTP (sécurité incendie, lots techniques, appels d'offres), mais les agents IA et les applications métier que je construis s'adaptent à tout secteur avec des process répétitifs ou de la documentation technique.",
  },
  {
    question: "Pourquoi pas une agence IA classique ?",
    answer:
      "La plupart des agences IA connectent des outils no-code (n8n, Make) ou configurent des wrappers autour de ChatGPT. Ici, c'est du vrai code : RAG custom, agents autonomes, intégrations API sur-mesure. Et surtout, un interlocuteur unique qui comprend votre métier, pas un commercial qui passe le relais à un développeur junior.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "Chaque projet est différent. Un agent IA simple (qualification de demandes) démarre autour de 5 000 €. Une application métier complète entre 15 000 et 50 000 €. Une mission AMO/MOE dépend du périmètre et de la durée. Le plus simple : on en parle 30 minutes et je vous donne une fourchette réaliste.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : "0px";
    el.style.opacity = isOpen ? "1" : "0";
  }, [isOpen]);

  return (
    <div className="card overflow-hidden rounded-[10px]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-[22px] py-[18px] text-left text-white bg-transparent border-none cursor-pointer font-[inherit]"
      >
        <span className="text-[14.5px] font-semibold leading-[1.5]">
          {question}
        </span>
        <span
          className="flex-shrink-0 text-aurad-400 flex"
          style={{
            transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <Plus className="w-[15px] h-[15px]" strokeWidth={2.5} />
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: 0,
          opacity: 0,
          overflow: "hidden",
          transition:
            "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
        }}
      >
        <p className="px-[22px] pb-[18px] text-[14px] text-slate-600 leading-[1.85]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const titleRef = useReveal<HTMLDivElement>();

  const handleToggle = (idx: number, question: string) => {
    if (openIdx !== idx) {
      pushEvent({
        event: "faq_interaction",
        faq_question: question.slice(0, 80),
      });
    }
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-32"
      style={{ background: "rgba(10,18,36,0.7)" }}
    >
      <div className="max-w-[780px] mx-auto px-5 sm:px-7">
        <div ref={titleRef} className="reveal text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-aurad-400 mb-3.5">
            FAQ
          </p>
          <h2
            className="font-bold text-white tracking-[-0.025em]"
            style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}
          >
            Questions{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #67e8f9, #22d3ee)",
              }}
            >
              fréquentes
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-1.5">
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              question={f.question}
              answer={f.answer}
              isOpen={openIdx === i}
              onToggle={() => handleToggle(i, f.question)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
