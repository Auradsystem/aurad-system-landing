declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

type GTMEvent =
  | {
      event: "generate_lead";
      lead_source: "automatiser" | "construire" | "piloter";
      timeline: string;
      budget: string;
    }
  | {
      event: "form_step";
      step_number: number;
      step_name: string;
      domain?: "automatiser" | "construire" | "piloter" | null;
    }
  | {
      event: "cta_click";
      cta_text: string;
      cta_location: "hero" | "services" | "nav" | "contact" | "page";
    }
  | {
      event: "contact_click";
      contact_method: "email" | "whatsapp" | "linkedin";
      contact_location: "contact" | "footer";
    }
  | { event: "faq_interaction"; faq_question: string }
  | {
      event: "page_view";
      page_path: string;
      page_title: string;
    }
  | {
      event: "filter_click";
      filter_name: string;
      filter_location: string;
    };

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
  if (process.env.NODE_ENV === "development") {
    console.log("[GTM]", evt);
  }
}

export { pushEvent, STEP_NAMES };
export type { GTMEvent };
