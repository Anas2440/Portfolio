import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { coreSkills as skills, skillCategories as categories } from '../../data/resumeData';

const EASE = [0.16, 1, 0.3, 1] as const;

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  // Orb drifts right as section scrolls through
  const orbX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-40, 40]),
    { stiffness: 50, damping: 18 },
  );
  // Header tilts into view on entry
  const headerRotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.35], [6, 0]),
    { stiffness: 80, damping: 24 },
  );

  return (
    <section id="skills" ref={sectionRef} className="py-28 relative">
      {/* Animated ambient orb with horizontal parallax */}
      <motion.div
        style={{ x: orbX }}
        className="orb w-[600px] h-[600px] right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#7ac4ff]/[0.04]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="world-shell glass-card noise p-8 md:p-10 lg:p-12">
          <motion.div
            style={{ rotateX: headerRotateX, transformPerspective: 1000 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.82fr]"
          >
            <div>
              <p className="section-label mb-4">Expertise</p>
              <h2 className="font-display text-[clamp(2.4rem,5vw,4.1rem)] tracking-tight leading-[0.98] mb-4">
                Tools, instincts, and systems that shape the work.
              </h2>
              <p className="text-subdued text-base max-w-xl leading-relaxed">
                This isn’t a keyword dump. It’s the actual stack and product muscle behind how I build:
                native interfaces, resilient integrations, and apps that feel intentional.
              </p>
            </div>
            <div className="video-panel rounded-[28px] border border-white/10 p-6">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#9ed1ff]">Working style</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {['Native-first', 'Fast iterations', 'Clear systems', 'Polished delivery'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4 text-sm text-white/82">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <hr className="divider mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16">
          {/* ── Skill bars ── */}
          <div className="space-y-7">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
              >
                <div className="flex items-end justify-between mb-2.5">
                  <div>
                    <span className="font-semibold text-[0.95rem] text-white/90">
                      {skill.name}
                    </span>
                    <p className="text-xs text-muted mt-0.5">{skill.desc}</p>
                  </div>
                  <span className="text-[0.8rem] font-mono text-muted tabular-nums">
                    {skill.level}%
                  </span>
                </div>

                {/* Track */}
                <div className="relative h-[5px] rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {/* Fill */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: i * 0.08 + 0.1, ease: 'easeOut' }}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #2997ff, rgba(41,151,255,0.6))',
                      boxShadow: '0 0 12px rgba(41,151,255,0.5)',
                    }}
                  />
                  {/* Shimmer overlay */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: i * 0.08 + 0.1, ease: 'easeOut' }}
                    className="absolute inset-y-0 left-0 overflow-hidden rounded-full"
                  >
                    <div
                      className="absolute inset-0 animate-shimmer"
                      style={{ backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)', backgroundSize: '200% 100%' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Tool categories ── */}
          <div className="space-y-8">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: ci * 0.1, ease: EASE }}
              >
                <div className="video-panel rounded-[24px] border border-white/9 p-5">
                <p className="section-label mb-4">{cat.label}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.88 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: ci * 0.08 + ii * 0.04, ease: EASE }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 px-3.5 py-2 text-[0.8rem] font-medium rounded-xl cursor-default select-none"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.7)',
                      }}
                    >
                      <CheckCircle2 className="w-3 h-3 text-apple-blue/80 shrink-0" />
                      {item}
                    </motion.span>
                  ))}
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
