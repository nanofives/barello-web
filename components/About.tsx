'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const teamMembers = [
    { id: 1, name: 'Pablo', position: 'Director', image: '/84c2932d-5812-4733-bdb8-5171d6f807a8.png', objectPosition: 'center 68%' },
    { id: 2, name: 'Fernando', position: 'Gerente Técnico', image: '/14753ff8-7e9a-4887-87f3-2ee90eb532b1.png', objectPosition: 'center 58%' },
    { id: 3, name: 'Marcelo', position: 'Jefe de Oficina Técnica', image: '/ad55171e-dd86-434c-8ab7-b0454288b420.png', objectPosition: 'center 60%' },
    { id: 4, name: 'Enzo', position: 'Topografía de Obra', image: '/f482f042-b162-47c9-9546-fc666b46c798.png', objectPosition: 'center 55%' },
    { id: 5, name: 'Federico', position: 'Topografía de Obra', image: '/e3520843-a053-44e1-99c4-73526b85c6c3.png', objectPosition: 'center 58%' },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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

        {/* Team Members - Circular Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-start gap-8 flex-wrap"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 + member.id * 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                className="relative w-40 h-40 rounded-full overflow-hidden mb-4"
                style={{
                  border: '3px solid #FFE045',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: member.objectPosition,
                    filter: 'saturate(0.65)'
                  }}
                />
              </div>
              <h3 className="text-lg font-bold text-center" style={{ color: '#2C3E50' }}>
                {member.name}
              </h3>
              <p className="text-sm text-center text-navy/70">
                {member.position}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
