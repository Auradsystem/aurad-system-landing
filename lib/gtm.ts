declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

type GTMEvent =
  | {
      event: "generate_lead";
      lead_source: "digital" | "btp";
      timeline: string;
      budget: string;
    }
  | {
      event: "form_step";
      step_number: number;
      step_name: string;
      domain?: "digital" | "btp" | null;
    }
  | {
      event: "cta_click";
      cta_text: string;
      cta_location: "hero" | "methodology" | "nav" | "contact";
    }
  | {
      event: "contact_click";
      contact_method: "email" | "whatsapp" | "linkedin";
      contact_location: "contact" | "footer";
    }
  | { event: "faq_interaction"; faq_question: string }
  | { event: "scenario_select"; scenario_name: "amo" | "ao" | "moe" };

const STEP_NAMES = [
  "domain_selection",
  "problem_description",
  "timeline_budget",
  "contact_info",
  "confirmation",
] as const;

function pushEvent(evt: GTMEvent): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(evt);
  if (import.meta.env.DEV) {
    console.log("[GTM]", evt);
  }
}

export { pushEvent, STEP_NAMES };
export type { GTMEvent };
