import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Linkedin, Mail, ArrowUpRight, Phone, Globe, MapPin } from 'lucide-react';
import { profile } from '../../data/resumeData';

const EASE = [0.16, 1, 0.3, 1] as const;

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      setForm({ name: '', email: '', message: '' });
    }, 1600);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Ambient */}
      <div className="orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f4c46c]/[0.06]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="world-shell glass-card noise p-8 md:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          
          {/* ── Left column: copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="section-label mb-4">Contact</p>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] tracking-tight leading-[0.98] mb-5">
              Enter the conversation, not the funnel.
            </h2>
            <p className="text-subdued text-base leading-relaxed mb-10 max-w-sm">
              Based in {profile.location}. If you have an iOS product, client build, or collaboration idea,
              let’s make it feel honest, alive, and beautifully built.
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/75">
                <MapPin className="w-4 h-4 text-apple-blue/80" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/75">
                <Mail className="w-4 h-4 text-apple-blue/80" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/75">
                <Phone className="w-4 h-4 text-apple-blue/80" />
                <span>{profile.phone}</span>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between px-4 py-3 rounded-xl group transition-colors duration-200 video-panel border border-white/10"
                  style={{
                    boxShadow: '0 14px 40px rgba(0,0,0,0.18)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.07)' }}>
                      <Icon className="w-4 h-4 text-white/70" />
                    </div>
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-apple-blue transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right column: form ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <div
              className="video-panel rounded-[30px] p-8 sm:p-10 relative overflow-hidden border border-white/10"
              style={{
                boxShadow: '0 20px 70px rgba(0,0,0,0.24), 0 0 0 1px rgba(255,255,255,0.04) inset',
              }}
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-apple-blue/40 to-transparent" />

              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                      style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)' }}>
                      <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
                    <p className="text-muted text-sm">I'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="mt-8 text-xs text-muted hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(['name', 'email'] as const).map((field) => (
                        <div key={field} className="space-y-1.5">
                          <label
                            htmlFor={`${id}-${field}`}
                            className="text-xs font-semibold tracking-wide uppercase text-muted"
                          >
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
                            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-200"
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.09)',
                            }}
                            onFocus={e => {
                              e.currentTarget.style.borderColor = 'rgba(41,151,255,0.6)';
                              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(41,151,255,0.1)';
                            }}
                            onBlur={e => {
                              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor={`${id}-message`}
                        className="text-xs font-semibold tracking-wide uppercase text-muted"
                      >
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
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none resize-none transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.09)',
                        }}
                        onFocus={e => {
                          e.currentTarget.style.borderColor = 'rgba(41,151,255,0.6)';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(41,151,255,0.1)';
                        }}
                        onBlur={e => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={formState === 'loading'}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-200 disabled:opacity-60"
                      style={{
                        background: '#fff',
                        color: '#000',
                        boxShadow: '0 0 0 1px rgba(255,255,255,0.12) inset',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.88)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; }}
                    >
                      {formState === 'loading' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
