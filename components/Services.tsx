'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Relevamientos',
    description:
      'Realizamos relevamientos topográficos precisos utilizando tecnología de última generación. Nuestro equipo de profesionales garantiza mediciones exactas para proyectos de cualquier escala.',
    icon: '📐',
  },
  {
    title: 'Replanteos',
    description:
      'Servicios de replanteo topográfico para proyectos de construcción e infraestructura. Transferimos con precisión los diseños del plano al terreno, asegurando la correcta ubicación de las obras.',
    icon: '📏',
  },
  {
    title: 'Geodesia',
    description:
      'Estudios geodésicos y establecimiento de redes de control. Trabajamos con sistemas de referencia modernos y tecnología GNSS para proyectos que requieren máxima precisión.',
    icon: '🌐',
  },
  {
    title: 'Agrimensura Legal',
    description:
      'Servicios de agrimensura legal para mensuras, subdivisiones y unificaciones. Asesoramiento técnico-legal para trámites catastrales y registrales.',
    icon: '📋',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-6xl mb-4"
      >
        {service.icon}
      </motion.div>
      <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
      <p className="text-gray leading-relaxed">{service.description}</p>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-b from-white to-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-dark mb-4 tracking-wide">
            SERVICIOS
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mx-auto mb-6"
          />
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Ofrecemos soluciones integrales en topografía y geodesia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
