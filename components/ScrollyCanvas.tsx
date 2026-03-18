'use client';

import { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

const TOTAL_FRAMES = 40;
const basePath = '/vaibhavkadam.github.io';
const FRAME_PATH = (n: number) =>
  `${basePath}/sequence/ezgif-frame-${String(n).padStart(3, '0')}.png`;

function drawImageCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
) {
  const scale = Math.max(canvasW / img.naturalWidth, canvasH / img.naturalHeight);
  const w = img.naturalWidth * scale;
  const h = img.naturalHeight * scale;
  const x = (canvasW - w) / 2;
  const y = (canvasH - h) / 2;
  ctx.drawImage(img, x, y, w, h);
}

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);

  // Map scroll 0→1 to frame 0→39
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loaded++;
        if (loaded === TOTAL_FRAMES) {
          // Draw first frame immediately
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) drawImageCover(ctx, images[0], canvas.width, canvas.height);
          }
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Resize canvas to match viewport
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Redraw current frame after resize
      const imgs = imagesRef.current;
      const idx = frameIndexRef.current;
      if (imgs[idx]?.complete) {
        const ctx = canvas.getContext('2d');
        if (ctx) drawImageCover(ctx, imgs[idx], canvas.width, canvas.height);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Subscribe to frame index changes
  useEffect(() => {
    const unsubscribe = frameIndex.on('change', (latest) => {
      const idx = Math.min(Math.floor(latest), TOTAL_FRAMES - 1);
      frameIndexRef.current = idx;
      const canvas = canvasRef.current;
      const img = imagesRef.current[idx];
      if (canvas && img?.complete) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawImageCover(ctx, img, canvas.width, canvas.height);
        }
      }
    });
    return unsubscribe;
  }, [frameIndex]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
}
