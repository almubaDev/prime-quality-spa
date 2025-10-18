"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQ[] = [
  {
    question: '¿Dónde ofrecemos servicios?',
    answer: 'Actualmente ofrecemos servicios de inspección en las regiones de Valparaíso, Metropolitana y O\'Higgins, cubriendo los principales centros de producción y exportación de frutas de Chile.',
    category: 'Servicios'
  },
  {
    question: '¿Qué frutas inspeccionamos?',
    answer: 'Nuestro foco está orientado en la inspección de cítricos, paltas, uva de mesa, pomáceas y arándanos. Contamos con protocolos especializados para cada tipo de fruta según los estándares internacionales.',
    category: 'Servicios'
  },
  {
    question: '¿Cuánto tiempo tarda una inspección?',
    answer: 'La inspección varía en tiempo, pues depende del tipo de servicio, del muestreo y de las especificaciones técnicas requeridas. Generalmente, las inspecciones se completan en 24-48 horas desde la solicitud.',
    category: 'Proceso'
  },
  {
    question: '¿Puedo recibir reportes en inglés?',
    answer: 'Sí, los reportes pueden ser emitidos en inglés y español. Nuestros informes son compatibles con los requisitos de los principales mercados de destino: Estados Unidos, China y Europa.',
    category: 'Reportes'
  },
  {
    question: '¿Qué certificaciones tienen?',
    answer: 'Contamos con más de 10 años de experiencia en el rubro y nuestros profesionales están altamente calificados con experiencia en investigación científica y aseguramiento de calidad según estándares internacionales.',
    category: 'Certificaciones'
  },
  {
    question: '¿Cómo solicito una inspección?',
    answer: 'Puedes solicitar una inspección a través de nuestro formulario de contacto, por correo electrónico a info@primequality.cl, o contactándonos directamente por WhatsApp. Te responderemos en menos de 24 horas.',
    category: 'Proceso'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="relative h-screen flex items-center py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl h-full flex flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-2 text-gray-900">
            Preguntas Frecuentes
          </h2>
          <div className="w-16 h-1 bg-[#1e3a5f] mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios de inspección y control de calidad
          </p>
        </motion.div>

        {/* FAQ Grid - Two Columns */}
        <div className="flex gap-4 mb-12 justify-center">
          {/* Left Column */}
          <div className="space-y-3 w-[480px]">
            {faqData.slice(0, 3).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <button
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 group"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-[#4a90e2] bg-[#4a90e2]/10 px-2 py-0.5 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm group-hover:text-[#1e3a5f] transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg
                        className="w-5 h-5 text-[#4a90e2]"
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
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-3 w-[480px]">
            {faqData.slice(3, 6).map((faq, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index + 3) * 0.05 }}
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <button
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 group"
                    onClick={() => setOpenIndex(openIndex === (index + 3) ? null : (index + 3))}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-[#4a90e2] bg-[#4a90e2]/10 px-2 py-0.5 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm group-hover:text-[#1e3a5f] transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === (index + 3) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg
                        className="w-5 h-5 text-[#4a90e2]"
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
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === (index + 3) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
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
            onClick={() => handleScrollTo('#contacto')}
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
    </section>
  );
};

export default FAQ;
