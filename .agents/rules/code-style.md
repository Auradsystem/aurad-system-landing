---
description: Code style and conventions for the Aurad System project
---

# Aurad System - Code Style Rules

## Langue
- Tout le code utilisateur (labels, textes) est en **français**.
- Les commentaires dans le code sont en **anglais**.
- Les noms de variables, fonctions et composants sont en **anglais**.

## Stack Technique
- **Framework** : React 19 + TypeScript strict
- **Build** : Vite 6
- **Styling** : Tailwind CSS v4 (`@import "tailwindcss"` syntax)
- **Police** : Outfit (Google Fonts)
- **Icônes** : lucide-react

## Conventions React
- Composants fonctionnels uniquement (pas de classes).
- Un composant par fichier, nommé comme le fichier (ex: `Hero.tsx` → `export function Hero()`).
- Utiliser `React.lazy()` + `Suspense` pour les composants below-the-fold.
- Préférer les named exports aux default exports (sauf pour les lazy imports).

## Conventions TypeScript
- Activer `strict: true` dans `tsconfig.json`.
- Préférer `interface` à `type` pour les objets.
- Ne jamais utiliser `any`. Utiliser `unknown` si le type n'est pas connu.

## Conventions Tailwind
- Utiliser la palette `aurad-*` définie dans `index.css` pour toutes les couleurs.
- Utiliser les classes utilitaires `glass-card`, `neon-text`, `neon-border` pour les effets visuels.
- Respecter `prefers-reduced-motion` pour les animations.

## Accessibilité
- Toujours ajouter des attributs `aria-label` sur les éléments interactifs.
- Maintenir un ratio de contraste WCAG AA minimum.
- Inclure un skip link vers `#main-content`.
