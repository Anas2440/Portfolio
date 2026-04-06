import { motion, useTransform, useSpring, type MotionValue } from 'framer-motion';
import {
  Cpu, Layers, Zap, Shield, Activity, GitBranch, Wifi, Star, ArrowUpRight, AppWindow,
} from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface ChipConfig {
  icon: typeof Cpu;
  label: string;
  sub?: string;
  accent: string;
  posLeft?: string;
  posRight?: string;
  posTop?: string;
  posBottom?: string;
  floatY: number[];
  floatX: number[];
  floatDuration: number;
  floatDelay: number;
  entryX?: number;
  entryY?: number;
  entryDelay: number;
  depth: 1 | 2 | 3;        // 1 = front, 3 = back
}

const chips: ChipConfig[] = [
  { icon: Activity,  label: 'Swift 5.9', sub: 'Language',   accent: '#f97316', posLeft: '2%',  posTop: '18%', floatY: [0, -14, 6, -10, 0], floatX: [0, 4, -2, 6, 0],  floatDuration: 7,  floatDelay: 0,   entryX: -40, entryDelay: 0.6, depth: 1 },
  { icon: Layers,    label: 'SwiftUI',   sub: 'Declarative', accent: '#2997ff', posRight: '3%', posTop: '14%', floatY: [0, -10, 8, -6, 0],  floatX: [0, -3, 2, -5, 0], floatDuration: 9,  floatDelay: 1,   entryX:  40, entryDelay: 0.75, depth: 1 },
  { icon: Cpu,       label: 'ARKit',     sub: 'Spatial',     accent: '#a78bfa', posLeft: '5%',  posBottom: '24%', floatY: [0, 10, -8, 5, 0],  floatX: [0, -3, 4, -2, 0], floatDuration: 8,  floatDelay: 2,   entryX: -30, entryDelay: 0.9, depth: 2 },
  { icon: Shield,    label: 'StoreKit 2',sub: 'Payments',    accent: '#34d399', posRight: '5%', posBottom: '30%', floatY: [0, 12, -4, 10, 0], floatX: [0, 3, -4, 2, 0],  floatDuration: 10, floatDelay: 0.5, entryX:  30, entryDelay: 1.0, depth: 2 },
  { icon: Zap,       label: 'Combine',   sub: 'Reactive',    accent: '#fbbf24', posLeft: '18%', posTop: '8%',  floatY: [0, -8, 5, -12, 0], floatX: [0, 2, -3, 1, 0],  floatDuration: 11, floatDelay: 3,   entryY: -30, entryDelay: 0.85, depth: 3 },
  { icon: GitBranch, label: 'Xcode',     sub: 'IDE',         accent: '#60a5fa', posRight: '18%',posTop: '8%',  floatY: [0, -6, 8, -4, 0],  floatX: [0, -2, 3, -1, 0], floatDuration: 12, floatDelay: 4,   entryY: -30, entryDelay: 1.0, depth: 3 },
  { icon: Star,      label: 'App Store', sub: '5.0 ★ 10K+', accent: '#f59e0b', posLeft: '0%',  posTop: '50%', floatY: [0, -8, 4, -10, 0], floatX: [0, 3, -2, 4, 0],  floatDuration: 9.5,floatDelay: 1.5, entryX: -40, entryDelay: 1.1, depth: 1 },
  { icon: Wifi,      label: 'Firebase',  sub: 'Real-time',   accent: '#fb923c', posRight: '0%', posTop: '52%', floatY: [0, 10, -6, 8, 0],  floatX: [0, -3, 2, -5, 0], floatDuration: 8.5,floatDelay: 2.5, entryX:  40, entryDelay: 1.15, depth: 1 },
];

const depthScale:   Record<number, number> = { 1: 1,    2: 0.88, 3: 0.76 };
const depthOpacity: Record<number, number> = { 1: 1,    2: 0.75, 3: 0.50 };
const depthBlur:    Record<number, number> = { 1: 0,    2: 0,    3: 0.8  };
const depthZ:       Record<number, number> = { 1: 8,    2: 6,    3: 4    };
const depthParallax:Record<number, number> = { 1: 70,   2: 40,   3: 20   };

