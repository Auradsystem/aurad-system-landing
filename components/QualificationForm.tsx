import React, { useState } from 'react';
import { Smartphone, Building2, ArrowRight, ArrowLeft, CheckCircle, Send, Loader2 } from 'lucide-react';

type Domain = 'digital' | 'btp' | null;
type Timeline = 'urgent' | 'court' | 'moyen' | 'exploration' | null;
type Budget = '<5k' | '5-15k' | '15-50k' | '>50k' | 'tbd' | null;

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
  problem: '',
  timeline: null,
  budget: null,
  name: '',
  email: '',
  phone: '',
  company: '',
};

const WEBHOOK_URL = 'https://n8n.auradsystem.com/webhook/qualification';

const TOTAL_STEPS = 5;

const PLACEHOLDERS: Record<string, string> = {
  digital: 'Ex : Nous perdons du temps sur nos devis et rapports, nous cherchons à automatiser le suivi de chantier...',
  btp: 'Ex : Nous lançons un projet de vidéosurveillance sur 3 sites, nous avons besoin d\'un AMO pour la sécurité incendie...',
  default: 'Décrivez votre projet ou votre problématique en quelques lignes...',
};

export const QualificationForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const next = () => {
    setDirection('next');
    setStep(s => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const prev = () => {
    setDirection('prev');
    setStep(s => Math.max(s - 1, 0));
  };

  const canAdvance = (): boolean => {
    switch (step) {
      case 0: return data.domain !== null;
      case 1: return data.problem.trim().length >= 10;
      case 2: return data.timeline !== null && data.budget !== null;
      case 3: return data.name.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error('Erreur réseau');
      setSubmitted(true);
      setStep(4);
    } catch {
      setError('Une erreur est survenue. Vous pouvez aussi nous contacter directement par email ou WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && step < 3 && canAdvance()) {
      e.preventDefault();
      next();
    }
  };

  // --- Step renderers ---

  const renderStep0 = () => (
    <div className="form-step-content">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Quel est votre besoin ?</h3>
      <p className="text-gray-400 mb-8">Sélectionnez le domaine qui correspond à votre projet.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {([
          { value: 'digital' as const, icon: <Smartphone className="w-8 h-8" />, label: 'Application digitale', desc: 'Automatisation, outils métier, plateforme sur-mesure' },
          { value: 'btp' as const, icon: <Building2 className="w-8 h-8" />, label: 'Ingénierie technique BTP', desc: 'AMO, MOE, sûreté, sécurité incendie, CEE' },
        ]).map(opt => (
          <button
            key={opt.value}
            type="button"
            onClick={() => { setData(d => ({ ...d, domain: opt.value })); }}
            className={`group relative p-6 rounded-xl border text-left transition-all duration-300 ${
              data.domain === opt.value
                ? 'border-aurad-500 bg-aurad-500/10 neon-border'
                : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
            }`}
          >
            <div className={`mb-4 transition-colors ${data.domain === opt.value ? 'text-aurad-400' : 'text-gray-500 group-hover:text-gray-400'}`}>
              {opt.icon}
            </div>
            <h4 className="text-lg font-semibold text-white mb-1">{opt.label}</h4>
            <p className="text-sm text-gray-400">{opt.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="form-step-content">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Décrivez votre situation</h3>
      <p className="text-gray-400 mb-8">Quelques lignes suffisent. Plus vous êtes précis, mieux nous pourrons vous aider.</p>
      <textarea
        value={data.problem}
        onChange={e => setData(d => ({ ...d, problem: e.target.value }))}
        onKeyDown={handleKeyDown}
        placeholder={PLACEHOLDERS[data.domain || 'default']}
        rows={4}
        autoFocus
        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-aurad-500 focus:ring-1 focus:ring-aurad-500/50 transition-colors resize-none text-base leading-relaxed"
      />
      <p className="text-xs text-gray-500 mt-2">{data.problem.length < 10 ? `Minimum 10 caractères (${data.problem.length}/10)` : 'Parfait, continuez si vous le souhaitez.'}</p>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-step-content">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Calendrier & budget</h3>
      <p className="text-gray-400 mb-8">Pour mieux cadrer votre projet.</p>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-300 mb-3">Quand souhaitez-vous démarrer ?</label>
        <div className="grid grid-cols-2 gap-3">
          {([
            { value: 'urgent' as const, label: 'Urgent', desc: '< 1 mois' },
            { value: 'court' as const, label: 'Court terme', desc: '1-3 mois' },
            { value: 'moyen' as const, label: 'Moyen terme', desc: '3-6 mois' },
            { value: 'exploration' as const, label: 'Je me renseigne', desc: 'Pas de date' },
          ]).map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setData(d => ({ ...d, timeline: opt.value }))}
              className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                data.timeline === opt.value
                  ? 'border-aurad-500 bg-aurad-500/10 neon-border'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              <span className="block text-sm font-semibold text-white">{opt.label}</span>
              <span className="block text-xs text-gray-400">{opt.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">Budget envisagé</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {([
            { value: '<5k' as const, label: '< 5 000 €' },
            { value: '5-15k' as const, label: '5 - 15 000 €' },
            { value: '15-50k' as const, label: '15 - 50 000 €' },
            { value: '>50k' as const, label: '> 50 000 €' },
            { value: 'tbd' as const, label: 'À définir' },
          ]).map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setData(d => ({ ...d, budget: opt.value }))}
              className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                data.budget === opt.value
                  ? 'border-aurad-500 bg-aurad-500/10 neon-border'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              <span className="text-sm font-medium text-white">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="form-step-content">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Vos coordonnées</h3>
      <p className="text-gray-400 mb-8">Pour que nous puissions vous recontacter rapidement.</p>
      <div className="space-y-4">
        <div>
          <label htmlFor="qf-name" className="block text-sm font-medium text-gray-300 mb-1">Nom complet *</label>
          <input
            id="qf-name"
            type="text"
            value={data.name}
            onChange={e => setData(d => ({ ...d, name: e.target.value }))}
            onKeyDown={handleKeyDown}
            placeholder="Jean Dupont"
            autoFocus
            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurad-500 focus:ring-1 focus:ring-aurad-500/50 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="qf-email" className="block text-sm font-medium text-gray-300 mb-1">Email professionnel *</label>
          <input
            id="qf-email"
            type="email"
            value={data.email}
            onChange={e => setData(d => ({ ...d, email: e.target.value }))}
            onKeyDown={handleKeyDown}
            placeholder="jean@entreprise.com"
            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurad-500 focus:ring-1 focus:ring-aurad-500/50 transition-colors"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="qf-phone" className="block text-sm font-medium text-gray-300 mb-1">Téléphone <span className="text-gray-500">(optionnel)</span></label>
            <input
              id="qf-phone"
              type="tel"
              value={data.phone}
              onChange={e => setData(d => ({ ...d, phone: e.target.value }))}
              onKeyDown={handleKeyDown}
              placeholder="06 12 34 56 78"
              className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurad-500 focus:ring-1 focus:ring-aurad-500/50 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="qf-company" className="block text-sm font-medium text-gray-300 mb-1">Entreprise <span className="text-gray-500">(optionnel)</span></label>
            <input
              id="qf-company"
              type="text"
              value={data.company}
              onChange={e => setData(d => ({ ...d, company: e.target.value }))}
              onKeyDown={handleKeyDown}
              placeholder="Nom de l'entreprise"
              className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurad-500 focus:ring-1 focus:ring-aurad-500/50 transition-colors"
            />
          </div>
        </div>
      </div>
      {error && (
        <p className="mt-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">{error}</p>
      )}
    </div>
  );

  const renderStep4 = () => (
    <div className="form-step-content text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-aurad-500/20 text-aurad-400 mb-6 confirmation-icon">
        <CheckCircle className="w-8 h-8" />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Demande envoyée !</h3>
      <p className="text-gray-400 mb-6 max-w-md mx-auto">
        Merci <span className="text-white font-medium">{data.name.split(' ')[0]}</span>. Nous analysons votre besoin et revenons vers vous sous 24h.
      </p>
      <div className="glass-card rounded-xl p-6 text-left max-w-sm mx-auto">
        <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">Récapitulatif</h4>
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-500">Domaine</dt>
            <dd className="text-white font-medium">{data.domain === 'digital' ? 'Digital' : 'BTP'}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Calendrier</dt>
            <dd className="text-white font-medium">
              {{ urgent: 'Urgent', court: 'Court terme', moyen: 'Moyen terme', exploration: 'Exploration' }[data.timeline || 'exploration']}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Budget</dt>
            <dd className="text-white font-medium">
              {{ '<5k': '< 5k€', '5-15k': '5-15k€', '15-50k': '15-50k€', '>50k': '> 50k€', tbd: 'À définir' }[data.budget || 'tbd']}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );

  const steps = [renderStep0, renderStep1, renderStep2, renderStep3, renderStep4];

  return (
    <div className="glass-card rounded-2xl p-1 max-w-2xl mx-auto">
      <div className="bg-slate-950/95 md:bg-slate-950/80 md:backdrop-blur-xl rounded-xl overflow-hidden">
        {/* Progress bar */}
        {!submitted && (
          <div className="h-1 bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-aurad-500 to-aurad-300 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Step indicator */}
        {!submitted && (
          <div className="flex items-center justify-between px-6 pt-5 pb-0">
            <span className="text-xs text-gray-500 font-medium">Étape {step + 1} / {TOTAL_STEPS - 1}</span>
            <div className="flex gap-1.5">
              {Array.from({ length: TOTAL_STEPS - 1 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i <= step ? 'w-6 bg-aurad-500' : 'w-1.5 bg-white/10'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Form content */}
        <div className="px-6 py-8 relative overflow-hidden">
          <div
            key={step}
            className={`form-step-animate ${direction === 'next' ? 'form-slide-in-right' : 'form-slide-in-left'}`}
          >
            {steps[step]()}
          </div>
        </div>

        {/* Navigation */}
        {!submitted && (
          <div className="flex items-center justify-between px-6 pb-6">
            {step > 0 ? (
              <button
                type="button"
                onClick={prev}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
              >
                <ArrowLeft className="w-4 h-4" />
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-aurad-500 text-white font-semibold rounded-lg hover:bg-aurad-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-aurad-500 disabled:hover:shadow-none"
              >
                Continuer
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : step === 3 ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canAdvance() || submitting}
                className="inline-flex items-center gap-2 px-6 py-3 bg-aurad-500 text-white font-semibold rounded-lg hover:bg-aurad-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-aurad-500 disabled:hover:shadow-none"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi...
                  </>
                ) : (
                  <>
                    Envoyer
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};
