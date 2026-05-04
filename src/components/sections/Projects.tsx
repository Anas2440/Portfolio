import { ArrowUpRight, Tag } from 'lucide-react';
import Reveal from '../Reveal';
import { projects } from '../../data/resumeData';

const Projects = () => {
  return (
    <section id="projects" className="relative py-28">
      <div className="orb right-0 top-24 h-[560px] w-[560px] translate-x-1/3 bg-[#f4c46c]/[0.05]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="world-shell glass-card noise p-8 md:p-10 lg:p-12">
          <Reveal className="mb-16">
            <p className="section-label mb-4">Selected Work</p>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.98] tracking-tight">
                  Spaces I’ve built for other people to live inside.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-subdued">
                  From private communities to fashion operations and AI interfaces, these projects were
                  built to feel useful, tactile, and emotionally clear.
                </p>
              </div>
              <div className="video-panel max-w-sm rounded-[26px] border border-white/10 px-5 py-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#f4c46c]">Project Mood</div>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Clean flows, fast interactions, and surfaces that feel calm under pressure.
                </p>
              </div>
            </div>
          </Reveal>

          <hr className="divider mb-16" />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 80}>
                <article
                  className="project-card group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/7 bg-white/[0.03]"
                  data-cursor-hover
                >
                  <div
                    className="project-glow absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(360px circle at top right, ${project.accent.replace('0.08', '0.22')}, transparent 58%)`,
                    }}
                  />

                  <div
                    className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] opacity-70"
                    style={{
                      background: `linear-gradient(90deg, ${project.highlight}00, ${project.highlight}, ${project.highlight}00)`,
                    }}
                  />

                  <div className="relative z-10 flex h-full flex-col p-8">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span
                        className="rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"
                        style={{
                          color: project.highlight,
                          background: `${project.highlight}18`,
                        }}
                      >
                        {project.type}
                      </span>
                      <a href="#contact" className="flex min-h-[44px] items-center gap-1 text-xs font-semibold" style={{ color: project.highlight }}>
                        Case Study <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>

                    <h3 className="mb-3 text-[1.35rem] font-bold tracking-tight text-white/88 transition-colors duration-200 group-hover:text-white">
                      {project.title}
                    </h3>

                    <p className="mb-7 flex-1 text-sm leading-[1.75] text-muted">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium"
                          style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'rgba(255,255,255,0.5)',
                          }}
                        >
                          <Tag className="h-2.5 w-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
