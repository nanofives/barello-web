'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Relevamientos Planialtimétricos',
    description:
      'Levantamientos topográficos completos con medición de coordenadas planimétricas y altimétricas para proyectos de ingeniería y construcción.',
    image: '/servicio-1.jpg',
  },
  {
    title: 'Replanteos de Obra',
    description:
      'Transferencia precisa de proyectos del plano al terreno, marcación de ejes y cotas para inicio y control de obras.',
    image: '/servicio-2.jpg',
  },
  {
    title: 'Tareas de Agrimensura',
    description:
      'Mensuras, subdivisiones, unificaciones y deslindes. Gestión catastral y asesoramiento legal para trámites registrales en la Provincia de Buenos Aires.',
    image: '/servicio-3.jpg',
  },
  {
    title: 'Relevamientos con Georradar',
    description:
      'Detección no invasiva de estructuras subterráneas, tuberías, cables y anomalías mediante tecnología de georradar.',
    image: '/servicio-4.jpg',
  },
  {
    title: 'Vuelos Fotogramétricos',
    description:
      'Captura aérea con drones para generación de ortomosaicos, modelos 3D y análisis topográfico de grandes extensiones.',
    image: '/servicio-5.jpg',
  },
  {
    title: 'Mediciones de Tanques',
    description:
      'Medición de Ovalidad, Verticalidad y Calibración de tanques de almacenamiento. Certificación volumétrica para industrias petroleras y químicas.',
    image: '/servicio-6.jpg',
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-0 rounded shadow-md overflow-hidden"
    >
      <div className="relative h-56 w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
        <p className="text-navy/70 leading-relaxed text-sm">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="servicios"
      className="py-20 bg-gray-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wide" style={{ color: '#ADADAD' }}>
            SERVICIOS
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ backgroundColor: '#FFE045' }}
            className="h-2 mx-auto mb-6"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
