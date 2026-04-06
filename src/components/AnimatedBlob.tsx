import { motion } from 'framer-motion';

interface BlobProps {
  className?: string;
  color: string;
  size: number;
  originX: string;
  originY: string;
  delay?: number;
  duration?: number;
}

/**
 * AnimatedBlob — a morphing organic shape using border-radius animation.
 * Renders as pure CSS + Framer Motion (no canvas/SVG needed).
 */
export const AnimatedBlob = ({
  className = '',
  color,
  size,
  originX,
  originY,
  delay = 0,
  duration = 18,
}: BlobProps) => {
  // Four distinct blob shapes cycling
  const shapes = [
    '60% 40% 30% 70% / 60% 30% 70% 40%',
    '30% 60% 70% 40% / 50% 60% 30% 60%',
    '50% 60% 80% 20% / 40% 70% 30% 50%',
    '70% 30% 40% 60% / 60% 40% 70% 30%',
  ];

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{
        left: originX,
        top: originY,
        width: size,
        height: size,
        background: color,
        filter: `blur(${Math.round(size * 0.34)}px)`,
        translate: '-50% -50%',
        willChange: 'border-radius',
      }}
      animate={{
        borderRadius: shapes,
        rotate: [0, 8, -6, 4, 0],
        scale: [1, 1.07, 0.95, 1.04, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    />
  );
};

/** SceneBlobs — the full hero background blob set */
export const SceneBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    {/* Deep blue centroid — slowest morph */}
    <AnimatedBlob
      originX="50%"
      originY="50%"
      size={820}
      color="rgba(41, 151, 255, 0.065)"
      duration={22}
    />
    {/* Purple accent — top right */}
    <AnimatedBlob
      originX="78%"
      originY="22%"
      size={420}
      color="rgba(139, 92, 246, 0.045)"
      duration={17}
      delay={3}
    />
    {/* Cyan accent — bottom left */}
    <AnimatedBlob
      originX="20%"
      originY="76%"
      size={360}
      color="rgba(34, 211, 238, 0.035)"
      duration={14}
      delay={7}
    />
    {/* Small warm accent */}
    <AnimatedBlob
      originX="82%"
      originY="68%"
      size={240}
      color="rgba(251, 191, 36, 0.025)"
      duration={12}
      delay={2}
    />
  </div>
);

export default AnimatedBlob;
