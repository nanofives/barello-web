'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-gray-light mb-4 tracking-wide">
              NOSOTROS
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100px' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ backgroundColor: '#FFE045' }}
              className="h-2 mb-8"
            />

            <p className="text-base text-navy/80 leading-relaxed mb-6 text-justify">
              Somos una empresa de topografía, dedicada a la geodesia, la
              agrimensura legal y afines que opera desde hace 20 años en todo el
              territorio nacional prestando servicios a las principales refinerías
              de combustibles fósiles, industrias nacionales, internacionales, pyme
              y a privados.
            </p>

            <p className="text-base text-navy/80 leading-relaxed text-justify">
              Nos destacamos por nuestra permanencia, competitividad,
              responsabilidad en el cumplimiento de los tiempos preestablecidos y
              por la capacidad de proporcionar soluciones eficientes y de calidad a
              nuestros clientes.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded shadow-lg overflow-hidden">
              <Image
                src="/c19c76_427a7bbf62474f74968cb087499c7a3e.jpg"
                alt="Equipo topográfico"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
