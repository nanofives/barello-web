'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'NOSOTROS', href: '#nosotros' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'PROYECTOS', href: '#proyectos' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex overflow-visible w-screen">
        {/* Logo Section - Yellow Background */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-yellow flex items-center px-3 md:px-[25px] py-3 md:py-1"
        >
          <a href="#inicio" className="flex items-center gap-1 md:gap-2">
            <Image
              src="/logo.svg"
              alt="PB&Asociados Logo"
              width={85}
              height={85}
              className="w-auto h-8 md:h-20"
            />
            <div className="flex flex-col justify-center" style={{ textAlign: 'justify', textAlignLast: 'justify' }}>
              <span className="text-navy font-bold text-[11px] md:text-2xl leading-tight block">
                Pablo Barello & Asoc.
              </span>
              <span className="text-navy font-normal text-[9px] md:text-lg leading-tight block" style={{ letterSpacing: '0.15em' }}>
                Servicio Topográficos
              </span>
            </div>
          </a>
        </motion.div>

        {/* Navigation Menu - Navy Background */}
        <div className="bg-navy flex-1 flex items-end justify-end pr-2 pl-2 md:pr-8 md:pl-4 pb-2">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8" style={{ paddingBottom: '15px' }}>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
                className="text-white font-medium text-sm tracking-wide hover:text-yellow transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 md:p-3 flex-shrink-0 rounded"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[52px] left-0 right-0 bg-navy z-40 md:hidden overflow-hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const target = document.querySelector(item.href);
                      if (target) {
                        const rect = target.getBoundingClientRect();
                        const scrollTop = window.scrollY || document.documentElement.scrollTop;
                        const elementTop = rect.top + scrollTop;
                        window.scrollTo({
                          top: elementTop - 60,
                          behavior: 'smooth',
                        });
                      }
                    }, 100);
                  }}
                  className="text-white font-medium text-lg px-6 py-5 hover:bg-yellow hover:text-navy transition-colors duration-200 border-b border-white/10 active:bg-yellow active:text-navy"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
