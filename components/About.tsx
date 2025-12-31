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
            <h2 className="text-5xl font-bold mb-4 tracking-wide" style={{ color: "#ADADAD" }}>
              NOSOTROS
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100px' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ backgroundColor: '#FFE045' }}
              className="h-2 mb-8"
            />

            <p className="text-base text-navy/80 leading-relaxed mb-4 text-justify">
              Con más de 20 años de trayectoria, somos una empresa líder en topografía,
              geodesia y agrimensura legal en Argentina. Desde nuestros inicios, hemos
              construido una sólida reputación trabajando con las principales refinerías
              de combustibles fósiles, industrias nacionales e internacionales, PyMEs y
              clientes particulares en todo el territorio nacional.
            </p>

            <p className="text-base text-navy/80 leading-relaxed mb-4 text-justify">
              Nuestro equipo multidisciplinario está conformado por geógrafos, ingenieros,
              agrimensores y técnicos especializados, todos profesionales con vasta
              experiencia y en continua capacitación sobre las últimas tecnologías y
              metodologías del sector. Trabajamos bajo estrictos sistemas de gestión de
              calidad basados en las Normas ISO 9001.
            </p>

            <p className="text-base text-navy/80 leading-relaxed text-justify">
              A lo largo de nuestra trayectoria, hemos incorporado instrumental de última
              generación - estaciones totales robotizadas, equipos GNSS de alta precisión,
              drones para fotogrametría y tecnología georradar - lo que nos permite ofrecer
              servicios eficientes, precisos y competitivos. Nos enorgullece nuestra
              permanencia en el mercado, el cumplimiento riguroso de plazos y, sobre todo,
              nuestra capacidad de brindar soluciones de calidad adaptadas a las
              necesidades específicas de cada cliente.
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
                src="/nosotros.jpg"
                alt="Profesional de topografía Pablo Barello"
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
