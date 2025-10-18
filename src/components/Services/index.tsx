"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string[];
}

const servicesData: Service[] = [
  {
    id: 'warehouse',
    title: 'Inspección en Warehouse',
    description: 'Control de calidad en instalaciones de almacenamiento previo al embarque.',
    image: '/images/IMG_Commercial/grapes boxes 1.jpg',
    details: [
      'Control de calidad pre-embarque',
      'Inspección de paletizado y embalaje',
      'Verificación de especificaciones técnicas',
      'Muestreo según estándares internacionales'
    ]
  },
  {
    id: 'packing',
    title: 'Inspección en Packing',
    description: 'Control de calidad durante el proceso de embalaje y selección de frutas.',
    image: '/images/IMG_Commercial/avocados boxes.jpg',
    details: [
      'Supervisión de línea de embalaje',
      'Control de calibre y calidad',
      'Verificación de condiciones sanitarias',
      'Monitoreo de procesos de clasificación'
    ]
  },
  {
    id: 'reporte',
    title: 'Reporte Técnico Ampliado',
    description: 'Reportes técnicos profesionales con documentación fotográfica para presentar claims.',
    image: '/images/IMG_Reports/reports6.jpg',
    details: [
      'Análisis detallado de defectos',
      'Documentación fotográfica profesional',
      'Reportes en español e inglés',
      'Soporte técnico para claims internacionales'
    ]
  }
];

const Services: React.FC = () => {
  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="relative min-h-screen flex items-center py-16 bg-gray-50">
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
              Nuestros Servicios
            </h2>
            <div className="w-20 h-1 bg-[#1e3a5f] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Servicios profesionales de control de calidad adaptados a las necesidades de cada exportador
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={90}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/50 to-transparent"></div>

                  {/* Title on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg
                          className="w-5 h-5 text-[#4a90e2] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
              onClick={() => handleScrollTo('#frutas')}
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

export default Services;