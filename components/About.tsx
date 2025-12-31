'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '20+', label: 'Años de Experiencia' },
  { number: '500+', label: 'Proyectos Completados' },
  { number: '100%', label: 'Clientes Satisfechos' },
  { number: '24/7', label: 'Soporte Técnico' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-8xl mb-4">📍</div>
                  <p className="text-2xl font-bold text-dark">
                    Precisión y Experiencia
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary rounded-full opacity-20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-secondary rounded-full opacity-20"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold text-dark mb-4 tracking-wide">
              NOSOTROS
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100px' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-primary mb-8"
            />

            <p className="text-lg text-gray leading-relaxed mb-6 text-justify">
              Somos una empresa de topografía, dedicada a la geodesia, la
              agrimensura legal y afines que opera desde hace 20 años en todo el
              territorio nacional prestando servicios a las principales refinerías
              de combustibles fósiles, industrias nacionales, internacionales, pyme
              y a privados.
            </p>

            <p className="text-lg text-gray leading-relaxed mb-8 text-justify">
              Nos destacamos por nuestra permanencia, competitividad,
              responsabilidad en el cumplimiento de los tiempos preestablecidos y
              por la capacidad de proporcionar soluciones eficientes y de calidad a
              nuestros clientes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
