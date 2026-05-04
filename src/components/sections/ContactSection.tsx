import React, { useId, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Globe, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import Reveal from '../Reveal';
import { profile } from '../../data/resumeData';

const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', href: `tel:${profile.phone.replace(/\s+/g, '')}`, icon: Phone },
  { label: 'Website', href: profile.website, icon: Globe },
];

type FormState = 'idle' | 'loading' | 'success';

const ContactSection = () => {
  const id = useId();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormState('loading');
    window.setTimeout(() => {
      setFormState('success');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="orb left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#f4c46c]/[0.06]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="world-shell glass-card noise p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
            <Reveal>
              <p className="section-label mb-4">Contact</p>
              <h2 className="font-display mb-5 text-[clamp(2.4rem,5vw,4rem)] leading-[0.98] tracking-tight">
                Enter the conversation, not the funnel.
              </h2>
              <p className="mb-10 max-w-sm text-base leading-relaxed text-subdued">
                Based in {profile.location}. If you have an iOS product, client build, or collaboration idea,
                let’s make it feel honest, alive, and beautifully built.
              </p>

              <div className="mb-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/75">
                  <MapPin className="h-4 w-4 text-apple-blue/80" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/75">
                  <Mail className="h-4 w-4 text-apple-blue/80" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/75">
                  <Phone className="h-4 w-4 text-apple-blue/80" />
                  <span>{profile.phone}</span>
                </div>
              </div>

              <div className="space-y-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="video-panel flex min-h-[44px] items-center justify-between rounded-xl border border-white/10 px-4 py-3 transition-colors duration-200"
                    style={{ boxShadow: '0 14px 40px rgba(0,0,0,0.18)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/7">
                        <Icon className="h-4 w-4 text-white/70" />
                      </div>
                      <span className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white">
                        {label}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-colors duration-200 hover:text-apple-blue" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div
                className="video-panel relative overflow-hidden rounded-[30px] border border-white/10 p-8 sm:p-10"
                style={{
                  boxShadow: '0 20px 70px rgba(0,0,0,0.24), 0 0 0 1px rgba(255,255,255,0.04) inset',
                }}
              >
                <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-apple-blue/40 to-transparent" />

                {formState === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/15"
                    >
                      <CheckCircle2 className="h-7 w-7 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Message sent!</h3>
                    <p className="mt-2 text-sm text-muted">I'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="mt-8 min-h-[44px] text-xs text-muted underline underline-offset-4 transition-colors duration-200 hover:text-white"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {(['name', 'email'] as const).map((field) => (
                        <div key={field} className="space-y-1.5">
                          <label htmlFor={`${id}-${field}`} className="text-xs font-semibold uppercase tracking-wide text-muted">
                            {field === 'name' ? 'Full name' : 'Email'}
                          </label>
                          <input
                            id={`${id}-${field}`}
                            name={field}
                            type={field === 'email' ? 'email' : 'text'}
                            required
                            value={form[field]}
                            onChange={handleChange}
                            placeholder={field === 'name' ? 'Anas Parekh' : 'you@domain.com'}
                            className="contact-input w-full rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-white/25"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor={`${id}-message`} className="text-xs font-semibold uppercase tracking-wide text-muted">
                        Message
                      </label>
                      <textarea
                        id={`${id}-message`}
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project…"
                        className="contact-input w-full resize-none rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-white/25"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-[15px] font-semibold text-black transition-all duration-200 disabled:opacity-60"
                      style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.12) inset' }}
                    >
                      {formState === 'loading' ? (
                        <>
                          <span className="loading-spinner h-4 w-4 rounded-full border-2 border-black/30 border-t-black" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
