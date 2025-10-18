"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Technology: React.FC = () => {
  const [activeInstrument, setActiveInstrument] = useState(0);

  const instruments = [
    {
      id: 0,
      name: 'Refractómetro Digital',
      description: 'Medición precisa de grados Brix para determinar el contenido de azúcar en frutas',
      image: '/images/IMG_Instruments/grape refractometer 1.jpg',
      specs: ['Precisión ±0.1 Brix', 'Calibración automática', 'Rango 0-32% Brix'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 1,
      name: 'Calibre Digital',
      description: 'Medición exacta de diámetros y dimensiones para clasificación de calibres',
      image: '/images/IMG_Instruments/avocado caliper 1.jpg',
      specs: ['Precisión ±0.01 mm', 'Display LCD', 'Medición hasta 150mm'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      id: 2,
      name: 'Penetrómetro de Firmeza',
      description: 'Evaluación de madurez mediante medición de resistencia a la penetración',
      image: '/images/IMG_Instruments/avocado firmness.jpg',
      specs: ['Rango 0-13 kg/cm²', 'Puntas intercambiables', 'Lectura instantánea'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      name: 'Anillo de Calibración',
      description: 'Sistema profesional para medición rápida y clasificación de calibres',
      image: '/images/IMG_Instruments/grapes ring caliper 1.jpg',
      specs: ['Múltiples rangos', 'Acero inoxidable', 'Medición rápida'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInstrument((prev) => (prev + 1) % instruments.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [instruments.length]);

  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tecnologia" className="relative h-screen flex items-center bg-gradient-to-br from-gray-900 via-[#1e3a5f] to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-2 text-white">
            Tecnología de Precisión
          </h2>
          <div className="w-16 h-1 bg-[#4a90e2] mx-auto mb-2"></div>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Equipamiento profesional de última generación para control de calidad certificado
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
          {/* Left Side - Image Carousel */}
          <div className="relative h-[400px] lg:h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInstrument}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative h-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={instruments[activeInstrument].image}
                  alt={instruments[activeInstrument].name}
                  fill
                  className="object-cover"
                  quality={90}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-transparent to-transparent"></div>

                {/* Image Label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-[#4a90e2]">
                        {instruments[activeInstrument].icon}
                      </div>
                      <h3 className="text-white font-bold text-lg">
                        {instruments[activeInstrument].name}
                      </h3>
                    </div>
                    <p className="text-white/90 text-sm">
                      {instruments[activeInstrument].description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {instruments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveInstrument(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeInstrument
                      ? 'w-8 bg-[#4a90e2]'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Ver instrumento ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Specs and Features */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInstrument}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {/* Specs */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4a90e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Especificaciones Técnicas
                  </h4>
                  <div className="space-y-3">
                    {instruments[activeInstrument].specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4a90e2] mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metodología */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4a90e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Metodología Profesional
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4a90e2] mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">Protocolos según destino y fruta</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4a90e2] mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">Muestreo estadístico representativo</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4a90e2] mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">Reportes digitales inmediatos</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="bg-[#4a90e2]/10 backdrop-blur-sm rounded-lg p-4 border border-[#4a90e2]/30 text-center">
                <div className="text-2xl font-bold text-white mb-1">99.8%</div>
                <div className="text-xs text-gray-300">Precisión</div>
              </div>
              <div className="bg-[#4a90e2]/10 backdrop-blur-sm rounded-lg p-4 border border-[#4a90e2]/30 text-center">
                <div className="text-2xl font-bold text-white mb-1">24-48h</div>
                <div className="text-xs text-gray-300">Resultados</div>
              </div>
              <div className="bg-[#4a90e2]/10 backdrop-blur-sm rounded-lg p-4 border border-[#4a90e2]/30 text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-gray-300">Trazabilidad</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => handleScrollTo('#faq')}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
