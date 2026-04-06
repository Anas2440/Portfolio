import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

/**
 * CustomCursor
 * – Small tight dot follows the mouse with spring physics
 * – Larger ring lags behind with softer spring
 * – Ring expands + dims when hovering interactive elements
 * – Spotlight follows cursor as a radial gradient overlay
 */
const CustomCursor = () => {
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  // Stiff spring for the dot
  const dotX = useSpring(-100, { stiffness: 1200, damping: 38, mass: 0.2 });
  const dotY = useSpring(-100, { stiffness: 1200, damping: 38, mass: 0.2 });

  // Faster spring for the ring so it doesn't feel delayed
  const ringX = useSpring(-100, { stiffness: 520, damping: 28, mass: 0.35 });
  const ringY = useSpring(-100, { stiffness: 520, damping: 28, mass: 0.35 });

  // Spotlight remains softer, but should still keep up with the cursor
  const spotX = useSpring(-300, { stiffness: 180, damping: 24, mass: 0.6 });
  const spotY = useSpring(-300, { stiffness: 180, damping: 24, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      spotX.set(e.clientX);
      spotY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    // Detect link / button / glass-card hover
    const onHoverStart = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (
        el.closest('a') ||
        el.closest('button') ||
        el.closest('[data-cursor-hover]')
      ) {
        setHovering(true);
      }
    };
    const onHoverEnd = (e: MouseEvent) => {
      const nextTarget = e.relatedTarget as HTMLElement | null;
      if (
        nextTarget?.closest('a') ||
        nextTarget?.closest('button') ||
        nextTarget?.closest('[data-cursor-hover]')
      ) {
        return;
      }
      setHovering(false);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onHoverStart);
    document.addEventListener('mouseout', onHoverEnd);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onHoverStart);
      document.removeEventListener('mouseout', onHoverEnd);
    };
  }, [visible]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* ── Cursor dot ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: clicking ? 6 : hovering ? 0 : 6,
            height: clicking ? 6 : hovering ? 0 : 6,
            opacity: clicking ? 0.5 : 1,
          }}
          transition={{ duration: 0.15 }}
          style={{
            borderRadius: '50%',
            background: '#fff',
          }}
        />
      </motion.div>

      {/* ── Cursor ring ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: hovering ? 40 : clicking ? 26 : 30,
            height: hovering ? 40 : clicking ? 26 : 30,
            opacity: hovering ? 0.38 : 0.58,
            borderColor: hovering ? 'rgba(41,151,255,0.9)' : 'rgba(255,255,255,0.6)',
          }}
          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.55)',
          }}
        />
      </motion.div>

      {/* ── Spotlight glow ── */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[9990]"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="absolute w-[600px] h-[600px]"
          style={{
            x: spotX,
            y: spotY,
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(41,151,255,0.045) 0%, transparent 65%)',
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
