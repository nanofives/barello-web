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
      <nav className="fixed top-0 left-0 right-0 z-50 flex">
        {/* Logo Section - Yellow Background */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-yellow flex items-center"
          style={{ paddingLeft: '25px', paddingRight: '25px', paddingTop: '4px', paddingBottom: '4px' }}
        >
          <a href="#inicio" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="PB&Asociados Logo"
              width={85}
              height={85}
              className="w-auto h-16 md:h-20"
              style={{ paddingTop: '4px', paddingBottom: '4px' }}
            />
            <div className="flex flex-col justify-center" style={{ textAlign: 'justify', textAlignLast: 'justify' }}>
              <span className="text-navy font-bold text-lg md:text-2xl leading-tight block">
                Pablo Barello & Asoc.
              </span>
              <span className="text-navy font-normal text-sm md:text-lg leading-tight block" style={{ letterSpacing: '0.2em' }}>
                Servicio Topográficos
              </span>
            </div>
          </a>
        </motion.div>

        {/* Navigation Menu - Navy Background */}
        <div className="bg-navy flex-1 flex items-end justify-end px-4 md:px-8 pb-1">
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
            className="md:hidden text-white p-2 mb-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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
            className="fixed top-[72px] left-0 right-0 bg-navy z-40 md:hidden overflow-hidden"
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
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white font-medium text-base px-8 py-4 hover:bg-yellow hover:text-navy transition-colors duration-200 border-b border-white/10"
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
