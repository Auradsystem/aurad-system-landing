import React, { useCallback, useEffect, useState } from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  delayRender,
  continueRender,
  cancelRender,
} from 'remotion';
import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { slide } from '@remotion/transitions/slide';
import { loadFont } from '@remotion/google-fonts/Outfit';
import type { AuradVideoProps } from './schema';

const { fontFamily, waitUntilDone } = loadFont('normal', {
  weights: ['400', '600', '700', '800'],
  subsets: ['latin'],
});

// ===== SCENE 1: Logo Reveal =====
const LogoReveal: React.FC<{
  companyName: string;
  accentColor: string;
  logoSrc: string;
  noiseSrc: string;
}> = ({ companyName, accentColor, logoSrc, noiseSrc }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const parts = companyName.split(' ');
  const firstPart = parts[0] || '';
  const secondPart = parts.slice(1).join(' ');

  const logoScale = spring({ frame, fps, config: { damping: 12, stiffness: 80 } });
  const logoRotate = interpolate(logoScale, [0, 1], [-15, 0]);
  const titleProgress = spring({ frame, fps, delay: 15, config: { damping: 200 } });
  const glowPulse = interpolate(Math.sin(frame * 0.08), [-1, 1], [20, 50]);

  return (
    <AbsoluteFill style={{
      backgroundColor: '#020617',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily,
    }}>
      <AbsoluteFill style={{
        backgroundImage: `url(${staticFile(noiseSrc)})`,
        opacity: 0.04,
      }} />

      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${accentColor}40 0%, transparent 70%)`,
        filter: `blur(${glowPulse}px)`,
        transform: `scale(${interpolate(logoScale, [0, 1], [0.3, 1])})`,
        opacity: interpolate(logoScale, [0, 1], [0, 0.8]),
      }} />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
      }}>
        <div style={{
          width: '140px',
          height: '140px',
          background: `${accentColor}14`,
          border: `2px solid ${accentColor}4d`,
          borderRadius: '36px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: `0 0 ${glowPulse}px ${accentColor}80`,
          transform: `scale(${logoScale}) rotate(${logoRotate}deg)`,
          opacity: logoScale,
        }}>
          <Img src={staticFile(logoSrc)} style={{ width: '80px', height: '80px' }} />
        </div>

        <div style={{ overflow: 'hidden' }}>
          <h1 style={{
            fontSize: '110px',
            fontWeight: 800,
            margin: 0,
            letterSpacing: '-3px',
            lineHeight: 1,
            transform: `translateY(${interpolate(titleProgress, [0, 1], [120, 0])}px)`,
            opacity: titleProgress,
          }}>
            <span style={{ color: 'white' }}>{firstPart}</span>
            {secondPart && (
              <>
                {' '}
                <span style={{
                  color: accentColor,
                  textShadow: `0 0 40px ${accentColor}99`,
                }}>{secondPart}</span>
              </>
            )}
          </h1>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===== SCENE 2: Digital Solutions =====
const DigitalScene: React.FC<{
  accentColor: string;
  noiseSrc: string;
  imageSrc: string;
  overline: string;
  title: string;
  subtitle: string;
  services: string[];
}> = ({ accentColor, noiseSrc, imageSrc, overline, title, subtitle, services }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleIn = spring({ frame, fps, config: { damping: 200 } });
  const imageIn = spring({ frame, fps, delay: 10, config: { damping: 200 } });

  return (
    <AbsoluteFill style={{ backgroundColor: '#020617', fontFamily }}>
      <AbsoluteFill style={{
        backgroundImage: `url(${staticFile(noiseSrc)})`,
        opacity: 0.04,
      }} />

      {/* Left content */}
      <div style={{
        position: 'absolute',
        left: '80px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '4px',
        height: `${interpolate(titleIn, [0, 1], [0, 300])}px`,
        background: `linear-gradient(to bottom, transparent, ${accentColor}, transparent)`,
        borderRadius: '2px',
      }} />

      <div style={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        padding: '80px 120px',
      }}>
        <div style={{ flex: 1, paddingLeft: '60px' }}>
          <p style={{
            fontSize: '22px',
            color: accentColor,
            letterSpacing: '6px',
            textTransform: 'uppercase',
            fontWeight: 600,
            margin: 0,
            marginBottom: '20px',
            opacity: titleIn,
            transform: `translateX(${interpolate(titleIn, [0, 1], [-30, 0])}px)`,
          }}>
            {overline}
          </p>

          <h2 style={{
            fontSize: '72px',
            fontWeight: 700,
            color: 'white',
            margin: 0,
            marginBottom: '50px',
            lineHeight: 1.1,
            opacity: titleIn,
            transform: `translateX(${interpolate(titleIn, [0, 1], [-50, 0])}px)`,
          }}>
            {title}{'\n'}
            <span style={{ color: '#94a3b8' }}>{subtitle}</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {services.map((label, i) => {
              const pillIn = spring({ frame, fps, delay: 20 + i * 8, config: { damping: 200 } });
              return (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  opacity: pillIn,
                  transform: `translateX(${interpolate(pillIn, [0, 1], [40, 0])}px)`,
                }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: accentColor,
                    boxShadow: `0 0 12px ${accentColor}99`,
                  }} />
                  <span style={{ fontSize: '28px', fontWeight: 400, color: '#e2e8f0' }}>{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Generated image */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: imageIn,
          transform: `scale(${interpolate(imageIn, [0, 1], [0.85, 1])})`,
        }}>
          <Img
            src={staticFile(imageSrc)}
            style={{
              width: '550px',
              height: '550px',
              objectFit: 'contain',
              borderRadius: '24px',
              filter: 'drop-shadow(0 0 30px rgba(34, 211, 238, 0.2))',
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===== SCENE 3: Engineering BTP =====
const EngineeringScene: React.FC<{
  accentColor: string;
  noiseSrc: string;
  imageSrc: string;
  overline: string;
  title: string;
  highlight: string;
  services: Array<{ label: string; color: string }>;
}> = ({ accentColor, noiseSrc, imageSrc, overline, title, highlight, services }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleIn = spring({ frame, fps, config: { damping: 200 } });
  const bgIn = spring({ frame, fps, delay: 5, config: { damping: 200 } });

  return (
    <AbsoluteFill style={{
      backgroundColor: '#020617',
      fontFamily,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <AbsoluteFill style={{
        backgroundImage: `url(${staticFile(noiseSrc)})`,
        opacity: 0.04,
      }} />

      {/* Background image */}
      <AbsoluteFill style={{
        opacity: interpolate(bgIn, [0, 1], [0, 0.15]),
      }}>
        <Img
          src={staticFile(imageSrc)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AbsoluteFill>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',
        zIndex: 1,
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '22px',
            color: accentColor,
            letterSpacing: '6px',
            textTransform: 'uppercase',
            fontWeight: 600,
            margin: 0,
            marginBottom: '16px',
            opacity: titleIn,
          }}>
            {overline}
          </p>
          <h2 style={{
            fontSize: '72px',
            fontWeight: 700,
            color: 'white',
            margin: 0,
            opacity: titleIn,
            transform: `scale(${interpolate(titleIn, [0, 1], [0.9, 1])})`,
          }}>
            {title}{' '}
            <span style={{
              color: accentColor,
              textShadow: `0 0 30px ${accentColor}66`,
            }}>{highlight}</span>
          </h2>
        </div>

        <div style={{ display: 'flex', gap: '24px' }}>
          {services.map((s, i) => {
            const cardIn = spring({ frame, fps, delay: 15 + i * 8, config: { damping: 15, stiffness: 120 } });
            return (
              <div key={i} style={{
                background: 'rgba(2, 6, 23, 0.8)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${s.color}33`,
                borderRadius: '16px',
                padding: '28px 36px',
                transform: `translateY(${interpolate(cardIn, [0, 1], [30, 0])}px)`,
                opacity: cardIn,
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: s.color,
                  boxShadow: `0 0 10px ${s.color}`,
                  marginBottom: '12px',
                }} />
                <span style={{ fontSize: '22px', fontWeight: 600, color: '#e2e8f0' }}>{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===== SCENE 4: Closing =====
const ClosingScene: React.FC<{
  accentColor: string;
  noiseSrc: string;
  imageSrc: string;
  tagline: string;
  websiteUrl: string;
}> = ({ accentColor, noiseSrc, imageSrc, tagline, websiteUrl }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scaleIn = spring({ frame, fps, config: { damping: 200 } });
  const taglineIn = spring({ frame, fps, delay: 20, config: { damping: 200 } });
  const glowPulse = interpolate(Math.sin(frame * 0.06), [-1, 1], [15, 35]);

  return (
    <AbsoluteFill style={{
      backgroundColor: '#020617',
      fontFamily,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* Background image */}
      <AbsoluteFill style={{ opacity: 0.3 }}>
        <Img
          src={staticFile(imageSrc)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AbsoluteFill>

      <AbsoluteFill style={{
        backgroundImage: `url(${staticFile(noiseSrc)})`,
        opacity: 0.04,
      }} />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        zIndex: 1,
      }}>
        <h2 style={{
          fontSize: '80px',
          fontWeight: 800,
          color: 'white',
          margin: 0,
          textAlign: 'center',
          lineHeight: 1.2,
          transform: `scale(${interpolate(scaleIn, [0, 1], [0.85, 1])})`,
          opacity: scaleIn,
        }}>
          {tagline.includes('l\'excellence') ? (
            <>
              {tagline.split('l\'excellence')[0]}
              <span style={{
                color: accentColor,
                textShadow: `0 0 ${glowPulse}px ${accentColor}80`,
              }}>l'excellence</span>
            </>
          ) : tagline}
        </h2>

        <p style={{
          fontSize: '26px',
          color: '#94a3b8',
          margin: 0,
          opacity: taglineIn,
          transform: `translateY(${interpolate(taglineIn, [0, 1], [15, 0])}px)`,
        }}>
          {websiteUrl}
        </p>
      </div>
    </AbsoluteFill>
  );
};

// ===== MAIN COMPOSITION =====
export const AuradComposition: React.FC<AuradVideoProps> = (props) => {
  const [fontHandle] = useState(() => delayRender('Loading Outfit font'));

  useEffect(() => {
    waitUntilDone()
      .then(() => continueRender(fontHandle))
      .catch((err) => cancelRender(`Font loading failed: ${err}`));
  }, [fontHandle]);

  const d = props.sceneDurations;

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={d.logoReveal}>
        <LogoReveal
          companyName={props.companyName}
          accentColor={props.accentColor}
          logoSrc={props.logoSrc}
          noiseSrc={props.noiseSrc}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: d.transitionLength })}
      />
      <TransitionSeries.Sequence durationInFrames={d.digital}>
        <DigitalScene
          accentColor={props.accentColor}
          noiseSrc={props.noiseSrc}
          imageSrc={props.scene2Image}
          overline={props.digitalOverline}
          title={props.digitalTitle}
          subtitle={props.digitalSubtitle}
          services={props.digitalServices}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: 'from-right' })}
        timing={linearTiming({ durationInFrames: d.transitionLength })}
      />
      <TransitionSeries.Sequence durationInFrames={d.engineering}>
        <EngineeringScene
          accentColor={props.accentColor}
          noiseSrc={props.noiseSrc}
          imageSrc={props.scene3Image}
          overline={props.btpOverline}
          title={props.btpTitle}
          highlight={props.btpHighlight}
          services={props.btpServices}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: d.transitionLength })}
      />
      <TransitionSeries.Sequence durationInFrames={d.closing}>
        <ClosingScene
          accentColor={props.accentColor}
          noiseSrc={props.noiseSrc}
          imageSrc={props.scene4Image}
          tagline={props.tagline}
          websiteUrl={props.websiteUrl}
        />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
