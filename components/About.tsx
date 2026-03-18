'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '90%', label: 'SLA Compliance' },
  { value: '60+', label: 'Critical Issues Resolved' },
  { value: '80-90', label: 'Incidents/Month Managed' },
];

const competencies = [
  'Business Analysis & BRD/FRD',
  'Stakeholder Management',
  'UAT Planning & Execution',
  'Agile / Waterfall SDLC',
  'Incident & Problem Management',
  'SQL Data Validation',
  'ITIL Framework',
  'Power BI / Tableau',
  'JIRA / Defect Tracking',
  'Privacy Compliance (GDPR/CCPA)',
  'SLA Monitoring',
  'Change Management',
];

const tools = [
  { category: 'Data & Databases', items: ['SQL (Oracle, SQL Server, MySQL)', 'Advanced Excel', 'Power BI', 'Tableau'] },
  { category: 'Testing & UAT', items: ['JIRA', 'MS Visio', 'Bug Tracking Tools', 'UAT Coordination'] },
  { category: 'Process & Reporting', items: ['ITIL Framework', 'MIS Dashboards', 'SLA Reports', 'Release Notes'] },
  { category: 'Privacy & Compliance', items: ['GDPR Awareness', 'CCPA Awareness', 'Cookie Management', 'Consent Handling'] },
];

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: '1.5rem',
        borderRadius: '1rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          marginBottom: '0.5rem',
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: '0.78rem', color: '#666', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '1rem' }}>
          About Me
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#f0f0f0', lineHeight: 1.1 }}>
          Turning complexity into<br />
          <span style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            clarity.
          </span>
        </h2>
      </motion.div>

      {/* Bio + stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div
              style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', fontWeight: 900, color: 'white',
                flexShrink: 0,
              }}
            >
              VK
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f0f0' }}>Vaibhav Kadam</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Mumbai, India • Immediate Joiner</div>
            </div>
          </div>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#888', marginBottom: '1rem' }}>
            Business Analyst and IT Product Support professional with <strong style={{ color: '#ccc' }}>5 years of experience</strong> supporting enterprise and customer-facing applications across airline and technology domains.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#888' }}>
            Skilled in requirements gathering, stakeholder collaboration, UAT coordination, incident resolution, and production support. Currently at <strong style={{ color: '#ccc' }}>Accelya Kale Solutions</strong>, Mumbai.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((s, i) => <StatCard key={s.label} {...s} index={i} />)}
        </div>
      </div>

      {/* Competencies */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ marginBottom: '4rem' }}
      >
        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '1.5rem' }}>
          Core Competencies
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {competencies.map((comp, i) => (
            <motion.span
              key={comp}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.04 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(99,102,241,0.5)' }}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '2rem',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(99,102,241,0.06)',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: '#bbb',
                cursor: 'default',
                transition: 'all 0.2s',
              }}
            >
              {comp}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((toolGroup, gi) => (
          <motion.div
            key={toolGroup.category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + gi * 0.1 }}
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '1rem' }}>
              {toolGroup.category}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {toolGroup.items.map((item) => (
                <li key={item} style={{ fontSize: '0.85rem', color: '#888', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#6366f1', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
