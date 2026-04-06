import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowUpRight, Tag } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

type Project = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  link: string;
  accent: string;
  highlight: string;
};

const projects: Project[] = [
  {
    title: 'AR Fitness Tracker',
    type: 'HealthTech',
    description:
      'Real-time AR workout tracking with live metric overlays powered by ARKit and CoreML. Reduces injury risk by coaching form through body-pose estimation.',
    tags: ['Swift', 'ARKit', 'CoreML'],
    link: '#',
    accent: 'rgba(52,211,153,0.06)',
    highlight: '#34d399',
  },
  {
    title: 'FinMate Widget',
    type: 'Finance',
    description:
      'Daily expense tracking in a beautiful home-screen widget. Users never open the app — WidgetKit does the heavy lifting with CoreData sync.',
    tags: ['SwiftUI', 'WidgetKit', 'CoreData'],
    link: '#',
    accent: 'rgba(251,191,36,0.06)',
    highlight: '#fbbf24',
  },
  {
    title: 'Social Connect',
    type: 'Social',
    description:
      'Voice-first social platform with sub-100ms latency streaming. Firebase Realtime Database drives presence, while AVFoundation handles audio capture.',
    tags: ['RxSwift', 'Firebase', 'AVFoundation'],
    link: '#',
    accent: 'rgba(167,139,250,0.06)',
    highlight: '#a78bfa',
  },
  {
    title: 'Creator Studio',
    type: 'Productivity',
    description:
      'iPad-native storyboarding canvas for video creators. PencilKit-powered planning, Combine state management, and App of the Day recognition on the App Store.',
    tags: ['UIKit', 'Combine', 'PencilKit'],
    link: '#',
    accent: 'rgba(41,151,255,0.06)',
    highlight: '#2997ff',
  },
];

/** Clamps a value between min and max */
const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

const TiltCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  /* Raw mouse-derived motion values */
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rawGlowX   = useMotionValue(50);
  const rawGlowY   = useMotionValue(50);

  /* Spring-smoothed rotate */
  const rotateX = useSpring(rawRotateX, { stiffness: 260, damping: 28 });
  const rotateY = useSpring(rawRotateY, { stiffness: 260, damping: 28 });

  /* Derive z-based subtle scale from tilt magnitude */
  const scale = useSpring(hovered ? 1.015 : 1, { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;   // 0–1
    const y = (e.clientY - rect.top)  / rect.height;  // 0–1
    const tiltX = clamp((y - 0.5) * -14, -7, 7);      // tilt up when mouse is top
    const tiltY = clamp((x - 0.5) *  14, -7, 7);      // tilt right when mouse is right
    rawRotateX.set(tiltX);
    rawRotateY.set(tiltY);
    rawGlowX.set(x * 100);
    rawGlowY.set(y * 100);
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
    scale.set(1.015);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rawRotateX.set(0);
    rawRotateY.set(0);
    rawGlowX.set(50);
    rawGlowY.set(50);
    scale.set(1);
  };

  /* Glow follows pointer inside the card */
  const glowBg = useTransform(
    [rawGlowX, rawGlowY],
    ([x, y]: number[]) =>
      `radial-gradient(320px circle at ${x}% ${y}%, ${project.accent.replace('0.06', '0.22')}, transparent 60%)`,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: EASE }}
      style={{ perspective: 900 }}
      data-cursor-hover
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          border: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(20px)',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: hovered
            ? `0 24px 64px -16px rgba(0,0,0,0.8),
               0 0 0 1px rgba(255,255,255,0.12) inset,
               0 0 80px -24px ${project.highlight}55`
            : '0 4px 16px -4px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset',
          transition: 'box-shadow 0.4s ease, border-color 0.3s ease',
          borderColor: hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)',
        }}
        className="relative flex flex-col group cursor-default"
      >
        {/* ── Moving inner glow (follows mouse) ── */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[20px] transition-opacity duration-500"
          style={{ background: glowBg, opacity: hovered ? 1 : 0 }}
        />

        {/* ── Top accent stripe ── */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `linear-gradient(90deg, ${project.highlight}00, ${project.highlight}, ${project.highlight}00)`,
          }}
        />

        {/* ── Content (slightly raised in 3D space) ── */}
        <div
          className="relative z-10 p-8 flex flex-col h-full"
          style={{ transform: 'translateZ(12px)' }}
        >
          {/* Meta */}
          <div className="flex items-center justify-between mb-5">
            <span
              className="text-[11px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-md"
              style={{
                color: project.highlight,
                background: `${project.highlight}18`,
              }}
            >
              {project.type}
            </span>
            <motion.a
              href={project.link}
              animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.75 }}
              transition={{ duration: 0.22 }}
              className="flex items-center gap-1 text-xs font-semibold"
              style={{ color: project.highlight }}
            >
              Case Study <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Title */}
          <h3
            className="text-[1.35rem] font-bold tracking-tight mb-3 transition-colors duration-300"
            style={{ color: hovered ? '#fff' : 'rgba(255,255,255,0.88)' }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted leading-[1.75] mb-7 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────── Section ─────────────────────── */

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Header parallax — slides slightly faster than scroll
  const headerY = useSpring(
    useTransform(scrollYProgress, [0, 1], [-24, 24]),
    { stiffness: 60, damping: 20 },
  );

  return (
    <section id="projects" ref={sectionRef} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with parallax */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 24 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <p className="section-label mb-4">Selected Work</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight">
              Things I've built
            </h2>
            <p className="text-subdued text-base max-w-xs leading-relaxed md:text-right">
              A curated set of iOS apps shipped to the App Store.
            </p>
          </div>
        </motion.div>

        <hr className="divider mb-16" />

        {/* 3D tilt grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <TiltCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
