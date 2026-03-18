'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.25rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(10,10,10,0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        style={{ cursor: 'pointer' }}
      >
        <span
          style={{
            fontWeight: 800,
            fontSize: '1.1rem',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          VK
        </span>
        <span
          style={{
            marginLeft: '0.5rem',
            fontSize: '0.85rem',
            color: '#555',
            fontWeight: 400,
          }}
        >
          Portfolio
        </span>
      </motion.div>

      {/* Nav links */}
      <div className="flex gap-4 md:gap-8 items-center">
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -1 }}
              style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#888',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#f0f0f0')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#888')}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:vaibhavk1010@gmail.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '2rem',
            border: '1px solid rgba(99,102,241,0.4)',
            background: 'rgba(99,102,241,0.1)',
            color: '#a78bfa',
            fontSize: '0.82rem',
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            const el = e.target as HTMLElement;
            el.style.background = 'rgba(99,102,241,0.2)';
            el.style.borderColor = 'rgba(99,102,241,0.6)';
          }}
          onMouseLeave={(e) => {
            const el = e.target as HTMLElement;
            el.style.background = 'rgba(99,102,241,0.1)';
            el.style.borderColor = 'rgba(99,102,241,0.4)';
          }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  );
}
