import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Download, Linkedin, Mail, X } from "lucide-react";
import resumePdf from "../../AnasParekh.pdf";

const FloatingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Download,
      label: "Download Resume",
      href: resumePdf,
      color: "linear-gradient(135deg, rgba(244,196,108,0.95), rgba(230,168,67,0.95))",
    },
    {
      icon: Mail,
      label: "Email Me",
      href: "mailto:anasparekh5@gmail.com",
      color: "linear-gradient(135deg, rgba(120,196,255,0.95), rgba(70,134,255,0.95))",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anas-parekh-a6ab40242",
      color: "linear-gradient(135deg, rgba(52,108,255,0.95), rgba(34,66,158,0.95))",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-4 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  action.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 px-4 py-3 rounded-full text-white shadow-lg transition-all duration-200 hover:shadow-xl"
                style={{
                  background: action.color,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.24)",
                }}
              >
                <action.icon className="h-5 w-5" />
                <span className="text-sm font-medium whitespace-nowrap">
                  {action.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 text-white rounded-full transition-all duration-200 border border-white/12 video-panel"
        style={{
          boxShadow: "0 18px 48px rgba(0,0,0,0.28)",
        }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingWidget;
