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
    <section id="contacto" className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-navy mb-4 tracking-wide">
            CONTACTO
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ backgroundColor: '#FFE045' }}
            className="h-1 mx-auto"
          />
        </motion.div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Columna izquierda */}
          <div className="space-y-8">
            {/* Preguntas */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded shadow-md"
            >
              <h3 className="text-2xl font-bold text-navy mb-2">Preguntas</h3>
              <p className="text-navy/70 mb-4">¿Tenés alguna consulta? Estamos para ayudarte</p>
              <a
                href="mailto:info@topografia.com"
                className="text-cyan font-semibold hover:underline"
              >
                info@topografia.com
              </a>
            </motion.div>

            {/* Oficina Principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded shadow-md"
            >
              <h3 className="text-2xl font-bold text-navy mb-4">Oficina Principal</h3>
              <div className="space-y-3 text-navy/80">
                <p className="flex items-start gap-2">
                  <span className="text-xl">📍</span>
                  <span>Buenos Aires, Argentina</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-xl">📧</span>
                  <span>info@topografia.com</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-xl">📱</span>
                  <span>+54 11 1234-5678</span>
                </p>
              </div>
            </motion.div>

            {/* Empleos */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded shadow-md"
            >
              <h3 className="text-2xl font-bold text-navy mb-4">Empleos</h3>
              <p className="text-navy/70 mb-4">
                Sumate a nuestro equipo de profesionales
              </p>
              <a
                href="mailto:rrhh@topografia.com"
                className="inline-block px-6 py-3 bg-cyan text-white rounded font-medium hover:bg-cyan/90 transition-colors"
              >
                Enviar CV
              </a>
            </motion.div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-8">
            {/* Recibe un presupuesto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded shadow-md"
            >
              <h3 className="text-2xl font-bold text-navy mb-4">
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
                    className="w-full px-4 py-3 border border-gray-light rounded focus:border-cyan focus:outline-none"
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
                    className="w-full px-4 py-3 border border-gray-light rounded focus:border-cyan focus:outline-none"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-light rounded focus:border-cyan focus:outline-none"
                    placeholder="Teléfono"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-light rounded focus:border-cyan focus:outline-none resize-none"
                    placeholder="Contanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-cyan text-white rounded font-bold hover:bg-cyan/90 transition-colors duration-200"
                >
                  Enviar
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full h-96 bg-white rounded shadow-md overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.50806421991!2d-58.51597949453632!3d-34.61566864414824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e10!2sBuenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Buenos Aires"
          />
        </motion.div>
      </div>
    </section>
  );
}
