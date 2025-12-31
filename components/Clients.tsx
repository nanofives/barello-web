'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const clients = [
  {
    name: 'Pan American Energy',
    url: 'https://www.pan-energy.com',
    logo: '/bd67c5_30c2ec9911164547811d2aa54074d8b6~mv2.png',
    logoHover: '/bd67c5_0e4decaa26384878ab34d9022f2df6f1~mv2.png',
    width: 200,
    height: 110,
  },
  {
    name: 'Shell',
    url: 'https://www.shell.com.ar',
    logo: '/bd67c5_cdc8914872b0469eaa9a78d98e1b53d4~mv2.png',
    logoHover: '/bd67c5_20534d9f7c6f4faabc0b558625b8f710~mv2.png',
    width: 170,
    height: 85,
  },
  {
    name: 'Vitco',
    url: 'https://vitco.com.ar',
    logo: '/bd67c5_af0af4d51baf434cbe1a4a8b0ee4cb45~mv2.png',
    logoHover: '/bd67c5_237f7c901c894ac2a34906b215d735aa~mv2.png',
    width: 150,
    height: 75,
  },
  {
    name: 'YPF',
    url: 'https://www.ypf.com',
    logo: '/bd67c5_aa06fa80a2a842a9b3328d020e2f94e2~mv2.png',
    logoHover: '/bd67c5_f910fd98cf434f0ea430839f31b7bc38~mv2.png',
    width: 150,
    height: 75,
  },
  {
    name: 'Contreras',
    url: 'https://www.contreras.com.ar',
    logo: '/bd67c5_5856f734aa7243d091c28591498433ca~mv2.png',
    logoHover: '/bd67c5_61f16043922949169a1a278d239144a9~mv2.png',
    width: 180,
    height: 95,
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <div className="h-20 flex items-center justify-center">
        <Image
          src={isHovered ? client.logoHover : client.logo}
          alt={client.name}
          width={client.width}
          height={client.height}
          className="object-contain h-auto w-auto"
        />
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
      className="py-10 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wide">
            CLIENTES
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ backgroundColor: '#FFE045' }}
            className="h-2 mx-auto"
          />
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-16 w-full px-4">
          {clients.map((client, index) => (
            <ClientCard key={client.name + index} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
