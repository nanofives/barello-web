'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-start justify-end overflow-hidden"
      style={{
        backgroundImage: 'url(/hero.jpg)',
        backgroundSize: isMobile ? 'contain' : 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        backgroundColor: '#20303c',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-navy/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-2xl"
            >
              LLEVAMOS LA TOPOGRAFÍA A OTRO NIVEL
            </motion.h1>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
