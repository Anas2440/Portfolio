import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionValue,
} from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SceneBlobs } from '../AnimatedBlob';
import FloatingUIScene from '../FloatingUIScene';

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE },
  },
};

const stats = [
  { value: '10+',  label: 'Apps Shipped' },
  { value: '3+',   label: 'Years iOS' },
  { value: '20+',  label: 'Happy Clients' },
  { value: '10K+', label: 'Downloads' },
];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  /* ── Scroll progress within the hero viewport ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  /* ── Parallax for the main content block ── */
  const rawContentY  = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rawOpacity   = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const springY      = useSpring(rawContentY, { stiffness: 75, damping: 22 });
  const springOpacity= useSpring(rawOpacity,  { stiffness: 75, damping: 22 });

  /* ── Mouse-driven perspective tilt on the whole scene ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX  = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]),  { stiffness: 120, damping: 30 });
  const tiltY  = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ════════════════════════════════════════
          LAYER 0 — Morphing blobs (furthest back)
          ════════════════════════════════════════ */}
      <SceneBlobs />

      {/* ════════════════════════════════════════
          LAYER 1 — Fine grid (fades on scroll)
          ════════════════════════════════════════ */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.45], [1, 0]) }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* ════════════════════════════════════════
          LAYER 2 — Floating UI chips + depth rings
          (tilts with mouse, parallaxes on scroll)
          ════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: 'preserve-3d',
          perspective: 1200,
          opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]),
        }}
      >
        <FloatingUIScene scrollYProgress={scrollYProgress} />
      </motion.div>

      {/* ════════════════════════════════════════
          LAYER 3 — Hero text content
          (different parallax speed → creates depth)
          ════════════════════════════════════════ */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : springY,
          opacity: shouldReduceMotion ? 1 : springOpacity,
          // Perspective tilt — slightly less than background
          rotateX: useTransform(tiltX, v => v * 0.4),
          rotateY: useTransform(tiltY, v => v * 0.4),
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="badge">
              <Sparkles className="w-3 h-3" />
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.8rem,8vw,6.5rem)] font-bold tracking-[-0.03em] leading-[1.06] mb-7"
            style={{ textShadow: '0 2px 40px rgba(0,0,0,0.6)' }}
          >
            <span className="text-gradient">Crafting iOS</span>
            <br />
            <span className="text-white/92">apps that matter.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-[1.05rem] leading-relaxed text-muted max-w-lg mx-auto mb-10"
          >
            Specializing in Swift &amp; SwiftUI — building high-performance,
            pixel-perfect iOS applications deeply rooted in the Apple ecosystem.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#projects" className="btn-primary group">
              See my work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex flex-wrap justify-center gap-px"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.07, y: -2 }}
                transition={{ duration: 0.2 }}
                className={`flex flex-col items-center px-10 py-5 ${
                  i < stats.length - 1 ? 'border-r border-white/[0.07]' : ''
                }`}
              >
                <span className="text-[2rem] font-bold tracking-tight text-white">
                  {s.value}
                </span>
                <span className="text-xs text-muted mt-0.5 font-medium tracking-wide">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll hint (fades immediately as you scroll) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.12], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="w-px h-9 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
