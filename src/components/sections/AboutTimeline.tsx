import { Building2, Calendar, Radar, Sparkles } from 'lucide-react';
import Reveal from '../Reveal';
import { experiences, profile } from '../../data/resumeData';

const AboutTimeline = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="orb left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-[#7ac4ff]/[0.06]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="world-shell glass-card noise p-8 md:p-10 lg:p-12">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <p className="section-label mb-4">Experience</p>
              <h2 className="font-display mb-5 text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.98] tracking-tight">
                A journey that feels built, not pitched.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-subdued">
                I care about products that feel alive in the hand. This timeline is less about titles
                and more about how my world of iOS development kept expanding through shipping,
                systems thinking, and real product responsibility.
              </p>
            </Reveal>

            <Reveal className="video-panel rounded-[28px] border border-white/10 p-6" direction="right" delay={80}>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#f4c46c]">
                <Radar className="h-4 w-4" />
                Signal
              </div>
              <p className="mt-5 text-base leading-relaxed text-white/88">
                {profile.summary}
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Enterprise-grade iOS delivery',
                  'Realtime communication and device integration',
                  'Product-minded execution with design sensitivity',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-white/72">
                    <Sparkles className="mt-0.5 h-4 w-4 text-[#9ed1ff]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative space-y-6">
            <div className="absolute bottom-6 left-[19px] top-3 w-px bg-gradient-to-b from-apple-blue/50 via-white/10 to-transparent" />

            {experiences.map((experience, index) => (
              <Reveal
                key={`${experience.company}-${experience.year}`}
                className="relative pl-14"
                delay={index * 90}
                direction="left"
              >
                <div className="absolute left-0 top-4">
                  {experience.current && <div className="timeline-pulse absolute inset-0 h-[38px] w-[38px] rounded-full bg-apple-blue/30" />}
                  <div
                    className={`relative flex h-[38px] w-[38px] items-center justify-center rounded-full ${
                      experience.current
                        ? 'border border-apple-blue/40 bg-apple-blue/20'
                        : 'border border-white/10 bg-white/[0.05]'
                    }`}
                  >
                    <div className={`h-2.5 w-2.5 rounded-full ${experience.current ? 'bg-apple-blue' : 'bg-white/30'}`} />
                  </div>
                </div>

                <div className="glass-card noise p-7">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      {experience.current && <span className="badge mb-3 inline-block">Current</span>}
                      <h3 className="text-[1.25rem] font-semibold leading-snug tracking-tight">
                        {experience.role}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-2 text-sm text-muted">
                        <Building2 className="h-3.5 w-3.5 shrink-0" />
                        <span className="text-subdued">{experience.company}</span>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5 pt-1 text-xs text-muted">
                      <Calendar className="h-3.5 w-3.5" />
                      <span className="font-medium">{experience.year}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-[1.75] text-muted">{experience.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full px-3 py-1.5 text-[11px] font-medium"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.62)',
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
