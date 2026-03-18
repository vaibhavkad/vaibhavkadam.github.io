'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experience = [
  {
    company: 'Accelya Kale Solutions',
    location: 'Mumbai, India',
    role: 'Business Analyst / Application Analyst',
    period: 'Jan 2021 – Jan 2026',
    description:
      'Supported implementation and maintenance of enterprise airline applications. Led UAT planning, SQL data validation, incident management, and production release coordination.',
    achievements: [
      'Improved SLA compliance from 30% to 90%',
      'Resolved 60+ high-priority production incidents independently',
      'Managed 80–90 production incidents monthly',
      'Mentored and onboarded junior BA team members',
    ],
    domains: ['Airline Revenue Systems', 'Booking & Operations', 'Production Support'],
  },
];

const certifications = [
  {
    name: 'Product Management Assessment',
    issuer: 'LearnTube.ai',
    date: 'January 2026',
    description: 'Stakeholder management, requirement prioritization, roadmap planning, and execution fundamentals.',
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'St. John College of Engineering & Management, Palghar',
    year: '2021',
  },
  {
    degree: 'Diploma in Computer Engineering',
    school: 'Viva College of Engineering & Management, Virar',
    year: '2018',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '1rem' }}>
          Career
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#f0f0f0', lineHeight: 1.1 }}>
          Experience &amp;{' '}
          <span style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Education
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Experience */}
        <div>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#555', marginBottom: '2rem' }}>Work History</p>
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                paddingLeft: '1.5rem',
                borderLeft: '1px solid rgba(99,102,241,0.3)',
                position: 'relative',
                marginBottom: '2.5rem',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '-5px',
                  top: '4px',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: '#6366f1',
                  boxShadow: '0 0 12px rgba(99,102,241,0.6)',
                }}
              />
              <div style={{ marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.72rem', color: '#6366f1', fontWeight: 600 }}>{exp.period}</span>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f0f0', marginBottom: '0.2rem' }}>{exp.role}</h3>
              <p style={{ fontSize: '0.82rem', color: '#888', marginBottom: '0.75rem' }}>{exp.company} · {exp.location}</p>
              <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>{exp.description}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
                {exp.achievements.map((ach) => (
                  <li key={ach} style={{ fontSize: '0.8rem', color: '#777', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#6366f1', flexShrink: 0, marginTop: '0.15rem' }}>→</span>
                    {ach}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {exp.domains.map((d) => (
                  <span key={d} style={{ padding: '0.2rem 0.6rem', borderRadius: '0.35rem', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', fontSize: '0.68rem', color: '#8b8cf8' }}>{d}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education + Certifications */}
        <div>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#555', marginBottom: '2rem' }}>Education</p>
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              style={{
                paddingLeft: '1.5rem',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
                marginBottom: '2rem',
              }}
            >
              <div style={{ position: 'absolute', left: '-4px', top: '4px', width: '7px', height: '7px', borderRadius: '50%', background: '#333', border: '1px solid #555' }} />
              <div style={{ fontSize: '0.72rem', color: '#555', fontWeight: 600, marginBottom: '0.25rem' }}>{edu.year}</div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ccc', marginBottom: '0.2rem' }}>{edu.degree}</h4>
              <p style={{ fontSize: '0.78rem', color: '#666' }}>{edu.school}</p>
            </motion.div>
          ))}

          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#555', marginTop: '2.5rem', marginBottom: '2rem' }}>Certifications</p>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              style={{
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(167,139,250,0.06))',
                border: '1px solid rgba(99,102,241,0.2)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#d0cfff' }}>{cert.name}</h4>
                <span style={{ fontSize: '0.68rem', color: '#6366f1', fontWeight: 600 }}>{cert.date}</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#8b8cf8', marginBottom: '0.5rem' }}>{cert.issuer}</p>
              <p style={{ fontSize: '0.75rem', color: '#666', lineHeight: 1.6 }}>{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
