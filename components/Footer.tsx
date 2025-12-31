'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow">
              PB&Asociados
            </h3>
            <p className="text-white/70 leading-relaxed">
              Servicios Topográficos - 20 años de experiencia en topografía,
              geodesia y agrimensura legal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Nosotros', 'Proyectos', 'Contacto'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-white/70 hover:text-yellow transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-white/70">
              <li>📧 info@topografia.com</li>
              <li>📱 +54 11 1234-5678</li>
              <li>📍 Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70">
            &copy; {currentYear} PB&Asociados Servicios Topográficos. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
