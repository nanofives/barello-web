'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const navItems = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'NOSOTROS', href: '#nosotros' },
    { name: 'PROYECTOS', href: '#proyectos' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex shadow-lg">
      {/* Logo Section - Yellow Background */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-yellow flex items-center px-8 py-6"
      >
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="PB&Asociados Logo"
            width={70}
            height={70}
            className="w-auto h-16"
          />
          <div className="flex flex-col justify-center" style={{ textAlign: 'justify', textAlignLast: 'justify' }}>
            <span className="text-navy font-bold text-base leading-tight block">
              Pablo Barello & Asoc.
            </span>
            <span className="text-navy font-normal text-sm leading-tight block">
              Servicio Topográficos
            </span>
          </div>
        </a>
      </motion.div>

      {/* Navigation Menu - Navy Background */}
      <div className="bg-navy flex-1 flex items-center justify-end px-8 h-[88px]">
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -2 }}
              className="text-white font-medium text-sm tracking-wide hover:text-yellow transition-colors duration-200 py-6"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white hover:text-yellow">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
