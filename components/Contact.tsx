'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wide">
            CONTACTO
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ backgroundColor: '#FFE045' }}
            className="h-2 mx-auto mb-6"
          />
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full h-64 rounded shadow-md overflow-hidden mb-16"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.7!2d-57.959!3d-34.9214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b4e8b5f2d%3A0x1234567890!2sCalle%2050%201335%2C%20La%20Plata%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="50 N°1335 La Plata, Buenos Aires"
          />
        </motion.div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda */}
          <div className="space-y-8">
            {/* Preguntas */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="p-8"
            >
              <h3 className="text-2xl font-bold text-navy mb-4">Preguntas</h3>
              <p className="text-navy/80 leading-relaxed text-justify">
                Para todo tipo de preguntas, comentarios e inquietudes; por favor llámanos:{' '}
                <a href="tel:+541151617694" className="text-cyan font-semibold hover:underline">
                  011 5161-7694
                </a>
                {' '}o completa el formulario a continuación.
              </p>
            </motion.div>

            {/* Oficina Principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8"
            >
              <h3 className="text-2xl font-bold text-navy mb-4">Oficina Principal</h3>
              <div className="space-y-3 text-navy/80">
                <p>
                  50 N°1335 - Piso 1 A<br />
                  Entre 21 y 22<br />
                  La Plata, Buenos Aires, Argentina
                </p>
                <p>info@pablobarello.com.ar</p>
                <p>+54 011 5161-7694</p>
              </div>
            </motion.div>

            {/* Empleos */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-8"
            >
              <h3 className="text-2xl font-bold text-navy mb-4">Empleos</h3>
              <p className="text-navy/80 leading-relaxed text-justify mb-4">
                Para aplicar a un trabajo en PB&Asociados, envía tu CV y carta de recomendación a:{' '}
                <a
                  href="mailto:info@pablobarello.com.ar"
                  className="text-cyan font-semibold hover:underline"
                >
                  info@pablobarello.com.ar
                </a>
              </p>
            </motion.div>
          </div>

          {/* Columna derecha - Presupuesto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="p-8"
          >
            <h3 className="text-2xl font-bold text-navy mb-6">
              Recibe un presupuesto
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-light rounded focus:border-cyan focus:outline-none bg-gray-light"
                  placeholder="Nombre"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-light rounded focus:border-cyan focus:outline-none bg-gray-light"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-light rounded focus:border-cyan focus:outline-none bg-gray-light"
                  placeholder="Teléfono"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-light rounded focus:border-cyan focus:outline-none resize-none bg-gray-light"
                  placeholder="Contanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyan text-white rounded font-bold hover:bg-cyan/90 transition-colors duration-200"
              >
                Enviar
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
