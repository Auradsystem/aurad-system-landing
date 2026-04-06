import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GTMPageView } from "@/components/GTMPageView";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://auradsystem.com"),
  title: {
    template: "%s | Aurad System",
    default:
      "Aurad System | Consulting IA & Développement Sur-Mesure pour PME/ETI",
  },
  description:
    "Consulting IA et développement sur-mesure pour PME/ETI. Agents IA métier, automatisation de processus, applications web. Un ingénieur qui comprend votre métier et code la solution.",
  authors: [{ name: "Dali Bensalem - Aurad System" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    siteName: "Aurad System",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aurad System - Consulting IA et developpement sur-mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  other: {
    "theme-color": "#020617",
    "geo.region": "FR-IDF",
    "geo.placename": "Île-de-France",
    "content-language": "fr",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://auradsystem.com/#organization",
      name: "Aurad System",
      url: "https://auradsystem.com",
      logo: "https://auradsystem.com/favicon.svg",
      image: "https://auradsystem.com/og-image.png",
      description:
        "Bureau d'études et conseil technique BTP spécialisé en assistance à maîtrise d'ouvrage (AMO) et maîtrise d'œuvre (MOE) pour les lots spéciaux. Développement digital sur-mesure pour PME/ETI.",
      founder: {
        "@type": "Person",
        name: "Dali Bensalem",
        jobTitle: "Fondateur - Consultant BTP & Digital",
        url: "https://www.linkedin.com/in/dalibensalem",
      },
      foundingDate: "2024-07",
      areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "229 rue Saint-Honoré",
        addressLocality: "Paris",
        postalCode: "75001",
        addressRegion: "Île-de-France",
        addressCountry: "FR",
      },
      geo: { "@type": "GeoCoordinates", latitude: 48.8651, longitude: 2.3262 },
      email: "dali.bensalem@auradsystem.com",
      telephone: "+33685189260",
      priceRange: "$$",
      knowsAbout: [
        "Assistance à maîtrise d'ouvrage BTP",
        "Maîtrise d'œuvre lots techniques",
        "Sécurité incendie",
        "Vidéosurveillance",
        "Caméras thermiques",
        "Contrôle d'accès",
        "GTC/GTB",
        "Développement d'applications web",
        "Applications SaaS",
        "CCTP rédaction",
        "Analyse d'offres BTP",
        "Pilotage chantier",
        "Certificats d'Économies d'Énergie CEE",
        "Automatisation documentaire BTP",
        "Suivi de chantier digital",
        "Certification APSAD I7 F7",
        "ISO 31000 Management des risques",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services Aurad System",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ingénierie technique BTP - AMO/MOE",
              description:
                "Assistance à maîtrise d'ouvrage et maîtrise d'œuvre pour les lots techniques : sécurité, incendie, caméras thermiques, GTC, contrôle d'accès, électricité. De l'audit à la réception.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aide à la réponse aux appels d'offres",
              description:
                "Analyse du DCE, stratégie de réponse, rédaction de mémoire technique, optimisation du chiffrage pour entreprises BTP.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Développement digital sur-mesure",
              description:
                "Automatisation documentaire BTP, suivi de chantier digital, plateformes métier sur-mesure (CRM BTP, simulateurs de chiffrage, GMAO) pour PME/ETI.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Valorisation CEE",
              description:
                "Montage des dossiers CEE sur les opérations éligibles (GTB, éclairage, CVC) avec réseau de partenaires obligés.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Certifications & Risk Management",
              description:
                "Accompagnement certification APSAD (I7/F7) et démarches ISO 31000 pour entreprises de sécurité et BTP.",
            },
          },
        ],
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "dali.bensalem@auradsystem.com",
        telephone: "+33685189260",
        availableLanguage: "French",
        areaServed: "FR",
      },
      sameAs: ["https://www.linkedin.com/in/dalibensalem"],
    },
    {
      "@type": "WebSite",
      "@id": "https://auradsystem.com/#website",
      url: "https://auradsystem.com",
      name: "Aurad System",
      publisher: { "@id": "https://auradsystem.com/#organization" },
      inLanguage: "fr-FR",
    },
    {
      "@type": "WebPage",
      "@id": "https://auradsystem.com/#webpage",
      url: "https://auradsystem.com",
      name: "Aurad System | AMO/MOE Lots Techniques BTP & Développement Digital",
      description:
        "Ingénierie technique BTP (AMO/MOE) et développement digital sur-mesure pour PME/ETI en Île-de-France.",
      isPartOf: { "@id": "https://auradsystem.com/#website" },
      about: { "@id": "https://auradsystem.com/#organization" },
      inLanguage: "fr-FR",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "C'est quoi un agent IA concrètement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un agent IA est un programme qui comprend vos données, vos règles métier, et qui agit en autonomie sur des tâches répétitives. Ce n'est pas un chatbot générique. C'est un outil entraîné sur votre contexte : il qualifie des demandes, génère des documents, retrouve de l'information dans vos bases. Il fait en secondes ce qui prend des heures à vos équipes.",
      },
    },
    {
      "@type": "Question",
      name: "En combien de temps un agent IA est opérationnel ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comptez 2 semaines pour un premier prototype fonctionnel testé avec vos propres données. Le déploiement complet (intégration dans vos outils, formation des équipes) prend 4 à 8 semaines selon la complexité.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle différence avec un chatbot ou ChatGPT ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT est généraliste. Il ne connaît pas vos règles métier, vos normes, vos process internes. Un agent sur-mesure est codé pour votre contexte : il accède à vos données, respecte vos contraintes réglementaires, et produit des résultats exploitables directement.",
      },
    },
    {
      "@type": "Question",
      name: "Vous travaillez avec quels secteurs ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BTP, énergie, industrie, services. Le secteur change, la méthode reste : comprendre le métier avant de coder. Les agents IA et les applications métier s'adaptent à tout secteur avec des process répétitifs ou de la documentation technique.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi pas une agence IA classique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La plupart des agences IA connectent des outils no-code ou configurent des wrappers autour de ChatGPT. Ici, c'est du vrai code : RAG custom, agents autonomes, intégrations API sur-mesure. Et surtout, un interlocuteur unique qui comprend votre métier.",
      },
    },
    {
      "@type": "Question",
      name: "C'est quoi un AMO et pourquoi en avoir besoin ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'Assistant à Maîtrise d'Ouvrage accompagne le maître d'ouvrage dans le pilotage de son projet technique : rédaction des cahiers des charges, analyse des offres, coordination des lots, réception. Sans AMO sur les lots spéciaux (sécurité, incendie, GTC), les surcoûts moyens sont de 15-25%.",
      },
    },
    {
      "@type": "Question",
      name: "Intervenez-vous uniquement en Île-de-France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Île-de-France pour les missions terrain (pilotage chantier, réceptions). Les missions de consulting IA, développement d'applications et conseil technique se font à distance sur tout le territoire.",
      },
    },
    {
      "@type": "Question",
      name: "Combien ça coûte ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque projet est différent. Un agent IA simple démarre autour de 5 000 €. Une application métier complète entre 15 000 et 50 000 €. Une mission AMO/MOE dépend du périmètre et de la durée. Le plus simple : on en parle 30 minutes et je vous donne une fourchette réaliste.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`scroll-smooth ${outfit.className}`}>
      <head>
        {/* Consent Mode v2 defaults (GDPR/CNIL) */}
        <Script id="consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied', ad_user_data: 'denied',
              ad_personalization: 'denied', analytics_storage: 'granted',
              wait_for_update: 500
            });
          `}
        </Script>
        {/* Google Tag Manager */}
        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        {/* JSON-LD: Organization + Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {/* JSON-LD: FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>
        {/* GTM noscript */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <div className="min-h-screen bg-aurad-950 text-white selection:bg-aurad-500 selection:text-white">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-aurad-500 focus:text-white focus:px-4 focus:py-2 focus:rounded"
          >
            Aller au contenu principal
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
        <GTMPageView />
        <Analytics />
      </body>
    </html>
  );
}