interface FloatingSceneProps {
  scrollYProgress: MotionValue<number>;
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const FloatingChip = ({
  chip,
  scrollYProgress,
}: {
  chip: ChipConfig;
  scrollYProgress: any;
}) => {
  const { icon: Icon, label, sub, accent } = chip;

  const rawY  = useTransform(scrollYProgress, [0, 1], [0, depthParallax[chip.depth]]);
  const smoothY = useSpring(rawY, { stiffness: 60, damping: 20 });

  return (
    <motion.div
      initial={{ x: chip.entryX ?? 0, y: chip.entryY ?? 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: depthOpacity[chip.depth] }}
      transition={{ duration: 1, delay: chip.entryDelay, ease: EASE }}
      className="absolute hidden lg:block"
      style={{
        left:   chip.posLeft,
        right:  chip.posRight,
        top:    chip.posTop,
        bottom: chip.posBottom,
        zIndex: depthZ[chip.depth],
        scale:  depthScale[chip.depth],
        filter: depthBlur[chip.depth] ? `blur(${depthBlur[chip.depth]}px)` : undefined,
      }}
    >
      <motion.div
        style={{ y: smoothY }}
        animate={{ y: chip.floatY, x: chip.floatX }}
        transition={{
          duration: chip.floatDuration,
          delay: chip.floatDelay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          whileHover={{ scale: 1.08, y: -4 }}
          transition={{ duration: 0.25, ease: EASE }}
          data-cursor-hover
          aria-hidden
          role="presentation"
        >
          <div
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl"
            style={{
              background: 'rgba(10,10,12,0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(18px) saturate(1.8)',
              WebkitBackdropFilter: 'blur(18px) saturate(1.8)',
              boxShadow: `0 4px 24px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06) inset, 0 0 20px -8px ${accent}60`,
            }}
          >
            <div
              className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${accent}22`, border: `1px solid ${accent}40` }}
            >
              <Icon className="w-3.5 h-3.5" style={{ color: accent }} strokeWidth={2} />
            </div>
            <div>
              <div className="text-[12px] font-semibold leading-none text-white/90 whitespace-nowrap">
                {label}
              </div>
              {sub && (
                <div className="text-[10px] text-white/35 mt-0.5 leading-none whitespace-nowrap">
                  {sub}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

/** Decorative 3D-perspective ellipse ring */
const DepthRing = ({
  size,
  opacity,
  rx,
  ry,
  rotateDuration,
  className = '',
}: {
  size: number;
  opacity: number;
  rx: number;
  ry: number;
  rotateDuration: number;
  className?: string;
}) => (
  <motion.div
    className={`absolute pointer-events-none rounded-full ${className}`}
    aria-hidden
    style={{
      width: size,
      height: size,
      border: '1px solid rgba(255,255,255,0.055)',
      transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`,
      opacity,
    }}
    animate={{ rotateZ: [0, 360] }}
    transition={{ duration: rotateDuration, repeat: Infinity, ease: 'linear' }}
  />
);

const DeviceStack = ({
  scrollYProgress,
  tiltX,
  tiltY,
  mouseX,
  mouseY,
}: FloatingSceneProps) => {
  const cardTiltX = useTransform(tiltX, value => value * 1.4);
  const cardTiltY = useTransform(tiltY, value => value * 1.5);
  const cardX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-24, 24]), { stiffness: 180, damping: 26 });
  const cardY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-18, 18]), { stiffness: 180, damping: 26 });
  const layerOffsetX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-40, 40]), { stiffness: 120, damping: 22 });
  const layerOffsetY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), { stiffness: 120, damping: 22 });
  const sceneLift = useSpring(useTransform(scrollYProgress, [0, 1], [0, 70]), { stiffness: 80, damping: 20 });

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 hidden lg:block"
      style={{
        x: '-50%',
        y: '-50%',
        translateY: sceneLift,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="relative"
        style={{
          x: cardX,
          y: cardY,
          rotateX: cardTiltX,
          rotateY: cardTiltY,
          transformStyle: 'preserve-3d',
        }}
        animate={{ y: [0, -10, 0], rotateZ: [0, 1.6, 0, -1.6, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute inset-0 rounded-[34px]"
          style={{
            width: 340,
            height: 420,
            x: layerOffsetX,
            y: layerOffsetY,
            translateX: '-50%',
            translateY: '-50%',
            left: '50%',
            top: '50%',
            background: 'linear-gradient(145deg, rgba(41,151,255,0.22), rgba(76,217,100,0.06))',
            filter: 'blur(36px)',
            transform: 'translateZ(-90px)',
          }}
        />

        <motion.div
          className="absolute rounded-[30px] border border-white/10"
          style={{
            width: 280,
            height: 360,
            left: 30,
            top: 52,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))',
            boxShadow: '0 24px 80px rgba(0,0,0,0.28)',
            transform: 'translateZ(-50px)',
          }}
          animate={{ rotateZ: [0, -4, 0, 4, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="relative w-[300px] h-[580px] rounded-[42px] border border-white/12 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(8,8,10,0.92) 0%, rgba(12,15,24,0.96) 100%)',
            boxShadow: '0 26px 80px rgba(0,0,0,0.46), inset 0 1px 0 rgba(255,255,255,0.08)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(41,151,255,0.22),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_45%)]" />
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-black/65 border border-white/5" />

          <motion.div
            className="absolute left-6 right-6 top-16 rounded-[28px] border border-white/10 p-5"
            style={{
              background: 'linear-gradient(135deg, rgba(41,151,255,0.16), rgba(255,255,255,0.04))',
              transform: 'translateZ(48px)',
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center justify-between text-white/90">
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Featured Build</div>
                <div className="mt-2 text-xl font-semibold tracking-tight">SwiftUI Commerce</div>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center">
                <AppWindow className="w-5 h-5 text-[#7dd3fc]" />
              </div>
            </div>
            <div className="mt-6 h-32 rounded-[22px] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] overflow-hidden">
              <div className="grid grid-cols-2 gap-3 p-4 h-full">
                <div className="rounded-2xl bg-white/6 border border-white/8" />
                <div className="rounded-2xl bg-[#2997ff]/20 border border-[#2997ff]/20" />
                <div className="rounded-2xl bg-white/6 border border-white/8 col-span-2" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-6 right-6 top-[21rem] grid grid-cols-2 gap-3"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {[
              { label: 'Launches', value: '12' },
              { label: 'Retention', value: '92%' },
              { label: 'Store Rating', value: '4.9' },
              { label: 'Sessions', value: '148K' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="rounded-[22px] border border-white/10 p-4"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  transform: `translateZ(${26 + index * 8}px)`,
                }}
                animate={{ y: [0, index % 2 === 0 ? -5 : -8, 0] }}
                transition={{ duration: 4 + index * 0.7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/35">{item.label}</div>
                <div className="mt-2 text-2xl font-semibold text-white">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="absolute bottom-7 left-6 right-6 rounded-[24px] border border-white/10 px-5 py-4 flex items-center justify-between"
            style={{
              background: 'rgba(255,255,255,0.05)',
              transform: 'translateZ(60px)',
            }}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">Now Shipping</div>
              <div className="mt-1 text-sm font-medium text-white/90">Motion-rich product interfaces</div>
            </div>
            <div className="w-11 h-11 rounded-2xl bg-[#2997ff]/20 border border-[#2997ff]/25 flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-[#7dd3fc]" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FloatingUIScene = ({ scrollYProgress, tiltX, tiltY, mouseX, mouseY }: FloatingSceneProps) => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden>
    {/* Depth rings */}
    <DepthRing size={700} opacity={0.35} rx={72} ry={0}  rotateDuration={32} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <DepthRing size={470} opacity={0.22} rx={62} ry={18} rotateDuration={20} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <DepthRing size={920} opacity={0.10} rx={80} ry={8}  rotateDuration={45} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

    <DeviceStack
      scrollYProgress={scrollYProgress}
      tiltX={tiltX}
      tiltY={tiltY}
      mouseX={mouseX}
      mouseY={mouseY}
    />

    {/* Floating tech chips */}
    {chips.map(chip => (
      <FloatingChip key={chip.label} chip={chip} scrollYProgress={scrollYProgress} />
    ))}
  </div>
);

export default FloatingUIScene;
