'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const clients = [
  {
    name: 'Pan American Energy',
    url: 'https://www.pan-energy.com',
    logo: '/bd67c5_0e4decaa26384878ab34d9022f2df6f1~mv2.png',
    width: 230,
    height: 127,
  },
  {
    name: 'Shell',
    url: 'https://www.shell.com.ar',
    logo: '/bd67c5_20534d9f7c6f4faabc0b558625b8f710~mv2.png',
    width: 196,
    height: 98,
  },
  {
    name: 'Vitco',
    url: 'https://vitco.com.ar',
    logo: '/bd67c5_237f7c901c894ac2a34906b215d735aa~mv2.png',
    width: 173,
    height: 86,
  },
  {
    name: 'YPF',
    url: 'https://www.ypf.com',
    logo: '/bd67c5_f910fd98cf434f0ea430839f31b7bc38~mv2.png',
    width: 173,
    height: 86,
  },
  {
    name: 'Contreras',
    url: 'https://www.contreras.com.ar',
    logo: '/bd67c5_61f16043922949169a1a278d239144a9~mv2.png',
    width: 207,
    height: 109,
  },
];

// Triplicar clientes para efecto infinito verdadero
const tripleClients = [...clients, ...clients, ...clients];

function ClientCard({
  client,
  index,
}: {
  client: typeof clients[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex-shrink-0 flex items-center justify-center"
    >
      <div className="h-24 flex items-center justify-center px-4">
        <motion.div
          animate={{
            filter: isHovered ? 'saturate(1)' : 'saturate(0)',
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={client.logo}
            alt={client.name}
            width={client.width}
            height={client.height}
            className="object-contain h-auto w-auto"
          />
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => {
          const next = prev + 0.1;
          // Si llegamos al final del segundo grupo, resetear al inicio del segundo grupo sin animación
          if (next >= clients.length * 2) {
            return clients.length + (next % clients.length);
          }
          return next;
        });
      }, 50); // Actualizar cada 50ms con movimiento pequeño para efecto continuo lento

      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handleDragEnd = (event: any, info: any) => {
    // Pausar mientras se calcula el nuevo slide
    setIsPaused(true);

    // Calcular cuántos items se arrastró
    const itemsToMove = Math.round(info.offset.x / 100);
    const newSlide = (currentSlide - itemsToMove) % (clients.length * 3);
    setCurrentSlide(newSlide < 0 ? newSlide + (clients.length * 3) : newSlide);

    // Reanudar el desplazamiento automático después de 2 segundos
    if (dragTimeoutRef.current) {
      clearTimeout(dragTimeoutRef.current);
    }
    dragTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  return (
    <section
      id="clientes"
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
          <h2 className="text-5xl font-bold mb-4 tracking-wide" style={{ color: "#ADADAD" }}>
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

        {/* Carrusel con scroll infinito */}
        <div
          className="relative w-full overflow-hidden py-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            drag="x"
            dragElastic={0.2}
            dragConstraints={{ left: -1000, right: 1000 }}
            onDragEnd={handleDragEnd}
            onDragStart={() => setIsPaused(true)}
            animate={{ x: `${-(currentSlide * (100 / tripleClients.length))}%` }}
            transition={{
              duration: 0.05,
              ease: 'linear',
            }}
          >
            {tripleClients.map((client, index) => (
              <ClientCard key={index} client={client} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
