import React, { useState } from 'react';
import { Download, Linkedin, Mail, MessageCircle, X } from 'lucide-react';
import resumePdf from '../../AnasParekh.pdf';

const FloatingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Download,
      label: 'Download Resume',
      href: resumePdf,
      color: 'linear-gradient(135deg, rgba(244,196,108,0.95), rgba(230,168,67,0.95))',
    },
    {
      icon: Mail,
      label: 'Email Me',
      href: 'mailto:anasparekh5@gmail.com',
      color: 'linear-gradient(135deg, rgba(120,196,255,0.95), rgba(70,134,255,0.95))',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anas-parekh-a6ab40242',
      color: 'linear-gradient(135deg, rgba(52,108,255,0.95), rgba(34,66,158,0.95))',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`mb-4 space-y-3 transition-all duration-200 ${
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        {actions.map((action, index) => (
          <a
            key={action.label}
            href={action.href}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex min-h-[44px] items-center space-x-3 rounded-full px-4 py-3 text-white shadow-lg transition-all duration-200 hover:translate-y-[-1px] hover:shadow-xl"
            style={{
              background: action.color,
              boxShadow: '0 16px 40px rgba(0,0,0,0.24)',
              transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
            }}
          >
            <action.icon className="h-5 w-5" />
            <span className="whitespace-nowrap text-sm font-medium">{action.label}</span>
          </a>
        ))}
      </div>

      <button
        onClick={() => setIsOpen((current) => !current)}
        className="video-panel flex h-14 w-14 items-center justify-center rounded-full border border-white/12 text-white transition-transform duration-200 hover:scale-[1.04]"
        style={{ boxShadow: '0 18px 48px rgba(0,0,0,0.28)' }}
        aria-expanded={isOpen}
        aria-label="Toggle quick actions"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default FloatingWidget;
