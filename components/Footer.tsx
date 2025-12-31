'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Servicios Topográficos
            </h3>
            <p className="text-gray-300 leading-relaxed">
              20 años de experiencia en topografía, geodesia y agrimensura
              legal. Soluciones profesionales para todo el territorio nacional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Nosotros', 'Proyectos', 'Contacto'].map(
                (item) => (
                  <li key={item}>
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 info@topografia.com</li>
              <li>📱 +54 11 1234-5678</li>
              <li>📍 Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Servicios Topográficos. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
