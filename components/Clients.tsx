'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const clients = [
  {
    name: 'Pan Energy',
    url: 'https://www.pan-energy.com',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Shell',
    url: 'https://www.shell.com.ar',
    color: 'from-red-500 to-yellow-500',
  },
  {
    name: 'Vitco',
    url: 'https://vitco.com.ar',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'YPF',
    url: 'https://www.ypf.com',
    color: 'from-yellow-400 to-green-500',
  },
  {
    name: 'Contreras',
    url: 'https://www.contreras.com.ar',
    color: 'from-gray-600 to-gray-800',
  },
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
      whileHover={{ scale: 1.1, y: -10 }}
      className="group"
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex items-center justify-center">
        <div
          className={`text-center bg-gradient-to-br ${client.color} bg-clip-text text-transparent`}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-3xl font-bold"
          >
            {client.name}
          </motion.div>
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
      className="py-20 bg-gradient-to-b from-primary/5 to-white"
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
            CLIENTES
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mx-auto mb-6"
          />
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Confían en nuestra experiencia y profesionalismo
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <ClientCard key={client.name} client={client} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray max-w-3xl mx-auto">
            Trabajamos con las principales empresas del sector energético,
            industrial y de construcción en todo el territorio nacional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
