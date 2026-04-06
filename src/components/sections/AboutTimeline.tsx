import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Building2, Calendar, Radar, Sparkles } from 'lucide-react';
import { experiences, profile } from '../../data/resumeData';

const EASE = [0.16, 1, 0.3, 1] as const;

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
        className="orb w-[500px] h-[500px] left-0 top-1/2 -translate-y-1/2 bg-[#7ac4ff]/[0.06] -translate-x-1/2"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="world-shell glass-card noise p-8 md:p-10 lg:p-12">
          <motion.div
            style={{ y: headerY }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div>
              <p className="section-label mb-4">Experience</p>
              <h2 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] tracking-tight leading-[0.98] mb-5">
                A journey that feels built, not pitched.
              </h2>
              <p className="text-subdued text-lg max-w-xl leading-relaxed">
                I care about products that feel alive in the hand. This timeline is less about titles
                and more about how my world of iOS development kept expanding through shipping,
                systems thinking, and real product responsibility.
              </p>
            </div>

            <div className="video-panel rounded-[28px] border border-white/10 p-6">
              <div className="flex items-center gap-2 text-[#f4c46c] text-xs uppercase tracking-[0.22em]">
                <Radar className="w-4 h-4" />
                Signal
              </div>
              <p className="mt-5 text-white/88 text-base leading-relaxed">
                {profile.summary}
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Enterprise-grade iOS delivery',
                  'Realtime communication and device integration',
                  'Product-minded execution with design sensitivity',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-white/72">
                    <Sparkles className="w-4 h-4 mt-0.5 text-[#9ed1ff]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative space-y-6">
          {/* Vertical rule */}
          <div className="absolute left-[19px] top-3 bottom-6 w-px bg-gradient-to-b from-apple-blue/50 via-white/10 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.year}`}
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
              <div className="glass-card noise p-7 group">
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1.5 rounded-full text-[11px] font-medium"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.62)',
                      }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
