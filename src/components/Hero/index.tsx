"use client";
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-extralight text-gray-900 mb-4 tracking-tight">
              PRIME QUALITY
            </h1>
            <div className="w-24 h-px bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
              PROFESSIONAL QC
            </p>
          </div>

          <div className="mb-12">
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Control de calidad profesional para frutas de exportación.
              <br />
              Garantizamos el cumplimiento de estándares internacionales.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleScrollTo('#contacto')}
              className="bg-emerald-600 text-white px-8 py-4 hover:bg-emerald-700 transition-colors duration-200 font-medium"
            >
              Solicitar Inspección
            </button>
            <button 
              onClick={() => handleScrollTo('#servicios')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200 font-medium"
            >
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;