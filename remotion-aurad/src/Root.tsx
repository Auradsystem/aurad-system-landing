import { Composition, CalculateMetadataFunction } from "remotion";
import { AuradComposition } from "./Composition";
import { AuradVideoSchema, AuradVideoProps } from "./schema";

const calculateMetadata: CalculateMetadataFunction<AuradVideoProps> = async ({
  props,
}) => {
  const d = props.sceneDurations;
  const totalDuration =
    d.logoReveal +
    d.digital +
    d.engineering +
    d.closing -
    d.transitionLength * 3; // 3 transitions

  return {
    durationInFrames: totalDuration,
  };
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AuradVideo"
        component={AuradComposition}
        durationInFrames={260}
        fps={30}
        width={1920}
        height={1080}
        schema={AuradVideoSchema}
        defaultProps={{
          companyName: 'AURAD SYSTEM',
          accentColor: '#22d3ee',
          websiteUrl: 'aurad-system.com',
          logoSrc: 'og-image.svg',
          noiseSrc: 'noise.svg',
          scene2Image: 'generated/digital-solutions.png',
          scene3Image: 'generated/engineering-btp.png',
          scene4Image: 'generated/closing-bg.png',
          tagline: "Votre projet mérite l'excellence",
          digitalOverline: 'Applications métier',
          digitalTitle: 'Solutions digitales',
          digitalSubtitle: 'sur-mesure',
          digitalServices: [
            'Automatisation documentaire',
            'Suivi chantier & exploitation',
            'Plateformes métier sur-mesure',
          ],
          btpOverline: 'AMO / MOE',
          btpTitle: 'Ingénierie technique',
          btpHighlight: 'BTP',
          btpServices: [
            { label: 'Sûreté & Sécurité', color: '#22d3ee' },
            { label: 'Sécurité incendie', color: '#06b6d4' },
            { label: 'Systèmes techniques', color: '#0891b2' },
            { label: 'Valorisation CEE', color: '#0e7490' },
          ],
          sceneDurations: {
            logoReveal: 75,
            digital: 85,
            engineering: 85,
            closing: 60,
            transitionLength: 15,
          },
        }}
        calculateMetadata={calculateMetadata}
      />
    </>
  );
};
