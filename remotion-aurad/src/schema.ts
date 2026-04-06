import { z } from 'zod';
import { zColor } from '@remotion/zod-types';

export const AuradVideoSchema = z.object({
  // Branding
  companyName: z.string().default('AURAD SYSTEM'),
  accentColor: zColor().default('#22d3ee'),
  websiteUrl: z.string().default('aurad-system.com'),

  // Images (relative to public/)
  logoSrc: z.string().default('og-image.svg'),
  noiseSrc: z.string().default('noise.svg'),
  scene2Image: z.string().default('generated/digital-solutions.png'),
  scene3Image: z.string().default('generated/engineering-btp.png'),
  scene4Image: z.string().default('generated/closing-bg.png'),

  // Scene 1 content
  tagline: z.string().default('Votre projet mérite l\'excellence'),

  // Scene 2 content
  digitalOverline: z.string().default('Applications métier'),
  digitalTitle: z.string().default('Solutions digitales'),
  digitalSubtitle: z.string().default('sur-mesure'),
  digitalServices: z.array(z.string()).default([
    'Automatisation documentaire',
    'Suivi chantier & exploitation',
    'Plateformes métier sur-mesure',
  ]),

  // Scene 3 content
  btpOverline: z.string().default('AMO / MOE'),
  btpTitle: z.string().default('Ingénierie technique'),
  btpHighlight: z.string().default('BTP'),
  btpServices: z.array(
    z.object({
      label: z.string(),
      color: zColor(),
    })
  ).default([
    { label: 'Sûreté & Sécurité', color: '#22d3ee' },
    { label: 'Sécurité incendie', color: '#06b6d4' },
    { label: 'Systèmes techniques', color: '#0891b2' },
    { label: 'Valorisation CEE', color: '#0e7490' },
  ]),

  // Timing (frames)
  sceneDurations: z.object({
    logoReveal: z.number().default(75),
    digital: z.number().default(85),
    engineering: z.number().default(85),
    closing: z.number().default(60),
    transitionLength: z.number().default(15),
  }).default({}),
});

export type AuradVideoProps = z.infer<typeof AuradVideoSchema>;
