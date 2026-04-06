import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Subtle gradient top rule */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <span className="text-[13px] font-semibold text-white/50">
          Anas <span className="text-apple-blue/70">Parekh</span>{' '}
          <span className="font-normal">· iOS Developer</span>
        </span>

        {/* Copyright */}
        <span className="text-xs text-muted order-3 sm:order-none">
          © {year} All rights reserved.
        </span>

        {/* Social */}
        <div className="flex items-center gap-2">
          {[
            { href: 'https://www.linkedin.com/in/anas-parekh-a6ab40242', icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:anasparekh5@gmail.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:text-white hover:bg-white/[0.08] transition-all"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
