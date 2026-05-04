import { CheckCircle2 } from 'lucide-react';
import Reveal from '../Reveal';
import { useInViewOnce } from '../../hooks/useReveal';
import { coreSkills as skills, skillCategories as categories } from '../../data/resumeData';

const Skills = () => {
  const { ref, isVisible } = useInViewOnce<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="relative py-28">
      <div className="orb right-0 top-1/2 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 bg-[#7ac4ff]/[0.04]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="world-shell glass-card noise p-8 md:p-10 lg:p-12">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.82fr]">
            <Reveal>
              <p className="section-label mb-4">Expertise</p>
              <h2 className="font-display mb-4 text-[clamp(2.4rem,5vw,4.1rem)] leading-[0.98] tracking-tight">
                Tools, instincts, and systems that shape the work.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-subdued">
                This isn’t a keyword dump. It’s the actual stack and product muscle behind how I build:
                native interfaces, resilient integrations, and apps that feel intentional.
              </p>
            </Reveal>

            <Reveal className="video-panel rounded-[28px] border border-white/10 p-6" direction="right" delay={80}>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#9ed1ff]">Working style</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {['Native-first', 'Fast iterations', 'Clear systems', 'Polished delivery'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4 text-sm text-white/82">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <hr className="divider mb-16" />

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-7">
              {skills.map((skill, index) => (
                <Reveal key={skill.name} delay={index * 70} direction="left">
                  <div className="mb-2.5 flex items-end justify-between">
                    <div>
                      <span className="text-[0.95rem] font-semibold text-white/90">{skill.name}</span>
                      <p className="mt-0.5 text-xs text-muted">{skill.desc}</p>
                    </div>
                    <span className="font-mono text-[0.8rem] tabular-nums text-muted">
                      {skill.level}%
                    </span>
                  </div>

                  <div
                    className="relative h-[5px] overflow-hidden rounded-full border border-white/[0.06] bg-white/[0.06]"
                  >
                    <div
                      className={`skill-fill absolute inset-y-0 left-0 rounded-full ${isVisible ? 'is-filled' : ''}`}
                      style={{
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 80 + 120}ms`,
                        background: 'linear-gradient(90deg, #2997ff, rgba(41,151,255,0.6))',
                        boxShadow: '0 0 12px rgba(41,151,255,0.5)',
                      }}
                    />
                    <div
                      className={`skill-shimmer absolute inset-y-0 left-0 overflow-hidden rounded-full ${isVisible ? 'is-filled' : ''}`}
                      style={{
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 80 + 120}ms`,
                      }}
                    >
                      <div
                        className="absolute inset-0 animate-shimmer"
                        style={{
                          backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                          backgroundSize: '200% 100%',
                        }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="space-y-8">
              {categories.map((category, categoryIndex) => (
                <Reveal key={category.label} delay={categoryIndex * 90}>
                  <div className="video-panel rounded-[24px] border border-white/9 p-5">
                    <p className="section-label mb-4">{category.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="flex min-h-[44px] items-center gap-1.5 rounded-xl px-3.5 py-2 text-[0.8rem] font-medium"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'rgba(255,255,255,0.7)',
                          }}
                        >
                          <CheckCircle2 className="h-3 w-3 shrink-0 text-apple-blue/80" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
