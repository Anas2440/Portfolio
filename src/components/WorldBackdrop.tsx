const beams = [
  {
    className: 'top-[8%] left-[-8%] h-[24rem] w-[38rem]',
    background:
      'linear-gradient(135deg, rgba(244,196,108,0.16), rgba(120,196,255,0.02) 68%)',
    rotate: -12,
    duration: '16s',
    delay: '0s',
  },
  {
    className: 'top-[36%] right-[-10%] h-[28rem] w-[42rem]',
    background:
      'linear-gradient(215deg, rgba(120,196,255,0.18), rgba(255,255,255,0.02) 70%)',
    rotate: 14,
    duration: '21s',
    delay: '1.2s',
  },
  {
    className: 'bottom-[4%] left-[10%] h-[18rem] w-[28rem]',
    background:
      'linear-gradient(135deg, rgba(72,134,255,0.14), rgba(244,196,108,0.03) 72%)',
    rotate: 4,
    duration: '14s',
    delay: '0.8s',
  },
];

const WorldBackdrop = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden>
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
      <div
        key={beam.className}
        className={`ambient-beam absolute rounded-[999px] blur-3xl ${beam.className}`}
        style={{
          background: beam.background,
          transform: `rotate(${beam.rotate}deg)`,
          animationDuration: beam.duration,
          animationDelay: beam.delay,
          ['--beam-offset' as string]: index % 2 === 0 ? '28px' : '-24px',
        }}
      />
    ))}

    <div className="ambient-line ambient-line-top absolute inset-x-0 top-[14%] h-px bg-gradient-to-r from-transparent via-[#f4c46c]/35 to-transparent" />
    <div className="ambient-line ambient-line-bottom absolute inset-x-0 bottom-[18%] h-px bg-gradient-to-r from-transparent via-[#9ed1ff]/28 to-transparent" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(2,5,10,0.55)_100%)]" />
    <div className="noise absolute inset-0 opacity-25" />
  </div>
);

export default WorldBackdrop;
