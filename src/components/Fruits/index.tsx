"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Fruit {
  id: string;
  name: string;
  image: string;
  description: string;
  gradient: string;
  color: string;
  features: string[];
}

const fruitsData: Fruit[] = [
  {
    id: 'citricos',
    name: 'Cítricos',
    image: '/images/IMG_Fruits/Citricos.png',
    description: 'Control de calidad especializado en limones, naranjas y mandarinas para exportación.',
    gradient: 'from-orange-500/90 to-yellow-500/90',
    color: '#f97316',
    features: ['Control de firmeza', 'Análisis de color', 'Detección de manchas', 'Medición de calibre']
  },
  {
    id: 'paltas',
    name: 'Paltas',
    image: '/images/IMG_Fruits/Paltas.png',
    description: 'Inspección según estándares internacionales de calidad para aguacates Hass.',
    gradient: 'from-green-600/90 to-emerald-500/90',
    color: '#16a34a',
    features: ['Test de madurez', 'Control de peso', 'Inspección de piel', 'Análisis de materia seca']
  },
  {
    id: 'uva',
    name: 'Uva de Mesa',
    image: '/images/IMG_Fruits/uva.png',
    description: 'Control riguroso para exportación de uva de mesa de variedades premium.',
    gradient: 'from-purple-600/90 to-violet-500/90',
    color: '#9333ea',
    features: ['Control de racimos', 'Detección de deshidratación', 'Análisis de color', 'Medición de °Brix']
  },
  {
    id: 'pomaceas',
    name: 'Pomáceas',
    image: '/images/IMG_Fruits/Pomaceas.png',
    description: 'Manzanas y peras con control exhaustivo de calidad y presentación.',
    gradient: 'from-red-500/90 to-rose-400/90',
    color: '#ef4444',
    features: ['Inspección visual', 'Control de firmeza', 'Detección de russet', 'Análisis de calibre']
  },
  {
    id: 'arandanos',
    name: 'Arándanos',
    image: '/images/IMG_Fruits/Arandanos.png',
    description: 'Control especializado en berries de exportación con estándares premium.',
    gradient: 'from-blue-600/90 to-indigo-500/90',
    color: '#2563eb',
    features: ['Control de tamaño', 'Análisis de firmeza', 'Detección de cicatrices', 'Inspección de bloom']
  }
];

const Fruits: React.FC = () => {
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number, color: string, size: number, moveX: number, duration: number}>>([]);
  const { scrollY } = useScroll();

  // Generar partículas en el cliente
  useEffect(() => {
    const colors = fruitsData.map(f => f.color);
    const generatedParticles = [...Array(35)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 6 + 4,
      moveX: Math.random() * 20 - 10,
      duration: 10 + Math.random() * 5
    }));
    setParticles(generatedParticles);
  }, []);

  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="frutas" className="relative h-screen flex items-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Partículas flotantes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              backgroundColor: particle.color,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, particle.moveX, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.4, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center max-w-6xl">
        <div className="w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-2 text-gray-900">
              Frutas que Inspeccionamos
            </h2>
            <div className="w-16 h-1 bg-[#1e3a5f] mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">
              Especialistas en control de calidad para exportación
            </p>
          </motion.div>

          {/* Bento Grid Layout Asimétrico */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-16">
            {/* Cítricos - Grande (ocupa 2 filas) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-5 md:row-span-2 group"
            >
              <div className="relative h-[180px] md:h-full rounded-xl overflow-hidden shadow-xl cursor-pointer">
                <Image
                  src={fruitsData[0].image}
                  alt={fruitsData[0].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={90}
                />
                {/* Overlay con gradiente */}
                <div className={`absolute inset-0 bg-gradient-to-br ${fruitsData[0].gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>

                {/* Contenido */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end transform transition-all duration-500">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{fruitsData[0].name}</h3>
                    <p className="text-white/90 text-sm md:text-base mb-3 group-hover:text-white transition-colors">
                      {fruitsData[0].description}
                    </p>
                    <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {fruitsData[0].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>

            {/* Paltas - Mediano horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-7 group"
            >
              <div className="relative h-[130px] md:h-[150px] rounded-xl overflow-hidden shadow-xl cursor-pointer">
                <Image
                  src={fruitsData[1].image}
                  alt={fruitsData[1].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={90}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${fruitsData[1].gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>

                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{fruitsData[1].name}</h3>
                  <p className="text-white/90 text-sm mb-2 group-hover:text-white transition-colors">
                    {fruitsData[1].description}
                  </p>
                  <div className="grid grid-cols-2 gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {fruitsData[1].features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-white text-xs">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>

            {/* Uva - Mediano cuadrado */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-4 group"
            >
              <div className="relative h-[130px] md:h-[150px] rounded-xl overflow-hidden shadow-xl cursor-pointer">
                <Image
                  src={fruitsData[2].image}
                  alt={fruitsData[2].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={90}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${fruitsData[2].gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>

                <div className="absolute inset-0 p-3 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-1">{fruitsData[2].name}</h3>
                  <p className="text-white/90 text-xs mb-2 group-hover:text-white transition-colors line-clamp-2">
                    {fruitsData[2].description}
                  </p>
                  <div className="space-y-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {fruitsData[2].features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-white text-xs">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>

            {/* Pomáceas - Mediano cuadrado */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-3 group"
            >
              <div className="relative h-[130px] md:h-[150px] rounded-xl overflow-hidden shadow-xl cursor-pointer">
                <Image
                  src={fruitsData[3].image}
                  alt={fruitsData[3].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={90}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${fruitsData[3].gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>

                <div className="absolute inset-0 p-3 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-1">{fruitsData[3].name}</h3>
                  <p className="text-white/90 text-xs mb-2 group-hover:text-white transition-colors line-clamp-2">
                    {fruitsData[3].description}
                  </p>
                  <div className="space-y-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {fruitsData[3].features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-white text-xs">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>

            {/* Arándanos - Ancho completo */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-12 group"
            >
              <div className="relative h-[130px] md:h-[140px] rounded-xl overflow-hidden shadow-xl cursor-pointer">
                <Image
                  src={fruitsData[4].image}
                  alt={fruitsData[4].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={90}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${fruitsData[4].gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>

                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{fruitsData[4].name}</h3>
                  <p className="text-white/90 text-sm mb-2 group-hover:text-white transition-colors">
                    {fruitsData[4].description}
                  </p>
                  <div className="grid grid-cols-2 gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {fruitsData[4].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-white text-xs">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>
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
              onClick={() => handleScrollTo('#mercados')}
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

export default Fruits;