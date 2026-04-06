import { motion } from 'framer-motion';

const beams = [
  {
    className: 'top-[8%] left-[-8%] h-[24rem] w-[38rem]',
    background:
      'linear-gradient(135deg, rgba(244,196,108,0.16), rgba(120,196,255,0.02) 68%)',
    rotate: -12,
    duration: 18,
  },
  {
    className: 'top-[36%] right-[-10%] h-[28rem] w-[42rem]',
    background:
      'linear-gradient(215deg, rgba(120,196,255,0.18), rgba(255,255,255,0.02) 70%)',
    rotate: 14,
    duration: 24,
  },
  {
    className: 'bottom-[4%] left-[10%] h-[18rem] w-[28rem]',
    background:
      'linear-gradient(135deg, rgba(72,134,255,0.14), rgba(244,196,108,0.03) 72%)',
    rotate: 4,
    duration: 16,
  },
];

const WorldBackdrop = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_22%),linear-gradient(180deg,rgba(4,8,14,0.12),rgba(3,6,12,0.4))]" />

    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(circle at center, black 20%, transparent 78%)',
      }}
    />

    {beams.map((beam, index) => (
      <motion.div
        key={index}
        className={`absolute rounded-[999px] blur-3xl ${beam.className}`}
        style={{
          background: beam.background,
          transform: `rotate(${beam.rotate}deg)`,
          willChange: 'transform, opacity',
        }}
        animate={{
          x: [0, index % 2 === 0 ? 40 : -36, 0],
          y: [0, index % 2 === 0 ? -28 : 18, 0],
          opacity: [0.45, 0.75, 0.5],
        }}
        transition={{
          duration: beam.duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}

    <motion.div
      className="absolute inset-x-0 top-[14%] h-px bg-gradient-to-r from-transparent via-[#f4c46c]/35 to-transparent"
      animate={{ opacity: [0.15, 0.55, 0.15], scaleX: [0.92, 1, 0.92] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute inset-x-0 bottom-[18%] h-px bg-gradient-to-r from-transparent via-[#9ed1ff]/28 to-transparent"
      animate={{ opacity: [0.1, 0.4, 0.1], scaleX: [1, 0.94, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(2,5,10,0.55)_100%)]" />
    <div className="noise absolute inset-0 opacity-25" />
  </div>
);

export default WorldBackdrop;
