import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const experiences = [
  {
    year: '2023 – Present',
    role: 'Senior iOS Developer',
    company: 'Tech Innovations Inc.',
    current: true,
    description:
      'Leading a cross-functional iOS team delivering major SwiftUI migrations, AR feature launches, and a unified Combine-driven architecture. Reduced app start time by 40%.',
  },
  {
    year: '2021 – 2023',
    role: 'iOS Developer',
    company: 'Mobile First Agency',
    current: false,
    description:
      'Shipped 5+ client applications across HealthTech and E-commerce. Owned Firebase integration, Core Data schemas, and App Store review cycle end-to-end.',
  },
  {
    year: '2019 – 2021',
    role: 'Junior iOS Developer',
    company: 'Startup Valley',
    current: false,
    description:
      'Laid the foundation of my iOS craft — Swift fundamentals, REST API integration, Fastlane CI/CD pipelines, and iterating fast in an early-stage environment.',
  },
];

const AboutTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  // Orb drifts upward as section scrolls through viewport
  const orbY = useSpring(
    useTransform(scrollYProgress, [0, 1], [60, -60]),
    { stiffness: 50, damping: 18 },
  );
  // Header slides in slightly slower than content
  const headerY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [32, 0]),
    { stiffness: 70, damping: 22 },
  );

  return (
    <section id="about" ref={sectionRef} className="py-28 relative">
      {/* Parallax orb */}
      <motion.div
        style={{ y: orbY }}
        className="orb w-[500px] h-[500px] left-0 top-1/2 -translate-y-1/2 bg-apple-blue/[0.05] -translate-x-1/2"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header with parallax */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-20"
        >
          <p className="section-label mb-4">Experience</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight mb-4">
            The Journey
          </h2>
          <p className="text-subdued text-lg max-w-md leading-relaxed">
            A trail of products shipped, problems solved, and craft refined.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Vertical rule */}
          <div className="absolute left-[19px] top-3 bottom-6 w-px bg-gradient-to-b from-apple-blue/50 via-white/10 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: EASE }}
              className="relative pl-14"
            >
              {/* Dot */}
              <div className="absolute left-0 top-4">
                {/* Pulse ring for active */}
                {exp.current && (
                  <motion.div
                    animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full bg-apple-blue/30"
                    style={{ width: 38, height: 38 }}
                  />
                )}
                <div
                  className={`relative w-[38px] h-[38px] rounded-full flex items-center justify-center
                    ${exp.current
                      ? 'bg-apple-blue/20 border border-apple-blue/40'
                      : 'bg-white/[0.05] border border-white/10'
                    }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${exp.current ? 'bg-apple-blue' : 'bg-white/30'}`}
                  />
                </div>
              </div>

              {/* Card */}
              <div className="glass-card p-7 group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    {exp.current && (
                      <span className="badge mb-3 inline-block">Current</span>
                    )}
                    <h3 className="text-[1.25rem] font-semibold tracking-tight leading-snug">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 text-sm text-muted">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-subdued">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted shrink-0 pt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-medium">{exp.year}</span>
                  </div>
                </div>
                <p className="text-sm text-muted leading-[1.75]">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
