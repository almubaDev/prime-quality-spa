"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Markets: React.FC = () => {
  const [activeMarket, setActiveMarket] = useState<number | null>(null);

  const markets = [
    {
      id: 0,
      country: 'Estados Unidos',
      standards: 'USDA and export standards',
      flag: '🇺🇸',
      position: { top: '35%', left: '18%' }, // Posición en el mapa
      accentColor: '#3b82f6',
      features: ['FDA Requirements', 'USDA Certification', 'Cold Chain Standards']
    },
    {
      id: 1,
      country: 'China',
      standards: 'Strict condition and presentation inspections',
      flag: '🇨🇳',
      position: { top: '40%', left: '75%' }, // Posición en el mapa
      accentColor: '#ef4444',
      features: ['GACC Registration', 'Phytosanitary Standards', 'Quality Protocols']
    },
    {
      id: 2,
      country: 'Europa',
      standards: 'GlobalG.A.P and MRLs',
      flag: '🇪🇺',
      position: { top: '30%', left: '50%' }, // Posición en el mapa
      accentColor: '#2563eb',
      features: ['GlobalGAP Standards', 'MRL Compliance', 'Traceability Systems']
    }
  ];

  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="mercados" className="relative h-screen flex items-center py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center max-w-7xl">
        <div className="w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-2 text-white">
              Mercados de Destino
            </h2>
            <div className="w-16 h-1 bg-[#4a90e2] mx-auto mb-2"></div>
            <p className="text-gray-400 text-sm">
              Cumplimiento de estándares internacionales
            </p>
          </motion.div>

          {/* Map Container */}
          <div className="relative w-full h-[550px] mb-12">
            {/* Background Map Image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="/images/IMG_Services/map.png"
                alt="World Map"
                fill
                className="object-cover opacity-40"
                quality={90}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-gray-900/60"></div>
            </div>

            {/* Interactive Markers on Map */}
            {markets.map((market) => (
              <motion.div
                key={market.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ top: market.position.top, left: market.position.left }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: market.id * 0.2 }}
                onHoverStart={() => setActiveMarket(market.id)}
                onHoverEnd={() => setActiveMarket(null)}
              >
                {/* Pulsing Circle */}
                <motion.div
                  className="absolute inset-0 w-12 h-12 -left-1 -top-1 rounded-full"
                  style={{ backgroundColor: market.accentColor }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Marker Pin */}
                <div
                  className="relative w-8 h-8 rounded-full shadow-2xl flex items-center justify-center border-2 border-white z-10"
                  style={{ backgroundColor: market.accentColor }}
                >
                </div>

                {/* Info Card on Hover - Appears above or below marker */}
                <AnimatePresence>
                  {activeMarket === market.id && (
                    <motion.div
                      initial={{ opacity: 0, y: market.id === 2 ? -10 : 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: market.id === 2 ? -10 : 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute ${market.id === 2 ? 'top-full mt-4' : 'bottom-full mb-4'} left-1/2 transform -translate-x-1/2 w-72 pointer-events-none`}
                    >
                      <div className="bg-gray-900/40 backdrop-blur-md rounded-lg shadow-2xl p-4 border border-white/10">
                        {/* Arrow pointing to marker */}
                        <div
                          className={`absolute ${market.id === 2 ? '-top-2 rotate-45 border-l border-t' : '-bottom-2 rotate-45 border-r border-b'} left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900/40 backdrop-blur-md border-white/10`}
                        />

                        {/* Content */}
                        <div className="relative z-10">
                          <div className="mb-3">
                            <h3 className="text-lg font-bold text-white mb-1">
                              {market.country}
                            </h3>
                            <p className="text-xs text-gray-300">
                              {market.standards}
                            </p>
                          </div>

                          <div className="space-y-2">
                            {market.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div
                                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                  style={{ backgroundColor: market.accentColor }}
                                />
                                <span className="text-xs text-gray-200 leading-tight">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
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
              onClick={() => handleScrollTo('#tecnologia')}
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
      </div>
    </section>
  );
};

export default Markets;