'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const clients = [
  { name: 'Pan Energy', url: 'https://www.pan-energy.com' },
  { name: 'Shell', url: 'https://www.shell.com.ar' },
  { name: 'Vitco', url: 'https://vitco.com.ar' },
  { name: 'YPF', url: 'https://www.ypf.com' },
  { name: 'Contreras', url: 'https://www.contreras.com.ar' },
];

function ClientCard({
  client,
  index,
}: {
  client: typeof clients[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.a
      ref={ref}
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group"
    >
      <div className="bg-white p-6 rounded shadow-md h-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-navy group-hover:text-cyan transition-colors">
            {client.name}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="proyectos"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-navy mb-4 tracking-wide">
            CLIENTES
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-cyan mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <ClientCard key={client.name} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
