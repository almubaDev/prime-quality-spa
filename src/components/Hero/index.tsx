"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeImageIndices, setActiveImageIndices] = useState<number[]>([0, 5, 10]);
  const [particles, setParticles] = useState<Array<{left: number, top: number, duration: number, delay: number}>>([]);
  const [showOverlay, setShowOverlay] = useState(true);
  const { scrollY } = useScroll();

  // Grid de imágenes para el mosaico 4x4 (16 imágenes)
  const gridImages = [
    '/images/IMG_Commercial/avocados 1.jpg',
    '/images/IMG_Commercial/grapes 1.jpg',
    '/images/IMG_Commercial/mandarins 1.jpg',
    '/images/IMG_Commercial/lemons 1.jpg',
    '/images/IMG_Commercial/avocados 2.jpg',
    '/images/IMG_Commercial/grapes 2.jpg',
    '/images/IMG_Commercial/mandarins 2.jpg',
    '/images/IMG_Commercial/lemons 2.jpg',
    '/images/IMG_Commercial/avocados 3.jpg',
    '/images/IMG_Commercial/grapes 3.jpg',
    '/images/IMG_Commercial/mandarins 3.jpg',
    '/images/IMG_Commercial/lemons 3.jpg',
    '/images/IMG_Commercial/avocados 4.jpg',
    '/images/IMG_Commercial/grapes boxes 1.jpg',
    '/images/IMG_Commercial/mandarins 4.jpg',
    '/images/IMG_Commercial/avocados boxes.jpg',
  ];

  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.05]);

  // Generar partículas solo en el cliente para evitar hydration error
  useEffect(() => {
    const generatedParticles = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  // Ocultar overlay después de que las imágenes se carguen
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 1500); // 1.5 segundos para asegurar carga de imágenes con priority

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animación de resaltado aleatorio - 3 imágenes a la vez cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      // Seleccionar 3 índices aleatorios únicos
      const randomIndices: number[] = [];
      while (randomIndices.length < 3) {
        const randomIndex = Math.floor(Math.random() * gridImages.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }
      setActiveImageIndices(randomIndices);
    }, 3000);

    return () => clearInterval(interval);
  }, [gridImages.length]);

  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Mosaico 4x4 con Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY, scale }}
      >
        {/* Grid 4x4 */}
        <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
          {gridImages.map((imageSrc, index) => (
            <div key={index} className="relative w-full h-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={`Fruit ${index + 1}`}
                fill
                className={`object-cover transition-all duration-500 ${
                  activeImageIndices.includes(index)
                    ? 'blur-none'
                    : 'blur-[2px]'
                }`}
                quality={85}
                priority={index < 4} // Priority para las primeras 4 imágenes
              />
              {/* Overlay más oscuro para imágenes con blur, sin overlay para las activas */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  activeImageIndices.includes(index)
                    ? 'bg-transparent' // 100% brillo - sin overlay
                    : 'bg-[#1e3a5f]/85'  // Más oscuro (85% overlay)
                }`}
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlay general para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/60 via-[#1e3a5f]/40 to-[#1e3a5f]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#152845]/40 to-transparent"></div>

        {/* Overlay de carga - Cubre cuadros blancos mientras las imágenes cargan */}
        <div
          className={`absolute inset-0 bg-[#1e3a5f] z-20 transition-opacity duration-1000 ${
            showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />
      </motion.div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 z-20 relative"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Inspección profesional de
              <br />
              <span className="text-[#4a90e2]">frutas de exportación</span>
            </h1>
            <div className="w-32 h-1 bg-[#4a90e2] mx-auto mb-8 rounded-full"></div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-8 font-light"
          >
            Garantizamos el cumplimiento de estándares internacionales.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
          >
            {[
              { number: '10+', label: 'Años de Experiencia' },
              { number: '99.8%', label: 'Precisión' },
              { number: '24-48h', label: 'Tiempo de Entrega' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#4a90e2] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              onClick={() => handleScrollTo('#contacto')}
              className="bg-[#4a90e2] text-white px-8 py-4 rounded-md hover:bg-[#2d5a8a] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Inspección
            </motion.button>
            <motion.button
              onClick={() => handleScrollTo('#servicios')}
              className="border-2 border-white/80 text-white px-8 py-4 rounded-md hover:bg-white hover:text-[#1e3a5f] transition-all duration-300 font-semibold text-lg backdrop-blur-sm cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Servicios
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-2 md:bottom-3 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => handleScrollTo('#nosotros')}
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
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
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 border-2 border-white/10 rounded-full z-10 hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 border-2 border-white/10 rounded-full z-10 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
