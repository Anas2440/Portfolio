import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionValue,
} from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, Mail, Briefcase } from 'lucide-react';
import { SceneBlobs } from '../AnimatedBlob';
import FloatingUIScene from '../FloatingUIScene';
import { profile, stats } from '../../data/resumeData';

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
          LAYER 2 — Hero content
          ════════════════════════════════════════ */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : springY,
          opacity: shouldReduceMotion ? 1 : springOpacity,
          rotateX: useTransform(tiltX, v => v * 0.4),
          rotateY: useTransform(tiltY, v => v * 0.4),
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 md:pt-24"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="badge">
                <Sparkles className="w-3 h-3" />
                Ahmedabad-based iOS developer
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="section-label mb-5"
            >
              Native iOS craftsmanship with shipping experience across social, fitness, AI, and enterprise apps
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-[clamp(3.2rem,9vw,7rem)] leading-[0.95] tracking-[-0.04em] mb-6"
              style={{ textShadow: '0 10px 50px rgba(0,0,0,0.35)' }}
            >
              <span className="block text-[#f6efe0]">Built with taste.</span>
              <span className="block text-gradient">Shipped for people.</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="max-w-xl space-y-4"
            >
              <p className="text-lg md:text-[1.15rem] leading-relaxed text-subdued">
                I design and build polished iPhone experiences in <span className="text-white/90">Swift</span> and <span className="text-white/90">UIKit</span>,
                turning product ideas into fast, usable, and memorable mobile apps.
              </p>
              <p className="text-[0.98rem] leading-relaxed text-muted">
                10+ apps shipped, 100K+ downloads, and hands-on work across BLE integration,
                Firebase, REST APIs, real-time communication, and App Store delivery.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-primary group">
                View selected work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="btn-secondary">
                Start a conversation
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              <div className="glass-card noise p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-white/75">
                  <Briefcase className="w-4 h-4 text-[#f4c46c]" />
                  <span className="text-xs uppercase tracking-[0.18em]">Role</span>
                </div>
                <p className="mt-3 text-sm font-medium text-white/92">{profile.title}</p>
              </div>
              <div className="glass-card noise p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-white/75">
                  <MapPin className="w-4 h-4 text-[#9ed1ff]" />
                  <span className="text-xs uppercase tracking-[0.18em]">Base</span>
                </div>
                <p className="mt-3 text-sm font-medium text-white/92">{profile.location}</p>
              </div>
              <div className="glass-card noise p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-white/75">
                  <Mail className="w-4 h-4 text-[#f4c46c]" />
                  <span className="text-xs uppercase tracking-[0.18em]">Contact</span>
                </div>
                <p className="mt-3 text-sm font-medium text-white/92 break-all">{profile.email}</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-5"
                >
                  <div className="font-display text-3xl leading-none text-[#f6efe0]">{s.value}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/45">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative h-[420px] sm:h-[500px] lg:h-[620px]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 rounded-[36px] border border-[#9ed1ff]/12 bg-[radial-gradient(circle_at_top,rgba(244,196,108,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_30px_100px_rgba(0,0,0,0.35)]" />
            <div className="absolute inset-5 rounded-[30px] border border-white/8 bg-[#08101b]/40 backdrop-blur-md" />
            <div className="absolute inset-0 overflow-hidden rounded-[36px]">
              <FloatingUIScene
                scrollYProgress={scrollYProgress}
                tiltX={tiltX}
                tiltY={tiltY}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </div>
            <div className="absolute left-6 right-6 top-6 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">Currently shipping</div>
                <div className="mt-1 text-sm font-medium text-white/88">Native iOS apps with product polish</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">Stack</div>
                <div className="mt-1 text-sm font-medium text-[#f4c46c]">Swift, UIKit, Firebase</div>
              </div>
            </div>
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
