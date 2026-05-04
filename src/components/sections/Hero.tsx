import { ArrowRight, Sparkles, MapPin, Mail, Briefcase } from 'lucide-react';
import { SceneBlobs } from '../AnimatedBlob';
import FloatingUIScene from '../FloatingUIScene';
import Reveal from '../Reveal';
import { profile, stats } from '../../data/resumeData';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <SceneBlobs />

      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
            opacity: 0.8,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 md:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-left">
            <Reveal className="mb-6" delay={40}>
              <span className="badge">
                <Sparkles className="h-3 w-3" />
                Remote iOS Developer · Open to Contracts
              </span>
            </Reveal>

            <Reveal as="p" className="section-label mb-5" delay={80}>
              Native iOS craftsmanship across Fintech, Enterprise, Real-time Data, and Consumer Apps
            </Reveal>

            <Reveal
              as="h1"
              className="font-display mb-6 text-[clamp(3.2rem,9vw,7rem)] leading-[0.95] tracking-[-0.04em]"
              delay={120}
              style={{ textShadow: '0 10px 50px rgba(0,0,0,0.35)' }}
            >
              <span className="block text-[#f6efe0]">Built with taste.</span>
              <span className="block text-gradient">Shipped for people.</span>
            </Reveal>

            <Reveal className="max-w-xl space-y-4" delay={160}>
              <p className="text-lg leading-relaxed text-subdued md:text-[1.15rem]">
                I design and build polished iPhone experiences in <span className="text-white/90">Swift</span> and <span className="text-white/90">UIKit</span>,
                turning product ideas into fast, usable, and memorable mobile apps.
              </p>
              <p className="text-[0.98rem] leading-relaxed text-muted">
                10+ apps shipped, 100K+ downloads, and hands-on work across BLE integration,
                Firebase, REST APIs, real-time communication, and App Store delivery.
              </p>
            </Reveal>

            <Reveal className="mt-9 flex flex-wrap items-center gap-3" delay={220}>
              <a href="#projects" className="btn-primary group">
                View selected work
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="btn-secondary">
                Start a conversation
              </a>
            </Reveal>

            <Reveal className="mt-10 grid gap-3 sm:grid-cols-3" delay={260}>
              <div className="glass-card noise rounded-2xl p-4">
                <div className="flex items-center gap-2 text-white/75">
                  <Briefcase className="h-4 w-4 text-[#f4c46c]" />
                  <span className="text-xs uppercase tracking-[0.18em]">Role</span>
                </div>
                <p className="mt-3 text-sm font-medium text-white/92">{profile.title}</p>
              </div>
              <div className="glass-card noise rounded-2xl p-4">
                <div className="flex items-center gap-2 text-white/75">
                  <MapPin className="h-4 w-4 text-[#9ed1ff]" />
                  <span className="text-xs uppercase tracking-[0.18em]">Base</span>
                </div>
                <p className="mt-3 text-sm font-medium text-white/92">{profile.location}</p>
              </div>
              <div className="glass-card noise rounded-2xl p-4">
                <div className="flex items-center gap-2 text-white/75">
                  <Mail className="h-4 w-4 text-[#f4c46c]" />
                  <span className="text-xs uppercase tracking-[0.18em]">Contact</span>
                </div>
                <p className="mt-3 break-all text-sm font-medium text-white/92">{profile.email}</p>
              </div>
            </Reveal>

            <Reveal className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4" delay={320}>
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-5">
                  <div className="font-display text-3xl leading-none text-[#f6efe0]">{stat.value}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/45">{stat.label}</div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal className="relative h-[420px] sm:h-[500px] lg:h-[620px]" direction="right" delay={180}>
            <div className="absolute inset-0 rounded-[36px] border border-[#9ed1ff]/12 bg-[radial-gradient(circle_at_top,rgba(244,196,108,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_30px_100px_rgba(0,0,0,0.35)]" />
            <div className="absolute inset-5 rounded-[30px] border border-white/8 bg-[#08101b]/40 backdrop-blur-md" />
            <div className="absolute inset-0 overflow-hidden rounded-[36px]">
              <FloatingUIScene />
            </div>
            <div className="absolute left-6 right-6 top-6 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">Currently shipping</div>
                <div className="mt-1 text-sm font-medium text-white/88">Native iOS apps with product polish</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">Stack</div>
                <div className="mt-1 text-sm font-medium text-[#f4c46c]">Swift, SwiftUI, async/await</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="hero-scroll-hint absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted/40">Scroll</span>
        <div className="hero-scroll-line h-9 w-px bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
