interface BlobProps {
  className?: string;
  color: string;
  size: number;
  originX: string;
  originY: string;
  delay?: number;
  duration?: number;
}

export const AnimatedBlob = ({
  className = '',
  color,
  size,
  originX,
  originY,
  delay = 0,
  duration = 18,
}: BlobProps) => (
  <div
    className={`scene-blob absolute pointer-events-none ${className}`}
    style={{
      left: originX,
      top: originY,
      width: size,
      height: size,
      background: color,
      filter: `blur(${Math.round(size * 0.34)}px)`,
      translate: '-50% -50%',
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    }}
  />
);

export const SceneBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    <AnimatedBlob originX="50%" originY="50%" size={820} color="rgba(41, 151, 255, 0.065)" duration={22} />
    <AnimatedBlob originX="78%" originY="22%" size={420} color="rgba(139, 92, 246, 0.045)" duration={17} delay={3} />
    <AnimatedBlob originX="20%" originY="76%" size={360} color="rgba(34, 211, 238, 0.035)" duration={14} delay={7} />
    <AnimatedBlob originX="82%" originY="68%" size={240} color="rgba(251, 191, 36, 0.025)" duration={12} delay={2} />
  </div>
);

export default AnimatedBlob;
