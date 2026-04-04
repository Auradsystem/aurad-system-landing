# aurad-system-landing

Site vitrine Aurad System. Vite + React 19 + Tailwind 4. Deploye sur Vercel.

## Positionnement

"Je comprends votre metier. Je code la solution."
Consulting IA + dev sur-mesure, tous secteurs. BTP = preuve de credibilite, pas identite.
3 piliers : Automatiser / Construire / Piloter.

## Stack

- Vite + React 19 + TypeScript + Tailwind 4
- react-router-dom (SPA, 6 pages)
- Vercel Analytics
- GTM (GTM-WKKS7R9B) → GA4 (G-90DS5XPGST)
- Formulaire → webhook n8n

## Structure

```
pages/              → 6 pages (HomePage, AgentsIAPage, DeveloppementPage, IngenieriePage, RealisationsPage, BlogPage)
components/         → Navbar, Hero, Services, Methodology, About, Contact, FAQ, Footer, QualificationForm
components/shared/  → CTASection (reutilise sur toutes les sous-pages)
components/ui/      → Composants generiques
lib/gtm.ts          → Events dataLayer (page_view, form_step, generate_lead, cta_click, contact_click, faq_interaction, filter_click)
public/sitemap.xml  → 6 URLs
index.html          → JSON-LD (Organization, LocalBusiness, Services, FAQ), meta tags SEO
```

## Commandes

```bash
npm run dev      # Dev server (port 3000)
npm run build    # Build production
npm run preview  # Preview build
```

## Regles

- Pas de noms de clients ni de projets sur le site
- Vouvoiement B2B obligatoire
- Zero buzzword IA (revolutionnaire, cutting-edge, disruptif)
- Le formulaire envoie vers n8n : domain = "automatiser" | "construire" | "piloter"
- Les CTAs des sous-pages pre-remplissent le formulaire via ?domain=X
- Chaque nouvelle page doit etre ajoutee dans : App.tsx (route), Navbar (lien), sitemap.xml

## Tracking

- GTM v4 publiee (8 tags, 7 triggers)
- GA4 : 14 custom dimensions + 1 metric
- Chaque navigation SPA pousse un event page_view via Layout.tsx
- Les anciennes valeurs "digital"/"btp" sont remplacees par "automatiser"/"construire"/"piloter"

## SEO

- JSON-LD complet dans index.html (Organization + LocalBusiness + Services + FAQ)
- Adresse : 229 rue Saint-Honore, 75001 Paris + coordonnees GPS
- Search Console : auradsystem.com + www verifies
- Indexation soumise le 4 avril 2026 (Indexing API + IndexNow)
- Ancien noindex corrige (etait present avant la refonte de fevrier 2026)

## Design doc

`~/.gstack/projects/Auradsystem-aurad-system-landing/dali-unknown-design-20260404-001.md`
