"use client";
import React from 'react';

const Footer: React.FC = () => {
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-light mb-4">PRIME QUALITY</h3>
            <p className="text-gray-400 text-sm">PROFESSIONAL QC</p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Enlaces Rapidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => handleLinkClick('#inicio')} className="hover:text-white">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('#servicios')} className="hover:text-white">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('#frutas')} className="hover:text-white">
                  Frutas
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('#contacto')} className="hover:text-white">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contacto</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Email corporativo</p>
              <p>Telefono y WhatsApp</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Prime Quality SpA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;