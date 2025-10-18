"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-gray-900 via-[#1e3a5f] to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Logo y Descripción Centrado */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/images/IMG_Logos/PNG/imagotipo blanco PQ@4x.png"
            alt="Prime Quality SpA"
            width={200}
            height={80}
            className="mb-4"
          />
          <p className="text-gray-400 text-center max-w-2xl leading-relaxed">
            Más de 10 años de experiencia en control de calidad de frutas de exportación.
            Servicios profesionales respaldados por tecnología de precisión y metodología especializada.
          </p>
        </div>

        {/* Scroll to Top Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-6"
        >
          <motion.button
            onClick={() => handleLinkClick('#inicio')}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © Octubre {new Date().getFullYear()} Prime Quality. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
