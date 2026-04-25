"use client";

import React, { useState, useEffect } from "react";
import {
  Bot,
  Code2,
  Building2,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Send,
  Loader2,
  Lock,
} from "lucide-react";
import { pushEvent, STEP_NAMES } from "@/lib/gtm";

type Domain = "automatiser" | "construire" | "piloter" | null;
type Timeline = "urgent" | "court" | "moyen" | "exploration" | null;
type Budget = "<5k" | "5-15k" | "15-50k" | ">50k" | "tbd" | null;

interface FormData {
  domain: Domain;
  problem: string;
  timeline: Timeline;
  budget: Budget;
  name: string;
  email: string;
  phone: string;
  company: string;
}

const INITIAL_DATA: FormData = {
  domain: null,
  problem: "",
  timeline: null,
  budget: null,
  name: "",
  email: "",
  phone: "",
  company: "",
};

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ||
  "https://n8n.srv752974.hstgr.cloud/webhook/qualification";

const TOTAL_STEPS = 5;

const PLACEHOLDERS: Record<string, string> = {
  automatiser:
    "Ex : Nos équipes passent 2h/jour à qualifier des demandes manuellement, on cherche à automatiser avec un agent IA...",
  construire:
    "Ex : On gère notre suivi sur Excel et on perd des données, on a besoin d'un outil métier sur-mesure...",
  piloter:
    "Ex : Nous lançons un projet de vidéoprotection sur 3 sites, nous avons besoin d'un AMO pour coordonner les lots techniques...",
  default: "Décrivez votre projet ou votre problématique en quelques lignes...",
};

const DOMAIN_LABELS: Record<string, string> = {
  automatiser: "Agent IA",
  construire: "Dev sur-mesure",
  piloter: "Ingénierie",
};

interface OptionBtnProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  centered?: boolean;
}

