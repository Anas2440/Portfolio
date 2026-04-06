import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import resumePdf from '../../AnasParekh.pdf';

const EASE = [0.16, 1, 0.3, 1] as const;

const navItems = [
  { label: 'Experience', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8,16,28,0.52)' : 'transparent',
          backdropFilter: scrolled ? 'blur(28px) saturate(1.5)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(1.5)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={e => scrollTo(e, '#')}
            className="text-[15px] font-semibold tracking-tight text-white/90 hover:text-white transition-colors"
          >
            Anas <span className="text-[#f4c46c]">Parekh</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={e => scrollTo(e, item.href)}
                className="relative px-3.5 py-2 text-[13.5px] font-medium rounded-full text-muted hover:text-white transition-colors duration-200 hover:bg-white/[0.05]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA + burger */}
          <div className="flex items-center gap-2">
            <a
              href={resumePdf}
              download="AnasParekh.pdf"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold rounded-full transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, rgba(244,196,108,0.16), rgba(255,255,255,0.05))',
                border: '1px solid rgba(244,196,108,0.22)',
                color: 'rgba(255,248,232,0.92)',
                boxShadow: '0 12px 30px rgba(244,196,108,0.12)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgba(244,196,108,0.22), rgba(255,255,255,0.08))';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgba(244,196,108,0.16), rgba(255,255,255,0.05))';
              }}
            >
              Résumé ↓
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/[0.07] transition-all"
            >
              {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="fixed top-14 left-0 right-0 z-40 px-4 py-3"
            style={{
              background: 'rgba(8,16,28,0.86)',
              backdropFilter: 'blur(28px)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={e => scrollTo(e, item.href)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                {item.label}
              </motion.a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <a
                href={resumePdf}
                download="AnasParekh.pdf"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white/80"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.09)' }}
              >
                Download Résumé
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
