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
  const dotX = useSpring(-100, { stiffness: 900, damping: 45 });
  const dotY = useSpring(-100, { stiffness: 900, damping: 45 });

  // Soft spring for the ring
  const ringX = useSpring(-100, { stiffness: 200, damping: 30 });
  const ringY = useSpring(-100, { stiffness: 200, damping: 30 });

  // Spotlight (very lazy)
  const spotX = useSpring(-300, { stiffness: 60, damping: 18 });
  const spotY = useSpring(-300, { stiffness: 60, damping: 18 });

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
    const onHoverEnd = () => setHovering(false);

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
            width: hovering ? 44 : clicking ? 28 : 32,
            height: hovering ? 44 : clicking ? 28 : 32,
            opacity: hovering ? 0.3 : 0.55,
            borderColor: hovering ? 'rgba(41,151,255,0.9)' : 'rgba(255,255,255,0.6)',
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
