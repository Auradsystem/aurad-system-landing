import React from "react";
import { ArrowRight } from "lucide-react";
export function CTASection({
  title = "Prêt à accélérer ?",
  subtitle = "Évaluez votre projet en 30 minutes. On identifie ensemble ce qui peut être automatisé.",
  buttonText = "Évaluer mon projet",
  buttonHref = "/#contact",
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-400 mb-8">{subtitle}</p>
        <a
          href={buttonHref}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-aurad-500 text-white font-bold rounded-lg hover:bg-aurad-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-colors"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