const OptionBtn: React.FC<OptionBtnProps> = ({
  selected,
  onClick,
  children,
  centered = false,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="rounded-[10px] px-4 py-3.5 text-white cursor-pointer font-[inherit] transition-all duration-200"
    style={{
      border: `1px solid ${selected ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.07)"}`,
      background: selected ? "rgba(34,211,238,0.07)" : "rgba(255,255,255,0.02)",
      boxShadow: selected
        ? "0 0 0 1px rgba(34,211,238,0.3), 0 0 20px rgba(34,211,238,0.1)"
        : "none",
      textAlign: centered ? "center" : "left",
    }}
  >
    {children}
  </button>
);

export const QualificationForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Pre-fill domain from URL param (e.g. /#contact?domain=automatiser)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlDomain = params.get("domain") as Domain;
    if (
      urlDomain &&
      ["automatiser", "construire", "piloter"].includes(urlDomain)
    ) {
      setData((d) => ({ ...d, domain: urlDomain }));
      setStep(1);
      pushEvent({
        event: "form_step",
        step_number: 1,
        step_name: STEP_NAMES[1],
        domain: urlDomain,
      });
    }
  }, []);

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const next = () => {
    setDirection("next");
    const nextStep = Math.min(step + 1, TOTAL_STEPS - 1);
    pushEvent({
      event: "form_step",
      step_number: nextStep,
      step_name: STEP_NAMES[nextStep],
      domain: data.domain,
    });
    setStep(nextStep);
  };

  const prev = () => {
    setDirection("prev");
    setStep((s) => Math.max(s - 1, 0));
  };

  const canAdvance = (): boolean => {
    switch (step) {
      case 0:
        return data.domain !== null;
      case 1:
        return data.problem.trim().length >= 10;
      case 2:
        return data.timeline !== null && data.budget !== null;
      case 3:
        return (
          data.name.trim().length > 0 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
        );
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("Erreur réseau");
      setSubmitted(true);
      pushEvent({
        event: "generate_lead",
        lead_source: data.domain!,
        timeline: data.timeline!,
        budget: data.budget!,
      });
      setStep(4);
    } catch {
      setError(
        "Une erreur est survenue. Vous pouvez aussi nous contacter directement par email ou WhatsApp.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && step < 3 && canAdvance()) {
      e.preventDefault();
      next();
    }
  };

  const renderStep0 = () => (
    <div>
      <h3 className="text-[22px] font-bold text-white mb-1.5">
        Quel est votre besoin ?
      </h3>
      <p className="text-slate-500 text-sm mb-6">
        Sélectionnez ce qui correspond le mieux à votre situation.
      </p>
      <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]">
        {[
          {
            value: "automatiser" as const,
            icon: <Bot className="w-[26px] h-[26px]" strokeWidth={1.5} />,
            label: "Automatiser",
            desc: "Tâches répétitives à déléguer à l'IA",
          },
          {
            value: "construire" as const,
            icon: <Code2 className="w-[26px] h-[26px]" strokeWidth={1.5} />,
            label: "Construire",
            desc: "Outil métier sur-mesure",
          },
          {
            value: "piloter" as const,
            icon: <Building2 className="w-[26px] h-[26px]" strokeWidth={1.5} />,
            label: "Piloter",
            desc: "Projet technique avec lots spéciaux",
          },
        ].map((opt) => (
          <OptionBtn
            key={opt.value}
            selected={data.domain === opt.value}
            onClick={() => setData((d) => ({ ...d, domain: opt.value }))}
          >
            <div
              className="mb-2.5 transition-colors"
              style={{
                color: data.domain === opt.value ? "#22d3ee" : "#475569",
              }}
            >
              {opt.icon}
            </div>
            <div className="text-[15px] font-bold mb-1">{opt.label}</div>
            <div className="text-[12px] text-slate-500 leading-[1.4]">
              {opt.desc}
            </div>
          </OptionBtn>
        ))}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div>
      <h3 className="text-[22px] font-bold text-white mb-1.5">
        Décrivez votre situation
      </h3>
      <p className="text-slate-500 text-sm mb-5">
        Quelques lignes suffisent. Plus vous êtes précis, mieux je pourrai vous
        aider.
      </p>
      <textarea
        value={data.problem}
        onChange={(e) => setData((d) => ({ ...d, problem: e.target.value }))}
        onKeyDown={handleKeyDown}
        placeholder={PLACEHOLDERS[data.domain || "default"]}
        rows={4}
        autoFocus
        className="form-input resize-none"
      />
      <p className="text-[12px] text-slate-600 mt-2">
        {data.problem.length < 10
          ? `${data.problem.length}/10 caractères minimum`
          : "✓ Parfait, continuez si vous le souhaitez."}
      </p>
    </div>
  );

  const renderStep2 = () => (
    <div>
      <h3 className="text-[22px] font-bold text-white mb-1.5">
        Calendrier &amp; budget
      </h3>
      <p className="text-slate-500 text-sm mb-5">
        Pour mieux cadrer votre projet.
      </p>
      <div className="mb-6">
        <label className="block text-[13px] font-semibold text-slate-400 mb-2.5">
          Quand souhaitez-vous démarrer ?
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { v: "urgent" as const, l: "Urgent", d: "< 1 mois" },
            { v: "court" as const, l: "Court terme", d: "1–3 mois" },
            { v: "moyen" as const, l: "Moyen terme", d: "3–6 mois" },
            {
              v: "exploration" as const,
              l: "Je me renseigne",
              d: "Pas de date",
            },
          ].map((opt) => (
            <OptionBtn
              key={opt.v}
              selected={data.timeline === opt.v}
              onClick={() => setData((d) => ({ ...d, timeline: opt.v }))}
            >
              <span className="block text-[14px] font-semibold">{opt.l}</span>
              <span className="block text-[12px] text-slate-500">{opt.d}</span>
            </OptionBtn>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-[13px] font-semibold text-slate-400 mb-2.5">
          Budget envisagé
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { v: "<5k" as const, l: "< 5 000 €" },
            { v: "5-15k" as const, l: "5 – 15k €" },
            { v: "15-50k" as const, l: "15 – 50k €" },
            { v: ">50k" as const, l: "> 50 000 €" },
            { v: "tbd" as const, l: "À définir" },
          ].map((opt) => (
            <OptionBtn
              key={opt.v}
              selected={data.budget === opt.v}
              onClick={() => setData((d) => ({ ...d, budget: opt.v }))}
              centered
            >
              <span className="text-[13px] font-semibold">{opt.l}</span>
            </OptionBtn>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div>
      <h3 className="text-[22px] font-bold text-white mb-1.5">
        Vos coordonnées
      </h3>
      <p className="text-slate-500 text-sm mb-5">
        Pour que je puisse vous recontacter rapidement.
      </p>
      <div className="flex flex-col gap-3">
        <div>
          <label
            htmlFor="qf-name"
            className="block text-[13px] text-slate-400 mb-1.5"
          >
            Nom complet *
          </label>
          <input
            id="qf-name"
            type="text"
            value={data.name}
            onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
            onKeyDown={handleKeyDown}
            placeholder="Jean Dupont"
            autoFocus
            className="form-input"
          />
        </div>
        <div>
          <label
            htmlFor="qf-email"
            className="block text-[13px] text-slate-400 mb-1.5"
          >
            Email professionnel *
          </label>
          <input
            id="qf-email"
            type="email"
            value={data.email}
            onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
            onKeyDown={handleKeyDown}
            placeholder="jean@entreprise.com"
            className="form-input"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="qf-phone"
              className="block text-[13px] text-slate-400 mb-1.5"
            >
              Téléphone <span className="text-slate-600">(opt.)</span>
            </label>
            <input
              id="qf-phone"
              type="tel"
              value={data.phone}
              onChange={(e) =>
                setData((d) => ({ ...d, phone: e.target.value }))
              }
              onKeyDown={handleKeyDown}
              placeholder="06 12 34 56 78"
              className="form-input"
            />
          </div>
          <div>
            <label
              htmlFor="qf-company"
              className="block text-[13px] text-slate-400 mb-1.5"
            >
              Entreprise <span className="text-slate-600">(opt.)</span>
            </label>
            <input
              id="qf-company"
              type="text"
              value={data.company}
              onChange={(e) =>
                setData((d) => ({ ...d, company: e.target.value }))
              }
              onKeyDown={handleKeyDown}
              placeholder="Nom de l'entreprise"
              className="form-input"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-slate-600 text-[12px] bg-white/[0.02] border border-white/[0.05]">
        <Lock className="w-3.5 h-3.5" strokeWidth={2} />
        Vos données sont strictement confidentielles. Zéro spam.
      </div>
      {error && (
        <p className="mt-3 text-[13px] text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3.5 py-2.5">
          {error}
        </p>
      )}
    </div>
  );

  const renderStep4 = () => (
    <div className="text-center py-6">
      <div className="confirmation-icon w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center text-aurad-400 bg-aurad-400/10 border border-aurad-400/30">
        <CheckCircle className="w-8 h-8" strokeWidth={2} />
      </div>
      <h3 className="text-[24px] font-bold text-white mb-2">
        Demande envoyée !
      </h3>
      <p className="text-slate-500 mb-6 max-w-[360px] mx-auto leading-[1.6]">
        Merci{" "}
        <span className="text-white font-semibold">
          {data.name.split(" ")[0]}
        </span>
        . J&apos;analyse votre besoin et reviens vers vous sous 24h.
      </p>
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-[10px] px-5 py-4 max-w-[280px] mx-auto text-left">
        {[
          ["Besoin", DOMAIN_LABELS[data.domain || ""] || data.domain || ""],
          [
            "Calendrier",
            {
              urgent: "Urgent",
              court: "Court terme",
              moyen: "Moyen terme",
              exploration: "Exploration",
            }[data.timeline || "exploration"],
          ],
          [
            "Budget",
            {
              "<5k": "< 5k€",
              "5-15k": "5–15k€",
              "15-50k": "15–50k€",
              ">50k": "> 50k€",
              tbd: "À définir",
            }[data.budget || "tbd"],
          ],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between text-[13px] py-1">
            <span className="text-slate-600">{k}</span>
            <span className="text-white font-semibold">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const steps = [
    renderStep0,
    renderStep1,
    renderStep2,
    renderStep3,
    renderStep4,
  ];

  return (
    <div className="bg-white/[0.02] border border-white/[0.07] rounded-[18px] overflow-hidden max-w-[640px] mx-auto">
      {/* Progress */}
      {!submitted && (
        <div className="px-6 pt-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[12px] text-slate-600 font-medium">
              Étape {step + 1} / {TOTAL_STEPS - 1}
            </span>
            <div className="flex gap-1">
              {Array.from({ length: TOTAL_STEPS - 1 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1 rounded-sm transition-all duration-300 [transition-timing-function:cubic-bezier(.16,1,.3,1)]"
                  style={{
                    background:
                      i <= step ? "#22d3ee" : "rgba(255,255,255,0.07)",
                    width: i <= step ? 20 : 6,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {/* Step content */}
      <div className="px-6 pt-6 pb-2">
        <div
          key={step}
          className={direction === "next" ? "step-in-right" : "step-in-left"}
        >
          {steps[step]()}
        </div>
      </div>

      {/* Navigation */}
      {!submitted && (
        <div className="flex items-center justify-between px-6 pt-4 pb-6">
          {step > 0 ? (
            <button
              type="button"
              onClick={prev}
              className="inline-flex items-center gap-2 text-[14px] text-slate-600 hover:text-white px-3 py-2 rounded-lg bg-transparent border-none cursor-pointer font-[inherit] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
              Retour
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={next}
              disabled={!canAdvance()}
              className="btn-primary"
              style={{ padding: "11px 22px", fontSize: 14 }}
            >
              Continuer
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
          ) : step === 3 ? (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canAdvance() || submitting}
              className="btn-primary"
              style={{ padding: "11px 22px", fontSize: 14 }}
            >
              {submitting ? (
                <>
                  <Loader2
                    className="w-4 h-4"
                    strokeWidth={2}
                    style={{ animation: "spin 1s linear infinite" }}
                  />
                  Envoi...
                </>
              ) : (
                <>
                  Envoyer
                  <Send className="w-4 h-4" strokeWidth={2} />
                </>
              )}
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};
