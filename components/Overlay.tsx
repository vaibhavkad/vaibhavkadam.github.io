'use client';

import { useTransform, motion, MotionValue } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

interface TextSection {
  id: string;
  text: string;
  sub?: string;
  align: 'center' | 'left' | 'right';
  inStart: number;
  inEnd: number;
  outStart: number;
  outEnd: number;
  yOffset: number;
}

const sections: TextSection[] = [
  {
    id: 'hero',
    text: 'Vaibhav Kadam',
    sub: 'Business Analyst & IT Product Specialist',
    align: 'center',
    inStart: 0,
    inEnd: 0.08,
    outStart: 0.14,
    outEnd: 0.22,
    yOffset: 30,
  },
  {
    id: 'build',
    text: 'I build digital experiences.',
    sub: 'Bridging the gap between business goals and technical delivery.',
    align: 'left',
    inStart: 0.25,
    inEnd: 0.33,
    outStart: 0.42,
    outEnd: 0.5,
    yOffset: -20,
  },
  {
    id: 'bridge',
    text: 'Bridging design\nand engineering.',
    sub: '5 years of enterprise-grade product support & analysis.',
    align: 'right',
    inStart: 0.55,
    inEnd: 0.63,
    outStart: 0.72,
    outEnd: 0.8,
    yOffset: 20,
  },
];

function OverlaySection({
  section,
  scrollYProgress,
}: {
  section: TextSection;
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [section.inStart, section.inEnd, section.outStart, section.outEnd],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [section.inStart, section.inEnd, section.outStart, section.outEnd],
    [section.yOffset, 0, 0, -section.yOffset]
  );

  const alignStyle =
    section.align === 'center'
      ? 'items-center text-center'
      : section.align === 'left'
      ? 'items-start text-left pl-8 md:pl-20 lg:pl-32'
      : 'items-end text-right pr-8 md:pr-20 lg:pr-32';

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-0 flex flex-col justify-center ${alignStyle} pointer-events-none`}
    >
      <p
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        style={{ color: '#6366f1' }}
      >
        {section.id === 'hero'
          ? 'Portfolio 2025'
          : section.id === 'build'
          ? 'What I do'
          : 'My approach'}
      </p>
      <h2
        className="font-black leading-none tracking-tight whitespace-pre-line"
        style={{
          fontSize: 'clamp(2.5rem, 8vw, 7rem)',
          color: '#f0f0f0',
          textShadow: '0 0 60px rgba(99,102,241,0.3)',
        }}
      >
        {section.text}
      </h2>
      {section.sub && (
        <p
          className="mt-4 font-light max-w-lg"
          style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: '#999',
            maxWidth: '480px',
          }}
        >
          {section.sub}
        </p>
      )}
    </motion.div>
  );
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  return (
    <div
      className="absolute inset-0 z-10 overflow-hidden"
      style={{ pointerEvents: 'none' }}
    >
      {sections.map((section) => (
        <OverlaySection
          key={section.id}
          section={section}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}
