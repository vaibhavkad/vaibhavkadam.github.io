'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: '01',
    title: 'SLA Monitoring Dashboard',
    category: 'Power BI · SQL · Stakeholder Reporting',
    description:
      'Designed and implemented a real-time SLA compliance dashboard that improved SLA adherence from 30% to 90%. Integrated SQL data pipelines with Power BI for executive-level visibility into support operations.',
    tags: ['Power BI', 'SQL', 'MIS', 'SLA'],
    accentColor: '#6366f1',
    highlight: '30% → 90% SLA',
  },
  {
    id: '02',
    title: 'UAT Automation Framework',
    category: 'JIRA · Test Planning · Defect Tracking',
    description:
      'Built a structured UAT planning and execution framework for enterprise application releases. Led end-to-end test coordination, defect lifecycle management, and business sign-off processes for airline operations systems.',
    tags: ['UAT', 'JIRA', 'Agile', 'BRD/FRD'],
    accentColor: '#8b5cf6',
    highlight: 'Enterprise-scale UAT',
  },
  {
    id: '03',
    title: 'Airline Ops Support System',
    category: 'Accelya Kale · Production Support · ITIL',
    description:
      'Managed production support for airline revenue, booking, and operations systems. Independently resolved 60+ high-priority incidents within SLA, maintaining system stability across multi-tenant enterprise environments.',
    tags: ['ITIL', 'Incident Management', 'Oracle SQL', 'Airline'],
    accentColor: '#a78bfa',
    highlight: '60+ P1 Issues Resolved',
  },
  {
    id: '04',
    title: 'Incident Management Pipeline',
    category: 'ITIL · Change Management · Root Cause Analysis',
    description:
      'Established structured incident, problem, and change management pipelines per ITIL best practices. Monitored 80–90 production incidents monthly with proactive root cause analysis and stakeholder communication protocols.',
    tags: ['ITIL', 'RCA', 'Change Management', 'SLA'],
    accentColor: '#c4b5fd',
    highlight: '80-90 incidents/month',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(to bottom, #0a0a0a, #0d0d12, #0a0a0a)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '1rem' }}>
            Selected Work
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#f0f0f0',
              lineHeight: 1.1,
            }}
          >
            Projects &amp;{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Case Studies
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(520px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      style={{
        padding: '2rem',
        borderRadius: '1.25rem',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${project.accentColor}40`;
        el.style.boxShadow = `0 0 40px ${project.accentColor}18`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(255,255,255,0.08)';
        el.style.boxShadow = 'none';
      }}
    >
      {/* Subtle gradient blob */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${project.accentColor}14, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Number + category */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <span
          style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: project.accentColor,
            opacity: 0.8,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {project.id}
        </span>
        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 500,
            color: '#555',
            letterSpacing: '0.05em',
            textAlign: 'right',
            maxWidth: '60%',
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Highlight badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.3rem 0.75rem',
          borderRadius: '2rem',
          background: `${project.accentColor}18`,
          border: `1px solid ${project.accentColor}30`,
          fontSize: '0.72rem',
          fontWeight: 600,
          color: project.accentColor,
          marginBottom: '1rem',
          letterSpacing: '0.02em',
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: project.accentColor, display: 'inline-block' }} />
        {project.highlight}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '1.2rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: '#f0f0f0',
          marginBottom: '0.75rem',
          lineHeight: 1.3,
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.85rem',
          lineHeight: 1.7,
          color: '#777',
          marginBottom: '1.5rem',
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '0.25rem 0.65rem',
              borderRadius: '0.4rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              fontSize: '0.7rem',
              fontWeight: 500,
              color: '#666',
              letterSpacing: '0.02em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
