'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const contactLinks = [
  {
    label: 'Email',
    value: 'vaibhavk1010@gmail.com',
    href: 'mailto:vaibhavk1010@gmail.com',
    icon: '✉',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vaibhavkadam',
    href: 'https://linkedin.com',
    icon: '⟶',
  },
  {
    label: 'Phone',
    value: '+91 99708 36988',
    href: 'tel:+919970836988',
    icon: '◎',
  },
  {
    label: 'Location',
    value: 'Mumbai, India',
    href: '#',
    icon: '◈',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <footer id="contact" ref={ref}>
      {/* Divider gradient */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(99,102,241,0.4), transparent)',
        }}
      />

      <div
        style={{
          padding: '6rem 2rem 4rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#6366f1',
              marginBottom: '1rem',
            }}
          >
            Available for Opportunities
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#f0f0f0',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Let&apos;s work{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              together.
            </span>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#666',
              maxWidth: '480px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            Immediate joiner. Open to Business Analyst, Product Support, or IT Analyst roles across enterprise and tech domains.
          </p>
          <motion.a
            href="mailto:vaibhavk1010@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.9rem 2.5rem',
              borderRadius: '3rem',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.02em',
              boxShadow: '0 4px 30px rgba(99,102,241,0.35)',
              transition: 'box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 50px rgba(99,102,241,0.55)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 30px rgba(99,102,241,0.35)';
            }}
          >
            Say Hello →
          </motion.a>
        </motion.div>

        {/* Contact cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '4rem',
          }}
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -2, borderColor: 'rgba(99,102,241,0.3)' }}
              style={{
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                textDecoration: 'none',
                display: 'block',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ fontSize: '1.2rem', marginBottom: '0.75rem', opacity: 0.5 }}>{link.icon}</div>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555', marginBottom: '0.3rem' }}>
                {link.label}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#888', fontWeight: 500 }}>{link.value}</div>
            </motion.a>
          ))}
        </div>

        {/* Footer bottom */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span style={{ fontSize: '0.78rem', color: '#444' }}>
            © 2025 Vaibhav Kadam. All rights reserved.
          </span>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Business Analyst · Mumbai, India
          </span>
        </div>
      </div>
    </footer>
  );
}
