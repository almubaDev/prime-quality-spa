"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="nosotros" className="relative min-h-screen flex items-center py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              Sobre Nosotros
            </h2>
            <div className="w-20 h-1 bg-[#1e3a5f] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Más de 10 años de experiencia respaldando la calidad de tus exportaciones
            </p>
          </motion.div>

          {/* Main Content Grid - Asimétrico */}
          <div className="grid lg:grid-cols-12 gap-6 mb-12">
            {/* Columna Izquierda - Texto + Misión/Visión */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Intro */}
              <div>
                <h3 className="text-2xl md:text-3xl font-light mb-4 text-gray-900">
                  Líderes en Control de Calidad Agrícola
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                  <p>
                    Prime Quality SpA nace en Chile frente a la necesidad de brindar
                    servicios profesionales de control de calidad de frutas, con el fin de
                    dar seguridad a los productores y exportadoras respecto del cumplimiento
                    de las especificaciones técnicas que estos commodities presentan
                    previo a su salida a destino.
                  </p>
                  <p>
                    Más de 10 años de trabajo y experiencia en el rubro de control de
                    calidad de frutas y hortalizas en Chile y en el extranjero nos respaldan
                    como una empresa cercana con un servicio profesional y personalizado.
                  </p>
                </div>
              </div>

              {/* Misión y Visión */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#1e3a5f]/30">
                  <h5 className="font-bold text-[#1e3a5f] text-lg mb-2 tracking-tight">Misión</h5>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">
                    Ofrecer un servicio de alto estándar en el control y aseguramiento
                    de la calidad de frutas de exportación, garantizando que lleguen
                    con fruta de buena calidad y a un precio justo.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#4a90e2]/30">
                  <h5 className="font-bold text-[#4a90e2] text-lg mb-2 tracking-tight">Visión</h5>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">
                    Dar cobertura nacional a una amplia gama de exportadoras en base
                    a un equipo sólido de profesionales altamente calificados, con
                    experiencia en investigación científica y aseguramiento de calidad.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha - Logo con degradado */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5"
            >
              {/* Logo con degradado de izquierda a derecha */}
              <div className="relative h-[28rem] flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center p-12">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/IMG_Logos/PNG/imagotipo azul PQ@4x.png"
                      alt="Prime Quality SpA"
                      fill
                      className="object-contain"
                      quality={100}
                    />
                    {/* Gradiente de izquierda a derecha que desvanece el logo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => handleScrollTo('#servicios')}
              className="text-gray-400 hover:text-[#1e3a5f] transition-colors cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="w-8 h-8 hover:text-[#4a90e2] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
