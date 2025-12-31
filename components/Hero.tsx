'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #87CEEB 0%, #B0E0E6 50%, #87CEEB 100%)',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-navy/30" />

      {/* Decorative Elements to simulate equipment silhouettes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute bottom-0 left-10 w-32 h-96 bg-yellow rounded-t-lg" />
        <div className="absolute bottom-0 right-20 w-24 h-80 bg-cyan rounded-t-lg" />
        <div className="absolute bottom-0 left-1/4 w-16 h-64 bg-navy rounded-t-lg" />
        <div className="absolute bottom-0 right-1/3 w-20 h-72 bg-yellow rounded-t-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide leading-tight drop-shadow-lg"
          >
            LLEVAMOS LA TOPOGRAFÍA <br />
            <span className="text-white">A OTRO NIVEL</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#servicios"
              className="px-8 py-4 bg-yellow text-navy rounded font-bold shadow-lg hover:bg-yellow-light transition-colors duration-200"
            >
              Ver Servicios
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded font-bold hover:bg-white hover:text-navy transition-all duration-200"
            >
              Contactar
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
