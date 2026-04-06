import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const skills = [
  { name: 'Swift', level: 95, desc: 'Language of the Apple ecosystem' },
  { name: 'SwiftUI', level: 90, desc: 'Declarative UI at its finest' },
  { name: 'UIKit', level: 85, desc: 'Precise programmatic layouts' },
  { name: 'Core Data', level: 80, desc: 'Offline-first persistence' },
  { name: 'ARKit / RealityKit', level: 75, desc: 'Spatial computing & AR' },
  { name: 'Combine / RxSwift', level: 85, desc: 'Reactive data pipelines' },
];

const categories = [
  {
    label: 'Dev Tools',
    items: ['Xcode', 'Instruments', 'Fastlane', 'Git', 'SPM', 'CocoaPods'],
  },
  {
    label: 'Design & Data',
    items: ['Figma', 'Firebase', 'Supabase', 'RevenueCat', 'PostHog'],
  },
  {
    label: 'Domain',
    items: ['WidgetKit', 'PushKit', 'StoreKit 2', 'ARKit', 'HealthKit'],
  },
];

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
        className="orb w-[600px] h-[600px] right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-purple-600/[0.04]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header with perspective-entry effect */}
        <motion.div
          style={{ rotateX: headerRotateX, transformPerspective: 1000 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <p className="section-label mb-4">Expertise</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight mb-4">
            What I work with
          </h2>
          <p className="text-subdued text-base max-w-md leading-relaxed">
            Deeply fluent in Swift and Apple's native toolkit.
            Fast at finding the right abstraction and shipping it.
          </p>
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
