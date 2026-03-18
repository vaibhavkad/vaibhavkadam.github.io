'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';

export default function ScrollySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} style={{ height: '500vh', position: 'relative' }}>
      {/* Sticky viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#0a0a0a',
        }}
      >
        {/* Canvas layer */}
        <ScrollyCanvas scrollYProgress={scrollYProgress} />

        {/* Gradient vignette for depth */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.7) 100%)',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />

        {/* Text overlays */}
        <Overlay scrollYProgress={scrollYProgress} />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            opacity: useScroll({
              target: containerRef,
              offset: ['start start', '10% start'],
            }).scrollYProgress
              ? undefined
              : 1,
          }}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: '#555' }}
          >
            Scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, #6366f1, transparent)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
