import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import resumePdf from '../../AnasParekh.pdf';

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
    let frame = 0;

    const updateScroll = () => {
      frame = 0;
      const nextScrolled = window.scrollY > 32;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMobileOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-200"
        style={{
          background: scrolled ? 'rgba(8,16,28,0.52)' : 'transparent',
          backdropFilter: scrolled ? 'blur(22px) saturate(1.35)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(22px) saturate(1.35)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
      >
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a
            href="#"
            onClick={(event) => scrollTo(event, '#')}
            className="flex min-h-[44px] items-center text-[15px] font-semibold tracking-tight text-white/90 transition-colors duration-200 hover:text-white"
          >
            Anas <span className="ml-1 text-[#f4c46c]">Parekh</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => scrollTo(event, item.href)}
                className="flex min-h-[44px] items-center rounded-full px-3.5 py-2 text-[13.5px] font-medium text-muted transition-colors duration-200 hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumePdf}
              download="AnasParekh.pdf"
              className="hidden min-h-[44px] items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-200 md:inline-flex"
              style={{
                background: 'linear-gradient(135deg, rgba(244,196,108,0.16), rgba(255,255,255,0.05))',
                border: '1px solid rgba(244,196,108,0.22)',
                color: 'rgba(255,248,232,0.92)',
                boxShadow: '0 12px 30px rgba(244,196,108,0.12)',
              }}
            >
              Résumé ↓
            </a>

            <button
              onClick={() => setMobileOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-white/70 transition-all duration-200 hover:bg-white/[0.07] hover:text-white md:hidden"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed left-0 right-0 top-14 z-40 px-4 transition-all duration-200 md:hidden ${
          mobileOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
        style={{
          background: mobileOpen ? 'rgba(8,16,28,0.86)' : 'transparent',
          backdropFilter: mobileOpen ? 'blur(22px)' : 'none',
          WebkitBackdropFilter: mobileOpen ? 'blur(22px)' : 'none',
          borderBottom: mobileOpen ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
      >
        <div className="py-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => scrollTo(event, item.href)}
              className="flex min-h-[44px] items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 border-t border-white/[0.06] pt-3">
            <a
              href={resumePdf}
              download="AnasParekh.pdf"
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.07] py-2.5 text-sm font-semibold text-white/80"
            >
              Download Résumé
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
