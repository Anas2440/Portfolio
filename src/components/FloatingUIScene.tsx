import {
  Activity,
  AppWindow,
  ArrowUpRight,
  Cpu,
  GitBranch,
  Layers,
  Shield,
  Star,
  Wifi,
  Zap,
} from 'lucide-react';

const chips = [
  { icon: Activity, label: 'Swift 5.9', sub: 'Language', accent: '#f97316', position: 'left-[2%] top-[18%]', depth: 'front', duration: '10s', delay: '0s' },
  { icon: Layers, label: 'SwiftUI', sub: 'Declarative', accent: '#2997ff', position: 'right-[3%] top-[14%]', depth: 'front', duration: '12s', delay: '0.6s' },
  { icon: Cpu, label: 'ARKit', sub: 'Spatial', accent: '#a78bfa', position: 'left-[5%] bottom-[24%]', depth: 'mid', duration: '13s', delay: '1.2s' },
  { icon: Shield, label: 'StoreKit 2', sub: 'Payments', accent: '#34d399', position: 'right-[5%] bottom-[30%]', depth: 'mid', duration: '11s', delay: '0.4s' },
  { icon: Zap, label: 'Combine', sub: 'Reactive', accent: '#fbbf24', position: 'left-[18%] top-[8%]', depth: 'back', duration: '14s', delay: '1.5s' },
  { icon: GitBranch, label: 'Xcode', sub: 'IDE', accent: '#60a5fa', position: 'right-[18%] top-[8%]', depth: 'back', duration: '15s', delay: '2s' },
  { icon: Star, label: 'App Store', sub: '5.0 ★ 10K+', accent: '#f59e0b', position: 'left-[0%] top-[50%]', depth: 'front', duration: '11.5s', delay: '0.8s' },
  { icon: Wifi, label: 'Firebase', sub: 'Real-time', accent: '#fb923c', position: 'right-[0%] top-[52%]', depth: 'front', duration: '12.5s', delay: '1.8s' },
];

const FloatingUIScene = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden>
    <div className="scene-ring scene-ring-one" />
    <div className="scene-ring scene-ring-two" />
    <div className="scene-ring scene-ring-three" />

    <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
      <div className="scene-device-wrap relative">
        <div className="scene-device-glow absolute left-1/2 top-1/2 h-[420px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[34px]" />
        <div className="scene-device-shadow absolute left-[30px] top-[52px] h-[360px] w-[280px] rounded-[30px] border border-white/10" />

        <div className="scene-device relative h-[580px] w-[300px] overflow-hidden rounded-[42px] border border-white/12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(41,151,255,0.22),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_45%)]" />
        <div className="absolute left-1/2 top-3 h-7 w-28 -translate-x-1/2 rounded-full border border-white/5 bg-black/65" />

        <div className="scene-panel absolute left-6 right-6 top-16 rounded-[28px] border border-white/10 p-5">
          <div className="flex items-center justify-between text-white/90">
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Featured Build</div>
              <div className="mt-2 text-xl font-semibold tracking-tight">SwiftUI Commerce</div>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
              <AppWindow className="h-5 w-5 text-[#7dd3fc]" />
            </div>
          </div>
          <div className="mt-6 h-32 overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
            <div className="grid h-full grid-cols-2 gap-3 p-4">
              <div className="rounded-2xl border border-white/8 bg-white/6" />
              <div className="rounded-2xl border border-[#2997ff]/20 bg-[#2997ff]/20" />
              <div className="col-span-2 rounded-2xl border border-white/8 bg-white/6" />
            </div>
          </div>
        </div>

        <div className="absolute left-6 right-6 top-[21rem] grid grid-cols-2 gap-3">
          {[
            { label: 'Launches', value: '12' },
            { label: 'Retention', value: '92%' },
            { label: 'Store Rating', value: '4.9' },
            { label: 'Sessions', value: '148K' },
          ].map((item, index) => (
            <div
              key={item.label}
              className="scene-metric rounded-[22px] border border-white/10 p-4"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/35">{item.label}</div>
              <div className="mt-2 text-2xl font-semibold text-white">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="scene-footer absolute bottom-7 left-6 right-6 flex items-center justify-between rounded-[24px] border border-white/10 px-5 py-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">Now Shipping</div>
            <div className="mt-1 text-sm font-medium text-white/90">Motion-rich product interfaces</div>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#2997ff]/25 bg-[#2997ff]/20">
            <ArrowUpRight className="h-5 w-5 text-[#7dd3fc]" />
          </div>
        </div>
        </div>
      </div>
    </div>

    {chips.map((chip) => {
      const Icon = chip.icon;

      return (
        <div
          key={chip.label}
          className={`absolute hidden lg:block ${chip.position} scene-chip-${chip.depth}`}
        >
          <div
            className="scene-chip flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5"
            style={{
              background: 'rgba(10,10,12,0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(18px) saturate(1.8)',
              WebkitBackdropFilter: 'blur(18px) saturate(1.8)',
              boxShadow: `0 4px 24px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06) inset, 0 0 20px -8px ${chip.accent}60`,
              animationDuration: chip.duration,
              animationDelay: chip.delay,
            }}
          >
            <div
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `${chip.accent}22`, border: `1px solid ${chip.accent}40` }}
            >
              <Icon className="h-3.5 w-3.5" style={{ color: chip.accent }} strokeWidth={2} />
            </div>
            <div>
              <div className="whitespace-nowrap text-[12px] font-semibold leading-none text-white/90">
                {chip.label}
              </div>
              <div className="mt-0.5 whitespace-nowrap text-[10px] leading-none text-white/35">
                {chip.sub}
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default FloatingUIScene;
